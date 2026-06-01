import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

// CZ/SK: optional +420 / +421 prefix + 9 digits
const phoneRegex = /^(\+?42[01])?\d{9}$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Zadejte prosím své jméno." })
    .max(100),
  email: z
    .string()
    .trim()
    .email({ message: "Prosím, zadejte platnou e-mailovou adresu." })
    .max(255),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, {
      message: "Zadejte prosím platné 9místné telefonní číslo.",
    }),
  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

export const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isSubmitting, isValid },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const values = watch();

  const fieldClass = (field: keyof FormValues) => {
    const hasError = !!errors[field];
    const isTouched = !!touchedFields[field] || !!dirtyFields[field];
    const value = values[field];
    const filled = typeof value === "string" && value.trim().length > 0;
    if (hasError && isTouched) return "border-destructive focus-visible:ring-destructive";
    if (!hasError && isTouched && filled) return "border-green-500 focus-visible:ring-green-500";
    return "";
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("email", data.email);
      fd.append("phone", data.phone);
      fd.append("message", data.message || "");
      if (file) fd.append("file", file);

      const { error } = await supabase.functions.invoke("send-email", {
        body: fd,
      });
      if (error) throw error;

      setSubmitted(true);
      reset();
      setFile(null);
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Odeslání se nezdařilo",
        description:
          "Zkuste to prosím znovu, nebo mi napište přímo na info@nepreplacejme.cz.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-8 text-center space-y-4">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="text-xl font-semibold text-foreground">
          Děkuji, vaše vyúčtování jsem přijal.
        </h3>
        <p className="text-muted-foreground">
          Ozvu se vám e-mailem nebo telefonicky s nezávazným posouzením, obvykle
          do dvou pracovních dnů.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Odeslat další faktur
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Jméno a příjmení *</Label>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className={cn(fieldClass("name"))}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail *</Label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className={cn(fieldClass("email"))}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon *</Label>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+420 777 123 456"
          aria-invalid={!!errors.phone}
          className={cn(fieldClass("phone"))}
          {...register("phone", {
            onChange: (e) => {
              // strip whitespace as user types
              const cleaned = e.target.value.replace(/\s+/g, "");
              if (cleaned !== e.target.value) {
                setValue("phone", cleaned, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                });
              }
            },
          })}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Zpráva (nepovinné)</Label>
        <Textarea
          id="message"
          rows={4}
          maxLength={1000}
          {...register("message")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">Vyúčtování / faktura (PDF, JPG – nepovinné)</Label>
        <Input
          id="file"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Odesílám…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Odeslat k posouzení
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Odesláním souhlasíte se zpracováním údajů za účelem nezávazné konzultace.
      </p>
    </form>
  );
};

export default LeadForm;

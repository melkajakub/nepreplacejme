import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import RouteAnalytics from "./components/RouteAnalytics";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gdpr from "./pages/Gdpr";
import NotFound from "./pages/NotFound";
import Sharing from "./pages/Sharing";
import InvoiceCheck from "./pages/InvoiceCheck";
import BusinessEnergy from "./pages/BusinessEnergy";


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteAnalytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route path="/ochrana-osobnich-udaju" element={<Gdpr />} />
            <Route path="/sdileni-elektriny" element={<Sharing />} />
            <Route path="/kontrola-vyuctovani" element={<InvoiceCheck />} />
            <Route path="/energie-pro-firmy" element={<BusinessEnergy />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

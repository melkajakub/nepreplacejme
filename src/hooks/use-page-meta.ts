import { useEffect } from "react";

export const usePageMeta = (title: string, description: string, canonicalPath: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const previous = {
      description: descriptionTag?.content,
      canonical: canonicalTag?.href,
      ogTitle: ogTitle?.content,
      ogDescription: ogDescription?.content,
      ogUrl: ogUrl?.content,
    };
    const canonical = `https://nepreplacejme.cz${canonicalPath}`;

    document.title = title;
    if (descriptionTag) descriptionTag.content = description;
    if (canonicalTag) canonicalTag.href = canonical;
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
    if (ogUrl) ogUrl.content = canonical;

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previous.description) descriptionTag.content = previous.description;
      if (canonicalTag && previous.canonical) canonicalTag.href = previous.canonical;
      if (ogTitle && previous.ogTitle) ogTitle.content = previous.ogTitle;
      if (ogDescription && previous.ogDescription) ogDescription.content = previous.ogDescription;
      if (ogUrl && previous.ogUrl) ogUrl.content = previous.ogUrl;
    };
  }, [canonicalPath, description, title]);
};

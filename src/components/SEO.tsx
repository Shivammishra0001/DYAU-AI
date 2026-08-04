import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalPath?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  imageAlt?: string;
}

function setMetaTag(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  } else {
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  }
  return element;
}

function setLinkTag(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  } else {
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  }
  return element;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  canonicalPath,
  schema,
  noindex = false,
  author,
  publishedTime,
  modifiedTime,
  imageAlt,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = `https://dyau.ai${canonicalPath || location.pathname}`;

    document.title = title;

    setMetaTag('meta[name="description"]', {
      name: "description",
      content: description,
    });
    if (keywords) {
      setMetaTag('meta[name="keywords"]', {
        name: "keywords",
        content: keywords,
      });
    }
    setMetaTag('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow",
    });
    if (author) {
      setMetaTag('meta[name="author"]', {
        name: "author",
        content: author,
      });
    }

    setMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: ogTitle || title,
    });
    setMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: ogDescription || description,
    });
    setMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: ogType,
    });
    setMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: currentUrl,
    });
    setMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Dyau AI",
    });
    setMetaTag('meta[property="og:locale"]', {
      property: "og:locale",
      content: "en_US",
    });
    setMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: ogImage || "https://dyau.ai/images/logo.png",
    });
    setMetaTag('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: imageAlt || "Dyau AI logo",
    });

    setMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMetaTag('meta[name="twitter:site"]', {
      name: "twitter:site",
      content: "@DyauAI",
    });
    setMetaTag('meta[name="twitter:creator"]', {
      name: "twitter:creator",
      content: "@DyauAI",
    });
    setMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: ogTitle || title,
    });
    setMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: ogDescription || description,
    });
    setMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: ogImage || "https://dyau.ai/images/logo.png",
    });
    setMetaTag('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: imageAlt || "Dyau AI logo",
    });

    if (publishedTime) {
      setMetaTag('meta[property="article:published_time"]', {
        property: "article:published_time",
        content: publishedTime,
      });
    }
    if (modifiedTime) {
      setMetaTag('meta[property="article:modified_time"]', {
        property: "article:modified_time",
        content: modifiedTime,
      });
    }
    if (author) {
      setMetaTag('meta[property="article:author"]', {
        property: "article:author",
        content: author,
      });
    }

    setLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: currentUrl,
    });
    setLinkTag('link[rel="alternate"]', {
      rel: "alternate",
      href: currentUrl,
      hreflang: "en",
    });

    const schemaScriptId = "json-ld-schema";
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = schemaScriptId;
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      const script = document.getElementById(schemaScriptId);
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonicalPath, schema, noindex, author, publishedTime, modifiedTime, imageAlt, location.pathname]);

  return null;
}

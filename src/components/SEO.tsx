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
  schema?: Record<string, any>;
  noindex?: boolean;
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
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    } else {
      const existingKeywords = document.querySelector('meta[name="keywords"]');
      if (existingKeywords) {
        existingKeywords.remove();
      }
    }

    // Update Robots Meta (for noindex)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute("content", "noindex, nofollow");
    } else {
      if (metaRobots) {
        metaRobots.remove();
      }
    }

    // Update OpenGraph Title
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement("meta");
      ogTitleTag.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute("content", ogTitle || title);

    // Update OpenGraph Description
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement("meta");
      ogDescTag.setAttribute("property", "og:description");
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute("content", ogDescription || description);

    // Update OpenGraph Image
    let ogImgTag = document.querySelector('meta[property="og:image"]');
    if (!ogImgTag) {
      ogImgTag = document.createElement("meta");
      ogImgTag.setAttribute("property", "og:image");
      document.head.appendChild(ogImgTag);
    }
    ogImgTag.setAttribute("content", ogImage || "https://dyau.ai/dyau-logo.jpeg");

    // Update OpenGraph URL
    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (!ogUrlTag) {
      ogUrlTag = document.createElement("meta");
      ogUrlTag.setAttribute("property", "og:url");
      document.head.appendChild(ogUrlTag);
    }
    const currentUrl = `https://dyau.ai${canonicalPath || location.pathname}`;
    ogUrlTag.setAttribute("content", currentUrl);

    // Update OpenGraph Type
    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (!ogTypeTag) {
      ogTypeTag = document.createElement("meta");
      ogTypeTag.setAttribute("property", "og:type");
      document.head.appendChild(ogTypeTag);
    }
    ogTypeTag.setAttribute("content", ogType);

    // Twitter Card Tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle || title },
      { name: "twitter:description", content: ogDescription || description },
      { name: "twitter:image", content: ogImage || "https://dyau.ai/dyau-logo.jpeg" },
    ];
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Update JSON-LD Schema
    let schemaScript = document.getElementById("json-ld-schema") as HTMLScriptElement;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "json-ld-schema";
        schemaScript.type = "application/ld+json";
        document.body.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    // Cleanup schema script on unmount
    return () => {
      const script = document.getElementById("json-ld-schema");
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonicalPath, schema, noindex, location.pathname]);

  return null;
}

export const siteUrl = "https://dyau.ai";
export const siteName = "Dyau AI";
export const siteDescription = "Dyau AI is a premium artificial intelligence and quantum consulting studio delivering enterprise-grade automation, machine learning, and deep tech engineering.";
export const siteLogo = `${siteUrl}/images/logo.png`;
export const defaultOgImage = `${siteUrl}/images/ai_quantum_hero.png`;
export const socialProfiles = [
  "https://github.com/Shivammishra0001/DYAU-AI"
];

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  "name": siteName,
  "alternateName": "Dyau AI",
  "url": siteUrl,
  "logo": siteLogo,
  "sameAs": socialProfiles,
  "description": siteDescription
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "url": siteUrl,
  "name": siteName,
  "description": siteDescription,
  "publisher": {
    "@id": `${siteUrl}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/blog?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export function createBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };
}

export function createWebPageSchema(
  title: string,
  description: string,
  path: string,
  breadcrumbItems: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${siteUrl}${path}`,
    "name": title,
    "description": description,
    "breadcrumb": createBreadcrumbSchema(breadcrumbItems)
  };
}

export function createBlogPostingSchema(
  post: {
    title: string;
    desc: string;
    image: string;
    date: string;
    author: string;
    id: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.desc,
    "image": `${siteUrl}${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.id}`
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": siteLogo
      }
    }
  };
}

export function createContactPageSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": `${siteUrl}${path}`,
    "name": "Contact Dyau AI",
    "description": "Contact Dyau AI to discuss premium AI consulting, quantum optimization, and forward deployed engineering projects.",
    "mainEntity": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl,
      "email": "contact@dyau.ai"
    }
  };
}

export function createFAQPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

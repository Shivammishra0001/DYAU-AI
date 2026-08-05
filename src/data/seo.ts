export const siteUrl = "https://dyau.ai";
export const siteName = "Dyau AI";
export const siteDescription = "Dyau AI Consulting is a premium artificial intelligence and quantum consulting studio delivering enterprise-grade automation, machine learning, and deep tech engineering.";
export const siteAuthor = "Dyau AI";
export const siteLogo = `${siteUrl}/images/logo.png`;
export const defaultOgImage = `${siteUrl}/images/logo.png`;

export const routes = [
  "/",
  "/services",
  "/why-us",
  "/industries",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-of-service"
];

export const pageSchemaDefaults = {
  siteUrl,
  siteName,
  siteLogo,
  organization: {
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": siteLogo,
    "sameAs": [
      "https://github.com/Shivammishra0001/DYAU-AI"
    ]
  },
  website: {
    "@type": "WebSite",
    "url": siteUrl,
    "name": siteName,
    "publisher": {
      "@id": `${siteUrl}/#organization`
    }
  }
};

import { useEffect } from "react";

export default function SeoStructuredData() {
  useEffect(() => {
    // 1. Dynamic document header settings
    document.title = "SOLIX PRO - Creative Director, Crowdfunding Specialist, Web Designer, SEO Expert";

    // Helper toupsert meta tags in document head
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Primary Meta Settings
    setMetaTag("description", "Premium 3D Portfolio of Solix Pro. High-value freelancer specializing in Creative Art Direction, Kickstarter/Indiegogo Crowdfunding pre-launch lists, bespoke UI/UX designs, and technical search visibility compounding.");
    setMetaTag("keywords", "Solix Pro, Creative Director, Crowdfunding Specialist, Kickstarter expert, Indiegogo strategy, Website Design, UI/UX Designer, technical SEO, organic search visibility, Fiverr Freelancer");
    setMetaTag("author", "Soliudeen Oyedele (Solix Pro)");

    // Open Graph Social Tags
    setMetaTag("og:title", "SOLIX PRO - Highly Interactive 3D Portfolio Experience", true);
    setMetaTag("og:description", "Positioning luxury startup brands through cinematic creative campaigns, crowdfunding pre-funnels, bespoke website UI crafting, and organic SEO authority compound.", true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", window.location.href, true);
    setMetaTag("og:image", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", true);

    // Twitter Card Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", "SOLIX PRO - Creative Director & Crowdfunding Specialist");
    setMetaTag("twitter:description", "Build high-converting startup environments, secure Kickstarter backer campaigns, and dominate high-intent keywords on Google search.");
    setMetaTag("twitter:image", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80");

    // 2. Technical Rich Snippet Schema (JSON-LD)
    const schemaId = "solix-pro-structured-data";
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://www.fiverr.com/s/e6zwPw4#person",
          "name": "Soliudeen Oyedele",
          "alternateName": "Solix Pro",
          "description": "High-value Freelancer offering Freelance Creative Direction, Crowdfunding Launch Strategy, Custom Website Design, and Technical Organic Search Optimization.",
          "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
          "jobTitle": "Creative Director & Crowdfunding Specialist",
          "url": "https://www.fiverr.com/s/e6zwPw4",
          "sameAs": [
            "https://www.linkedin.com/in/soliudeen-oyedele-98a40037a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            "https://www.instagram.com/solix_pro2?igsh=OWU3ZmxuaHhqMTZ1",
            "https://x.com/Solix_pro"
          ],
          "knowsAbout": [
            "Brand Strategy",
            "Creative Campaign Development",
            "Kickstarter Campaign launches",
            "Indiegogo Crowdfunding marketing",
            "Website Design",
            "UI/UX Conversion layouts",
            "Technical SEO",
            "On-Page SEO Siloing",
            "Organic Google Crawling"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.fiverr.com/s/e6zwPw4#website",
          "url": window.location.href,
          "name": "SOLIX PRO Portfolio Website",
          "description": "Interactive Awwwards-Level digital experience for secure freelancer bookings.",
          "publisher": {
            "@id": "https://www.fiverr.com/s/e6zwPw4#person"
          }
        },
        {
          "@type": "ProfessionalService",
          "name": "Solix Pro Digital Consulting",
          "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
          "priceRange": "$$$",
          "url": window.location.href,
          "telephone": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "150"
          }
        }
      ]
    };

    script.text = JSON.stringify(structuredData);

    return () => {
      // Cleanup script header on unmount if appropriate (optional, but keep for SPA hygiene)
    };
  }, []);

  return null;
}

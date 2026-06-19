import { Service, Project, Testimonial, Achievement, SocialLink, FAQItem } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "creative-director",
    title: "Creative Director",
    shortDescription: "Elevating brand positioning through cinematic storytelling, high-fidelity art direction, and immersive creative campaigns that capture minds and markets.",
    benefits: [
      "Signature premium brand identity and visual aesthetic",
      "Cinematic campaigns that drive natural virality and organic reach",
      "Unified vision across digital products, media channels, and print assets"
    ],
    deliverables: [
      "Brand Narrative & Identity Architecture",
      "Creative Campaign Concept & Guidelines",
      "High-Fidelity Content & Creative Direction",
      "Commercial Presentation & Investor Pitch Decks",
      "Bespoke High-Converting Marketing Collaterals"
    ],
    iconName: "Compass"
  },
  {
    id: "crowdfunding",
    title: "Crowdfunding Specialist",
    shortDescription: "Architecting high-performance Kickstarter & Indiegogo campaigns from pre-launch community building to final multi-million dollar funding execution.",
    benefits: [
      "High-velocity pre-launch funnel design to build large active buyer lists",
      "Awwwards-grade crowdfunding page copywriting and layout formatting",
      "Post-launch strategic pricing tiers and backer communication system"
    ],
    deliverables: [
      "Comprehensive Launch Strategy & Mechanics",
      "High-Converting Crowdfunding Landing Pages",
      "Kickstarter / Indiegogo Visual Layout Copywriting",
      "Lead Generation & Exclusive Reservation Funnels",
      "High-Margin Reward Tier Architecture"
    ],
    iconName: "Flame"
  },
  {
    id: "website-design",
    title: "Website Design",
    shortDescription: "Crafting beautiful, high-performance, conversion-engineered digital interfaces that seamlessly blend luxury art style with high-speed responsiveness.",
    benefits: [
      "Custom unique designs that stand out from boring responsive templates",
      "Engineered navigation patterns optimized for immediate lead capture",
      "Ultra-fluid 3D-feeling micro-animations and seamless page transitions"
    ],
    deliverables: [
      "Premium Custom Website UI/UX Wireframing",
      "Awwwards-Level Desktop & Mobile Experiences",
      "Bespoke Landing Pages & Portfolios",
      "User Journey & Dynamic Sales Conversions",
      "Interactive Interactive Components & 3D Cards"
    ],
    iconName: "Layout"
  },
  {
    id: "seo-ranking",
    title: "SEO Ranking & Growth",
    shortDescription: "Dominating high-intent search queries to drive massive streams of organic, high-converting traffic directly to your offers without ad reliance.",
    benefits: [
      "Sustainable organic visitor traffic that compounds month-over-month",
      "First-page authority placement on competitive high-buying-intent terms",
      "Flawless technical performance scores for excellent user metrics"
    ],
    deliverables: [
      "Technical Core Web Vitals & Performance Audit",
      "Semantic On-Page Keyword Silo Optimization",
      "Competitive Keyword Analysis & Gap Strategy",
      "Local Map Pack Authority Enhancement",
      "SEO Content Roadmap & Strategic Growth System"
    ],
    iconName: "TrendingUp"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "aetheris-watch",
    title: "Aetheris Luxury Timepieces Rebrand",
    category: "Creative Direction",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Rebranding an independent Swiss horology workshop into a high-net-worth legacy brand COMMANDING multi-thousand dollar valuations.",
    fullCaseStudy: {
      challenge: "Aetheris had stunning product mechanics but struggled with standard ecommerce presentation. Their identity felt too clinical, forcing them to compete on technical features and discounts rather than prestige, resulting in a low average order value (AOV).",
      strategy: "Shifted the brand narrative entirely from 'technical hybrid specs' to 'sculpted physical heritage'. Engineered an immersive black-gold visual visual language. We created interactive campaign presentations designed around the passage of time.",
      solution: "Visual redesign of digital assets. Implemented editorial typography, curated slow-motion cinematic video directives, crafted a high-converting investor pitch deck for boutique retail partners, and conceptualized a premium membership program.",
      outcome: "Successfully repositioned Aetheris to launch its flagship series with a premium price elevation. Secured placements in independent watch publications and completely eliminated discount-driven sale dependencies."
    },
    metrics: [
      { label: "AOV Expansion", value: "+85%" },
      { label: "Social Impressions", value: "2.4M" },
      { label: "Boutique Orders", value: "$420k" }
    ],
    tags: ["Brand Strategy", "Creative Direction", "Art Styling", "Copywriting"]
  },
  {
    id: "voltcycle-kickstarter",
    title: "VoltCycle Foldable E-Bike Launch",
    category: "Crowdfunding",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Raising $482k in 30 days for a revolutionary lightweight urban commuter with a custom high-performance pre-launch reservation funnel.",
    fullCaseStudy: {
      challenge: "Launching a premium $1,800 smart e-bike in a crowded space. The project owners had zero initial email subscribers or social media followers and needed $50,000 minimum funding to clear production tooling factories.",
      strategy: "Built a custom pre-launch 'VIP Reservation' framework. Designed a beautiful, high-efficiency landing page offering a risk-free $10 deposit for backer VIP lock-in. Built high-yield email sequences building deep emotional excitement ahead of Kickstarter launch.",
      solution: "Optimized Kickstarter campaign graphics, reward structures, pre-launch VIP list, and launch day live triggers. Ran high-converting target marketing and immediate secondary campaign unlocks during the mid-month lull.",
      outcome: "Exceeded the $50k target within 45 seconds of going live, culminating in an incredibly successful 30-day crowdfunding run that was featured in high-tier gadget publications."
    },
    metrics: [
      { label: "Funds Raised", value: "$482,000" },
      { label: "Funding Goal", value: "964%" },
      { label: "VIP Conversion", value: "32%" }
    ],
    tags: ["Kickstarter", "Crowdfunding pre-launch", "Landing Page", "Lead Funnel"]
  },
  {
    id: "veloce-saas",
    title: "Veloce Autonomous SaaS Platform",
    category: "Website Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Engineering the digital web experience for an AI workflow automation engine, elevating trial signups through high-conversion layout design.",
    fullCaseStudy: {
      challenge: "Veloce had a heavy, static, confusing interface causing high bounce rates (over 65%) and a dismal visitor-to-free-trial signup rate of just 1.2%. The team was overspending on paid ads without results.",
      strategy: "Designed a premium dark UI featuring ultra-smooth interactive 3D elements, dynamic micro-interactions, responsive workflow visualizers, and a simplified value-driven interactive pricing layout that clearly displayed time-saving metrics.",
      solution: "Developed an elegant Web experiences using fluid CSS elements, interactive interactive calculator, and clean typography. Polished the navigation to make sure key actions like 'Start Free' were persistent and delightful.",
      outcome: "Massive drop in page bounce rates and a direct tripling of search conversions, enabling the SaaS startup to close its Series-A funding round with superior usage dashboards."
    },
    metrics: [
      { label: "Trial Signups", value: "+300%" },
      { label: "Bounce Rate", value: "-40%" },
      { label: "User Time-on-Site", value: "3m 42s" }
    ],
    tags: ["UI/UX Design", "Custom Layouts", "Vite/Tailwind", "Responsive Design"]
  },
  {
    id: "summit-peak-seo",
    title: "Summit Peak Outdoor Gear Authority",
    category: "SEO Ranking",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Dominating high-competition search terms to achieve 140k+ monthly organic visitors, outranking massive department stores sustainably.",
    fullCaseStudy: {
      challenge: "An e-commerce retailer of premium outdoor gear was trapped in Page 3 of Google search results, spending heavy margins on PPC keywords and losing direct sales to megastores who dominated all broad terms.",
      strategy: "Conducted deep technical audits on rendering speeds, indexation loops, and keyword cannibalization. Redesigned internal linking around high-intent transactional clusters like 'best lightweight carbon trekking poles'.",
      solution: "Restructured on-page semantic structures, accelerated mobile page load speeds to high-green Core Web Vitals, created structured product review schema setups, and executed a professional organic authority acquisition plan.",
      outcome: "Secured first-page organic authority. Achieved Top 3 positions on highly-competitive transactional query keywords, fueling passive sales and reducing ad overhead by $12k/month."
    },
    metrics: [
      { label: "Organic Visitors", value: "140k+" },
      { label: "Top 3 Rankings", value: "45+ Keywords" },
      { label: "Ad Cost Saved", value: "$12k/mo" }
    ],
    tags: ["Technical SEO", "Semantic Markup", "Organic Growth", "On-Page Siloing"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    clientName: "David Vance",
    clientRole: "Founder",
    companyName: "Lumina Charging Co.",
    review: "Solix is an absolute genius. He redesigned our entire crowdfunding landing page and structured our Kickstarter rewards strategy of our hardware launch. We hit our target in 45 minutes and raised $285k! Highly recommend hiring him on Fiverr.",
    rating: 5,
    tags: ["Crowdfunding", "Website Design"],
    imageSuffix: "man1"
  },
  {
    id: "test-2",
    clientName: "Michael Thorne",
    clientRole: "Marketing Director",
    companyName: "Apex Fit Outdoors",
    review: "Our Google search visibility has exploded. Within 3 months of Solix running a deep SEO audit and technical optimization, our organic traffic tripled, outperforming our paid search acquisition. A highly professional partner.",
    rating: 5,
    tags: ["SEO Ranking", "Technical SEO"],
    imageSuffix: "man2"
  },
  {
    id: "test-3",
    clientName: "Elena Rostova",
    clientRole: "CEO",
    companyName: "Veloce SaaS",
    review: "The Awwwards style aesthetic he designed turned our boring landing page into a lead generation beast. Our signup rate climbed from 1.2% to 4.8%. He does not code templates, he builds authentic luxury digital experiences.",
    rating: 5,
    tags: ["Website Design", "UI/UX Design"],
    imageSuffix: "woman1"
  },
  {
    id: "test-4",
    clientName: "Siddharth Mehta",
    clientRole: "Co-Founder",
    companyName: "Aetheris Watches",
    review: "As a Creative Director, Solix Pro understood our legacy Swiss heritage and elevated our branding to absolute luxury elite levels. We received compliments from institutional collectors on the clean spacing and layout typography.",
    rating: 5,
    tags: ["Creative Direction", "Brand Identity"],
    imageSuffix: "man3"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ach-1",
    value: "$5M+",
    label: "Total Crowdfunding",
    description: "Successfully secured funding across Kickstarter, Indiegogo, and VC pitch presentations.",
    iconName: "Award"
  },
  {
    id: "ach-2",
    value: "150+",
    label: "Websites Crafted",
    description: "Bespoke high-performance digital interfaces prioritizing aesthetic style and immediate customer retention.",
    iconName: "Monitor"
  },
  {
    id: "ach-3",
    value: "300%+",
    label: "Avg. SEO Surge",
    description: "Strategic compound organic traffic expansion within 90 days of deep execution.",
    iconName: "ShieldCheck"
  },
  {
    id: "ach-4",
    value: "99%",
    label: "Success Rating",
    description: "Highly rated on Fiverr for professional brand styling, technical efficiency, and communication.",
    iconName: "Users"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "fiverr",
    name: "Fiverr",
    url: "https://www.fiverr.com/s/e6zwPw4",
    iconName: "Star"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/soliudeen-oyedele-98a40037a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    iconName: "Linkedin"
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/solix_pro2?igsh=OWU3ZmxuaHhqMTZ1",
    iconName: "Instagram"
  },
  {
    id: "twitter",
    name: "X / Twitter",
    url: "https://x.com/Solix_pro",
    iconName: "Twitter"
  }
];

export const PROCESS_STEPS = [
  {
    phase: "PHASE 01",
    title: "Silo Strategy & Narrative Setup",
    description: "We map out high-intent organic keywords, design client acquisition pathways, and establish your unique brand narrative to guarantee absolute market authority."
  },
  {
    phase: "PHASE 02",
    title: "Luxury UI/UX Layout Crafting",
    description: "Translating brand positioning into bespoke glassmorphic interfaces with crisp typography, balanced margins, and optimal, screen-responsive layout scaling."
  },
  {
    phase: "PHASE 03",
    title: "Launch Velocity & SEO Siloing",
    description: "We deploy premium technical SEO setups, launch crowdfunding communities, and load optimized, high-converting digital environments to ignite sales."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should I work with Solix Pro instead of hiring an expensive agency?",
    answer: "Offline agencies come with heavy overheads, junior account manager hand-offs, and delayed speeds. You work directly with me — a Creative Director, Crowdfunding Expert, Web Designer, and SEO Ranker with $5M+ in successful launches. You get tier-1 custom Awwwards quality with direct communication and rapid results on Fiverr."
  },
  {
    id: "faq-2",
    question: "Do you build custom responsive templates or use ready-made page builders?",
    answer: "Every single brand requires original narrative layouts. I craft bespoke, fast-loading, clean-structured digital experiences from scratch with responsive styling (Tailwind CSS, clean React). I ensure they pass all core web index parameters with perfect scores."
  },
  {
    id: "faq-3",
    question: "Can you help prepare Kickstarters that have not started list building?",
    answer: "Yes, this is my specialty. The single biggest reason crowdfunding campaigns fail is launching to 'cold audiences'. I build high-yield pre-launch reserving lists, custom VIP funnel setups, and high-performance lead captures. This creates instant funding momentum on launch hour."
  },
  {
    id: "faq-4",
    question: "How long until we see first-page rankings from your SEO ranking systems?",
    answer: "Technical search updates and semantic repairs bring Google crawls and search indexing benefits in 15 to 30 days. Broad keyword position growth typically compounds in 2 to 3 months of structured, organic authority scaling. I deliver fully detailed tracking logs so you witness critical keyword search climbers."
  },
  {
    id: "faq-5",
    question: "How does the Fiverr ordering system work for your custom services?",
    answer: "Extremely simple! Click any 'Hire Me on Fiverr' or 'View Fiverr Profile' link here. It redirects you directly to my verified Fiverr profile where you can review pre-negotiated gigs, message me directly for bespoke quotes, or start an escrow order. Your payment is held securely in escrow by Fiverr and only released when you are 100% satisfied with my work."
  }
];

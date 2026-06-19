export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  benefits: string[];
  deliverables: string[];
  iconName: string;
}

export interface ProjectSection {
  challenge: string;
  strategy: string;
  solution: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Creative Direction" | "Crowdfunding" | "Website Design" | "SEO Ranking";
  image: string;
  shortDescription: string;
  fullCaseStudy: ProjectSection;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  review: string;
  rating: number;
  tags: string[];
  imageSuffix: string;
}

export interface Achievement {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

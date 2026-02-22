
export enum TechStack {
  WORDPRESS = 'WordPress',
  REACT = 'React JS'
}

export enum Industry {
  BUSINESS = 'Business',
  PORTFOLIO = 'Portfolio',
  E_COMMERCE = 'E-Commerce',
  AGENCY = 'Agency',
  SAAS = 'SaaS',
  BLOG = 'Blog'
}

export interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  techStack: TechStack;
  industry: Industry;
  images: string[];
  features: string[];
  tags: string[];
  rating: number;
  sales: number;
  lastUpdated: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

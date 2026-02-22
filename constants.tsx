
import { TechStack, Industry, Template, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Templates', href: '/templates' },
  { label: 'Categories', href: '/categories' },
  { label: 'Docs', href: '/docs' },
  { label: 'Support', href: '/support' },
];

export const TEMPLATES: Template[] = [
  {
    id: 't1',
    title: 'NexGen Dashboard',
    description: 'A sophisticated React-based administrative dashboard with high-fidelity UI components.',
    price: 59,
    techStack: TechStack.REACT,
    industry: Industry.SAAS,
    images: [
      'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Dark Mode support', 'TypeScript Ready', 'Tailwind CSS', 'Dynamic Charts'],
    tags: ['admin', 'dashboard', 'react', 'modern'],
    rating: 4.8,
    sales: 1240,
    lastUpdated: '2024-03-01',
    isNew: true
  },
  {
    id: 't2',
    title: 'Lumina Agency',
    description: 'Premium WordPress theme for creative agencies and independent designers.',
    price: 49,
    techStack: TechStack.WORDPRESS,
    industry: Industry.AGENCY,
    images: [
      'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Elementor Pro', 'One-click Demo', 'SEO Optimized', 'WPML Ready'],
    tags: ['agency', 'creative', 'wordpress', 'minimal'],
    rating: 4.9,
    sales: 850,
    lastUpdated: '2023-11-15'
  },
  {
    id: 't3',
    title: 'Flow Landing',
    description: 'The ultimate conversion-optimized landing page for your next software project.',
    price: 39,
    techStack: TechStack.REACT,
    industry: Industry.BUSINESS,
    images: [
      'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Framer Motion', 'Waitlist Integration', 'Copy-to-Clipboard', 'Responsive'],
    tags: ['saas', 'startup', 'react', 'marketing'],
    rating: 4.7,
    sales: 2100,
    lastUpdated: '2024-02-10',
    isNew: true
  },
  {
    id: 't4',
    title: 'Swift Store',
    description: 'Lightning-fast e-commerce starter kit using Next.js and Shopify.',
    price: 79,
    techStack: TechStack.REACT,
    industry: Industry.E_COMMERCE,
    images: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Shopify SDK', 'Edge Caching', 'Stripe Ready', 'Inventory Sync'],
    tags: ['ecommerce', 'shop', 'react', 'nextjs'],
    rating: 5.0,
    sales: 420,
    lastUpdated: '2024-01-20'
  },
  {
    id: 't5',
    title: 'Folio Minimal',
    description: 'A minimalist portfolio theme for developers to showcase their code and projects.',
    price: 29,
    techStack: TechStack.REACT,
    industry: Industry.PORTFOLIO,
    images: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['MDX Blog', 'Github API', 'Vercel Deploy', 'Newsletter'],
    tags: ['portfolio', 'dev', 'clean', 'minimal'],
    rating: 4.6,
    sales: 3100,
    lastUpdated: '2024-02-28'
  },
  {
    id: 't6',
    title: 'Estate WP',
    description: 'Complex real estate listing solution with advanced filtering and mapping.',
    price: 69,
    techStack: TechStack.WORDPRESS,
    industry: Industry.BUSINESS,
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Google Maps', 'Advanced Search', 'Property Slider', 'Member Area'],
    tags: ['realestate', 'listing', 'wordpress', 'directory'],
    rating: 4.8,
    sales: 150,
    lastUpdated: '2023-12-05'
  },
  {
    id: 't7',
    title: 'Journalist Blog',
    description: 'Clean and readable typography-focused blog theme for modern writers.',
    price: 35,
    techStack: TechStack.WORDPRESS,
    industry: Industry.BLOG,
    images: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Reading Time', 'Newsletter Popup', 'Dark Mode', 'SEO Ready'],
    tags: ['blog', 'writing', 'wordpress', 'clean'],
    rating: 4.7,
    sales: 920,
    lastUpdated: '2024-01-10'
  },
  {
    id: 't8',
    title: 'Startup Flow',
    description: 'A robust starting point for SaaS applications with pre-built dashboards.',
    price: 89,
    techStack: TechStack.REACT,
    industry: Industry.SAAS,
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Auth0 Support', 'Prisma Integration', 'Stripe Billing', 'Tailwind UI'],
    tags: ['saas', 'fullstack', 'react', 'startup'],
    rating: 4.9,
    sales: 310,
    lastUpdated: '2024-03-05',
    isNew: true
  }
];

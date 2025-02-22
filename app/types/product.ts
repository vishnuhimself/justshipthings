export interface ProductDetails {
  overview: string;
  features: string[];
  technologies: string[];
  screenshots: string[];
  testimonials?: {
    text: string;
    author: string;
    role: string;
  }[];
  pricing?: {
    plan: string;
    price?: string;
    features: string[];
  }[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  link: string;
  storeButton: {
    text: string;
    icon: 'app-store' | 'play-store' | 'web';
  };
  tags: string[];
  launchDate: string;
  status: 'live' | 'beta' | 'archived';
  details: ProductDetails;
} 
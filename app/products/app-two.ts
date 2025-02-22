import type { Product } from '../types/product';

export const appTwo: Product = {
  id: "app-2",
  name: "App #2",
  description: "Something exciting is brewing! More details coming soon.",
  iconUrl: "/images/picture.png",
  link: "",
  storeButton: {
    text: "Coming Soon",
    icon: "app-store"
  },
  tags: ["iOS", "React Native", "Expo", "RevenueCat"],
  launchDate: "March 2024",
  status: "beta",
  details: {
    overview: "",
    features: [],
    technologies: ["React Native", "Expo", "RevenueCat"],
    screenshots: [],
    testimonials: [],
    pricing: []
  }
}; 
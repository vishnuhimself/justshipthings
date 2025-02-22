import type { Product } from '../types/product';

export const growthKit: Product = {
  id: "growthkit",
  name: "GrowthKit",
  description: "Track your weight loss journey & your kids' growth in one place. Gain instant BMI insights, chart progress, and stay motivated on every step of your journey!",
  iconUrl: "/images/GrowthKit/growthkit-icon.png",
  link: "https://apps.apple.com/us/app/growthkit-track-height-weight/id6740914430",
  storeButton: {
    text: "Download on the App Store",
    icon: "app-store"
  },
  tags: ["iOS", "React Native", "Expo", "RevenueCat"],
  launchDate: "February 2024",
  status: "live",
  details: {
    overview: "GrowthKit is your go-to app for tracking height, weight, BMI, and more. Whether you're monitoring children's growth milestones or focusing on your own healthy weight goals, GrowthKit provides the tools you need to stay motivated and celebrate progress.",
    features: [
      "Multiple Profiles - Track growth data for your entire family in one place",
      "Smart Dashboard - Quick overview of all important data and insights",
      "Advanced Analytics & Beautiful Charts - Visualize growth patterns with precision",
      "Global Measurement Support - Switch between metric (cm/kg) and imperial (ft/lbs)",
      "Data Privacy & Security - Your information stays on your device",
      "Data Backup & Transfer - Export and manage your data with ease",
      "BMI Insights - Instant access to BMI calculations and trends",
      "Growth Velocity Tracking - Monitor growth rate over time",
      "Time-based Filters - View progress over All Time, 1Y, 6M, 3M, or 1M"
    ],
    technologies: [
      "React Native",
      "Expo",
      "RevenueCat"
    ],
    screenshots: [
      "/images/GrowthKit/GrowthKit-Dashboard.webp",
      "/images/GrowthKit/GrowthKit-Profiles.webp",
      "/images/GrowthKit/GrowthKit-Insights-Snapshot.webp",
      "/images/GrowthKit/GrowthKit-Charts.webp",
      "/images/GrowthKit/GrowthKit-Darkmode.webp",
      "/images/GrowthKit/GrowthKit-Measurement-System.webp"
    ],
    testimonials: [
      {
        text: "Perfect for busy families who want to keep track of their children's growth milestones.",
        author: "Sarah Chen",
        role: "Parent of Two"
      },
      {
        text: "The BMI tracking and growth velocity features make it an invaluable tool for monitoring children's development.",
        author: "Dr. James Wilson",
        role: "Pediatrician"
      }
    ],
    pricing: [
      {
        plan: "Free",
        features: ["Basic tracking", "Single profile", "Essential metrics"]
      },
      {
        plan: "Pro - Monthly",
        price: "$0.99",
        features: ["Unlimited profiles", "Advanced analytics", "All features"]
      },
      {
        plan: "Pro - Yearly",
        price: "$5.99",
        features: ["Best value", "All Pro features", "50% savings"]
      },
      {
        plan: "Lifetime Deal",
        price: "$19.99",
        features: ["One-time payment", "Forever access", "All future updates"]
      }
    ]
  }
}; 
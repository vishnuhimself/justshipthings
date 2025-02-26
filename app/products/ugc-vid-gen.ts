import type { Product } from '../types/product';

export const ugcVidGen: Product = {
  id: "ugcvidgen",
  name: "UGC Video Generator",
  description: "A powerful Python script that automates the creation of UGC-style marketing videos by combining hook videos, text overlays, CTAs, and background music.",
  iconUrl: "/images/UGCVidGen/UGC Video Gen.png",
  link: "https://github.com/vishnuhimself/UGCVidGen",
  storeButton: {
    text: "View on GitHub",
    icon: "github"
  },
  tags: ["Python", "Video Generation", "Marketing", "Open Source"],
  launchDate: "February 2025",
  status: "live",
  details: {
    overview: "UGCVidGen is a free, open-source Python script that helps marketers, content creators, and small businesses automatically generate UGC-style marketing videos. By combining attention-grabbing hook videos with customizable text overlays, call-to-action clips, and background music, UGCVidGen enables you to create consistent, high-quality video content without advanced editing skills.",
    features: [
      "Automated Video Creation - Generate multiple marketing videos in minutes",
      "Comes with 5 UGC Videos and music included to get started immediately",
      "Text Overlay Customization - Add eye-catching text with smooth animations and glow effects",
      "Hook & CTA Combination - Seamlessly merge hook videos with call-to-action clips",
      "Background Music Integration - Automatically add and adjust background music",
      "Vertical Video Format - Optimized for social media platforms (9:16 aspect ratio)",
      "Batch Processing - Create multiple videos in a single run",
      "Custom Font Support - Use your preferred fonts for text overlays",
      "Video Tracking - Keep records of generated videos and used hooks",
      "Progress Visualization - Monitor the creation process with progress bars",
      "Comprehensive Logging - Track the entire process with detailed logs"
    ],
    technologies: [
      "Python",
      "MoviePy",
      "Pandas",
      "NumPy",
      "tqdm"
    ],
    screenshots: [
      "/images/UGCVidGen/ugcvidgen-sample1.webp",
      "/images/UGCVidGen/ugcvidgen-sample2.webp",
      "/images/UGCVidGen/ugcvidgen-terminal.webp",
      "/images/UGCVidGen/ugcvidgen-structure.webp"
    ],
    testimonials: [
      {
        text: "UGCVidGen has completely transformed our content creation process. We're now able to produce 10x more videos with the same resources.",
        author: "Alex Chen",
        role: "Digital Marketing Manager"
      },
      {
        text: "As a solo entrepreneur, this tool has been a game-changer. I can now create professional-looking marketing videos without hiring a video editor.",
        author: "Sarah Johnson",
        role: "E-commerce Store Owner"
      }
    ],
    pricing: [
      {
        plan: "Free & Open Source",
        features: [
          "Full access to all features",
          "Unlimited video generation",
          "GitHub source code access",
          "Community support"
        ]
      }
    ]
  }
}; 
export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  status: string;
  screenshots: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "gaia",
    title: "GAIA",
    tagline: "Multi-Agent AI Orchestration Platform",
    description:
      "GAIA is an ongoing AI project designed as a central orchestration system capable of coordinating multiple specialized AI agents. Rather than functioning as a single assistant, GAIA acts as an intelligent command layer that delegates tasks to dedicated sub-models responsible for specific domains such as reasoning, memory, research, planning, automation, and communication. The long-term vision is to create a modular multi-agent ecosystem that can collaborate to solve complex real-world tasks.",

    technologies: [
       "Python",
       "PyTorch",
       "Machine Learning",
       "Natural Language Processing",
       "Reinforcement Learning",
       "Whisper",
       "Multi-Agent Systems",
       "AI Orchestration",
    ],

    features: [
       "Central AI Orchestrator",
       "Multi-Agent Architecture",
       "Voice Interaction",
       "Task Delegation Engine",
       "Context Management",
       "Memory Systems",
       "Automation Workflows",
       "Modular Agent Framework",
       "Research & Experimentation",
       "Future Autonomous Operations",
    ],

    github: "https://github.com/ZeroDawnDev",
     status: "In Development",
    screenshots: [
      "/projects/gaia-1.png",
    ],
  },

  {
    id: "zerodawn",

    title: "ZeroDawn",

    tagline: "AI Research & Development Ecosystem",

    description:
      "ZeroDawn is a collection of intelligent systems, AI research projects, and experimental technologies focused on advancing human-computer interaction. It serves as the foundation for projects such as GAIA, model distillation research, and future AI-driven platforms.",

    technologies: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Next.js",
      "TypeScript",
      "AI Systems",
    ],

    features: [
       "GAIA AI Assistant",
       "Model Distillation Research",
       "Intelligent System Design",
       "Experimental AI Technologies",
       "Modern Web Platform",
       "Unified AI Ecosystem",
    ],

    github: "https://github.com/ZeroDawnDev",

    live: "https://zerodawn.dev",

    status: "RESEARCH & DEVELOPMENT",

    screenshots: [
      "/projects/zerodawn-1.png",
      "/projects/zerodawn-2.png",
    ],
  },

  {
   id: "zerotouch",

   title: "ZeroTouch",

   tagline: "Cyberpunk NFT Card Universe",

   description:
    "The official web platform for the ZeroTouch universe. A futuristic collectible ecosystem where characters, factions, artifacts, and artificial intelligences exist as unique digital cards within a dark sci-fi world.",

   technologies: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "World Building",
   ],

   features: [
    "Cyberpunk Visual Design",
    "Digital Card System",
    "Faction-Based Lore",
    "Interactive Universe",
    "NFT Collection Architecture",
    "Responsive Experience",
   ],

   github: "https://github.com/ZeroDawnDev",

   status: "Active",

   screenshots: [
    "/img/zerotouch.png",
    "/img/zerotouch-2.png",
   ],
  },
  
  {
   id: "neural-distiller",

   title: "Neural Algorithm Distiller",

   tagline: "RL-driven Neural Model Compression System",

   description:
     "An advanced AI system that automatically compresses large neural networks into efficient lightweight models. It combines knowledge distillation, pruning, quantization, and neural architecture search, all coordinated by a reinforcement learning controller that optimizes performance, speed, and model size simultaneously.",

   technologies: [
     "Python",
     "PyTorch",
     "Reinforcement Learning",
     "Deep Learning",
     "Neural Architecture Search",
     "Model Compression",
     "Knowledge Distillation",
     "Quantization",
     "Pruning",
   ],

   features: [
     "Teacher–Student Distillation Framework",
     "Automatic Model Compression Pipeline",
     "Pruning Strategy Optimization",
     "Quantization Engine (FP32 → INT8)",
     "RL-based Compression Controller",
     "Neural Architecture Search (NAS)",
     "Performance vs Size Optimization Loop",
     "Self-Improving Training System",
     "Edge-Deployment Optimization Target",
     "Automated AI Model Design",
   ],

   status: "Research / Ongoing",

   github: "https://github.com/ZeroDawnDev",

   screenshots: [
     "/projects/distiller-1.png",
     "/projects/distiller-2.png",
     "/projects/distiller-3.png",
   ],
 },
 {
  id: "church-website",

  title: "Church Website System",

  tagline: "Firebase-powered Multilingual CMS Platform",

  description:
    "A modern church website platform built with Next.js and Firebase, designed to replace a traditional multi-page system with a centralized, database-driven architecture. It supports real-time content management, bilingual rendering (English and Japanese), and a fully dynamic admin dashboard for managing events, blogs, gallery, and communications.",

  technologies: [
    "Next.js (App Router)",
    "TypeScript",
    "Tailwind CSS",
    "Firebase Firestore",
    "Firebase Authentication",
    "Firebase Storage",
    "Cloudflare",
    "Vercel / Firebase Hosting",
  ],

  features: [
    "Admin Dashboard for Content Management",
    "Event Management System",
    "Blog Publishing System",
    "Image Gallery with Firebase Storage",
    "Contact / Message Management System",
    "Multilingual Support (EN / JP)",
    "Real-time Firestore Data Sync",
    "Secure Authentication System",
    "Centralized CMS Architecture",
    "Scalable Content Infrastructure",
  ],

  status: "Production / Live System",

  github: "https://github.com/ZeroDawnDev",

  live: "https://your-church-domain.com",

  screenshots: [
    "/projects/church-1.png",
    "/projects/church-2.png",
    "/projects/church-3.png",
  ],
},
  {
  id: "shekru-noir",

  title: "Shekru Noir",

  tagline: "Cinematic Coffee Brand & Admin System",

  description:
    "A cinematic luxury coffee brand website combined with a gaming-style admin dashboard. The system blends storytelling-driven frontend design with a ROG-inspired management interface for products, analytics, charts, and real-time business simulation. Built to showcase both creative UI engineering and practical dashboard system design.",

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Chart.js",
    "SVG Animations",
    "DOM APIs",
    "LocalStorage",
  ],

  features: [
    "Cinematic Storytelling Landing Page",
    "Kerala → Kyoto Brand Narrative Flow",
    "Product Catalog & Cart System",
    "Gaming-Style Admin Dashboard",
    "Real-Time Product Management",
    "Sales Analytics with Charts",
    "ROG-Style Animated Gauges",
    "Dark Luxury UI System",
    "Responsive Frontend Design",
    "Client-Side Data Persistence",
  ],

  status: "Prototype / UI System",

  github: "https://github.com/ZeroDawnDev",

  screenshots: [
    "/projects/shekru-1.png",
    "/projects/shekru-2.png",
    "/projects/shekru-admin-1.png",
  ],
}
  
];
 

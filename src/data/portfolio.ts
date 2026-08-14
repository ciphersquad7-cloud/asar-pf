export const portfolioData = {
  personal: {
    name: "Asarudeen S",
    email: "asarudeen2005a@gmail.com",
    linkedin: "https://linkedin.com/in/asarudeen7",
    github: "https://github.com/asardev7",
    role: "Full Stack Developer",
    heroHeadline: "Full-stack developer building scalable web systems.",
    heroSubtitle: "Engineering high-throughput backend APIs, real-time WebSocket pipelines, and reactive client architectures with zero-loss state persistence.",
    aboutHeading: "Engineering scalable, distributed web systems & microservices.",
    aboutBio: "I am a full-stack engineer focused on end-to-end web architecture, distributed systems, and low-latency API design. I specialize in the MERN stack—authoring modular Node.js/Express services, indexing MongoDB schemas, and developing reactive frontends. My core focus centers on WebSocket event pipelines via Socket.io, in-memory cache invalidation with Redis, and containerized cloud deployments.",
  },
  skills: [
    {
      category: "Frontend",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Zustand", "Framer Motion"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "Socket.io", "REST APIs", "JWT"],
    },
    {
      category: "Database & Cache",
      technologies: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "Infrastructure",
      technologies: ["Git", "GitHub", "Render", "Railway", "Vercel", "Cloudinary"],
    },
  ],
  projects: [
    {
      title: "Ri-Chat",
      subtitle: "Instant Messaging Platform",
      description: "A real-time messaging application engineered with Socket.io and Redis. Built to handle instant message delivery, media sharing, and secure session management. The backend ensures sub-10ms response times for cached data, while the React frontend maintains a fluid, responsive chat interface. Authentication is handled via JWT and Brevo OTP emails.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis", "Cloudinary"],
      outcome: "Sub-10ms cache retrieval & stable WebSocket connections.",
      github: "https://github.com/asardev7/Chat-app",
      demo: "",
      images: ["/richat-1.jpg", "/richat-2.jpg", "/richat-3.jpg"],
    },
    {
      title: "Linkoo",
      subtitle: "URL Analytics & Routing",
      description: "A link management service that converts long URLs into custom aliases and tracks visitor telemetry. The Express API handles fast redirects and aggregates referrer data, while the React dashboard visualizes device and browser metrics using Recharts. Also features on-the-fly QR code generation.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Recharts", "Tailwind CSS"],
      outcome: "Processing redirects across 100+ active short links.",
      github: "https://github.com/asardev7/url-shortener",
      demo: "",
      images: ["/linkoo-1.jpg", "/linkoo-2.jpg", "/linkoo-3.jpg"],
    },
    {
      title: "Draken",
      subtitle: "E-Commerce Architecture",
      description: "A digital storefront interface with complete cart management and checkout workflows. Focus was placed on client-side state persistence—ensuring cart data survives browser restarts using optimized localStorage sync—while maintaining a clean, fast product filtering system.",
      techStack: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express"],
      outcome: "Zero-loss cart state persistence.",
      github: "https://github.com/asardev7/E-commerce",
      demo: "",
      images: ["/draken-1.jpg", "/draken-2.jpg", "/draken-3.jpg"],
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications",
      institution: "The American College",
      period: "2023 – 2026",
      score: "8.7 CGPA",
    },
    {
      degree: "Higher Secondary — Computer Science",
      institution: "Sethupathi Higher Secondary School",
      period: "2016 – 2023",
      score: "73%",
    },
  ],
  certifications: [
    { name: "Full Stack Developer", issuer: "Guvi" },
    { name: "REST API (Intermediate)", issuer: "HackerRank" },
    { name: "GitHub Basics", issuer: "Simplilearn" },
  ],
  activities: [
    "GenAI Hackathon Finalist — Scalable Full-Stack AI Integration",
  ]
};

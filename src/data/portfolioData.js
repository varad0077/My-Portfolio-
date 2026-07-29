export const profileData = {
  name: "Varad",
  title: "Full-Stack Software Engineer",
  tagline: "I design and build high-performance web applications, scalable backend systems, and polished user experiences.",
  status: "Open to Opportunities",
  location: "India / Remote Worldwide",
  email: "varad0077@gmail.com",
  github: "https://github.com/varad0077",
  linkedin: "https://linkedin.com/in/varad0077",
  twitter: "https://x.com/varad0077",
  resumeUrl: "#",
  bio: `I'm a Full-Stack Software Engineer with a deep passion for building products that are both technically robust and beautifully crafted. I believe the best software is the kind that feels invisible — it just works, and it works elegantly.

My work spans modern frontend architecture, scalable backend systems, and AI-driven interfaces. I care deeply about code quality, performance, and creating user experiences that feel intentional and refined.

When I'm not writing code, I'm exploring system design, contributing to open-source, and staying on the edge of emerging web technologies.`,
  
  philosophy: [
    {
      title: "Engineering Excellence",
      desc: "Every line of code is written with intent — clean architecture, tested patterns, and long-term maintainability."
    },
    {
      title: "Design-Driven Development",
      desc: "Interfaces should feel alive, responsive, and intuitive. I bridge engineering rigor with visual craft."
    },
    {
      title: "Continuous Growth",
      desc: "Always learning, always shipping. From full-stack web to cloud architecture and AI — every project is a frontier."
    }
  ],

  stats: [
    { label: "Years Experience", value: 3 },
    { label: "Projects Shipped", value: 18 },
    { label: "Code Commits", value: 1400 },
    { label: "Technologies", value: 25 }
  ],

  techStack: [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95, icon: "Code2", desc: "Hooks, Context, Server Components, App Router" },
        { name: "TypeScript", level: 92, icon: "FileCode2", desc: "Strict typing, generics, type-safe APIs" },
        { name: "HTML / CSS", level: 98, icon: "Palette", desc: "Semantic markup, CSS Grid, animations, responsive" },
        { name: "Vite / Webpack", level: 88, icon: "Zap", desc: "Build optimization, code splitting, HMR" }
      ]
    },
    {
      category: "Backend & Data",
      skills: [
        { name: "Node.js / Express", level: 90, icon: "Server", desc: "REST APIs, middleware, microservices architecture" },
        { name: "Python / FastAPI", level: 85, icon: "Terminal", desc: "Async APIs, data pipelines, ML integrations" },
        { name: "PostgreSQL / MySQL", level: 88, icon: "Database", desc: "Query optimization, ORMs, schema design" },
        { name: "MongoDB / Redis", level: 84, icon: "Layers", desc: "Document stores, caching, session management" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git / GitHub", level: 94, icon: "GitBranch", desc: "CI/CD pipelines, branching strategies, code review" },
        { name: "Docker", level: 82, icon: "Box", desc: "Containerization, multi-stage builds, Compose" },
        { name: "AWS / Vercel", level: 80, icon: "Cloud", desc: "Serverless, S3, CloudFront, edge deployment" }
      ]
    }
  ],

  projects: [
    {
      id: "green-saviors",
      title: "EcoVerse — Geo-Tagged Plantation System",
      subtitle: "Full-Stack Environmental Monitoring Platform",
      category: "Full Stack",
      image: "/assets/project_1.png",
      featured: true,
      githubUrl: "https://github.com/varad0077/My-Portfolio-",
      liveUrl: "https://ecoverse-demo.vercel.app",
      description: "A comprehensive geo-tagged tree tracking and maintenance platform featuring interactive maps, image galleries, backend metrics, and automated progress logging.",
      techTags: ["React", "Node.js", "Express", "MySQL", "GIS Mapping", "CSS"],
      features: [
        "Interactive GIS map visualization for tree tracking",
        "Clickable lightbox image gallery with zoom capabilities",
        "Role-based authentication & admin management dashboard",
        "Exportable database telemetry and analytics reports"
      ],
      architectureDetails: "Decoupled React SPA frontend communicating with a RESTful Express backend. MySQL with spatial indices for fast geographic querying."
    },
    {
      id: "portfolio-v2",
      title: "Personal Portfolio — v2",
      subtitle: "Interactive Animated Developer Portfolio",
      category: "Web Apps",
      image: "/assets/project_2.png",
      featured: true,
      githubUrl: "https://github.com/varad0077/My-Portfolio-",
      liveUrl: "#",
      description: "A premium developer portfolio featuring animated scroll reveals, gradient mesh backgrounds, intersection observer animations, and a fully responsive design system.",
      techTags: ["React", "Vite", "Vanilla CSS", "Intersection Observer"],
      features: [
        "Custom scroll-triggered reveal animation system",
        "Animated gradient mesh background with drift effects",
        "Responsive mobile-first layout with overlay navigation",
        "Zero-dependency animation engine using pure CSS and Intersection Observer"
      ],
      architectureDetails: "Pure React with zero heavy animation libraries. Custom CSS animation system with Intersection Observer for performant scroll-triggered reveals."
    },
    {
      id: "ai-code-sentinel",
      title: "CodeSentinel — AI Code Auditor",
      subtitle: "Automated Security & Code Review Agent",
      category: "AI & Data",
      image: "/assets/project_1.png",
      featured: false,
      githubUrl: "https://github.com/varad0077",
      liveUrl: "#",
      description: "An AI-powered automated code security auditing service that scans pull requests for vulnerabilities, secret leaks, and architectural antipatterns.",
      techTags: ["Python", "FastAPI", "OpenAI API", "Docker", "GitHub Actions"],
      features: [
        "Real-time AST parsing and vulnerability scanning",
        "Automated PR review comments with fix suggestions",
        "OWASP Top 10 security check engine",
        "Custom rule definitions via YAML templates"
      ],
      architectureDetails: "FastAPI server with async worker queues. GitHub Webhook integration for parallel AST scanning on pull request events."
    }
  ],

  timeline: [
    {
      period: "2024 — Present",
      title: "Senior Full-Stack Developer",
      organization: "Creative Tech Solutions",
      type: "Work",
      description: "Leading frontend architecture and REST API development for scalable web applications.",
      highlights: [
        "Architected reusable UI design system, reducing component build times by 40%",
        "Optimized backend SQL query performance and caching strategies",
        "Mentored junior engineers on React and TypeScript best practices"
      ]
    },
    {
      period: "2023 — 2024",
      title: "Software Development Engineer",
      organization: "Digital Innovations Lab",
      type: "Work",
      description: "Built responsive client portals, data analytics dashboards, and cloud backend microservices.",
      highlights: [
        "Developed interactive data visualization modules with D3 and React Canvas",
        "Integrated secure payment processing & OAuth authentication flows"
      ]
    },
    {
      period: "2020 — 2024",
      title: "B.Tech in Computer Science & Engineering",
      organization: "University Institute of Technology",
      type: "Education",
      description: "Graduated with honors, focusing on Data Structures, Algorithms, Software Engineering, and Web Technologies.",
      highlights: [
        "Published research on cloud application security and automated testing",
        "President of the Student Developer & Open Source Club"
      ]
    }
  ]
};

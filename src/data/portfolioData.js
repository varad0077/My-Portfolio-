export const profileData = {
  name: "Varad",
  title: "Full-Stack Software Engineer & Creative Technologist",
  tagline: "Crafting whimsical digital experiences with robust engineering and Ghibli magic.",
  status: "Open to New Opportunities",
  location: "India / Remote Worldwide",
  email: "varad0077@gmail.com",
  github: "https://github.com/varad0077",
  linkedin: "https://linkedin.com/in/varad0077",
  twitter: "https://x.com/varad0077",
  resumeUrl: "#",
  bio: `Greetings traveler! I'm Varad, a passionate Full-Stack Engineer who believes writing software is like crafting a Studio Ghibli story—combining beauty, precision, and heartfelt user experience. 

With years of experience building modern web applications, scalable backends, and AI-driven interfaces, I bridge creative frontend visual craft with high-performance systems architecture.`,
  
  philosophy: [
    {
      title: "Handcrafted Engineering",
      desc: "Every line of code is written with intent, clean patterns, and long-term sustainability."
    },
    {
      title: "Whimsical & Intuitive UX",
      desc: "Interfaces should feel alive, peaceful, and delightfully fluid for every user."
    },
    {
      title: "Continuous Exploration",
      desc: "Constantly discovering new horizons in full-stack web, cloud architecture, and AI integrations."
    }
  ],

  stats: [
    { label: "Years of Crafting", value: "3+" },
    { label: "Projects Completed", value: "18+" },
    { label: "Code Commits", value: "1,400+" },
    { label: "Cups of Match Tea", value: "650+" }
  ],

  techStack: [
    {
      category: "Frontend Architecture",
      skills: [
        { name: "React.js", level: 95, icon: "Code2", desc: "Hooks, Context API, Redux Toolkit, Framer Motion" },
        { name: "TypeScript / JavaScript", level: 92, icon: "FileCode2", desc: "ESNext, Async patterns, Strict typing" },
        { name: "HTML5 / CSS3", level: 98, icon: "Palette", desc: "CSS Variables, Canvas, Animations, Responsive layouts" },
        { name: "Next.js / Vite", level: 88, icon: "Zap", desc: "SSR, SSG, Bundle optimization, Vite plugins" }
      ]
    },
    {
      category: "Backend & Cloud",
      skills: [
        { name: "Node.js & Express", level: 90, icon: "Server", desc: "REST APIs, Microservices, Middleware architecture" },
        { name: "Python / FastAPI", level: 85, icon: "Terminal", desc: "Data pipelines, Async API design" },
        { name: "PostgreSQL / MySQL", level: 88, icon: "Database", desc: "Query tuning, ORMs (Prisma, Sequelize), Schema design" },
        { name: "MongoDB & Redis", level: 84, icon: "Layers", desc: "NoSQL document stores, Caching strategies" }
      ]
    },
    {
      category: "DevOps & Tooling",
      skills: [
        { name: "Git & GitHub", level: 94, icon: "GitBranch", desc: "Branching workflows, CI/CD Actions, Pull request reviews" },
        { name: "Docker & Containers", level: 82, icon: "Box", desc: "Containerization, Multi-stage builds, Docker Compose" },
        { name: "AWS & Vercel", level: 80, icon: "Cloud", desc: "Serverless deployment, S3, CloudFront CDN" }
      ]
    }
  ],

  projects: [
    {
      id: "green-saviors",
      title: "EcoVerse - Geo-Tagged Plantation & Environmental System",
      subtitle: "Full-Stack Environmental Monitoring Platform",
      category: "Full Stack",
      image: "/assets/project_1.png",
      featured: true,
      githubUrl: "https://github.com/varad0077/My-Portfolio-",
      liveUrl: "https://ecoverse-demo.vercel.app",
      description: "A comprehensive geo-tagged tree tracking and maintenance platform featuring interactive lightbox galleries, GIS mapping, backend metrics, and automated progress logging.",
      techTags: ["React", "Node.js", "Express", "MySQL", "GIS Mapping", "Vanilla CSS"],
      features: [
        "Interactive GIS map visualization for tree tracking",
        "Clickable lightbox image gallery with zoom capabilities",
        "Role-based authentication & admin management dashboard",
        "Exportable database telemetry and analytics reports"
      ],
      architectureDetails: "Built using a decoupled React SPA frontend communicating with a RESTful Express node backend. Database utilizes relational MySQL schemas with spatial indices for fast geographic querying."
    },
    {
      id: "ghibli-studio-portfolio",
      title: "Ghibli Enchanted Portfolio",
      subtitle: "Interactive Animated Storybook Portfolio",
      category: "Web Apps",
      image: "/assets/project_2.png",
      featured: true,
      githubUrl: "https://github.com/varad0077/My-Portfolio-",
      liveUrl: "#",
      description: "A whimsical, Studio Ghibli-inspired developer portfolio featuring interactive soot sprite canvas particles, dynamic Ghibli color themes, Web Audio ambient synth, and responsive journey map.",
      techTags: ["React", "Vite", "Canvas API", "Web Audio API", "CSS Keyframes"],
      features: [
        "Interactive HTML5 Canvas soot-sprite particle system reacting to cursor movement",
        "4 Studio Ghibli color palette presets (Totoro Forest, Howl's Sky, Spirited Night, Kiki Sunset)",
        "Web Audio synthesizer generating peaceful ambient chimes and rain soundscapes",
        "Fully accessible, responsive, and SEO-optimized storybook interface"
      ],
      architectureDetails: "Pure React state management with zero external heavy animation libraries to maintain a lightweight footprint. Custom canvas render loops powered by requestAnimationFrame."
    },
    {
      id: "ai-code-sentinel",
      title: "CodeSentinel - AI Code Review & Security Auditor",
      subtitle: "Automated Repository Security & Linting Agent",
      category: "AI & Data",
      image: "/assets/project_1.png",
      featured: false,
      githubUrl: "https://github.com/varad0077",
      liveUrl: "#",
      description: "An AI-powered automated code security auditing service that scans pull requests for vulnerabilities, secret leaks, and architectural antipatterns.",
      techTags: ["Python", "FastAPI", "OpenAI / Claude API", "Docker", "GitHub Actions"],
      features: [
        "Real-time AST parsing and vulnerability scanning",
        "Automated PR review comments generation with fix proposals",
        "OWASP Top 10 security check engine",
        "Custom rule definitions via YAML templates"
      ],
      architectureDetails: "FastAPI server running asynchronous worker queues. Integrates directly with GitHub Webhooks to execute parallel AST scanners."
    }
  ],

  timeline: [
    {
      period: "2024 - Present",
      title: "Senior Full-Stack Developer",
      organization: "Creative Tech Solutions",
      type: "Work",
      description: "Leading frontend architecture and REST API development for scalable web applications.",
      highlights: [
        "Architected reusable UI design systems reducing component build times by 40%",
        "Optimized backend SQL query performance and caching strategies",
        "Mentored junior engineers on modern React and TypeScript best practices"
      ]
    },
    {
      period: "2023 - 2024",
      title: "Software Development Engineer",
      organization: "Digital Innovations Lab",
      type: "Work",
      description: "Built responsive client portals, data analytics dashboards, and cloud backend microservices.",
      highlights: [
        "Developed interactive data visualization modules using D3 and React Canvas",
        "Integrated secure payment processing & OAuth authentication flows"
      ]
    },
    {
      period: "2020 - 2024",
      title: "B.Tech in Computer Science & Engineering",
      organization: "University Institute of Technology",
      type: "Education",
      description: "Graduated with honors, focusing on Data Structures, Algorithms, Software Engineering, and Web Technologies.",
      highlights: [
        "Published research project on cloud application security and automated testing",
        "President of the Student Developer & Open Source Club"
      ]
    }
  ]
};

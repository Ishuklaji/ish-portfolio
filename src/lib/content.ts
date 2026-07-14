export const personal = {
  name: "Ish Bandhu Shukla",
  title: "Full Stack Developer",
  tagline: "React.js · Next.js · Node.js · TypeScript · MERN Stack · AI-Powered Applications",
  location: "Berlin, Germany",
  email: "Ishuklaji100@gmail.com",
  phone: "+49 1788313399",
  github: "https://github.com/Ishuklaji",
  githubHandle: "Ishuklaji",
  linkedin: "https://linkedin.com/in/ish-bandhu-shukla-016a34214",
  linkedinHandle: "ish-bandhu-shukla",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.png",
  summary:
    "Full Stack Developer with 2+ years of experience turning ideas into production-ready web applications. Skilled across the modern JavaScript ecosystem — React.js, Next.js, Node.js, TypeScript, and MongoDB — with hands-on experience designing RESTful APIs, real-time features, and AI-powered products from concept to deployment. Proven track record of delivering measurable results in fintech and enterprise SaaS environments, working effectively both in Agile teams and independently. A fast learner who takes ownership, communicates clearly, and enjoys solving real problems with clean, scalable code. Based in Berlin — eligible to work immediately, no sponsorship required.",
  aboutBio:
    "I started out in electronics engineering before moving fully into software, training intensively through a full-stack development bootcamp and then cutting my teeth across freelance projects, contract roles, and an internship at a government research organisation. That path took me from shipping enterprise SaaS modules for fintech and business clients to now building my own AI-powered products end to end. I'm currently based in Berlin completing a Master's in International Management alongside my engineering work, which shapes how I approach products — not just writing code, but understanding the business and users behind it. Outside of work you'll usually find me reading, travelling, at the gym, or still tinkering with side projects.",
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "VFPL Capital Pvt. Ltd.",
    period: "Sept 2023 - Oct 2024",
    points: [
      "Designed and shipped CorpVue (enterprise SaaS) and Finconic (fintech platform) across 5+ modules from scratch using MERN stack and Next.js in a RESTful microservices architecture, contributing to ~40% business revenue growth.",
      "Engineered 15+ RESTful API endpoints with JWT authentication, RBAC, and MongoDB aggregation pipelines; improved frontend performance by ~30% through code-splitting, lazy loading, and Vite bundling.",
      "Led code reviews, communicated technical decisions to stakeholders, and collaborated with product managers and designers across 12+ Agile/Scrum sprints — consistently shipping features on time and reducing the bug backlog.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "July - Aug 2023",
    points: [
      "Independently scoped, built, and launched 3 full-stack web applications using Next.js, Node.js, MongoDB, and RESTful APIs — receiving positive client feedback on quality; improved average page load time by ~40% through performance optimisation.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "FinvestFX (Contract)",
    period: "April - June 2023",
    points: [
      "Created 10+ reusable React.js components and Node.js RESTful API endpoints; automated CI/CD via GitHub Actions, reducing deployment time by ~25% and improving team release efficiency.",
    ],
  },
  {
    role: "Associate Full Stack Engineer",
    company: "Political Data Inc. (Contract)",
    period: "Feb - April 2023",
    points: [
      "Maintained and enhanced 6 React.js and Node.js application modules; resolved 30+ production bugs and improved application stability by ~20% through collaborative problem-solving within an Agile/Scrum team.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Masai School",
    period: "Mar - Dec 2022",
    points: [
      "Completed 900+ hours of structured training in React.js, Node.js, MongoDB, PostgreSQL, and RESTful APIs; constructed and deployed 12+ applications through collaborative team-based projects.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "DRDO",
    period: "Dec 2021 - Jan 2022",
    points: [
      "Designed and produced frontend prototypes for 3 government applications; conducted UI/UX testing across 5+ modules, documented 20+ SDLC processes, and worked with senior engineers to meet technical requirements.",
    ],
  },
] as const;

export const education = [
  {
    school: "IU International University of Applied Sciences, Berlin",
    degree: "Master's in International Management",
    period: "Oct 2024 - Mar 2026",
  },
  {
    school: "JSS Academy of Technical Education, Noida",
    degree: "B.Tech, Electronics & Communication Engineering",
    period: "Aug 2018 - Jul 2022",
  },
] as const;

export const skills = {
  groups: [
    {
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "Redux",
        "Context API",
        "HTML5",
        "CSS3",
        "Vite",
        "Webpack",
      ],
    },
    {
      title: "UI & Styling",
      items: ["Tailwind CSS", "Material UI", "Bootstrap", "shadcn/ui", "Framer Motion"],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Socket.io",
        "JWT Auth",
        "RBAC",
        "Prisma ORM",
        "Microservices",
      ],
    },
    {
      title: "AI & Agentic",
      items: [
        "Vercel AI SDK",
        "Agentic Workflows",
        "LLM Integration",
        "Prompt Engineering",
        "Generative AI",
      ],
    },
    {
      title: "Database",
      items: ["MongoDB", "Mongoose ODM", "PostgreSQL", "Neon DB", "Supabase"],
    },
    {
      title: "Auth & Realtime",
      items: ["Clerk Auth", "Stream SDK", "Socket.io", "WebSockets"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (EC2, S3)", "Azure", "Vercel", "Docker", "GitHub Actions", "CI/CD", "Git"],
    },
    {
      title: "Testing & Tools",
      items: ["Jest", "TDD", "Postman", "JIRA", "VS Code"],
    },
  ],
  languages: [
    { name: "English", level: "Bilingual" },
    { name: "Hindi", level: "Native" },
    { name: "German", level: "A2 - working toward B1" },
  ],
} as const;

export const projects = [
  {
    name: "Forgey",
    tagline: "Agentic AI app builder",
    description:
      "Describe what you want and AI generates and deploys a full-stack application autonomously — handling code generation, live preview, and end-to-end deployment.",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Neon DB", "Vercel AI SDK", "shadcn/ui", "Clerk Auth"],
    github: "https://github.com/Ishuklaji/forgey",
    live: "https://forgey.vercel.app",
    image: "/projects/forgey.png" as string | null,
  },
  {
    name: "Prepty",
    tagline: "AI interview prep platform",
    description:
      "Schedule mock interviews as interviewer or interviewee, receive AI-generated role-specific questions, and get detailed post-session performance feedback.",
    tech: ["Next.js", "Supabase", "Clerk Auth", "Stream SDK", "shadcn/ui", "Arcjet", "TypeScript", "Vercel"],
    github: "https://github.com/Ishuklaji/prepty",
    live: "https://prepty.vercel.app",
    image: "/projects/prepty.png",
  },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

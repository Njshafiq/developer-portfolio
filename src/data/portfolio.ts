export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  score?: string;
  credentialUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export const portfolioData = {
  personal: {
    name: "N J Shafiq Ahamed",
    role: "Aspiring Software Engineer & Full-Stack Developer",
    bio: "Final-year Computer Science & Engineering student with strong fundamentals in Java, Python, and modern web development. Experienced in building full-stack applications, REST API integrations, and AI-assisted face recognition systems.",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 7010556639",
    status: "Seeking Software Engineer, Java Developer, or Intern roles",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    email: "ahamedshafiq316@gmail.com",
    socials: {
      github: "https://github.com/Njshafiq",
      linkedin: "https://linkedin.com/in/shafiq-ahamed-1255462ba",
      portfolio: "https://njshafiq.github.io",
      twitter: "",
    },
    resumeUrl: "#",
  },
  experiences: [
    {
      company: "Academic & Capstone Engineering",
      role: "Full-Stack & Systems Developer",
      period: "2024 - Present",
      description: "Architected end-to-end full-stack systems including FRAS v2 (AI Face Recognition Attendance System) with Spring Boot, Python OpenCV, and PostgreSQL.",
      skills: ["Java", "Spring Boot", "Python", "OpenCV", "PostgreSQL", "React", "REST APIs"],
    },
    {
      company: "NoviTech R&D & NPTEL IIT Kharagpur",
      role: "Engineering Trainee (APIs, Data & DBMS)",
      period: "2025 - 2026",
      description: "Completed intensive practical coursework in real-world API architecture, Data Analytics, and achieved Elite Certification in Database Management Systems.",
      skills: ["REST APIs", "PostgreSQL", "3NF Schema Design", "Data Analytics", "Python"],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Aalim Muhammed Salegh College of Engineering",
      location: "Avadi, Chennai",
      period: "Expected Graduation: 2027",
      cgpa: "7.98 / 10.00",
    },
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"],
    frontend: ["React", "Vite", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS"],
    backend: ["Spring Boot", "REST APIs", "Node.js", "Python / FastAPI", "OpenCV"],
    database: ["PostgreSQL", "SQLite", "SQL", "DBMS Fundamentals"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "Data Analytics"],
    coreCS: ["Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems (OS)", "Computer Networks (CN)", "Data Structures & Algorithms (DSA)"],
  },
  projects: [
    {
      title: "FRAS: Face Recognition Attendance System (v2)",
      subtitle: "AI-assisted end-to-end automated attendance solution",
      description: "Planned the workflows and features of an end-to-end attendance management system, integrating frontend, backend, database, and Python face-recognition microservice into one cohesive application.",
      tags: ["React", "TypeScript", "Vite", "Java", "Spring Boot", "PostgreSQL", "Python", "OpenCV", "REST APIs"],
      githubUrl: "https://github.com/Njshafiq/FRAS_V2",
      liveUrl: "https://njshafiq.github.io",
      featured: true,
      highlights: [
        "Role-based login with registration for students, teachers, administrators, subjects, and classes.",
        "Teachers run attendance sessions for assigned classes; camera-based face recognition matches students to registered records and records attendance automatically.",
        "Integrated all components and rigorously tested complete workflow from enrollment to automated attendance logging.",
      ],
    },
    {
      title: "Weather Forecasting Application",
      subtitle: "Dynamic live weather tracker with asynchronous data fetching",
      description: "A responsive weather forecasting application that retrieves and displays live atmospheric data for global locations using REST APIs.",
      tags: ["HTML5", "CSS3", "JavaScript", "REST API", "Fetch API"],
      githubUrl: "https://github.com/Njshafiq/WeatherApp",
      liveUrl: "https://njshafiq.github.io/WeatherApp",
      featured: true,
      highlights: [
        "Used asynchronous JavaScript (Fetch API) to retrieve real-time weather and render it dynamically with location search.",
        "Engineered graceful loading states and defensive error handling for network or API request failures.",
      ],
    },
    {
      title: "E-Commerce Front-End Application",
      subtitle: "Interactive, responsive shopping interface",
      description: "A modern, mobile-friendly e-commerce storefront with dynamic product catalogues and real-time shopping cart interactions.",
      tags: ["HTML5", "CSS3", "JavaScript", "Flexbox / Grid", "DOM Manipulation"],
      githubUrl: "https://github.com/Njshafiq",
      liveUrl: "https://njshafiq.github.io",
      featured: false,
      highlights: [
        "Implemented dynamic product catalog rendering and interactive shopping-cart state via JavaScript DOM manipulation.",
        "Crafted clean, responsive layouts optimized for all viewport sizes using CSS Flexbox and Grid.",
      ],
    },
  ],
  certifications: [
    {
      name: "Java (Basic)",
      issuer: "HackerRank",
      date: "July 21, 2026",
      credentialUrl: "https://www.hackerrank.com/certificates/a82b94bd7a09",
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "July 21, 2026",
      credentialUrl: "https://www.hackerrank.com/certificates/c5783911e041",
    },
    {
      name: "Database Management System (DBMS) - Elite",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "Jul-Sep 2026",
      score: "Score: 61% (Elite)",
      credentialUrl: "/certificates/nptel-dbms.pdf",
    },
    {
      name: "Real-World API Skills for Career-Ready Developers",
      issuer: "NoviTech R&D Pvt. Ltd.",
      date: "July 20, 2025",
      score: "ID: NT_FSDB322",
      credentialUrl: "/certificates/novitech-api.pdf",
    },
    {
      name: "30 Days MasterClass in Data Analytics",
      issuer: "NoviTech R&D Pvt. Ltd.",
      date: "Apr 03 - May 08, 2025",
      score: "ID: NT_B18DA249",
      credentialUrl: "/certificates/novitech-data-analytics.pdf",
    },
  ],
  posts: [
    {
      slug: "building-face-recognition-attendance-system",
      title: "Architecting an Automated Face Recognition Attendance System with Spring Boot & Python",
      description: "How I designed and connected a React frontend, Spring Boot backend, and Python OpenCV service for real-time attendance.",
      date: "Oct 2026",
      readTime: "5 min read",
    },
    {
      slug: "demystifying-rest-apis-for-beginners",
      title: "Building Resilient Frontends with Fetch API and Asynchronous JavaScript",
      description: "Patterns for handling loading states, API errors, and responsive layouts based on my Weather App project.",
      date: "Sep 2026",
      readTime: "4 min read",
    },
  ],
};

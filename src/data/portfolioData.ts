import type { Experience, Project, Skill, Achievement, Certification, ContactInfo } from '../types/portfolio';

export const personalInfo = {
  name: "Shruti Keshri",
  title: "Aspiring Full-Stack Developer | Amazon ML School '25 | 2× Hackathon Winner",
  tagline: "Building meaningful, accessible, and user-focused tech solutions.",
  about: `Computer Science Engineering undergraduate at Malla Reddy Engineering College for Women (CGPA 9+).
    
Student Ambassador at Microsoft (MLSA), GirlScript Summer of Code (GSSoC), MyGov India, Let's Upgrade, and Student Nexus.

Infosys Springboard AI Intern and part of the Amazon ML Summer School program.

Member of Google Women Techmakers (WTM), IFERP, and founder of the iLearn community.

Actively enhancing Data Structures and Algorithms skills, with a passion for solving problems and innovating through technology.

Open to internship and job opportunities in software or full-stack development.`
};

export const skills: Skill[] = [
  { name: "C", category: "Languages", level: 85 },
  { name: "Python", category: "Languages", level: 90 },
  { name: "Java", category: "Languages", level: 80 },
  { name: "SQL", category: "Languages", level: 85 },
  { name: "JavaScript", category: "Languages", level: 88 },
  { name: "HTML/CSS", category: "Languages", level: 90 },
  { name: "Streamlit", category: "Tools & Frameworks", level: 85 },
  { name: "Flask", category: "Tools & Frameworks", level: 80 },
  { name: "NumPy", category: "Tools & Frameworks", level: 85 },
  { name: "Pandas", category: "Tools & Frameworks", level: 90 },
  { name: "Power BI", category: "Tools & Frameworks", level: 75 },
  { name: "Figma", category: "Tools & Frameworks", level: 70 },
  { name: "Canva", category: "Tools & Frameworks", level: 85 },
  { name: "Git/GitHub", category: "Tools & Frameworks", level: 85 },
  { name: "VS Code", category: "Tools & Frameworks", level: 90 },
  { name: "MERN Stack", category: "Tech Stack", level: 75 },
  { name: "Frontend Development", category: "Tech Stack", level: 85 },
  { name: "Machine Learning", category: "Tech Stack", level: 80 },
  { name: "Data Analysis", category: "Tech Stack", level: 85 }
];

export const experiences: Experience[] = [
  {
    title: "Internship Trainee",
    organization: "Amazon ML Summer School",
    duration: "Aug 2025 – Present",
    description: "Selected among top 5% for Machine Learning, Generative AI, and Reinforcement Learning program"
  },
  {
    title: "Microsoft Learn Student Ambassador",
    organization: "Microsoft",
    duration: "Jul 2025 – Present",
    description: "Promoting technology education and organizing community events"
  },
  {
    title: "AI Intern",
    organization: "Infosys Springboard",
    duration: "Jul 2025 – Present",
    description: "Working on AI/ML projects and gaining industry experience"
  },
  {
    title: "Student Ambassador",
    organization: "GirlScript Summer of Code (GSSoC)",
    duration: "Jun 2025 – Present",
    description: "Contributing to open source projects and mentoring newcomers"
  },
  {
    title: "Student Ambassador",
    organization: "MyGov India",
    duration: "Jun 2025 – Present",
    description: "Promoting digital governance initiatives and citizen engagement"
  },
  {
    title: "Student Ambassador",
    organization: "Let's Upgrade",
    duration: "Jun 2025 – Present",
    description: "Supporting skill development programs and educational initiatives"
  },
  {
    title: "Student Ambassador",
    organization: "Student Nexus",
    duration: "Jun 2025 – Present",
    description: "Leading student engagement initiatives and community building"
  },
  {
    title: "Member",
    organization: "Google Women Techmakers (WTM)",
    duration: "Jun 2025 – Present",
    description: "Participating in women in tech initiatives and networking events"
  },
  {
    title: "Member",
    organization: "IFERP",
    duration: "Jun 2025 – Present",
    description: "International Federation of Education and Research Professionals"
  }
];

export const projects: Project[] = [
  {
    title: "Savvy Slang Decoder",
    description: "AI-driven real-time language decoding solution that translates modern slang and colloquialisms into clear, understandable language. Winner of GenAI Hackathon (Runner-up position).",
    techStack: ["Python", "AI/ML", "NLP", "Streamlit", "Natural Language Processing"],
    github: "https://github.com/shrutikeshri/savvy-slang-decoder",
    demo: "https://savvy-slang-decoder.streamlit.app",
    featured: true
  },
  {
    title: "CivicSphere",
    description: "Blockchain-based civic participation platform enabling transparent democratic engagement through DAO governance. Developed for Web3 hackathons with focus on decentralized decision-making.",
    techStack: ["Blockchain", "Web3", "DAO", "JavaScript", "Smart Contracts", "Solidity"],
    github: "https://github.com/shrutikeshri/civicsphere",
    featured: true
  },
  {
    title: "COVID-19 Detection with Chest X-Ray",
    description: "Machine learning project using PyTorch for medical image classification to detect COVID-19 from chest X-rays. Implemented deep learning models for accurate medical diagnosis.",
    techStack: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "Medical AI"],
    github: "https://github.com/shrutikeshri/covid-detection-xray",
    featured: true
  },
  {
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard built with Python and Streamlit for data visualization and analysis. Features real-time data processing and interactive charts.",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Data Visualization"],
    github: "https://github.com/shrutikeshri/data-dashboard",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio website showcasing projects and achievements. Built with modern web technologies and optimized for performance.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/shrutikeshri/portfolio",
    demo: "https://shrutikeshri.dev",
    featured: false
  }
];

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Summer School 2025",
    description: "Selected among top 5% for Machine Learning, Generative AI, and Reinforcement Learning program",
    type: "program"
  },
  {
    title: "Web Development Hackathon Winner",
    description: "First place at MRECW Web Development Hackathon for innovative web solution",
    type: "hackathon"
  },
  {
    title: "GenAI Hackathon Runner-up",
    description: "Second place with Savvy Slang Decoder project - AI-driven language translation tool",
    type: "hackathon"
  },
  {
    title: "Multiple Web3 Hackathon Participant",
    description: "Active participant in Web3 hackathons including Hackathon Marathon with CivicSphere project",
    type: "hackathon"
  },
  {
    title: "iLearn Community Founder",
    description: "Founded peer learning community encouraging collaborative education and skill development",
    type: "community"
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description: "Selected as MLSA to promote technology education and organize community events",
    type: "program"
  },
  {
    title: "Multiple Student Ambassadorships",
    description: "Serving as ambassador for GSSoC, MyGov India, Let's Upgrade, and Student Nexus",
    type: "community"
  }
];

export const certifications: Certification[] = [
  {
    title: "Certificate of Participation in Software Engineer Internship",
    issuer: "Unstop",
    url: "https://unstop.com/certificate-preview/8fdfce94-152d-4044-832f-7e74cb637bab"
  },
  {
    title: "Detecting COVID-19 with Chest X-Ray using PyTorch",
    issuer: "Coursera Project Network",
    url: "https://coursera.org/verify/1J2GO35O3HOU"
  },
  {
    title: "GitHub Copilot – Ask, Edit, Agent & Prompt Engineering",
    issuer: "GitHub Global AI Community",
    url: "https://www.credly.com/badges/bfb26d71-3dd0-4986-bc85-ea0d8495fc7c"
  },
  {
    title: "AgentX 2025",
    issuer: "Global AI Community",
    url: "https://www.credly.com/badges/e0bb9294-33f8-42a2-b60f-cb04acd0a9e5"
  },
  {
    title: "Create a High-Fidelity Prototype with Figma",
    issuer: "Coursera",
    url: "https://coursera.org/verify/O77P870037L1"
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    url: "https://coursera.org/verify/4276YCOL775R"
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    url: "https://coursera.org/verify/JFAMNBP4OTG9"
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "Forage",
    url: "https://www.theforage.com/simulations/aws/solutions-architecture-apac"
  },
  {
    title: "Accenture UK - Developer & Technology Job Simulation",
    issuer: "Forage",
    url: "https://www.theforage.com/simulations/accenture/technology-uk"
  },
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3FC2BCF7B9F28E3E1D8C2A7DF624"
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/1c482a3f-71e0-4e87-89ce-ec6a5f51d3aa"
  },
  {
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/f05d3583ef2d"
  }
];

export const contactInfo: ContactInfo = {
  email: "shrutikeshri200423.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/shrutikeshri/",
  github: "https://github.com/shrutikeshri2021"
};

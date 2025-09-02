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
  { name: "Streamlit", category: "Tools & Frameworks", level: 85 },
  { name: "Flask", category: "Tools & Frameworks", level: 80 },
  { name: "NumPy", category: "Tools & Frameworks", level: 85 },
  { name: "Pandas", category: "Tools & Frameworks", level: 90 },
  { name: "Power BI", category: "Tools & Frameworks", level: 75 },
  { name: "Figma", category: "Tools & Frameworks", level: 70 },
  { name: "Canva", category: "Tools & Frameworks", level: 85 },
  { name: "MERN Stack", category: "Tech Stack", level: 75 },
  { name: "Frontend Development", category: "Tech Stack", level: 85 }
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
    organization: "Student Nexus",
    duration: "Jun 2025 – Present",
    description: "Leading student engagement initiatives and community building"
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
    description: "AI-driven real-time language decoding solution that translates modern slang and colloquialisms into clear, understandable language",
    techStack: ["Python", "AI/ML", "NLP", "Streamlit"],
    featured: true
  },
  {
    title: "CivicSphere",
    description: "Blockchain-based civic participation platform enabling transparent democratic engagement through DAO governance",
    techStack: ["Blockchain", "Web3", "DAO", "JavaScript", "Smart Contracts"],
    featured: true
  },
  {
    title: "COVID-19 Detection with Chest X-Ray",
    description: "Machine learning project using PyTorch for medical image classification to detect COVID-19 from chest X-rays",
    techStack: ["Python", "PyTorch", "Computer Vision", "ML"],
    featured: true
  },
  {
    title: "MERN Stack Application",
    description: "Full-stack web application showcasing modern development practices with React frontend and Node.js backend",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
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
    description: "First place at MRECW Web Development Hackathon",
    type: "hackathon"
  },
  {
    title: "GenAI Hackathon Runner-up",
    description: "Second place with Savvy Slang Decoder project",
    type: "hackathon"
  },
  {
    title: "iLearn Community Founder",
    description: "Founded peer learning community encouraging collaborative education",
    type: "community"
  }
];

export const certifications: Certification[] = [
  {
    title: "Certificate of Participation in Software Engineer Internship",
    issuer: "Unstop"
  },
  {
    title: "Detecting COVID-19 with Chest X-Ray using PyTorch",
    issuer: "Coursera Project Network"
  },
  {
    title: "Python Programming Fundamentals",
    issuer: "Microsoft Learn"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Infosys Springboard"
  },
  {
    title: "Web Development Fundamentals",
    issuer: "freeCodeCamp"
  }
];

export const contactInfo: ContactInfo = {
  email: "shruti.keshri@example.com",
  linkedin: "https://www.linkedin.com/in/shrutikeshri/",
  github: "https://github.com/shrutikeshri"
};
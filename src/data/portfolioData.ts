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
    url: "https://unstop.com"
  },
  {
    title: "Detecting COVID-19 with Chest X-Ray using PyTorch",
    issuer: "Coursera Project Network",
    url: "https://coursera.org"
  },
  {
    title: "Python Programming Fundamentals",
    issuer: "Microsoft Learn",
    url: "https://learn.microsoft.com"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Infosys Springboard",
    url: "https://infyspringboard.onwingspan.com"
  },
  {
    title: "Web Development Fundamentals",
    issuer: "freeCodeCamp",
    url: "https://freecodecamp.org"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    url: "https://geeksforgeeks.org"
  },
  {
    title: "JavaScript ES6+ Fundamentals",
    issuer: "Codecademy",
    url: "https://codecademy.com"
  },
  {
    title: "React Development Bootcamp",
    issuer: "Udemy",
    url: "https://udemy.com"
  },
  {
    title: "SQL Database Management",
    issuer: "W3Schools",
    url: "https://w3schools.com"
  },
  {
    title: "Git Version Control",
    issuer: "GitHub Learning Lab",
    url: "https://github.com"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    url: "https://freecodecamp.org"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM Cognitive Class",
    url: "https://cognitiveclass.ai"
  },
  {
    title: "Machine Learning Basics",
    issuer: "Coursera",
    url: "https://coursera.org"
  },
  {
    title: "Agile Project Management",
    issuer: "Scrum Alliance",
    url: "https://scrumalliance.org"
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "AWS Educate",
    url: "https://aws.amazon.com/education"
  },
  {
    title: "UI/UX Design Principles",
    issuer: "Adobe Creative Cloud",
    url: "https://adobe.com"
  },
  {
    title: "Cybersecurity Awareness",
    issuer: "SANS Institute",
    url: "https://sans.org"
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "Google Digital Garage",
    url: "https://learndigital.withgoogle.com"
  },
  {
    title: "Blockchain Technology Basics",
    issuer: "IBM Blockchain",
    url: "https://ibm.com/blockchain"
  },
  {
    title: "API Development with Flask",
    issuer: "Real Python",
    url: "https://realpython.com"
  },
  {
    title: "Data Visualization with Python",
    issuer: "DataCamp",
    url: "https://datacamp.com"
  },
  {
    title: "Software Testing Fundamentals",
    issuer: "ISTQB",
    url: "https://istqb.org"
  },
  {
    title: "DevOps Essentials",
    issuer: "Docker",
    url: "https://docker.com"
  },
  {
    title: "Mobile App Development",
    issuer: "Flutter",
    url: "https://flutter.dev"
  },
  {
    title: "Database Design and Management",
    issuer: "MongoDB University",
    url: "https://university.mongodb.com"
  },
  {
    title: "Artificial Intelligence Ethics",
    issuer: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu"
  },
  {
    title: "Leadership in Technology",
    issuer: "LinkedIn Learning",
    url: "https://linkedin.com/learning"
  },
  {
    title: "Open Source Contribution",
    issuer: "GitHub",
    url: "https://github.com"
  },
  {
    title: "Technical Writing",
    issuer: "Google Technical Writing",
    url: "https://developers.google.com/tech-writing"
  },
  {
    title: "Community Building and Management",
    issuer: "Community Management Institute",
    url: "https://communitymanagementinstitute.com"
  }
];

export const contactInfo: ContactInfo = {
  email: "shrutikeshri2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/shrutikeshri/",
  github: "https://github.com/shrutikeshri"
};
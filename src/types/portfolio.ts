export interface Experience {
  title: string;
  organization: string;
  duration: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Tools & Frameworks' | 'Tech Stack';
  level?: number;
}

export interface Achievement {
  title: string;
  description: string;
  type: 'hackathon' | 'program' | 'community' | 'other';
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}
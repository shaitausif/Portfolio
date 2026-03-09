export interface TechStackItem {
  name: string;
  image: string;
}

export interface Skill {
  _id: string;
  name: string;
  level: number;
  logo: string;
  category?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: TechStackItem[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  order?: number;
}

export interface Experience {
  _id: string;
  jobTitle: string;
  company: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
  isCurrentRole: boolean;
}

export interface Education {
  _id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  grade?: string;
  description?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}

export interface Portfolio {
  name: string;
  role: string;
  bio: string;
  typewriterStrings: string[];
  email: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLinks;
  photo?: string;
  heroImage?: string;
  resume?: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

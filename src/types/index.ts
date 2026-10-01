export type ProjectCategory = 'all' | 'client' | 'personal';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'client' | 'personal';
  clientName?: string;
  companyName?: string;
  role?: string;
  period?: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  mockupType?: 'orbit' | 'atlas' | 'image';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  confidential?: boolean;
  metrics?: ProjectMetric[];
  highlights?: string[];
}

export interface ExperienceProject {
  name: string;
  client: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  projects?: ExperienceProject[];
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}



export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
}

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'certification';
}

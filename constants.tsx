
import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Figma, 
  Smartphone, 
  Cpu 
} from 'lucide-react';
import { NavItem, Stat, Project, TimelineItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { label: 'Learning Journey', value: '3rd Year', icon: 'Briefcase' },
  { label: 'Academic Projects', value: '10+', icon: 'CheckCircle' },
  { label: 'Skills Acquired', value: '15+', icon: 'Users' },
  { label: 'Commitment', value: '100%', icon: 'Coffee' },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  {
    title: 'Backend & Core',
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'C / C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
    ]
  },
  {
    title: 'Business Systems',
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Data Structures', level: 85 },
      { name: 'Software Engineering', level: 90 },
      { name: 'Management Science', level: 75 },
    ]
  },
  {
    title: 'Tools',
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 70 },
      { name: 'Command Line', level: 80 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website to showcase my skills and projects, built with modern web standards.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tech: ['HTML', 'CSS'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Login Page',
    description: 'A clean and functional user login form with integrated basic form validation using JavaScript.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    githubLink: '#'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    title: 'B.Tech - Computer Science and Engineering',
    company: 'SRI MANAKULA VINAYAGAR ENGINEERING COLLEGE',
    period: '2022 – 2026',
    description: 'Specializing in BUSINESS SYSTEM. Focused on software development, database management, and business logic integration.',
    type: 'education'
  }
];

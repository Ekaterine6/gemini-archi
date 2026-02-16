
import React from 'react';
import { Building2, Layout, Ruler, PenTool } from 'lucide-react';
import { Project, TeamMember, Service, Review } from './types';

export const PROJECTS: Project[] = [
  { id: 1, title: "Onyx Residence", category: "Luxury Residential", image: "/pictures/house.jpg", year: "2023" },
  { id: 2, title: "Monolith Towers", category: "Commercial Hub", image: "/pictures/bedroom.jpg", year: "2022" },
  { id: 3, title: "The Atrium", category: "Cultural Space", image: "/pictures/livingroom.jpg", year: "2024" },
  { id: 4, title: "Ethereal Villa", category: "Private Estate", image: "/pictures/tv.jpg", year: "2023" },
  { id: 5, title: "Urban Flux", category: "Mixed Use", image: "/pictures/window.jpg", year: "2024" },
];

export const SERVICES: Service[] = [
  { id: 1, title: "Architectural Design", description: "Visionary concepts translated into structurally sound masterpieces.", icon: "Building2" },
  { id: 2, title: "Interior Planning", description: "Bespoke environments tailored to human experience and aesthetic flow.", icon: "Layout" },
  { id: 3, title: "Project Management", description: "Precision execution from ground-breaking to final handover.", icon: "Ruler" },
  { id: 4, title: "Sustainability Consulting", description: "Integrating eco-conscious technologies for a lasting legacy.", icon: "PenTool" },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Ibragim Aliev", role: "Principal Architect", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Elena Sokolova", role: "Interior Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Mark Wilson", role: "Structural Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Jonathan Reed", position: "CEO, Nexa Corp", content: "Ibragim Stroy transformed our vision into a physical reality that exceeded our wildest expectations. Their attention to detail is unmatched.", rating: 5 },
  { id: 2, author: "Sarah Jenkins", position: "Private Collector", content: "The level of sophistication and professional handling of our estate project was world-class. A true partner in design.", rating: 5 },
];

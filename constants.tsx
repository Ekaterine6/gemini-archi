import React from 'react';
import { Project, TeamMember, Service, Review } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { ru: "Резиденция Оникс", en: "Onyx Residence" },
    category: { ru: "Элитное жильё", en: "Luxury Residential" },
    image: "/pictures/ibish2.png",
    year: "2023",
  },
  {
    id: 2,
    title: { ru: "Башни Монолит", en: "Monolith Towers" },
    category: { ru: "Коммерческий центр", en: "Commercial Hub" },
    image: "/pictures/better.jpg",
    year: "2022",
  },
  {
    id: 3,
    title: { ru: "Атриум", en: "The Atrium" },
    category: { ru: "Культурное пространство", en: "Cultural Space" },
    image: "/pictures/iron.jpeg",
    year: "2024",
  },
  {
    id: 4,
    title: { ru: "Эфирная Вилла", en: "Ethereal Villa" },
    category: { ru: "Частная усадьба", en: "Private Estate" },
    image: "/pictures/ibish1.jpeg",
    year: "2023",
  },
  {
    id: 5,
    title: { ru: "Городской Поток", en: "Urban Flux" },
    category: { ru: "Смешанное использование", en: "Mixed Use" },
    image: "/pictures/mud.jpeg",
    year: "2024",
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: { ru: "Архитектурное проектирование", en: "Architectural Design" },
    description: {
      ru: "Визионерские концепции, превращённые в структурно надёжные шедевры.",
      en: "Visionary concepts translated into structurally sound masterpieces."
    },
    icon: "Building2"
  },
  {
    id: 2,
    title: { ru: "Интерьерное планирование", en: "Interior Planning" },
    description: {
      ru: "Уникальные пространства, ориентированные на комфорт и эстетику.",
      en: "Bespoke environments tailored to human experience and aesthetic flow."
    },
    icon: "Layout"
  },
  {
    id: 3,
    title: { ru: "Управление проектом", en: "Project Management" },
    description: {
      ru: "Точное исполнение от начала строительства до финальной сдачи.",
      en: "Precision execution from ground-breaking to final handover."
    },
    icon: "Ruler"
  },
  {
    id: 4,
    title: { ru: "Консалтинг устойчивости", en: "Sustainability Consulting" },
    description: {
      ru: "Интеграция экологичных технологий для долговечного наследия.",
      en: "Integrating eco-conscious technologies for a lasting legacy."
    },
    icon: "PenTool"
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Ibragim Aliev",
    role: { ru: "Главный архитектор", en: "Principal Architect" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Elena Sokolova",
    role: { ru: "Директор интерьеров", en: "Interior Director" },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Mark Wilson",
    role: { ru: "Инженер-конструктор", en: "Structural Lead" },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Jonathan Reed",
    position: { ru: "CEO, Nexa Corp", en: "CEO, Nexa Corp" },
    content: {
      ru: "Ibragim Stroy превратили наше видение в реальность, превзошедшую ожидания.",
      en: "Ibragim Stroy transformed our vision into a physical reality that exceeded expectations."
    },
    rating: 5
  },
  {
    id: 2,
    author: "Sarah Jenkins",
    position: { ru: "Частный коллекционер", en: "Private Collector" },
    content: {
      ru: "Уровень профессионализма был мирового класса. Настоящие партнёры в дизайне.",
      en: "The level of sophistication and professional handling was world-class."
    },
    rating: 5
  },
];

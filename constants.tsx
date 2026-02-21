import React from 'react';
import { Project, TeamMember, Service, Review } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { ru: "Резиденция Оникс", en: "Residence" },
    category: { ru: "Элитное жильё", en: "Luxury Residential" },
    image: "/pictures/ibish2.png",
    year: "2023",
  },
  {
    id: 2,
    title: { ru: "Башни", en: "Building" },
    category: { ru: "Закладка фундамента", en: "Laying Foundation" },
    image: "/pictures/better.jpg",
    year: "2022",
  },
  {
    id: 3,
    title: { ru: "Атриум", en: "The Atrium" },
    category: { ru: "Укрепление", en: "Reinforcing" },
    image: "/pictures/iron.jpeg",
    year: "2024",
  },
  {
    id: 4,
    title: { ru: "Вилла", en: "Ethereal Villa" },
    category: { ru: "Частная усадьба", en: "Private Estate" },
    image: "/pictures/ibish1.jpeg",
    year: "2023",
  },
  {
    id: 5,
    title: { ru: "фундамента для пола", en: "Floor" },
    category: { ru: "Закладка фундамента", en: "Laying Foundation" },
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
    name: "Ibragim Malaxov",
    role: { 
      ru: "Основатель и руководитель строительства", 
      en: "Founder & Head of Construction" 
    },
    image: "/pictures/ibragim.jpg"
  }
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

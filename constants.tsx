import React from 'react';
import { Project, TeamMember, Service, Review } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { ru: "Резиденция", en: "Residence" },
    category: { ru: "Премиальная жилая архитектура", en: "Luxury Residential" },
    image: "/pictures/ibish2.png",
    year: "2023",
  },
  {
    id: 2,
    title: { ru: "Здание", en: "Building" },
    category: { ru: "Устройство фундамента", en: "Laying Foundation" },
    image: "/pictures/better.jpg",
    year: "2022",
  },
  {
    id: 3,
    title: { ru: "Здание", en: "Building" },
    category: { ru: "Армирование конструкций", en: "Reinforcing" },
    image: "/pictures/iron.jpeg",
    year: "2024",
  },
  {
    id: 4,
    title: { ru: "Вилла", en: "Ethereal Villa" },
    category: { ru: "Частная резиденция", en: "Private Estate" },
    image: "/pictures/ibish1.jpeg",
    year: "2023",
  },
  {
    id: 5,
    title: { ru: "Фундамент", en: "Floor" },
    category: { ru: "Подготовка основания", en: "Laying Foundation" },
    image: "/pictures/mud.jpeg",
    year: "2024",
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: {
      ru: "Архитектурное проектирование",
      en: "Architectural Design"
    },
    description: {
      ru: "Разрабатываем выразительные архитектурные концепции и воплощаем их в надёжных, функциональных сооружениях.",
      en: "Visionary concepts translated into structurally sound masterpieces."
    },
    icon: "Building2"
  },
  {
    id: 2,
    title: {
      ru: "Дизайн и планирование интерьеров",
      en: "Interior Planning"
    },
    description: {
      ru: "Создаём продуманные интерьерные решения, в которых функциональность, комфорт и эстетика образуют единое целое.",
      en: "Bespoke environments tailored to human experience and aesthetic flow."
    },
    icon: "Layout"
  },
  {
    id: 3,
    title: {
      ru: "Управление строительными проектами",
      en: "Project Management"
    },
    description: {
      ru: "Координируем все этапы строительства, от подготовки и организации работ до контроля качества и сдачи объекта.",
      en: "Precision execution from ground-breaking to final handover."
    },
    icon: "Ruler"
  },
  {
    id: 4,
    title: {
      ru: "Консультирование по устойчивому строительству",
      en: "Sustainability Consulting"
    },
    description: {
      ru: "Помогаем внедрять экологичные и энергоэффективные решения, рассчитанные на долговечность и ответственное использование ресурсов.",
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
      ru: "Основатель и руководитель строительных проектов",
      en: "Founder & Head of Construction"
    },
    image: "/pictures/ibragim.jpg"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Ibragim",
    position: { ru: "Генеральный директор", en: "CEO" },
    content: {
      ru: "Как генеральный директор, я лично отвечаю за то, чтобы каждый проект Ibragim Stroy реализовывался с точностью, добросовестностью и вниманием к деталям. Наша задача заключается в том, чтобы воплощать ваши идеи в надёжные и долговечные решения.",
      en: "As CEO, I personally guarantee that every Ibragim Stroy project is built with precision, integrity, and attention to detail. Our mission is to turn your vision into a durable and reliable reality."
    },
    rating: 5
  },
  {
    id: 2,
    author: "Ibragim",
    position: { ru: "Генеральный директор", en: "CEO" },
    content: {
      ru: "Мы несём полную ответственность за качество своей работы. Для наших клиентов важны прозрачность процессов, соблюдение согласованных сроков и строительство, рассчитанное на долгие годы.",
      en: "We take full responsibility for the quality of our work. I promise our clients a transparent process, dependable timelines, and construction that stands strong for years to come."
    },
    rating: 5
  },
];
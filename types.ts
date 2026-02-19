export interface Project {
  id: number;
  title: {
    ru: string;
    en: string;
  };
  category: {
    ru: string;
    en: string;
  };
  image: string;
  year: string;
}

export interface Service {
  id: number;
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: {
    ru: string;
    en: string;
  };
  image: string;
}

export interface Review {
  id: number;
  author: string;
  position: {
    ru: string;
    en: string;
  };
  content: {
    ru: string;
    en: string;
  };
  rating: number;
}

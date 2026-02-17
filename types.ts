
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


export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: number;
  author: string;
  position: string;
  content: string;
  rating: number;
}

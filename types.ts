export interface LocalizedText {
  ru: string;
  en: string;
}

export interface Service {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: LocalizedText;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  position: LocalizedText;
  content: LocalizedText;
  rating: number;
}


export interface AssessmentLink {
  label: string;
  url: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  topics: Topic[];
  scoreMax?: {
    title: string;
    description: string;
    links: AssessmentLink[];
  };
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

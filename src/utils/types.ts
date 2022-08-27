export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  date: string;
  url: string;
  rol: string;
  tags?: string[];
  seniority?: string;
}
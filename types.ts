export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface Comment {
  id: number;
  text: string;
  author: string;
  mail: string;
}

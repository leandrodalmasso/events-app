import { ObjectId } from "mongodb";

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
  _id: ObjectId;
  comment: string;
  author: string;
  email: string;
  eventId: string;
}

export interface ResData {
  message?: string;
  comments?: Comment[];
}

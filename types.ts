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

export interface NotificationData {
  color: "green" | "red" | "blue";
  message: string;
}

export interface NotificationContextType {
  notification: NotificationData | null;
  showNotification: (notificationData: NotificationData) => void;
  hideNotification: () => void;
}

export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export interface Conversation {
  id: string;
  messages: Message[];
  createdAt: Date;
  title: string;
}

export interface IdeaItem {
  id?: number; 
  title: string;
  description: string;
  createdAt?: Date; 
  updatedAt?: Date;
  UserUserName?: string; 
  TotalVotes?: number;
  PositiveVotes?: number;
  NegativeVotes?: number;
  Comments?: CommentItem[];
}

export interface CommentItem {
  id?: number;
  text: string;
  createdAt?: Date;
  updatedAt?: Date;
  IdeaId?: number;
  UserUserName?: string;
}
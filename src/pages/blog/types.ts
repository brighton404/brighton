// src/types.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
  categories: number[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface NewComment {
  author: string;
  content: string;
  date: string;
}

export interface Category {
  id: number;
  name: string;
}
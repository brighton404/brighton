// services/storage.ts
import { samplePosts, categories } from '@/pages/blog/data';
import { BlogPost, Comment, Category } from '../pages/blog/types';

const STORAGE_KEYS = {
  POSTS: 'blog_posts',
  CATEGORIES: 'blog_categories'
};

export class BlogStorageService {
  private static instance: BlogStorageService;

  private constructor() {
    // Initialize storage with sample data if empty
    if (!this.getPosts().length) {
      this.setPosts(samplePosts);
    }
    if (!this.getCategories().length) {
      this.setCategories(categories);
    }
  }

  static getInstance(): BlogStorageService {
    if (!BlogStorageService.instance) {
      BlogStorageService.instance = new BlogStorageService();
    }
    return BlogStorageService.instance;
  }

  getPosts(): BlogPost[] {
    const posts = localStorage.getItem(STORAGE_KEYS.POSTS);
    return posts ? JSON.parse(posts) : [];
  }

  private setPosts(posts: BlogPost[]): void {
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
  }

  getCategories(): Category[] {
    const categories = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return categories ? JSON.parse(categories) : [];
  }

  private setCategories(categories: Category[]): void {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  }

  createPost(post: Omit<BlogPost, 'id' | 'comments'>): BlogPost {
    const posts = this.getPosts();
    const newPost: BlogPost = {
      ...post,
      id: Date.now(), // Use timestamp as ID
      comments: []
    };
    this.setPosts([newPost, ...posts]);
    return newPost;
  }

  updatePost(updatedPost: BlogPost): BlogPost {
    const posts = this.getPosts();
    const updatedPosts = posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    this.setPosts(updatedPosts);
    return updatedPost;
  }

  deletePost(postId: number): void {
    const posts = this.getPosts();
    this.setPosts(posts.filter(post => post.id !== postId));
  }

  addComment(postId: number, comment: Omit<Comment, 'id'>): Comment {
    const posts = this.getPosts();
    const post = posts.find(p => p.id === postId);
    
    if (!post) throw new Error('Post not found');

    const newComment: Comment = {
      ...comment,
      id: Date.now(),
      postId
    };

    post.comments.push(newComment);
    this.setPosts(posts);
    return newComment;
  }
}

export const blogStorage = BlogStorageService.getInstance();
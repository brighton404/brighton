// services/api.ts
import { BlogPost, Comment, NewComment } from '../pages/blog/types';
import { samplePosts } from '../pages/blog/data';

export const api = {
  async getPosts(): Promise<BlogPost[]> {
    // First try to fetch from API
    try {
      const response = await fetch('YOUR_API_ENDPOINT/posts');
      if (response.ok) {
        const posts = await response.json();
        localStorage.setItem('blog_posts', JSON.stringify(posts));
        return posts;
      }
    } catch (error) {
      console.log('Failed to fetch from API, falling back to localStorage');
    }

    // Fallback to localStorage
    const savedPosts = localStorage.getItem('blog_posts');
    return savedPosts ? JSON.parse(savedPosts) : samplePosts;
  },

  async savePost(post: Omit<BlogPost, 'id' | 'comments'>): Promise<BlogPost> {
    // Try to save to API
    try {
      const response = await fetch('YOUR_API_ENDPOINT/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        const savedPost = await response.json();
        this._updateLocalStorage(savedPost);
        return savedPost;
      }
    } catch (error) {
      console.log('Failed to save to API, saving to localStorage only');
    }

    // Fallback to localStorage
    const savedPosts = localStorage.getItem('blog_posts');
    const posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : samplePosts;
    const newPost: BlogPost = {
      ...post,
      id: Math.max(...posts.map(p => p.id), 0) + 1,
      comments: [],
    };
    posts.unshift(newPost);
    localStorage.setItem('blog_posts', JSON.stringify(posts));
    return newPost;
  },

  async updatePost(post: BlogPost): Promise<BlogPost> {
    // Try to update in API
    try {
      const response = await fetch(`YOUR_API_ENDPOINT/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        const updatedPost = await response.json();
        this._updateLocalStorage(updatedPost);
        return updatedPost;
      }
    } catch (error) {
      console.log('Failed to update in API, updating localStorage only');
    }

    // Fallback to localStorage
    const savedPosts = localStorage.getItem('blog_posts');
    const posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : [];
    const updatedPosts = posts.map(p => p.id === post.id ? post : p);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
    return post;
  },

  async addComment(postId: number, comment: NewComment): Promise<Comment> {
    // Try to save comment to API
    try {
      const response = await fetch(`YOUR_API_ENDPOINT/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        const savedComment = await response.json();
        this._updateLocalStorageComment(postId, savedComment);
        return savedComment;
      }
    } catch (error) {
      console.log('Failed to save comment to API, saving to localStorage only');
    }

    // Fallback to localStorage
    const savedPosts = localStorage.getItem('blog_posts');
    const posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : [];
    const post = posts.find(p => p.id === postId);
    if (!post) throw new Error('Post not found');

    const newComment: Comment = {
      ...comment,
      id: post.comments.length ? Math.max(...post.comments.map(c => c.id)) + 1 : 1,
      postId
    };

    post.comments.push(newComment);
    localStorage.setItem('blog_posts', JSON.stringify(posts));
    return newComment;
  },

  // Internal methods (prefixed with underscore to indicate they're "private")
  _updateLocalStorage(post: BlogPost): void {
    const savedPosts = localStorage.getItem('blog_posts');
    const posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : [];
    const updatedPosts = posts.map(p => p.id === post.id ? post : p);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
  },

  _updateLocalStorageComment(postId: number, comment: Comment): void {
    const savedPosts = localStorage.getItem('blog_posts');
    const posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : [];
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.comments.push(comment);
      localStorage.setItem('blog_posts', JSON.stringify(posts));
    }
  }
};

// If you prefer using a class instead, here's an alternative implementation:
/*
export class BlogApi {
  private static instance: BlogApi;

  private constructor() {}

  static getInstance(): BlogApi {
    if (!BlogApi.instance) {
      BlogApi.instance = new BlogApi();
    }
    return BlogApi.instance;
  }

  async getPosts(): Promise<BlogPost[]> {
    // ... same implementation as above
  }

  // ... other methods

  private updateLocalStorage(post: BlogPost): void {
    // ... same implementation as above
  }

  private updateLocalStorageComment(postId: number, comment: Comment): void {
    // ... same implementation as above
  }
}

export const api = BlogApi.getInstance();
*/
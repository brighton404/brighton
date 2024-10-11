// hooks/usePosts.ts
import { useState, useEffect } from 'react';
import { BlogPost, NewComment, Comment } from '@/pages/blog/types';
import { BlogFileHandler } from '@/utils/BlogFileHandler';

export const usePosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const blogHandler = new BlogFileHandler();

  const loadPosts = async () => {
    try {
      setLoading(true);
      const loadedPosts = await blogHandler.getAllPosts();
      setPosts(loadedPosts);
      setError(null);
    } catch (err) {
      setError('Failed to load posts');
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const createPost = async (newPost: Omit<BlogPost, 'comments'>) => {
    try {
      await blogHandler.saveBlogPost({
        ...newPost,
        comments: []
      });
      await loadPosts();
    } catch (err) {
      console.error('Error creating post:', err);
      throw err;
    }
  };

  const updatePost = async (updatedPost: BlogPost) => {
    try {
      await blogHandler.saveBlogPost(updatedPost);
      await loadPosts();
    } catch (err) {
      console.error('Error updating post:', err);
      throw err;
    }
  };

  const generateCommentId = () => {
    return `comment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const addComment = async (postTitle: string, newComment: NewComment) => {
    try {
      const post = posts.find(p => p.title === postTitle);
      if (!post) throw new Error('Post not found');

      const comment: Comment = {
        ...newComment,
        id: generateCommentId()
      };

      const updatedPost: BlogPost = {
        ...post,
        comments: [...(post.comments || []), comment]
      };

      await blogHandler.saveBlogPost(updatedPost);
      await loadPosts();
    } catch (err) {
      console.error('Error adding comment:', err);
      throw err;
    }
  };

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    addComment,
    reloadPosts: loadPosts
  };
};
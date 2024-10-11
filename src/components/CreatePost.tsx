  // components/CreatePost.tsx
  import { Category, BlogPost } from '@/pages/blog/types';
import React, { useState } from 'react';
  
  interface CreatePostProps {
    categories: Category[];
    onCreate: (post: Omit<BlogPost, 'id' | 'comments'>) => void;
  }
  
  export const CreatePost: React.FC<CreatePostProps> = ({ categories, onCreate }) => {
    const [post, setPost] = useState({
      title: '',
      content: '',
      categories: [] as number[],
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onCreate({
        ...post,
        author: 'Current User', // In a real app, get from auth
        date: new Date().toISOString().split('T')[0],
      });
      setPost({ title: '', content: '', categories: [] });
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
        <input
          className="w-full text-xl p-2 border rounded mb-4"
          placeholder="Post Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="w-full h-40 p-2 border rounded mb-4"
          placeholder="Post Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <div className="flex gap-2 mb-4">
          {categories.map(category => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={post.categories.includes(category.id)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...post.categories, category.id]
                    : post.categories.filter(id => id !== category.id);
                  setPost({ ...post, categories: newCategories });
                }}
              />
              <span className="ml-2">{category.name}</span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Create Post
        </button>
      </form>
    );
  };
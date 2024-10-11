// components/CommentSection.tsx
import React, { useState } from 'react';
import { Comment, NewComment } from '../pages/blog/types';

interface CommentSectionProps {
  comments: Comment[];
  postId: number;
  onAddComment: (postId: number, comment: NewComment) => Promise<void>;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments, postId, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !author.trim()) return;

    try {
      await onAddComment(postId, {
        author: author.trim(),
        content: newComment.trim(),
        date: new Date().toISOString().split('T')[0]
      });
      
      // Clear form after successful submission
      setNewComment('');
      setAuthor('');
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="border-b py-4">
          <div className="flex justify-between">
            <span className="font-medium">{comment.author}</span>
            <span className="text-gray-500">{comment.date}</span>
          </div>
          <p className="mt-2">{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={!newComment.trim() || !author.trim()}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};
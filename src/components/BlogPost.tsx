import React, { useState } from 'react';
import { BlogPost, Category, NewComment } from '@/pages/blog/types';
import { formatDate } from '@/utils/formatDate';

interface BlogPostProps {
  post: BlogPost;
  categories: Category[];
  onEdit: (post: BlogPost) => void;
  onAddComment: (postTitle: string, comment: NewComment) => Promise<void>;
}

export const BlogPostComponent: React.FC<BlogPostProps> = ({
  post,
  categories,
  onEdit,
  onAddComment,
}) => {
  const [commentContent, setCommentContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    setIsSubmitting(true);
    try {
      const newComment: NewComment = {
        content: commentContent.trim(),
        author: 'Current User', // In a real app, get from auth
        date: new Date().toISOString(),
      };

      await onAddComment(post.title, newComment);
      setCommentContent('');
    } catch (error) {
      console.error('Failed to add comment:', error);
      alert('Failed to add comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-sm p-6">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <div className="text-gray-600 mt-2">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <div className="flex gap-2 mt-2">
          {categories.map(category => (
            <span
              key={category.id}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {category.name}
            </span>
          ))}
        </div>
      </header>

      <div className="prose max-w-none mb-6">
        {post.content}
      </div>

      <footer>
        <button
          onClick={() => onEdit(post)}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit post
        </button>

        <div className="mt-4">
        <h3 className="font-bold mb-2">Comments</h3>
        {post.comments && post.comments.length > 0 ? (
          <div className="space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  {comment.author} • {formatDate(comment.date)}
                </div>
                <div className="mt-1">{comment.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No comments yet</p>
        )}

        <form onSubmit={handleAddComment} className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Add a comment..."
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            rows={3}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Comment'}
          </button>
        </form>
      </div>
      </footer>
    </article>
  );
};
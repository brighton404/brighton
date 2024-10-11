// components/BlogList.tsx
import { Link } from 'react-router-dom';
import { BlogPost, Category, NewComment } from '@/pages/blog/types';

interface BlogListProps {
  posts: BlogPost[];
  categories?: Category[]; // Make categories optional since BlogListPage doesn't use them
  onEditPost?: (post: BlogPost) => void;
  onAddComment?: (postTitle: string, comment: NewComment) => void;
}

export function BlogList({ posts, categories = [] }: BlogListProps) {
  if (!posts.length) return <div>No posts found</div>;

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Link 
          key={post.id}
          to={`/blog/${post.id}`}
          className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <article>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <div className="text-sm text-gray-600 mb-2">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            {categories.length > 0 && (
              <div className="flex gap-2">
                {post.categories.map(catId => {
                  const category = categories.find(c => c.id === catId);
                  return category ? (
                    <span 
                      key={category.id}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {category.name}
                    </span>
                  ) : null;
                })}
              </div>
            )}
          </article>
        </Link>
      ))}
    </div>
  );
}


{/*
import React, { useEffect, useState } from 'react';
import { BlogPostComponent } from './BlogPost';
import { BlogPost, Category, NewComment } from '@/pages/blog/types';
import { BlogFileHandler } from '@/utils/BlogFileHandler';

interface BlogListProps {
  categories: Category[];
  onEditPost: (post: BlogPost) => void;
  onAddComment: (postId: string, comment: NewComment) => Promise<void>;
}

export const BlogList: React.FC<BlogListProps> = ({ categories, onEditPost, onAddComment }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const blogHandler = new BlogFileHandler();
        const loadedPosts = await blogHandler.getAllPosts();
        setPosts(loadedPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error loading posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleRetry = () => {
    setError(null);
    setPosts([]);
    const blogHandler = new BlogFileHandler();
    blogHandler.getAllPosts().then(setPosts).catch(err => {
      setError('Failed to load blog posts');
      console.error('Error loading posts:', err);
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
        <button
          onClick={handleRetry}
          className="ml-4 text-blue-500 hover:text-blue-700 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No posts found. Try adjusting your search or create a new post.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <BlogPostComponent 
          key={post.title}
          post={post} 
          categories={categories}
          onEdit={onEditPost}
          onAddComment={onAddComment}
        />
      ))}
    </div>
  );
};
*/}
// src/pages/BlogListPage.tsx
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from '@/utils/blogUtils';
import { BlogList } from '@/components/BlogList';

export function BlogListPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts
  });

  if (isLoading) return <div>Loading...</div>;
  if (!posts) return <div>No posts found</div>;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
}
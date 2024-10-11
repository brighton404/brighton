// src/pages/BlogPage.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from '@/utils/blogUtils';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/header';

export function BlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => getPostById(id!),
    enabled: !!id
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Post not found</h2>
          <Link 
            to="/blog" 
            className="text-blue-500 hover:underline"
          >
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto py-8 px-4">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-500 hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog List
        </Link>
        <article className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-8">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
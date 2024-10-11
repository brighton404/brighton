// src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
      gcTime: 1000 * 60 * 30,   // Cache data for 30 minutes (formerly cacheTime)
      retry: 1,                  // Number of retries on failed queries
    },
  },
});

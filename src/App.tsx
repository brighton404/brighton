import Homepage from "@/pages/home/Home";
import  Blog from "@/pages/blog/blog";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/queryClient';
import { BlogPage } from "./pages/blog/blogPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} /> {/* Add this for development */}
    </QueryClientProvider>
  );
}

export default App;
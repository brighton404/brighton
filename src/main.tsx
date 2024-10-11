import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App.tsx'
import './index.css'
import './App.css'
import { CardProvider } from '@/pages/home/cardContext';

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);

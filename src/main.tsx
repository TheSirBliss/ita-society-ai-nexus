import App from './App.tsx'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; 
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


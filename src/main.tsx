import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './common/providers/AppProvider';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);

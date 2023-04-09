import React from 'react';
import ReactDOM from 'react-dom/client';
import RootRouter from './common/routers/RootRouter';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './/app/providers/ThemeProvider';
import './app/styles/index.scss';
import './shared/config/i18next/i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

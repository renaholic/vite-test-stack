import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';

const AboutPage = () => {
  return <>about</>;
};

console.log(typeof import.meta.env.VITE_SOME_KEY);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/" element={<Outlet />}></Route>
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

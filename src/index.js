import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  </>
);

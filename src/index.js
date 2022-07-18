import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './routes/List/List';
import Details from './routes/Details/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List/>} />
      <Route path=":id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);
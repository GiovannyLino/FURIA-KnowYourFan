import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Perfil from './pages/Perfil'; // (criaremos esse arquivo)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Order from './pages/Order.jsx';
import Reservation from './Reservation.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Kreuzberg from './pages/Kreuzberg.jsx';
import Friedrichstrasse from './pages/Friedrichstrasse.jsx';
import Lichtenberg from './pages/Lichtenberg.jsx';
import AboutPage from './pages/AboutPage.jsx'; 
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/kreuzberg" element={<Kreuzberg />} />
        <Route path="/friedrichstrasse" element={<Friedrichstrasse />} />
        <Route path="/lichtenberg" element={<Lichtenberg />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

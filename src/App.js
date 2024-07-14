// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import Blogs from './components/Blogs';
import Appointment from './components/Appointment';
import ConfirmationPage from './components/ConfirmationPage';
import Footer from './components/Footer';
import FAQs from './components/FAQs';
import FamilyRecords from './components/FamilyRecords';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<Blogs />} />
          
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/family-records" element={<FamilyRecords />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;

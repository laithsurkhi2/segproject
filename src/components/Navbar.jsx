import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaVolumeUp } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const synth = window.speechSynthesis;
  const location = useLocation();

  const handleSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const toggleSpeech = () => {
    if (location.pathname === '/') {
      handleSpeech("Welcome to HealthTime, click on the button in the home page to book an appointment.");
    } else if (location.pathname === '/services') {
      handleSpeech("Our services vary from health check, dental care, and mental health services.");
    }
  };

  return (
    <nav className="bg-backgroundColor p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-black text-2xl font-bold">Health</Link>
        <Link to="/" className="text-orange-500 text-2xl font-bold">Time</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="bg-orange-500 text-black py-2 px-4 rounded">
          {language === 'en' ? 'Home' : 'Accueil'}
        </Link>
        <Link to="/services" className="bg-orange-500 text-black py-2 px-4 rounded">
          {language === 'en' ? 'Services' : 'Services'}
        </Link>
        <Link to="/team" className="bg-orange-500 text-black py-2 px-4 rounded">
          {language === 'en' ? 'Team' : 'Équipe'}
        </Link>
        <Link to="/blogs" className="bg-orange-500 text-black py-2 px-4 rounded">
          {language === 'en' ? 'Blog' : 'Blog'}
        </Link>
        <Link to="/faqs" className="bg-orange-500 text-black py-2 px-4 rounded">
          {language === 'en' ? 'FAQs' : 'FAQs'}
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <button 
          onClick={() => toggleLanguage('en')} 
          className={`py-2 px-4 rounded transition duration-300 ease-in-out ${language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
        >
          EN
        </button>
        <button 
          onClick={() => toggleLanguage('fr')} 
          className={`py-2 px-4 rounded transition duration-300 ease-in-out ${language === 'fr' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
        >
          FR
        </button>
        <button
          onClick={toggleSpeech}
          className="bg-transparent text-orange-500 hover:text-orange-600 focus:outline-none"
        >
          <FaVolumeUp size={24} />
        </button>
      
      </div>
    </nav>
  );
};

export default Navbar;

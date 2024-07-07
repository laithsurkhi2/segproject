import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutus from '../assets/img/aboutus.webp';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    text: 'HealthHub provided excellent care and I felt truly supported throughout my treatment. The team was professional and compassionate.',
    location: 'Ottawa, ON',
  },
  {
    name: 'Jane Smith',
    text: 'I had a great experience at HealthHub. The staff is friendly and the facilities are top-notch. Highly recommended!',
    location: 'Ottawa, ON',
  },
  {
    name: 'Michael Johnson',
    text: 'The doctors at HealthHub are knowledgeable and attentive. I felt heard and well taken care of. Thank you for the great service!',
    location: 'Ottawa, ON',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleSeeServicesClick = () => {
    navigate('/services');
  };

  const handleTeamClick = () => {
    navigate('/team');
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Make the right choice for your health!
          </h1>
          <p>
            Contact HealthHub now to get the best medical assistance out there!
          </p>
          <button
            onClick={handleSeeServicesClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out"
          >
            Explore Our Services
          </button>
        </div>
      </div>

      <br />
      <div className="bg-white mt-10 p-10 rounded-md shadow-md flex flex-col lg:flex-row items-center">
        <img src={aboutus} alt="About Us" className="w-full lg:w-1/2 rounded-md lg:mr-8 mb-8 lg:mb-0"/>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4 text-black">About <span className="text-orange-500">Us</span></h2>
          <p className="mb-4">
            At HealthHub, we are dedicated to providing the best healthcare services to our community. Our team of experienced professionals is here to ensure you receive the highest quality care.
          </p>
          <p className="mb-4">
            Our mission is to promote health and wellness through comprehensive medical services, patient education, and compassionate care. We are here to support you on your journey to better health.
          </p>
          <p className="mb-4">
            Located in Ottawa, ON, K1N 7R2, HealthHub is at the heart of the community. Our modern facility is equipped with the latest technology to provide top-notch medical services.
          </p>
          <button
            onClick={handleTeamClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out"
          >
            Meet Our Team
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Home;

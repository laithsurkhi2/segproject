import React, { useState } from 'react';
import doctor1Img from '../assets/img/doctor1.jpeg';
import doctor2Img from '../assets/img/doctor2.jpeg';
import doctor3Img from '../assets/img/doctor3.jpeg';
import doctor4Img from '../assets/img/doctor4.webp';
import doctor5Img from '../assets/img/doctor5.webp';
import doctor6Img from '../assets/img/doctor6.jpeg';

const doctors = [
  {
    name: 'Dr. Michael Brown',
    specialty: 'Health Check',
    image: doctor1Img,
  },
  {
    name: 'Dr. Laura Smith',
    specialty: 'Health Check',
    image: doctor2Img,
  },
  {
    name: 'Dr. David Johnson',
    specialty: 'Dental Care',
    image: doctor3Img,
  },
  {
    name: 'Dr. John Smith',
    specialty: 'Dental Care',
    image: doctor4Img,
  },
  {
    name: 'Dr. Emily White',
    specialty: 'Mental Health',
    image: doctor5Img,
  },
  {
    name: 'Dr. Rick Jake',
    specialty: 'Mental Health',
    image: doctor6Img,
  },
];

const TeamMember = ({ name, specialty, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend, show confirmation)
    // For demonstration, we'll just show a confirmation message
    setMessageSent(true);
    // Clear form fields
    setNameValue('');
    setPhoneValue('');
    setMessageValue('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{specialty}</p>
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Contact
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
            <input
              type="tel"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
            <textarea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Send
            </button>
            {messageSent && (
              <p className="text-green-600 font-bold">Message Sent! &#10003;</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-lightBlue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <TeamMember key={index} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

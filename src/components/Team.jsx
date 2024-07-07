// src/components/Team.jsx
import React from 'react';
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

const Team = () => {
  return (
    <div className="bg-lightBlue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-gray-700">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

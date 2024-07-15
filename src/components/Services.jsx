import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaTeeth, FaSearch } from "react-icons/fa";

const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navigate = useNavigate();

  const handleSeeServicesClick = () => {
    navigate('/services');
  };

  
  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setSelectedFilter(prevState =>
      checked ? [...prevState, value] : prevState.filter(filter => filter !== value)
    );
  };

  const handleSearchClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const services = [
    { id: 1, category: "healthcheck", icon: <FaHeartbeat size={35} className="text-backgroundColor" />, title: "Annual Physical Examination", description: "Regular check-up to monitor health and detect early signs of illness.", tooltip: "Health Check" },
    { id: 2, category: "healthcheck", icon: <FaHeartbeat size={35} className="text-backgroundColor" />, title: "Cardiovascular Screening", description: "Screening tests to assess heart health and detect cardiovascular issues.", tooltip: "Health Check" },
    { id: 3, category: "dentalcare", icon: <FaTeeth size={35} className="text-backgroundColor" />, title: "Routine Dental Check-ups", description: "Regular dental check-ups and cleaning to maintain oral health.", tooltip: "Dental Care" },
    { id: 4, category: "dentalcare", icon: <FaTeeth size={35} className="text-backgroundColor" />, title: "Cosmetic Dentistry", description: "Cosmetic dental procedures to enhance smile aesthetics.", tooltip: "Dental Care" },
    { id: 5, category: "mentalhealth", icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />, title: "Counseling and Therapy", description: "Therapeutic sessions to address emotional and psychological issues.", tooltip: "Mental Health" },
    { id: 6, category: "mentalhealth", icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />, title: "Psychiatric Consultation", description: "Consultation with a psychiatrist for diagnosis and treatment of mental health disorders.", tooltip: "Mental Health" }
  ];

  const filteredServices = selectedFilter.length === 0 
    ? services 
    : services.filter(service => selectedFilter.includes(service.category));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 relative">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Check out our range of services which varies from health, dentistry, and mental health services!
          </p>
        </div>
       
        <div className="mt-4 lg:mt-0 flex items-center">
          <button
            onClick={handleSeeServicesClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out mr-2"
          >
            Services
          </button>
          <FaSearch size={24} className="cursor-pointer ml-2" onClick={handleSearchClick} />
        </div>
      </div>

      {isSidebarOpen && (
        <div ref={sidebarRef} className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 z-50">
          <h2 className="text-2xl font-bold mb-4">Filter Services</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="healthcheck"
                checked={selectedFilter.includes("healthcheck")}
                onChange={handleFilterChange}
                className="form-checkbox"
              />
              <span>Health Check</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="dentalcare"
                checked={selectedFilter.includes("dentalcare")}
                onChange={handleFilterChange}
                className="form-checkbox"
              />
              <span>Dental Care</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="mentalhealth"
                checked={selectedFilter.includes("mentalhealth")}
                onChange={handleFilterChange}
                className="form-checkbox"
              />
              <span>Mental Health</span>
            </label>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-14">
        {filteredServices.map(service => (
          <ServicesCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tooltip={service.tooltip}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

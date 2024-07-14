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
    { id: 1, category: "healthcheck", icon: <FaHeartbeat size={35} className="text-backgroundColor" />, title: "Annual Physical Examination" },
    { id: 2, category: "healthcheck", icon: <FaHeartbeat size={35} className="text-backgroundColor" />, title: "Cardiovascular Screening" },
    { id: 3, category: "dentalcare", icon: <FaTeeth size={35} className="text-backgroundColor" />, title: "Routine Dental Check-ups" },
    { id: 4, category: "dentalcare", icon: <FaTeeth size={35} className="text-backgroundColor" />, title: "Cosmetic Dentistry" },
    { id: 5, category: "mentalhealth", icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />, title: "Counseling and Therapy" },
    { id: 6, category: "mentalhealth", icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />, title: "Psychiatric Consultation" }
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
       
        <div className="mt-4 lg:mt-0 flex items-center">
          <button
            onClick={handleSeeServicesClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out mr-2" // Added mr-2 for right margin
          >
            Services
          </button>
          <FaSearch size={24} className="cursor-pointer ml-2" onClick={handleSearchClick} /> {/* Added ml-2 for left margin */}
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
          <ServicesCard key={service.id} icon={service.icon} title={service.title} />
        ))}
      </div>
      
    </div>

    
  );
};

export default Services;

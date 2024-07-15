import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaTeeth, FaSearch } from "react-icons/fa";
import { LanguageContext } from "../contexts/LanguageContext";

const Services = () => {
  const { language } = useContext(LanguageContext);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const handleSeeServicesClick = () => {
    navigate("/services");
  };

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setSelectedFilter((prevState) =>
      checked
        ? [...prevState, value]
        : prevState.filter((filter) => filter !== value)
    );
  };

  const handleSearchClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const services = [
    {
      id: 1,
      category: "healthcheck",
      icon: <FaHeartbeat size={35} className="text-backgroundColor" />,
      title: language === "en" ? "Annual Physical Examination" : "Examen physique annuel",
      description: language === "en"
        ? "Regular check-up to monitor health and detect early signs of illness."
        : "Examen régulier pour surveiller la santé et détecter les premiers signes de maladie.",
      tooltip: language === "en" ? "Health Check" : "Vérification de santé",
    },
    {
      id: 2,
      category: "healthcheck",
      icon: <FaHeartbeat size={35} className="text-backgroundColor" />,
      title: language === "en" ? "Cardiovascular Screening" : "Dépistage cardiovasculaire",
      description: language === "en"
        ? "Screening tests to assess heart health and detect cardiovascular issues."
        : "Tests de dépistage pour évaluer la santé cardiaque et détecter les problèmes cardiovasculaires.",
      tooltip: language === "en" ? "Health Check" : "Vérification de santé",
    },
    {
      id: 3,
      category: "dentalcare",
      icon: <FaTeeth size={35} className="text-backgroundColor" />,
      title: language === "en" ? "Routine Dental Check-ups" : "Examens dentaires de routine",
      description: language === "en"
        ? "Regular dental check-ups and cleaning to maintain oral health."
        : "Examens dentaires réguliers et nettoyages pour maintenir la santé buccale.",
      tooltip: language === "en" ? "Dental Care" : "Soins dentaires",
    },
    {
      id: 4,
      category: "dentalcare",
      icon: <FaTeeth size={35} className="text-backgroundColor" />,
      title: language === "en" ? "Cosmetic Dentistry" : "Dentisterie esthétique",
      description: language === "en"
        ? "Cosmetic dental procedures to enhance smile aesthetics."
        : "Procédures dentaires cosmétiques pour améliorer l'esthétique du sourire.",
      tooltip: language === "en" ? "Dental Care" : "Soins dentaires",
    },
    {
      id: 5,
      category: "mentalhealth",
      icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />,
      title: language === "en" ? "Counseling and Therapy" : "Conseils et thérapie",
      description: language === "en"
        ? "Therapeutic sessions to address emotional and psychological issues."
        : "Séances thérapeutiques pour traiter les problèmes émotionnels et psychologiques.",
      tooltip: language === "en" ? "Mental Health" : "Santé mentale",
    },
    {
      id: 6,
      category: "mentalhealth",
      icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />,
      title: language === "en" ? "Psychiatric Consultation" : "Consultation psychiatrique",
      description: language === "en"
        ? "Consultation with a psychiatrist for diagnosis and treatment of mental health disorders."
        : "Consultation avec un psychiatre pour le diagnostic et le traitement des troubles de santé mentale.",
      tooltip: language === "en" ? "Mental Health" : "Santé mentale",
    },
  ];

  const filteredServices =
    selectedFilter.length === 0
      ? services
      : services.filter((service) =>
          selectedFilter.includes(service.category)
        );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
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
            {language === "en" ? "Our Services" : "Nos services"}
          </h1>
          <p className="mt-2 text-center lg:text-start">
            {language === "en"
              ? "Check out our range of services which varies from health, dentistry, and mental health services!"
              : "Découvrez notre gamme de services qui varie des services de santé, de dentisterie et de santé mentale !"}
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center">
          <button
            onClick={handleSeeServicesClick}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-backgroundColor transition duration-300 ease-in-out mr-2"
          >
            {language === "en" ? "Services" : "Services"}
          </button>
          <FaSearch
            size={24}
            className="cursor-pointer ml-2"
            onClick={handleSearchClick}
          />
        </div>
      </div>

      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 z-50"
        >
          <h2 className="text-2xl font-bold mb-4">
            {language === "en" ? "Filter Services" : "Filtrer les services"}
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="healthcheck"
                checked={selectedFilter.includes("healthcheck")}
                onChange={handleFilterChange}
                className="form-checkbox"
              />
              <span>
                {language === "en" ? "Health Check" : "Vérification de santé"}
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="dentalcare"
                checked={selectedFilter.includes("dentalcare")}
                onChange={handleFilterChange}
                className="form-checkbox"
              />
              <span>{language === "en" ? "Dental Care" : "Soins dentaires"}</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="mentalhealth"
                checked={selectedFilter.includes("mentalhealth")}
                onChange={handleFilterChange}
                className="form-checkbox"
              />
              <span>
                {language === "en" ? "Mental Health" : "Santé mentale"}
              </span>
            </label>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-14">
        {filteredServices.map((service) => (
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

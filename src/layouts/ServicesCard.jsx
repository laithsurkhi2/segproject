import React from "react";
import { Tooltip } from "react-tooltip";

const ServicesCard = ({ icon, title, description, tooltip }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-2 w-full p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div
        className="bg-[#f2e5d5] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]"
        data-tooltip-id={`tooltip-${title}`} 
      >
        {icon}
        <Tooltip id={`tooltip-${title}`} effect="solid">
          {tooltip}
        </Tooltip>
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p>
        {description}
      </p>
      <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;

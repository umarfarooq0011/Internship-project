import React from "react";

export const MoreAboutUsButton = () => {
  return (
    <button
      className="px-20 py-8 text-white rounded-full shadow-lg uppercase font-medium tracking-wide text-sm sm:text-base relative overflow-hidden group cursor-pointer transition-transform transform duration-300 hover:scale-105 hover:bg-[#152960]"
      style={{ backgroundColor: "#3275DB" }}
    >
      {/* Default text */}
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-x-full">
        MORE ABOUT US
      </span>

      {/* Hover text */}
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
        MORE ABOUT US
      </span>
    </button>
  );
};

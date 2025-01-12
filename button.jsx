import React from 'react';

export const Button = () => {
  return (
    <button
      className="px-16 py-5 text-white rounded-full shadow-lg uppercase font-normal tracking-wide text-sm relative overflow-hidden group cursor-pointer"
      style={{ backgroundColor: '#3275DB' }}
    >
      {/* Text that slides up */}
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
        IPORTAL LOGIN
      </span>

      {/* Text that appears from below */}
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
        IPORTAL LOGIN
      </span>
    </button>
  );
};

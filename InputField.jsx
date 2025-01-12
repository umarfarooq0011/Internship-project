import React, { useState } from "react";


export const InputField = () => {
  const [data, setData] = useState(""); // State to store input value

  const handleChange = (e) => {
    setData(e.target.value); // Update state with input value
  };

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        value={data} // Bind input value to state
        onChange={handleChange} // Handle change event
        className="w-full px-6 py-4 rounded-full shadow-md text-gray-700 focus:outline-none pr-12"
        placeholder="Search Internships..."
      />
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#6d6d6d"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

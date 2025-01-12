import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { usePopper } from "react-popper";

export const WhatsAppSticky = () => {
  const [showPopper, setShowPopper] = useState(false); // State to control popper visibility
  const [referenceElement, setReferenceElement] = useState(null); // WhatsApp icon reference
  const [popperElement, setPopperElement] = useState(null); // Popover reference

  // Toggle popper visibility at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopper((prev) => !prev); // Toggle visibility
    }, 3000); // Change visibility every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right-start", // Position popper to the right of the icon (adjusted for left positioning)
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10], // Spacing between the icon and popover
        },
      },
    ],
  });

  return (
    <div
      className="fixed bottom-4 left-4 flex flex-col items-start space-x-3"
      style={{
        zIndex: 1000, // Ensure it stays above other components
      }}
    >
      {/* WhatsApp Icon */}
      <div
        ref={setReferenceElement} // Attach reference to the icon
        className="bg-blue-600 rounded-full p-3 text-white flex justify-center items-center cursor-pointer shadow-xl hover:bg-blue-700 transition duration-300 ease-in-out"
        style={{ width: "60px", height: "60px" }}
      >
        <FaWhatsapp size={28} />
      </div>

      {/* Popover */}
      {showPopper && (
        <div
          ref={setPopperElement} // Attach reference to the popover
          className="bg-white shadow-lg px-6 py-3 rounded-md text-gray-800 text-sm font-medium flex items-center"
          style={{
            ...styles.popper, // Apply Popper styles
            minWidth: "160px", // Ensure proper popover width
            transition: "opacity 0.3s ease-in-out", // Smooth transition for visibility
          }}
          {...attributes.popper} // Apply Popper attributes
        >
          <div className="flex items-center space-x-2">
            <span className="text-blue-600">💬</span>
            <span>
              Need Help? <span className="font-semibold">Chat with us</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

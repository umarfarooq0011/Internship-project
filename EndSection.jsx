import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import circle from "../assets/images/circle.webp"; // Importing the smaller circle background image
import { GetStartedbtn } from "./buttons/GetStartedNowbtn";

export const LastSection = () => {
  return (
    <section className="py-16 bg-gray-100 flex justify-center overflow-hidden">
      {/* Card Container */}
      <motion.div
        className="bg-white shadow-lg rounded-lg px-6 sm:px-8 md:px-20 py-14 md:py-24 flex flex-col md:flex-row items-center justify-between relative w-full max-w-screen-2xl"
        style={{
          boxShadow: "0 16px 32px rgba(0, 0, 0, 0.1)", // Prominent shadow for the card
        }}
        initial={{ opacity: 0.5, scale: 0.9 }} // Initial state: Slightly zoomed out
        whileInView={{ opacity: 1, scale: 1.1 }} // In view: Strong zoom-in
        exit={{ opacity: 0.5, scale: 0.9 }} // On exit: Zoom-out
        transition={{
          duration: 0.5, // Smooth and quick transitions
          ease: "easeInOut", // Smooth easing
        }}
        viewport={{
          once: false, // Trigger every time it enters/leaves the viewport
          amount: 0.2, // Trigger the animation when 20% of the section is in the viewport
        }}
      >
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181b31] mb-8">
            Ready to get started?
          </h2>
          <p className="text-[#8d8e9c] font-medium text-base sm:text-lg md:text-xl leading-relaxed">
            At Ezitech, we constantly push boundaries to deliver excellence. Our
            commitment to quality and innovation makes us your trusted partner
            for growth and success.
          </p>
        </div>

        {/* Button and Circle Background */}
        <div className="relative flex-1 flex justify-center md:justify-end">
          {/* Smaller Circle Background */}
          <img
            src={circle}
            alt="Circle Background"
            className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 -top-4 sm:-top-8 sm:-right-3"
            style={{
              filter: "drop-shadow(0 12px 24px rgba(50, 117, 219, 0.2))", // Subtle shadow around the circle
            }}
          />
          {/* Button */}
          <button>
            <GetStartedbtn />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

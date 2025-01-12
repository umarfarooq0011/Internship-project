import React, { useState, useRef } from "react";
import styled from "styled-components";
import UsersData from "../api/Users.json";
import Marquee from "react-fast-marquee"; // Install using: npm install react-fast-marquee

// Social Icons Map
const socialIcons = {
  linkedin: "🔗", // Replace with actual icons (e.g., FontAwesome, Material Icons)
  github: "🐙",
  stackoverflow: "💻",
  behance: "🎨",
  instagram: "📷"
};

// Styled Section with Right-Side Oval Background
const Section = styled.section`
  margin-top: 2rem;
  overflow: hidden;
  position: relative;
  user-select: none;
  padding: 4rem 2rem;
  background: #f8f9fc;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -20%;
    width: 60%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 192, 203, 0.3), transparent);
    border-radius: 50%;
    z-index: 0;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  z-index: 1; /* Ensure content is above background */
`;

export const UsersCards = () => {
  const [speed, setSpeed] = useState(50); // Initial speed
  const [direction, setDirection] = useState("left"); // Default scroll direction
  const [isDragging, setIsDragging] = useState(false); // Track if dragging is active
  const [isPaused, setIsPaused] = useState(false); // Pause marquee during drag
  const touchStartX = useRef(0); // Track starting touch position

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    touchStartX.current = e.clientX; // Record mouse starting position
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX; // Record touch starting position
  };

  const handleMove = (currentX) => {
    const dragDistance = currentX - touchStartX.current;
    const dragSpeed = Math.min(Math.abs(dragDistance) * 0.5 + 50, 100); // Base speed 50, max speed 100
    setSpeed(dragSpeed); // Dynamically adjust speed
    setDirection(dragDistance > 0 ? "right" : "left"); // Dynamically adjust direction
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setIsPaused(false); // Resume marquee
    setSpeed(50); // Reset to initial speed
  };

  return (
    <Section
      isDragging={isDragging}
      onMouseDown={handleMouseDown} // Start mouse drag
      onMouseMove={handleMouseMove} // Track mouse drag
      onMouseUp={handleEnd} // End mouse drag
      onMouseLeave={handleEnd} // Ensure drag ends if mouse leaves container
      onTouchStart={handleTouchStart} // Start touch drag
      onTouchMove={handleTouchMove} // Track touch drag
      onTouchEnd={handleEnd} // End touch drag
    >
      <InnerWrapper>
        {/* Marquee Section */}
        <Marquee
          speed={speed} // Dynamic speed
          gradient={false} // Disable gradient effect
          direction={direction} // Adjust direction dynamically
          pauseOnHover={false} // Ensure scrolling doesn't pause on hover
          pauseOnClick={false} // Ensure scrolling doesn't pause on click
          play={!isPaused} // Play marquee unless paused by drag
          className="flex items-center space-x-8"
        >
          {UsersData.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-xl p-6 mx-4 max-w-sm flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              {/* Name and Field */}
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.field}</p>
              {/* Social Icon */}
              <a
                href={user.social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mt-2"
                aria-label={user.social.icon}
              >
                {socialIcons[user.social.icon]}
              </a>
              {/* Review */}
              <p className="text-gray-600 text-sm mt-4">{user.review}</p>
            </div>
          ))}
        </Marquee>

        {/* Footer Section */}
        <div className="text-center mt-8">
          <p className="text-sm sm:text-base text-gray-500">
            Still have a question?{" "}
            <a href="#documentation" className="text-blue-600 underline">
              Browse documentation
            </a>{" "}
            or{" "}
            <a href="#ticket" className="text-blue-600 underline">
              submit a ticket
            </a>
            .
          </p>
        </div>
      </InnerWrapper>
    </Section>
  );
};

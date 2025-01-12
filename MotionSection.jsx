import React, { useState, useRef } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

// Import images
import adobe from "../assets/image/adobe.png";
import figma from "../assets/image/figma.png";
import java from "../assets/image/java.png";
import filmora from "../assets/image/filmora.png";
import flutter from "../assets/image/flutter.png";
import html from "../assets/image/html.png";
import illustrator from "../assets/image/illustrator.png";
import javascript from "../assets/image/javascript.png";
import laravel from "../assets/image/laravel.png";
import maya from "../assets/image/maya.png";
import mongodb from "../assets/image/mongodb.png";
import motionUI from "../assets/image/motion-ui.png";
import nodejs from "../assets/image/nodejs.png";
import photoshop from "../assets/image/photoshop.png";
import react from "../assets/image/react.png";
import sketchup from "../assets/image/sketchup.png";
import vujs from "../assets/image/vujs.png";
import yoast from "../assets/image/yoast.png";
import zbrush from "../assets/image/z-brush.png";

// Styled components
const Section = styled.section`
  margin-top: 2rem;
  overflow: hidden;
  cursor: ${({ isDragging }) => (isDragging ? "grabbing" : "grab")};
  user-select: none;
  position: relative;

  &:before {
    content: "Drag or swipe to scroll";
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    color: #666;
    opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
  }
`;

const Image = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
  margin: 0 1.5rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2); // Slight zoom on hover
  }
`;

export const MotionSection = () => {
  const [speed, setSpeed] = useState(10); // Slower default speed
  const [direction, setDirection] = useState("left"); // Default scroll direction
  const [isDragging, setIsDragging] = useState(false); // Track if dragging is active
  const [isPaused, setIsPaused] = useState(false); // Pause marquee during drag
  const touchStartX = useRef(0); // Track starting touch position

  const tools = [
    adobe,
    figma,
    java,
    filmora,
    flutter,
    html,
    illustrator,
    javascript,
    laravel,
    maya,
    mongodb,
    motionUI,
    nodejs,
    photoshop,
    react,
    sketchup,
    vujs,
    yoast,
    zbrush,
  ];

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
    const dragSpeed = Math.abs(dragDistance) * 0.2; // Reduced multiplier for smoothness
    setSpeed(dragSpeed > 3 ? dragSpeed : 3); // Set a minimum speed of 3 for fluidity
    setDirection(dragDistance > 0 ? "right" : "left"); // Set direction dynamically
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
    setSpeed(5); // Reset to slower default speed
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
      <Marquee
        speed={speed} // Dynamic speed
        gradient={false} // Disable gradient effect
        direction={direction} // Adjust direction dynamically
        pauseOnHover={false} // Ensure scrolling doesn't pause on hover
        pauseOnClick={false} // Ensure scrolling doesn't pause on click
        play={!isPaused} // Play marquee unless paused by drag
        className="flex items-center space-x-8"
      >
        {tools.map((tool, index) => (
          <Image key={index} src={tool} alt={`Tool ${index + 1}`} />
        ))}
      </Marquee>
    </Section>
  );
};

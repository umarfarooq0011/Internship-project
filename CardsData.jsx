import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../api/Data.json";

// Keyframe for wave animation
const wave = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Styled component for Card
const Card = styled.div`
  background: ${({ bgColor }) => bgColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  transform: ${({ staggered }) => (staggered ? "translateY(40px)" : "translateY(0px)")};
  &:hover {
    background: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05) rotate(-1deg);
  }
`;

// Styled component for Badge
const Badge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #eef3f9; 
  color: black;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  animation: bounce 1s infinite;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

// Styled component for Text Animation
const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937; /* Gray 800 */
  margin-bottom: 0.5rem;
  text-align: center;
  transition: color 0.3s ease;
  &:hover {
    color: #4b5563; /* Gray 600 */
    animation: ${wave} 0.5s ease-in-out;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #6b7280; /* Gray 600 */
  text-align: center;
  transition: color 0.3s ease;
  &:hover {
    color: #9ca3af; /* Gray 500 */
    animation: ${wave} 0.5s ease-in-out;
  }
`;

// Styled component for Image
const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem auto;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

// Main Grid Wrapper
const GridWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100vh;
  padding: 2rem;
  background: #f3f4f6; /* Gray 100 */

  /* Responsive Grid */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column on mobile */
  }
`;

export const CardsData = () => {
  const cardColors = [
    "linear-gradient(to right, #fff0f3, #ffe4e6, #ffd6e0)", // Light pink
    "linear-gradient(to right, #e3f8ff, #d0f0fd, #bee3f8)", // Light blue
    "linear-gradient(to right, #e9fdf6, #d8f3dc, #cfe8d5)", // Light green
    "linear-gradient(to right, #fff8dc, #fff3b0, #ffed89)", // Light yellow
    "linear-gradient(to right, #f0fff4, #ccfbf1, #c1f9f1)", // Light teal
    "linear-gradient(to right, #f8f5ff, #eee9ff, #e7e4f8)", // Light purple
  ];

  return (
    <GridWrapper>
      {data.map((item, index) => (
        <Card key={item.id} bgColor={cardColors[index % cardColors.length]} staggered={index % 3 === 1}>
          {/* Badge */}
          {item.badge && <Badge>{item.badge}</Badge>}
          {/* Image */}
          <Image src={item.image} alt={item.title} />
          {/* Title and Text */}
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Card>
      ))}
    </GridWrapper>
  );
};

import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the wave animation on text
const textWave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Keyframes for wave effect on the button background
const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Styled Button Component
const WaveButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background-color: #3275db;
  border: none;
  border-radius: 9999px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  /* Wave effect background */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 300%;
    height: 100%;
    background: url("https://upload.wikimedia.org/wikipedia/commons/8/88/Wave_patten.svg")
      repeat-x;
    background-size: 150px 100%;
    opacity: 0.4;
    animation: ${waveAnimation} 2s linear infinite;
  }

  /* Text inside the button */
  span {
    position: relative;
    z-index: 1;
    display: inline-flex;
    overflow: hidden; /* Ensures no text spills out */
  }

  /* Wave effect on individual letters */
  span span {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
    margin-right: 0.1em; /* Adds spacing between letters */
  }

  &:hover span span {
    animation: ${textWave} 0.8s ease-in-out forwards;
  }

  /* Add cascading delay for each letter (from right to left) */
  &:hover span span:nth-child(1) {
    animation-delay: 1.1s;
  }
  &:hover span span:nth-child(2) {
    animation-delay: 1s;
  }
  &:hover span span:nth-child(3) {
    animation-delay: 0.9s;
  }
  &:hover span span:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:hover span span:nth-child(5) {
    animation-delay: 0.7s;
  }
  &:hover span span:nth-child(6) {
    animation-delay: 0.6s;
  }
  &:hover span span:nth-child(7) {
    animation-delay: 0.5s;
  }
  &:hover span span:nth-child(8) {
    animation-delay: 0.4s;
  }
  &:hover span span:nth-child(9) {
    animation-delay: 0.3s;
  }
  &:hover span span:nth-child(10) {
    animation-delay: 0.2s;
  }
  &:hover span span:nth-child(11) {
    animation-delay: 0.1s;
  }
  &:hover span span:nth-child(12) {
    animation-delay: 0s;
  }
`;

// Wave Button Component
export const GetStartedbtn = () => {
  const text = "GET STARTED NOW";

  return (
    <WaveButton>
      <span>
        {text.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </span>
    </WaveButton>
  );
};

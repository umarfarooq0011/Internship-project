import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import sem1 from "../assets/images/sem1.webp";
import sem2 from "../assets/images/sem2.webp";
import sem3 from "../assets/images/sem3.webp";
import dots from "../assets/dots1.svg";
import { MoreAboutUsButton } from "./buttons/AboutButton";

// Styled component for the animated word
const AnimatedWord = styled.span`
  position: relative;
  display: inline-block;
  color: #2563eb;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #2563eb;
    transform: scaleY(0);
    transform-origin: bottom;
    z-index: -1;
    transition: transform 0.3s ease-in-out;
    mix-blend-mode: multiply;
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

export const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative px-0 py-10 text-center"
      style={{
        background:
          "linear-gradient(135deg, #f8f9fc 50%, #eaf1f9 50%)",
      }}
    >
      {/* Dots Background */}
      <img
        src={dots}
        alt="Decorative Dots"
        className="absolute bottom-10 right-20 w-20 sm:w-32 opacity-40 pointer-events-none"
      />
      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:px-16">
        {/* Images */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative flex gap-6">
            {/* First Image */}
            <img
              src={sem1}
              alt="Seminar 1"
              className="w-[55%] sm:w-[50%] lg:w-[48%] h-auto rounded-lg shadow-lg"
              data-aos="fade-right"
            />
            {/* Second Image */}
            <img
              src={sem2}
              alt="Seminar 2"
              className="w-[45%] sm:w-[40%] lg:w-[38%] h-auto rounded-lg shadow-lg"
              data-aos="fade-left"
            />
            {/* Third Image Overlapping */}
            <img
              src={sem3}
              alt="Seminar 3"
              className="absolute w-[65%] sm:w-[60%] lg:w-[55%] h-auto rounded-lg shadow-xl left-[10%] sm:left-[8%] lg:left-[5%] -bottom-8 sm:-bottom-12 lg:-bottom-14"
              data-aos="zoom-in"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-center text-left relative">
          <span className="text-sm sm:text-base text-blue-600 bg-blue-100 rounded-full w-fit px-2 py-1">
            what we do...?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181b31] mb-6 leading-snug">
            Empowering Connections
            <br />
            in the <AnimatedWord>Digital</AnimatedWord> World
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            We equip future professionals with the essential tools to thrive in
            both traditional and digital IT landscapes.
          </p>
          <ul className="list-none text-gray-600 text-sm sm:text-base mb-6 pl-4">
            <li>
              With years of experience and countless successful placements,
              Ezitech Institute has perfected a unique learning process that goes
              beyond theory.
            </li>
            <li>
              We delve deep into practical skills and real-world applications,
              helping students understand, connect, and excel in the
              ever-evolving tech market.
            </li>
          </ul>
          <div className="flex justify-start relative">
            <MoreAboutUsButton />
            <img
              src={dots}
              alt="Dots near button"
              className="absolute -bottom-4 -right-12 w-10 sm:w-16 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

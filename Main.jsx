import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import backgroundImage from "../assets/images/BACKGROUND_img[1].jpg";
import logo from "../assets/images/logo_ezitech[1].png";
import { Button } from "./button";
import { Hero } from "./Hero";
import { InputField } from "./InputField";
import eziblogs from "../assets/images/eziblog[1].png";
import ezipoz from "../assets/images/ezipos[1].png";
import ezicoding from "../assets/images/ezicoding[1].png";

export const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarTop, setNavbarTop] = useState(0); // Initial navbar position
  const initialNavbarTop = 0; // Define the navbar's initial position
  const maxNavbarOffset = 20000; // Maximum offset for the navbar to slide down

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Calculate the navbar position dynamically
      const newNavbarTop = Math.min(
        maxNavbarOffset,
        Math.max(initialNavbarTop, currentScrollY)
      );

      setNavbarTop(newNavbarTop);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative text-white min-h-screen bg-center bg-no-repeat md:bg-cover sm:bg-contain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#007AFF69] bg-opacity-100"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Section - Hidden on xs and sm */}
        <section className="py-6 hidden md:block">
          <div className="container mx-auto flex justify-evenly items-center">
            {/* Left Section - Contact Information */}
            <div className="flex items-center space-x-8 font-semibold text-sm">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>+923455555396</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>INFO@EZITECH.ORG</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>
                  WESTRIDGE 1, OFFICE #304-G, PESHAWAR ROAD, RAWALPINDI,
                  PAKISTAN
                </span>
              </div>
            </div>

            {/* Right Section - Social Media Icons */}
            <div className="flex space-x-4 text-lg">
              <a href="#facebook">
                <FaFacebookF />
              </a>
              <a href="#instagram">
                <FaInstagram />
              </a>
              <a href="#behance">
                <FaBehance />
              </a>
              <a href="#linkedin">
                <FaLinkedinIn />
              </a>
              <a href="#youtube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </section>

        {/* Navbar Section */}
        <section>
          {/* Navbar for Larger Devices (md and above) */}
          <nav
            className="hidden md:block bg-white bg-opacity-80 rounded-md mt-20 shadow-md py-4 mx-20 absolute w-[calc(100%-10rem)] transition-all duration-300"
            style={{
              top: `${navbarTop}px`,
            }}
          >
            <div className="container mx-auto flex justify-between items-center px-20">
              {/* Logo */}
              <div className="text-blue-700 font-bold text-2xl cursor-pointer">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
              </div>

              {/* Navigation Links */}
              <ul className="flex space-x-10 font-medium text-gray-700">
                <li className="hover:text-blue-700 cursor-pointer">HOME</li>
                <li className="hover:text-blue-700 cursor-pointer">ABOUT</li>
                <li className="hover:text-blue-700 cursor-pointer">
                  INTERNSHIP'S
                </li>
                <li className="hover:text-blue-700 cursor-pointer">CAREERS</li>
                <li className="hover:text-blue-700 cursor-pointer">COURSES</li>
                <li className="hover:text-blue-700 cursor-pointer">
                  TECH BLOGS
                </li>
              </ul>

              {/* Portal Login Button */}
              <div>
                <Button />
              </div>
            </div>
          </nav>

          {/* Navbar for Smaller Devices (xs and sm) */}
          <nav className="block md:hidden bg-white bg-opacity-80 shadow-md py-4 fixed top-0 w-full z-50">
            <div className="container flex justify-between items-center px-4">
              {/* iPortal Button */}
              <div className="mr-5">
                <Button />
              </div>

              {/* Logo */}
              <div className="text-blue-700 flex justify-center font-bold text-xl">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
              </div>

              {/* Hamburger Menu */}
              <div className="ml-10 z-50">
                <button
                  className={`text-2xl ${
                    isMenuOpen ? "text-white" : "text-black"
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <RxCross1 /> : <HiOutlineBars3CenterLeft />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="flex flex-col justify-center items-start bg-black bg-opacity-90 shadow-md fixed top-0 right-0 w-[80%] h-screen px-4 py-4 z-40">
                <ul className="flex flex-col space-y-4 font-medium text-white w-full text-center">
                  <li className="hover:text-blue-700 cursor-pointer">HOME</li>
                  <li className="hover:text-blue-700 cursor-pointer">ABOUT</li>
                  <li className="hover:text-blue-700 cursor-pointer">
                    INTERNSHIP'S
                  </li>
                  <li className="hover:text-blue-700 cursor-pointer">
                    CAREERS
                  </li>
                  <li className="hover:text-blue-700 cursor-pointer">
                    COURSES
                  </li>
                  <li className="hover:text-blue-700 cursor-pointer">
                    TECH BLOGS
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </section>

        {/* Hero Section */}
        <section className="mt-0 md:mt-32 text-center">
          <Hero />
        </section>

        {/* Search Input Field */}
        <section className="mt-20 justify-center hidden sm:flex ">
          <InputField />
        </section>

        {/* Explore More Products Section */}
        <section className="mt-6 text-center text-white text-lg font-medium flex flex-col items-center xs:mt-4 sm:mt-5">
          Explore our more useful products{" "}
          <FaHeart className="text-white w-5 h-5 ml-2 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
        </section>

        {/* Picture Symbols Section */}
        <section className="mt-7 flex justify-center space-x-8 items-center flex-wrap xs:mt-4 sm:mt-5 xs:space-x-4 sm:space-x-6">
          <img
            src={eziblogs}
            alt="Eziblogs"
            className="w-[221px] h-[48px] xs:w-[180px] xs:h-[40px] sm:w-[200px] sm:h-[44px]"
          />
          <img
            src={ezipoz}
            alt="Ezipoz"
            className="w-[175px] h-[38px] xs:w-[140px] xs:h-[30px] sm:w-[160px] sm:h-[34px]"
          />
          <img
            src={ezicoding}
            alt="Ezicoding"
            className="w-[300px] h-[149px] xs:w-[250px] xs:h-[120px] sm:w-[280px] sm:h-[140px]"
          />
        </section>
      </div>
    </section>
  );
};

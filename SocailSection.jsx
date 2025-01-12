import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export const Social = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Light Bubble Background */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-blue-50 rounded-full opacity-50 top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-50 rounded-full opacity-50 top-40 right-20"></div>
        <div className="absolute w-64 h-64 bg-pink-50 rounded-full opacity-50 bottom-20 left-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {/* LinkedIn */}
        <div className="flex flex-col items-center justify-center space-y-4 relative">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaLinkedinIn size={50} className="text-blue-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Follow us on Linkedin
          </h3>
          <p className="text-sm text-gray-500">Latest news and updates</p>
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        {/* YouTube */}
        <div className="flex flex-col items-center justify-center space-y-4 relative">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaYoutube size={50} className="text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Follow Us on Youtube
          </h3>
          <p className="text-sm text-gray-500">Latest news and updates</p>
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center justify-center space-y-4 relative">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaFacebookF size={50} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Follow us on Facebook
          </h3>
          <p className="text-sm text-gray-500">Latest news and updates</p>
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col items-center justify-center space-y-4 relative">
          <div className="bg-gray-100 p-4 rounded-full">
            <FaWhatsapp size={50} className="text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            WhatsApp Channel
          </h3>
          <p className="text-sm text-gray-500">Join the Community</p>
        </div>
      </div>
    </section>
  );
};

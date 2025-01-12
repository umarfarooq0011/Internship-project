import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import svg from "../assets/dots1.svg";

export const Dynamic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-white via-[#f8f9fc] to-[#eaf1f9] py-16 px-6 sm:px-12 lg:px-24 text-center lg:text-left"
    >
      {/* Background SVG */}
      <img
        src={svg}
        alt="Decorative Dots"
        className="absolute top-10 left-0 w-32 sm:w-48 opacity-20 pointer-events-none"
      />
      <img
        src={svg}
        alt="Decorative Dots"
        className="absolute bottom-0 right-0 w-20 sm:w-32 opacity-10 pointer-events-none"
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181b31] leading-tight">
            Hundreds of <br /> Successful Internships & <br />
            <span className="underline decoration-[#181b31]">Countings</span>
          </h2>
          <p className="mt-6 text-[#181b31] text-sm sm:text-base leading-relaxed">
            With a commitment to quality training and career advancement, we've
            empowered students from diverse backgrounds. Through structured
            internships, hands-on projects, and expert mentorship, Ezitech
            Institute ensures that every student builds a solid foundation in IT.
          </p>
        </div>

        {/* Right Stats */}
        <div
          className="grid grid-cols-2 gap-0 bg-white shadow-md rounded-xl border border-gray-300 overflow-hidden"
          data-aos="fade-left"
        >
          <div className="text-center border-b border-r border-gray-200 p-6">
            <h3 className="text-4xl font-extrabold text-[#181b31]">
              {inView && <CountUp start={0} end={37} duration={4} />}+
            </h3>
            <p className="text-[#181b31] text-sm sm:text-base mt-2">Industry MoUs</p>
          </div>
          <div className="text-center border-b border-gray-200 p-6">
            <h3 className="text-4xl font-extrabold text-[#181b31]">
              {inView && <CountUp start={0} end={327} duration={4} />}
            </h3>
            <p className="text-[#181b31] text-sm sm:text-base mt-2">Active Students</p>
          </div>
          <div className="text-center border-r border-gray-200 p-6">
            <h3 className="text-4xl font-extrabold text-[#181b31]">
              {inView && <CountUp start={0} end={98} duration={4} />}%
            </h3>
            <p className="text-[#181b31] text-sm sm:text-base mt-2">Positive Feedback</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-4xl font-extrabold text-[#181b31]">
              {inView && <CountUp start={0} end={6663} duration={4} />}
            </h3>
            <p className="text-[#181b31] text-sm sm:text-base mt-2">
              Successful Graduates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

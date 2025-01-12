export const MiddleComponent = () => {
    return (
      <>
        {/* Section Header */}
        <section className="relative mt-10 sm:mt-16 md:mt-20 py-10 sm:py-14 md:py-16 bg-white text-center overflow-hidden">
          {/* Background Design */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fc] via-[#eaf1f9] to-[#f8f9fc] opacity-40 pointer-events-none"></div>
          <div className="absolute top-10 left-0 w-[100px] xs:w-[120px] sm:w-[200px] h-[100px] xs:h-[120px] sm:h-[200px] bg-[#dfe8ed] rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-10 right-0 w-[150px] xs:w-[180px] sm:w-[300px] h-[150px] xs:h-[180px] sm:h-[300px] bg-[#dfe8ed] rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
  
          <h2 className="relative text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-relaxed text-[#181b31] px-4">
            Shaping and Empowering Future IT Talent
            <br />
            <span className="block mt-2 sm:mt-4 text-[#181b31]">
              Through a Seamless Process
            </span>
          </h2>
        </section>
  
        {/* Steps Section */}
        <section className="py-12 sm:py-16 bg-[#f8f9fc] text-center overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="absolute top-[-80px] xs:top-[-90px] sm:top-[-100px] left-1/2 sm:left-auto sm:-right-6 transform -translate-x-1/2 sm:translate-x-0 text-[6rem] xs:text-[7rem] sm:text-[11rem] font-extrabold text-[#dfe8ed] opacity-90">
                1
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.1em] text-[#dfe8ed]">
                Step 1
              </p>
              <h3 className="mt-6 text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-[#181b31]">
                Discover Tech
              </h3>
              <p className="mt-4 text-sm sm:text-[1rem] text-gray-500 leading-[1.75]">
                Explore internships across various technologies that align with
                your career goals. Start your journey by selecting a field that
                excites you.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="absolute top-[-80px] xs:top-[-90px] sm:top-[-100px] left-1/2 sm:left-auto sm:-right-6 transform -translate-x-1/2 sm:translate-x-0 text-[6rem] xs:text-[7rem] sm:text-[11rem] font-extrabold text-[#dfe8ed] opacity-90">
                2
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.1em] text-[#dfe8ed]">
                Step 2
              </p>
              <h3 className="mt-6 text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-[#181b31]">
                Evaluate Skill
              </h3>
              <p className="mt-4 text-sm sm:text-[1rem] text-gray-500 leading-[1.75]">
                Our process includes an interview and a short evaluation task to
                assess your skills and readiness, helping us match you with the
                right opportunity.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="absolute top-[-80px] xs:top-[-90px] sm:top-[-100px] left-1/2 sm:left-auto sm:-right-6 transform -translate-x-1/2 sm:translate-x-0 text-[6rem] xs:text-[7rem] sm:text-[11rem] font-extrabold text-[#dfe8ed] opacity-90">
                3
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.1em] text-[#dfe8ed]">
                Step 3
              </p>
              <h3 className="mt-6 text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-[#181b31]">
                Track Record
              </h3>
              <p className="mt-4 text-sm sm:text-[1rem] text-gray-500 leading-[1.75]">
                Once selected, gain access to our iPortal to monitor your
                internship progress, track your achievements, and stay on top of
                your goals.
              </p>
            </div>
          </div>
        </section>
  
        {/* Help Section */}
        <section className="py-8 bg-[#f8f9fc] text-center">
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
        </section>
      </>
    );
  };
  
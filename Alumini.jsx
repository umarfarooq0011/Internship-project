export const Alumini = () => {
    return (
      <>
        <section className="relative bg-white mt-20 py-16">
          {/* Curved Background Shape */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-purple-50 to-pink-50 transform rotate-45 scale-[2] -translate-y-1/3 -translate-x-1/4"></div>
          </div>
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 flex items-center justify-center space-x-2">
              <span>Alumni</span>
              <span className="text-3xl">😍</span>
            </h2>
            <p className="text-lg font-medium text-[#2e586e] mt-4">
              Our interns consistently share positive experiences, highlighting
              the practical skills and professional growth they achieve with us.
            </p>
          </div>
        </section>
      </>
    );
  };
  
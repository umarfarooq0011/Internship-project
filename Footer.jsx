export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const footerName = import.meta.env.VITE_FOOTER_NAME || "OMER AWAN"; // Access the name from the .env file

  return (
    <footer className="bg-white py-12">
      {/* Minimal Line on Top */}
      <div className="border-t p-10 border-gray-300 mx-auto max-w-6xl mb-15"></div>

      {/* Main Footer Content */}
      <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="font-medium space-y-4">
          <p className="text-gray-700">
            Office #304-B, Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab
          </p>
          <p className="text-gray-700">(92) 337-7777860</p>
          <p className="text-gray-800 font-medium">info@ezitech.org</p>
        </div>

        {/* Explore More Section */}
        <div className="space-y-2">
          <h3 className="font-bold mb-4 text-2xl text-gray-900">Explore More</h3>
          <ul className="text-gray-600 font-semibold space-y-1">
            <li>About Us</li>
            <li>Partners</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Internships Section */}
        <div className="space-y-2">
          <h3 className="font-bold mb-4 text-2xl text-gray-900">Internships</h3>
          <ul className="text-gray-600 font-medium space-y-1">
            <li>Strategy</li>
            <li>eCommerce</li>
            <li>Digital Marketing</li>
            <li>Branding</li>
            <li>Design</li>
          </ul>
        </div>

        {/* Updates Section */}
        <div className="space-y-4">
          <h3 className="font-bold mb-4 text-2xl text-gray-900">Updates</h3>
          <p className="text-gray-600 font-semibold">
            Subscribe to our newsletter to get the latest news & updates.
          </p>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-3 w-full text-gray-700 focus:outline-none bg-gray-100 text-sm sm:text-base"
            />
            <button
              className="bg-transparent text-gray-800 px-4 py-3 font-semibold hover:bg-blue-600 hover:text-[#efefef] transition duration-300 text-sm sm:text-base"
            >
              GO
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Line on Bottom */}
      <div className="border-t border-gray-300 mx-auto max-w-6xl mt-8"></div>

      {/* Bottom Footer Section */}
      <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between font-semibold text-sm md:text-lg text-gray-600">
        <p className="text-center">
          © {currentYear} {footerName}. All rights reserved | Design and Developed by {footerName}
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

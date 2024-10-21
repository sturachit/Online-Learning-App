import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 to-green-600 ml-60 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="/logo.png" // Place logo.jpg directly in the public folder
          alt="Logo"
          className="hover:scale-110 transition-transform duration-300"
          style={{ height: "70px", width: "80px", marginRight: "15px" }}
        />

        <h1 className="text-xl font-bold md:text-2xl">Online Learning App</h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-green-200 transition duration-300">
          Home
        </a>
        <a href="#" className="hover:text-green-200 transition duration-300">
          About
        </a>
        <a href="#" className="hover:text-green-200 transition duration-300">
          Courses
        </a>
        <a href="#" className="hover:text-green-200 transition duration-300">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;

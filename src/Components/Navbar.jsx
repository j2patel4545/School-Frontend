import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-14 top-0 left-0 w-screen fixed bg-zinc-950 text-zinc-50 justify-between items-center px-4 z-50">
      <div className="font-bold text-lg md:text-2xl">
        <Link to="/">School</Link>
      </div>

      {/* Search bar only visible on medium screens and above */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="relative w-full max-w-xs md:max-w-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full min-w-[100px] sm:min-w-[150px] md:min-w-[200px] pl-10 pr-2 py-1 rounded-xl bg-zinc-800 text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700"
          />
          <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-zinc-400" />
        </div>
      </div>

      {/* Links visible on desktop */}
      <div className="hidden md:flex gap-8 space-x-4 mr-2">
        <div className="relative group">
          <button className="hover:text-zinc-300 focus:outline-none">
            Registration
          </button>
          <div className="absolute right-0 mt-2 bg-zinc-800 text-zinc-50 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible group-hover:z-10 transition-opacity duration-200">
            <Link to="/teacherregister" className="px-4 py-2 w-28 justify-center flex hover:bg-zinc-700">Teacher</Link>
            <Link to="/register" className="px-4 w-28 flex justify-center py-2 hover:bg-zinc-700">Student</Link>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-zinc-300 focus:outline-none">
            Login
          </button>
          <div className="absolute right-0 mt-2 bg-zinc-800 text-zinc-50 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible group-hover:z-10 transition-opacity duration-200">
            <Link to="/prinlogin" className="w-28 flex justify-center px-4 py-2 hover:bg-zinc-700">Principal</Link>
            <Link to="/teacherlogin" className="w-28 flex justify-center px-4 py-2 hover:bg-zinc-700">Teacher</Link>
            <Link to="/login" className="w-28 flex justify-center px-4 py-2 hover:bg-zinc-700">Student</Link>
          </div>
        </div>

        <Link to="/about" className="hover:text-zinc-300">About</Link>
      </div>

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-zinc-50 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Full-Screen Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-zinc-900 text-white flex flex-col justify-center items-center z-50">
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link to="/register" className="text-xl mb-4 hover:text-gray-300">Student Registration</Link>
          <Link to="/login" className="text-xl mb-4 hover:text-gray-300">Student Login</Link>
          <Link to="/teacherregister" className="text-xl mb-4 hover:text-gray-300">Teacher Registration</Link>
          <Link to="/teacherlogin" className="text-xl mb-4 hover:text-gray-300">Teacher Login</Link>
          <Link to="/prinlogin" className="text-xl mb-4 hover:text-gray-300">Principal Login</Link>
          <Link to="/about" className="text-xl hover:text-gray-300">About</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

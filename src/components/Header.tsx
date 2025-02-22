import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-[#2d3748] p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dan Judul */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-3" />
          <h1 className="text-2xl font-semibold">Logic Frame</h1>
        </div>

        {/* Tombol Toggle untuk Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
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

        {/* Menu Navigasi */}
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {/* <li>
              <a href="#home" className="hover:text-[#4299e1] transition duration-300">
                Home
              </a>
            </li> */}
            <li>
              <a href="#katalog" className="hover:text-[#4299e1] transition duration-300">
                Katalog
              </a>
            </li>
            <li>
              <a href="#tim" className="hover:text-[#4299e1] transition duration-300">
                Tim
              </a>
            </li>
            <li>
              <a href="#mitra" className="hover:text-[#4299e1] transition duration-300">
                Mitra
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
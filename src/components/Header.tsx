import React, { useState } from 'react';
import logo from '../assets/logo.png';

// Definisikan tipe props
interface HeaderProps {
  toggleTheme: () => void; // Fungsi untuk toggle theme
  theme: string; // Nilai tema saat ini (light/dark)
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-[#2d3748]'} p-4 shadow-sm`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dan Judul */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-3" />
          <h1 className="text-2xl font-semibold">Logic Frame</h1>
        </div>

        {/* Tombol Toggle untuk Mobile */}
        <div className="flex items-center space-x-4">
          {/* Tombol Toggle Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
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
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            ) : (
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
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            )}
          </button>

          {/* Tombol Toggle Menu Mobile */}
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
        </div>

        {/* Menu Navigasi */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
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
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : theme === 'dark'
            ? 'bg-gray-900'
            : 'bg-white'
      } ${theme === 'dark' ? 'text-white' : 'text-[#2d3748]'}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('root')}>
            <img src={logo} alt="Logic Frame Logo" className="h-10 md:h-12 transition-transform hover:scale-110" />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Logic Frame
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <button 
                onClick={() => scrollToSection('katalog')} 
                className="hover:text-blue-500 transition-colors duration-300 font-medium relative group"
              >
                Katalog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('portofolio')} 
                className="hover:text-blue-500 transition-colors duration-300 font-medium relative group"
              >
                Portofolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('tim')} 
                className="hover:text-blue-500 transition-colors duration-300 font-medium relative group"
              >
                Tim
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('mitra')} 
                className="hover:text-blue-500 transition-colors duration-300 font-medium relative group"
              >
                Mitra
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden focus:outline-none p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col space-y-4 py-4">
            <li>
              <button 
                onClick={() => scrollToSection('katalog')} 
                className="block w-full text-left hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                Katalog
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('portofolio')} 
                className="block w-full text-left hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                Portofolio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('tim')} 
                className="block w-full text-left hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                Tim
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('mitra')} 
                className="block w-full text-left hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                Mitra
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
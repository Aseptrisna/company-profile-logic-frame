import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">&copy; 2025 Logic Frame Indonesia. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

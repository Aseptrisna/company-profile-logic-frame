import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Logic Frame
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Solusi digital terpercaya untuk transformasi bisnis Anda. Kami berkomitmen memberikan layanan terbaik dengan teknologi terkini.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/logicframe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://www.instagram.com/logicframe.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/logic-frame-indonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://wa.me/6285841722279" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-green-500 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('katalog')}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                >
                  Katalog Produk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portofolio')}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                >
                  Portofolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tim')}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                >
                  Tim Kami
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mitra')}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                >
                  Mitra
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Layanan Kami</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">AI & Machine Learning</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <a href="tel:+6285841722279" className="hover:text-blue-400 transition-colors">
                  +62 858-4172-2279
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@logicframe.id" className="hover:text-blue-400 transition-colors">
                  info@logicframe.id
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} PT. Logic Frame Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

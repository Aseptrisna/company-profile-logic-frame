import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa"; // Ikon WhatsApp dan Scroll to Top
import Lottie from "lottie-react"; // Untuk animasi loading
import loadingAnimation from "./assets/animation/loadingAnimation.json"; // File animasi Lottie
import Header from "./components/Header";
import Banner from "./components/Banner";
import Katalog from "./components/Katalog";
import Tim from "./components/Tim";
import Mitra from "./components/Mitra";
import Footer from "./components/Footer";
import Portofolio from "./components/Portofolio";

const App: React.FC = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false); // State untuk tombol scroll to top
  const [theme, setTheme] = useState("light"); // State untuk dark mode

  const phoneNumber = "+6285841722279";
  const message = encodeURIComponent("Saya ingin mengetahui lebih detail tentang layanan Anda.");

  // Efek untuk loading dan WhatsApp button
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const interval = setInterval(() => {
      setShowWhatsApp(true);
      setTimeout(() => setShowWhatsApp(false), 30000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Efek untuk tombol scroll to top
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fungsi untuk toggle dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`font-sans relative ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 text-white z-50">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      ) : (
        <>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Banner />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Katalog />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Portofolio />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Tim />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Mitra />
          </motion.div>
          <Footer />

          {/* Tombol WhatsApp */}
          {showWhatsApp && (
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="ml-2">Chat dengan Kami</span>
            </a>
          )}

          {/* Tombol Scroll to Top */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 left-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <FaArrowUp className="text-xl" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default App;
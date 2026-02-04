import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bannerImage from "../assets/banner1.png";

const Banner: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+6285841722279";
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const scrollToKatalog = () => {
    const element = document.getElementById('katalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={bannerImage}
          alt="Digital Transformation Banner"
          className="w-full h-full object-cover brightness-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 lg:px-12 max-w-5xl mx-auto">
        {/* Title with Parallax Effect */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Transformasi Digital
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Bersama{" "}
            </span>
            <span className="text-white">Logic Frame</span>
          </h2>
        </motion.div>

        {/* Description with Fade In */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          Solusi cerdas untuk kebutuhan bisnis dan teknologi Anda. 
          Wujudkan inovasi digital yang mengakselerasi pertumbuhan bisnis.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-10 mb-8"
        >
          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400">50+</h3>
            <p className="text-sm md:text-base text-gray-300 mt-1">Proyek Selesai</p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400">100+</h3>
            <p className="text-sm md:text-base text-gray-300 mt-1">Klien Puas</p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">5+</h3>
            <p className="text-sm md:text-base text-gray-300 mt-1">Tahun Pengalaman</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <button
            onClick={handleWhatsAppClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Konsultasi Gratis
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={scrollToKatalog}
            className="px-8 py-4 backdrop-blur-lg bg-white/10 text-white rounded-full text-lg font-semibold border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40"
          >
            Lihat Layanan
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/banner1.png";

const Banner: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+6285841722279";
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen flex items-center justify-center bg-[#0f172a]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Banner Illustration"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 lg:px-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Transformasi Digital
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          Bersama <span className="text-white">Logic Frame</span>
        </motion.h4>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-300"
        >
          Solusi cerdas untuk kebutuhan bisnis dan teknologi Anda. Ciptakan masa
          depan yang lebih inovatif.
        </motion.p>

        {/* Glassmorphism Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg"
        >
          <button
            onClick={handleWhatsAppClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            Mulai Sekarang
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;

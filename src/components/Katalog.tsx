import React from 'react';
import { motion } from 'framer-motion';

import imageTFCA9 from '../assets/product/tfca9.png';
import imageTNWK from '../assets/product/tnwk.png';
import imageHioto from '../assets/product/hioto.png';
import imageLskk from '../assets/product/lskk.png';
import imageSSA from '../assets/product/ssa.png';
import imagePetik from '../assets/product/petik.png';
import imageSmartSystem from '../assets/product/ss.png';
import imageDtc from '../assets/product/dtc.png';
import imageConservasi from '../assets/product/conservasi.png';
import imageASPRG from '../assets/product/asprg.jpg';
import imageLSKKStudio from '../assets/product/lskkstudio.jpg';
import imageCariscoVariasi from '../assets/product/carisco-variasi.jpeg';
import imageAndiBekam from '../assets/product/andi-bekam.jpeg';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  url?: string;
  tags?: string[];
}

const products: Product[] = [
  { id: 1, name: 'TFCA 9', image: imageTFCA9, description: 'Tropical Forest Conservation Action for Sumatera (TFCA-Sumatera)', url: 'https://tfca9.pptik.id', tags: ['Web', 'Konservasi'] },
  { id: 2, name: 'Taman Nasional Way Kambas (TNWK)', image: imageTNWK, description: 'Website Informasi Taman Nasional Way Kambas (TNWK)', url: 'https://tnwk.pptik.id', tags: ['Web', 'Pariwisata'] },
  { id: 3, name: 'Hioto', image: imageHioto, description: 'Website Produk Hioto PT. LSKK', url: 'https://hioto.pptik.id', tags: ['Web', 'Product'] },
  { id: 4, name: 'PT. LSKK', image: imageLskk, description: 'Website Company Profile PT. Langgeng Sejahtera Kreasi Komputasi', url: 'https://www.lskk.co.id', tags: ['Web', 'Corporate'] },
  { id: 5, name: 'Smart System Academy', image: imageSSA, description: 'Website Smart System Academy', url: 'https://academy.smartsystem.id', tags: ['Web', 'Education'] },
  { id: 6, name: 'Yayasan Petik', image: imagePetik, description: 'Website Yayasan Teknologi, dan Kewirausahaan dalam Pemberdayaan Masyarakat ', url: 'https://www.petik.id', tags: ['Web', 'NGO'] },
  { id: 7, name: 'SMART SYSTEM ID', image: imageSmartSystem, description: 'Website SMART SYSTEM ID', url: 'https://www.smartsystem.id', tags: ['Web', 'Corporate'] },
  { id: 8, name: 'DTC', image: imageDtc, description: 'Website Digital Transformasi Center', url: 'https://dtc.pptik.id', tags: ['Web', 'Technology'] },
  { id: 9, name: 'PPTIK CONSERVASI', image: imageConservasi, description: 'Website PPTIK CONSERVASI', url: 'https://conservation.pptik.id', tags: ['Web', 'Konservasi'] },
  { id: 10, name: 'ASPRG', image: imageASPRG, description: 'Website ASP Research Group', url: 'https://asprg.smartsystem.id', tags: ['Web', 'Research'] },
  { id: 11, name: 'LSKK Studio', image: imageLSKKStudio, description: 'Website LSKK Studio', url: 'https://studio.lskk.co.id', tags: ['Web', 'Studio'] },
  { id: 13, name: 'Carisco Variasi', image: imageCariscoVariasi, description: 'Website Carisco Variasi', url: 'https://carisco-variasi.sta.my.id', tags: ['Web', 'Company Profile'] },
  { id: 13, name: 'Andi Bekam', image: imageAndiBekam, description: 'Website Bekam Andi', url: 'https://bekam-andi.sta.my.id', tags: ['Web', 'Company Profile'] },
];

const Katalog: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="katalog" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Katalog Produk
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lihat berbagai proyek dan solusi digital yang telah kami kembangkan untuk klien kami
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Tags */}
                {product.tags && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Button */}
                <button
                  onClick={() => product.url && window.open(product.url, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                >
                  Lihat Detail
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Katalog;

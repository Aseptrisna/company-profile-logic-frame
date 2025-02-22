import React from 'react';

// Import gambar dari src/assets/
import imageTFCA9 from '../assets/product/tfca9.png';
import imageTNWK from '../assets/product/tnwk.png';
import imageHioto from '../assets/product/hioto.png';
import imageLskk from '../assets/product/lskk.png';
import imageSSA from '../assets/product/ssa.png';
import imagePetik from '../assets/product/petik.png';
import imageSmartSystem from '../assets/product/ss.png';
import imageDtc from '../assets/product/dtc.png';
import imageConservasi from '../assets/product/conservasi.png';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  url?: string;
}

const products: Product[] = [
  { id: 1, name: 'TFCA 9', image: imageTFCA9, description: 'Tropical Forest Conservation Action for Sumatera (TFCA-Sumatera)', url: 'https://tfca9.pptik.id' },
  { id: 2, name: 'Taman Nasional Way Kambas (TNWK)', image: imageTNWK, description: 'Website Informasi Taman Nasional Way Kambas (TNWK)', url: 'https://tnwk.pptik.id' },
  { id: 3, name: 'Hioto', image: imageHioto, description: 'Website Produk Hioto PT. LSKK', url: 'https://hioto.pptik.id' },
  { id: 4, name: 'PT. LSKK', image: imageLskk, description: 'Website Company Profile PT. Langgeng Sejahtera Kreasi Komputasi', url: 'https://www.lskk.co.id' },
  { id: 5, name: 'Smart System Academy', image: imageSSA, description: 'Website Smart System Academy', url: 'https://academy.smartsystem.id' },
  { id: 6, name: 'Yayasan Petik', image: imagePetik, description: 'Website Yayasan Teknologi, dan Kewirausahaan dalam Pemberdayaan Masyarakat ', url: 'https://www.petik.id' },
  { id: 7, name: 'SMART SYSTEM ID', image: imageSmartSystem, description: 'Website SMART SYSTEM ID', url: 'https://www.smartsystem.id' },
  { id: 8, name: 'DTC', image: imageDtc, description: 'Website Digital Transformasi Center', url: 'https://dtc.pptik.id' },
  { id: 9, name: 'PPTIK CONSERVASI', image: imageConservasi, description: 'Website PPTIK CONSERVASI', url: 'https://conservation.pptik.id' },
];

const Katalog: React.FC = () => {
  return (
    <section id="katalog" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Katalog Produk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <button
                  onClick={() => product.url && window.open(product.url, '_blank')}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Katalog;

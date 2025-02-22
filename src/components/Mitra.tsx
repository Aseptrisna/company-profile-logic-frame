import React from 'react';
import imageLskk from '../assets/mitra/lskk.jpeg';
import imagePustekhan from '../assets/mitra/pustekhan.jpeg';

interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
}

const Mitra: React.FC = () => {
  const partners: Partner[] = [
    { id: 1, name: 'PT. LSKK', logo:imageLskk, website: 'https://www.lskk.co.id' },
    { id: 2, name: 'Pustekhan ITB', logo: imagePustekhan, website: 'https://pustekhan.itb.ac.id' },
  ];

  return (
    <section id="mitra" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mitra Kami</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-40 h-40"
            >
              <img src={partner.logo} alt={partner.name} className="h-20 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mitra;

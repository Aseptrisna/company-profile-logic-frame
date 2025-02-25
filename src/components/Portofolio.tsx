import React, { useState, useEffect } from "react";
import projects from "../data/projects";

const Portofolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark"); // Default dark mode aktif
  }, []);

  return (
    <div className="py-16 bg-gray-900 text-white transition-all">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Portofolio Projek Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2"
            >
              ✖
            </button>
            <img src={selectedImage} alt="Detail" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portofolio;

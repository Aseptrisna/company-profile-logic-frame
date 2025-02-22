import React from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// Import gambar dari src/assets/team
import imageAsep from "../assets/team/asep.jpg";
import imageDiko from "../assets/team/diko.jpg";
import imageRomi from "../assets/team/romi.jpeg";
import imageBudi from "../assets/team/budi.jpg";
import imageBram from "../assets/team/bram.jpeg";
import imageAji from "../assets/team/aji.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  urlLinkedin?: string;
  urlIg?: string;
  urlWebsite?: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Asep Trisna Setiawan",
    role: "Lead Software Engineer & CEO",
    image: imageAsep,
    urlWebsite: "https://asep-trisna-setiawan.sta.my.id",
  },
  {
    id: 2,
    name: "Diko Prasojo",
    role: "UI/UX Designer & Creative Strategist",
    image: imageDiko,
    urlIg: "https://www.instagram.com/nafassantuy",
  },
  {
    id: 3,
    name: "Romi Ardianto",
    role: "Marketing & Creative Strategist",
    image: imageRomi,
    urlIg: "https://www.instagram.com/mr.romiardianto",
  },
  {
    id: 4,
    name: "Rachmad Budianto",
    role: "Frontend Developer",
    image: imageBudi,
    urlWebsite: "https://rachmadbud.github.io",
  },
  {
    id: 5,
    name: "Bram Krisna Danu",
    role: "Backend Developer",
    image: imageBram,
    urlLinkedin: "https://id.linkedin.com/in/bram-krisna-danu-b33b771a3",
  },
  {
    id: 6,
    name: "M. Aji Perdana",
    role: "AI/ML Engineer",
    image: imageAji,
    urlWebsite: "https://portfolio-aji.vercel.app",
  },
];

const Tim: React.FC = () => {
  return (
    <section id="tim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Tim Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
            >
              {/* Gambar Profil */}
              <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-blue-500 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nama dan Role */}
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                {member.role}
              </p>

              {/* Ikon Sosial Media */}
              <div className="mt-auto flex justify-center space-x-4">
                {member.urlLinkedin && (
                  <a
                    href={member.urlLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-2xl transition-transform transform hover:scale-110"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.urlIg && (
                  <a
                    href={member.urlIg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 text-2xl transition-transform transform hover:scale-110"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.urlWebsite && (
                  <a
                    href={member.urlWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 text-2xl transition-transform transform hover:scale-110"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tim;

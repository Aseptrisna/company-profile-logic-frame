import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

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
    urlWebsite:"https://planet.smartsystem.id/diko",
    urlLinkedin:"http://www.linkedin.com/in/diko-prasojo"
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
    urlIg: "https://www.instagram.com/rachmadbud?igsh=NnUzM3htZndqcG93&utm_source=qr",
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
    <section id="tim" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Tim Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bertemu dengan para profesional berbakat yang membuat semuanya terjadi
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center relative overflow-hidden border border-gray-100"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg group-hover:border-purple-500 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>

              {/* Name and Role */}
              <div className="relative z-10 text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {member.role}
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="relative z-10 flex justify-center space-x-4 mt-auto">
                {member.urlLinkedin && (
                  <a
                    href={member.urlLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
                {member.urlIg && (
                  <a
                    href={member.urlIg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`Instagram ${member.name}`}
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                )}
                {member.urlWebsite && (
                  <a
                    href={member.urlWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`Website ${member.name}`}
                  >
                    <FaGlobe className="text-xl" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tim;

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/Images/logo.png", alt: "Groupe Lauzon" },
  { src: "/Images/onyx_logo_-_new-copy.png", alt: "Mercedes-Benz" },
  { src: "/Images/onyx_logo_-1.png", alt: "Groupe Lauzon" },
  { src: "/Images/hlogo.png", alt: "Mercedes-Benz" },
  { src: "/Images/onyx_logo2 (1).png", alt: "Groupe Lauzon" },
  { src: "/Images/onyx_logo3 (1).png", alt: "Mercedes-Benz" },
];

const SlidingPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full min-h-[60vh] pt-0 bg-black text-white" id="second">
      {/* Section 1: Sliding Logos */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full bg-[#262424] text-white py-12 px-4 md:px-10 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          {/* Left Static Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-start items-center text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl px-4 md:px-20">
              Leading car care & <br />
              <span className="text-[#00DAFF] text-3xl sm:text-4xl font-bold whitespace-nowrap">
                Paint Protection Brands
              </span>
            </h3>
          </motion.div>

          {/* Sliding Logos */}
          <div className="w-full md:w-2/3 overflow-hidden relative flex justify-start">
            <div className="logo-slider">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="w-[100px] sm:w-[120px] h-[80px] mx-3 sm:mx-6 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Dealership Info */}
      <div className="w-full flex flex-col items-center justify-center my-10 p-4 sm:p-6 md:p-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-medium"
        >
          Quality & Sustainable{" "}
          <span className="font-bold text-[#00DAFF]">Car Care</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center px-4 text-sm sm:text-base md:text-xl max-w-2xl mt-2 text-gray-300"
        >
          We're committed to creating car care solutions that are effective,
          affordable, and sustainable for a cleaner car and a cleaner world.
        </motion.p>

        {/* Responsive Image Cards */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-10 md:mt-20">

          {/* PPF Card */}
          <Link href="/services/ppf" className="w-full md:w-[30%] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 sm:h-[28rem] rounded-2xl bg-[url('https://i.ibb.co/RkZp6xV1/PPF.jpg')] bg-cover bg-center cursor-pointer relative"
            >
              <motion.div className="absolute bottom-0 left-0 right-0 h-[30%] lg:mt-10 flex-col flex justify-center items-center bg-black bg-opacity-80 px-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">Paint Protection Film</h1>
                <button className="bg-white text-black font-medium px-4 py-2 rounded-md lg:mt-2">Know more</button>
              </motion.div>
            </motion.div>
          </Link>

          {/* GC Card */}
          <Link href="/services/gc" className="w-full md:w-[30%] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 sm:h-[28rem] rounded-2xl bg-[url('https://img.freepik.com/premium-photo/applying-nanoceramics-cars-car-paint-protection-concept_153608-1180.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740')] bg-cover bg-center cursor-pointer relative"
            >
              <motion.div className="absolute bottom-0 left-0 right-0 h-[30%] lg:mt-10 flex-col flex justify-center items-center bg-black bg-opacity-80 px-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">Graphene Coating</h1>
                <button className="bg-white text-black font-medium px-4 py-2 rounded-md lg:mt-2">Know more</button>
              </motion.div>
            </motion.div>
          </Link>

          {/* CC Card */}
          <Link href="/services/cc" className="w-full md:w-[30%] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 sm:h-[28rem] rounded-2xl bg-[url('https://i.ibb.co/fzzgjpFr/C-C.jpg')] bg-cover bg-center cursor-pointer relative"
            >
              <motion.div className="absolute bottom-0 left-0 right-0 h-[30%] lg:mt-10 flex-col flex justify-center items-center bg-black bg-opacity-80 px-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">Ceramic Coating</h1>
                <button className="bg-white text-black font-medium px-4 py-2 rounded-md lg:mt-2">Know more</button>
              </motion.div>
            </motion.div>
          </Link>

        </div>


        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-11 px-6 py-3 border-2 border-[#00DAFF] text-[#00DAFF] text-base sm:text-lg font-medium rounded-full flex items-center gap-2 hover:bg-[#00DAFF] hover:text-white transition-all duration-300"
        >
          <Link href="/services">Our services →</Link>
        </motion.button>
      </div>

      {/* CSS for Animation */}
      <style jsx>{`
        .logo-slider {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: max-content;
          transform: translateX(50%);
          animation: slideLeft 15s linear infinite;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(50%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SlidingPage;
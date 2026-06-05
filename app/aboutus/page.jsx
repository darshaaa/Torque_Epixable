"use client";

import React, { useRef, useState, useEffect } from "react";
import Navlinks from "../Navlinks/Navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Components/Footer";

const Page = () => {
  const images = [
    "https://i.ibb.co/WNxHZYT6/TQ2.jpg",
    "https://i.ibb.co/NgNcFj5p/TQ3.jpg",
    "https://i.ibb.co/xKPFrKDJ/TQ1.jpg",
  ];

  const img = [
    "https://i.ibb.co/6RT7j6Nr/2025-05-07.jpg",
    "https://i.ibb.co/84SL0b6S/TQ4.jpg",
    "https://i.ibb.co/wh1wKb02/unnamed.jpg",
  ];

  const scrollRef1 = useRef(null);
  const { scrollYProgress: progress1 } = useScroll({
    target: scrollRef1,
    offset: ["start end", "end start"],
  });
  const xRightToLeft = useTransform(progress1, [0, 1], ["40%", "-30%"]);

  const scrollRef2 = useRef(null);
  const { scrollYProgress: progress2 } = useScroll({
    target: scrollRef2,
    offset: ["start end", "end start"],
  });
  const xLeftToRight = useTransform(progress2, [0, 1], ["-30%", "40%"]);

  // ✅ Safe screen width check
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 640);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      {/* Top Navigation */}
      <Navlinks isComplete={true} />

      {/* Hero Section */}
      <div className="w-full flex justify-center px-4 pt-10 pb-20">
        <div
          className="relative w-full max-w-[1200px] h-[600px] top-20 rounded-[30px] overflow-hidden bg-cover bg-center shadow-2xl transition-all duration-500"
          style={{
            backgroundImage: `url(https://i.ibb.co/84SL0b6S/TQ4.jpg)`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-10 text-white">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold mb-4 leading-tight drop-shadow-md">
              About
            </h1>
            <p className="text-[10px] lg:text-[15px] sm:text-[17px] md:text-[20px] max-w-4xl font-light leading-relaxed drop-shadow-sm">
              Torque Detailing Studio, located in Koramangala, Bengaluru, is a
              premium vehicle detailing center specializing in high-quality
              services such as paint protection films, ceramic coating, graphene
              coating, sun films, and vehicle wraps. The studio is renowned for
              its skilled team of experienced detailers who use only the best
              imported products, ensuring top-tier results. One of their standout
              offerings is the self-healing paint protection film, which offers
              exceptional durability and maintains a pristine finish. Torque
              Detailing Studio provides both warranty and guarantee for their
              products and services, ensuring peace of mind for every customer.
              Whether you’re looking to enhance the aesthetics or protect your
              vehicle, Torque Detailing delivers expert solutions with unmatched
              quality.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll-based Section 1: Right to Left */}
      <div
        ref={scrollRef1}
        className="w-full bg-black py-12 px-4 sm:px-10 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center min-w-full">
          {images.map((img, index) => (
            <motion.div
              key={index}
              style={{
                x: isDesktop ? xRightToLeft : 0,
                transition: "transform 0.6s ease-out",
              }}
              className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-[400px] sm:w-1/3"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll-based Section 2: Left to Right */}
      <div
        ref={scrollRef2}
        className="w-full bg-black py-12 px-4 sm:px-10 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center min-w-full">
          {img.map((img, index) => (
            <motion.div
              key={index}
              style={{
                x: isDesktop ? xLeftToRight : 0,
                transition: "transform 0.6s ease-out",
              }}
              className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-[400px] sm:w-1/3"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

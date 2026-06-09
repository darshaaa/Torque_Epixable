"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";

const allWorks = [
  {
    id: "1",
    title: "Porsche 911",
    category: "PPF",
    url: "https://i.ibb.co/84SL0b6S/TQ4.jpg",
  },
  {
    id: "2",
    title: "BMW X5",
    category: "Ceramic Coating",
    url: "https://i.ibb.co/WNxHZYT6/TQ2.jpg",
  },
  {
    id: "3",
    title: "Mini Cooper",
    category: "Car Wraps",
    url: "https://i.ibb.co/NgNcFj5p/TQ3.jpg",
  },
 
  {
    id: "5",
    title: "Royal Enfield",
    category: "Ceramic Coating",
    url: "https://i.ibb.co/xKPFrKDJ/TQ1.jpg",
  },
  {
    id: "6",
    title: "Mercedes Benz",
    category: "Car Wraps",
    url: "https://i.ibb.co/6RT7j6Nr/2025-05-07.jpg",
  },
  
  
 
];

const categories = ["All", "PPF", "Ceramic Coating", "Car Wraps"];

const Page = () => {
  const [activeFilter, setActiveFilter] = useState("All");
 const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeFilter === "All"
      ? allWorks
      : allWorks.filter((w) => w.category === activeFilter);

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      <Navlinks isComplete={true} />

      {/* Hero Banner */}
      <div
        className="relative w-full h-[55vh] mt-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.ibb.co/84SL0b6S/TQ4.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#00DAFF] text-sm tracking-[0.3em] uppercase mb-3 font-medium"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          >
            Portfolio
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 h-[2px] w-16 bg-[#00DAFF]"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 py-10 px-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 uppercase tracking-wider ${
              activeFilter === cat
                ? "bg-[#00DAFF] border-[#00DAFF] text-black"
                : "bg-transparent border-white/30 text-white hover:border-[#00DAFF] hover:text-[#00DAFF]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          <AnimatePresence>
            {filtered.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm aspect-square"
                onClick={() => setLightbox({ url: work.url, title: work.title })}
              >
                <img
                  src={work.url}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-[#00DAFF] text-xs uppercase tracking-widest mb-1">
                    {work.category}
                  </span>
                  <h3 className="text-white text-base font-semibold">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-white/40 text-center py-20 text-sm">No works found.</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.url}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-sm"
              />
              <div className="mt-3 flex items-center justify-between">
                <p className="text-white font-medium text-lg">{lightbox.title}</p>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-white/50 hover:text-[#00DAFF] text-sm uppercase tracking-widest transition-colors"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Page;
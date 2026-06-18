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
    type: "image",
  },
  {
    id: "2",
    title: "Mini Cooper Countryman",
    category: "PPF",
    url: "/images/ppf1.jpg",
    type: "image",
  },
  {
    id: "3",
    title: "BE 6",
    category: "PPF",
    url: "/images/ppf2.jpg",
    type: "image",
  },
  {
    id: "4",
    title: "Fortuner Legender",
    category: "PPF",
    url: "/images/ppf3.jpg",
    type: "image",
  },
  {
    id: "5",
    title: "BMW X5",
    category: "PPF",
    url: "/images/ppf4.jpg",
    type: "image",
  },
  {
    id: "6",
    title: "Lexus",
    category: "PPF",
    url: "/images/ppf6.jpg",
    type: "image",
  },
  {
    id: "7",
    title: "Fortuner Legender",
    category: "PPF",
    url: "/images/ppf7.jpg",
    type: "image",
  },

  {
    id: "ppf-v1",
    title: "PPF Installation",
    category: "PPF",
    url: "https://res.cloudinary.com/dnr4pvgzd/video/upload/v1781762337/ppf11_pudcuh.mp4",
    type: "video",
  },
  {
    id: "8",
    title: "BMW X5",
    category: "Ceramic Coating",
    url: "https://i.ibb.co/WNxHZYT6/TQ2.jpg",
    type: "image",
  },
  {
    id: "9",
    title: "Mercedes Benz GLE",
    category: "Ceramic Coating",
    url: "/images/cc1.jpg",
    type: "image",
  },
  {
    id: "10",
    title: "Audi Q5",
    category: "Ceramic Coating",
    url: "/images/cc2.jpg",
    type: "image",
  },
  {
    id: "11",
    title: "Defender",
    category: "Ceramic Coating",
    url: "/images/cc3.jpg",
    type: "image",
  },
  {
    id: "12",
    title: "BMW X5",
    category: "Ceramic Coating",
    url: "/images/cc4.jpg",
    type: "image",
  },
  {
    id: "13",
    title: "Wolkswagen",
    category: "Graphene Coating",
    url: "/images/gc1.jpg",
    type: "image",
  },
  {
    id: "14",
    title: "Royal Enfield",
    category: "Bikes",
    url: "https://i.ibb.co/xKPFrKDJ/TQ1.jpg",
    type: "image",
  },
  {
    id: "15",
    title: "Vstrom",
    category: "Bikes",
    url: "/images/bikes1.jpg",
    type: "image",
  },
  {
    id: "16",
    title: "Kawasaki 900",
    category: "Bikes",
    url: "/images/bikes2.jpg",
    type: "image",
  },
  {
    id: "17",
    title: "Pulsar NS400",
    category: "Bikes",
    url: "/images/bikes3.jpg",
    type: "image",
  },
  {
    id: "18",
    title: "Ducati",
    category: "Bikes",
    url: "/images/bikes4.jpg",
    type: "image",
  },
  {
    id: "19",
    title: "Triumph",
    category: "Bikes",
    url: "/images/bikes5.jpg",
    type: "image",
  },
  {
    id: "20",
    title: "BE6",
    category: "Graphene Coating",
    url: "/images/gc2.jpg",
    type: "image",
  },
  {
    id: "21",
    title: "Audi Q5",
    category: "Graphene Coating",
    url: "/images/gc3.jpg",
    type: "image",
  },
  {
    id: "22",
    title: "BE6",
    category: "Graphene Coating",
    url: "/images/gc4.jpg",
    type: "image",
  },
  {
    id: "bike-v1",
    title: "Bike Detailing",
    category: "Bikes",
    url: "https://res.cloudinary.com/dnr4pvgzd/video/upload/v1781763200/bikes7_ak0cd7.mp4",
    type: "video",
  },
  {
    id: "bike-v2",
    title: "Bike Coating",
    category: "Bikes",
    url: "https://res.cloudinary.com/dnr4pvgzd/video/upload/v1781763214/bikes8_uogntb.mp4",
    type: "video",
  },
  {
    id: "bike-v3",
    title: "Bike PPF",
    category: "Bikes",
    url: "https://res.cloudinary.com/dnr4pvgzd/video/upload/v1781763231/bikes9_xzc9kq.mp4",
    type: "video",
  },
];

const categories = ["All", "PPF", "Ceramic Coating", "Graphene Coating", "Bikes"];

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
                onClick={() => setLightbox({ url: work.url, title: work.title, type: work.type })}
              >
                {work.type === "video" ? (
  <>
   <video
  src={work.url}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  muted
  autoPlay
  loop
  playsInline
  preload="metadata"
  onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
/>
  </>
                ) : (
                  <img
                    src={work.url}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
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
              {lightbox.type === "video" ? (
                <video
                  src={lightbox.url}
                  className="w-full max-h-[80vh] object-contain rounded-sm"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={lightbox.url}
                  alt={lightbox.title}
                  className="w-full max-h-[80vh] object-contain rounded-sm"
                />
              )}
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
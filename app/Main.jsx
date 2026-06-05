"use client";

import React, { useRef, useState, useEffect } from "react";
import Hero from "./Components/Hero";
import SlidingPage from "./Components/SlidingPage";
import Testimonials from "./Components/Details";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import ChatBox from "./Chat_Bot/ChatBox";
import { Toaster } from "react-hot-toast";
import SliderPage from "./Components/SliderPage";
import Gallery from "./Components/Gallery";
import Instagrampost from "./Components/Instagrampost";
import Experience from "./Components/Experience";

const Main = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked — waiting for user interaction");
      });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch((err) => {
          console.log("Music failed to start on unmute:", err);
        });
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden relative">
      <Toaster position="top-right" reverseOrder={false} />

      <audio
        ref={audioRef}
        src="/kusamification-smoke-of-life_limp-bizkit-take-a-look-around.mp3"
        loop
        hidden
        muted
        playsInline
      />

      <button
        onClick={toggleAudio}
        className="fixed lg:right-10 right-6 lg:bottom-30 bottom-20 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 z-50"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      <Hero />
      <SlidingPage />
      <Experience />
      <Testimonials />
      <SliderPage />
      <Gallery />
      <Instagrampost />
      <Footer />
    </div>
  );
};

export default Main;

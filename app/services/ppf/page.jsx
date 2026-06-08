"use client";

import React, { useRef } from "react";
import Navlinks from "../../Navlinks/Navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../Components/Footer";

const benefits = [
  {
    icon: "/icons/instant.png",
    title: "Instant healing properties",
    description: "Paint Protection Films (PPFs), especially those marketed as instant healing or self-healing, have the ability to repair minor scratches and imperfections without external heat application",
  },
  {
    icon: "/icons/extreme.png",
    title: "Extreme high gloss finish",
    description: "An extreme high gloss car finish refers to a paint job that achieves a mirror-like, exceptionally deep shine, often resembling a polished, wet look",
  },
  {
    icon: "/icons/hydrophobic.png",
    title: "Hydrophobic top coat",
    description: "Hydrophobic coatings provide a 'water-repellent' seal on a vehicle. They're great for 'repelling' water and dirt, which can make it easier when it comes to cleaning your car.",
  },
  {
    icon: "/icons/advanced.png",
    title: "Advanced chemical resistance",
    description: "Advanced chemical resistance in cars is primarily achieved through specialized coatings, particularly graphene and ceramic coatings, which form a protective layer on the paint, enhancing its durability and resistance to various chemical agents.",
  },
  {
    icon: "/icons/high.png",
    title: "High temperature resistance",
    description: "High-temperature resistance in cars is crucial for ensuring the durability and performance of various components, particularly those exposed to engine heat or exhaust fumes.",
  },
  {
    icon: "/icons/seamless.png",
    title: "Seamless finishing",
    description: "A seamless finishing car refers to the overall refinement and quality of a car's exterior and interior surfaces, including the paint, trim, and materials used in the car's construction.",
  },
];

const layers = [
  {
    number: "01",
    title: "Top Coat",
    description:
      "The outermost layer featuring self-healing technology that helps remove light scratches and swirl marks. It also resists stains and keeps the film looking clear and glossy.",
  },
  {
    number: "02",
    title: "Clear Coat",
    description:
      "Enhances the vehicle's shine while protecting against minor abrasions and environmental contaminants. Available in gloss, satin, or matte finishes to match your preference.",
  },
  {
    number: "03",
    title: "Polyurethane Core Layer",
    description:
      "The thickest and strongest layer of the film, designed to absorb impacts from stone chips, road debris, and everyday hazards. This is the primary protection layer of the PPF.",
  },
  {
    number: "04",
    title: "Adhesive Layer",
    description:
      "A high-performance adhesive that securely bonds the film to your vehicle's paint surface. It ensures long-lasting protection without damaging the original paint.",
  },
  {
    number: "05",
    title: "Release Liner",
    description:
      "A protective backing layer that shields the adhesive before installation. It is removed during application to ensure a clean and precise fit.",
  },
];

export default function page() {

  const galleryItems = [
  {
    type: "video",
    src: "/videos/ppfreel1-new.mp4",
  },
  {
    type: "video",
    src: "/videos/ppfreel2-new.mp4",
  },
  {
    type: "image",
    src:"/images/ppf4.jpg",
  },
  {
    type: "image",
    src: "/images/ppf5.jpg",
  },
];

  const scrollRef1 = useRef(null);
  const { scrollYProgress: progress1 } = useScroll({
    target: scrollRef1,
    offset: ["start end", "end start"],
  });
  const xRightToLeft = useTransform(progress1, [0, 1], ["40%", "0%"]);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navlinks isComplete={true} />

      {/* Hero Section */}
      <div
        className="w-full h-[100vh] lg:h-[80vh] 2xl:h-[60vh] flex items-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://lakdfs.sirv.com/Images/PPF.jpg"')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="text-left lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:mt-20 font-bold mb-4 text-cyan-300 tracking-tight">
              Paint Protection Film
            </h1>
            <p className="text-white mt-4 md:mt-[5%] w-full text-sm md:text-base lg:text-[17px] leading-relaxed max-w-lg">
              PPF is a conformable and optically clear film available in a variety of
              thickness (measured in microns) and colours. They are multilayered and
              offer a self healing top coat capable of reforming itself after being
              scuffed or scratched, maintaining clarity and having hydrophobic
              properties, similar to ceramic coating.
            </p>
            <a
              href="https://wa.me/919686968315?text=I%20want%20to%20know%20more%20about%20Paint%20Protection%20Film"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 font-semibold rounded-xl mt-6 cursor-pointer text-black h-11 bg-white">
                Book Now
              </button>
            </a>
          </div>

          {/* Right Video */}
          <div className="lg:w-1/2 flex justify-center mt-40">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[550px] h-[320px] lg:h-[380px] object-cover rounded-2xl shadow-2xl"
            >
              <source src="/videos/ppf.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full py-8 md:py-12 lg:py-16">
        <div
          ref={scrollRef1}
          className="w-full bg-black py-6 md:py-12 px-4 sm:px-6 md:px-10 lg:px-4 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-6 items-center justify-center">
            {galleryItems.map((item, index) => (
  <motion.div
    key={index}
    style={{
      x: isDesktop ? xRightToLeft : 0,
      transition: "transform 0.6s ease-out",
    }}
    className="rounded-xl overflow-hidden shadow-lg w-full max-w-sm md:max-w-md lg:max-w-[400px] md:w-1/3"
  >
    {item.type === "video" ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-48 md:h-56 lg:h-[250px] object-cover rounded-xl"
      >
        <source src={item.src} type="video/mp4" />
      </video>
    ) : (
      <img
        src={item.src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-48 md:h-56 lg:h-[250px] object-cover rounded-xl"
      />
    )}
  </motion.div>
))}
          </div>
        </div>
      </div>

      {/* What Is Section */}
      <div className="w-full px-4 gap-80 2xl:gap-0 flex justify-center items-center md:px-0 py-8 md:py-12 lg:py-16">
        <div className="lg:flex lg:items-start">
          <div className="md:pl-[4%] 2xl:ml-50 lg:pl-0 lg:flex-1 mb-8 md:mb-16 lg:mb-0">
            <div className="border-l-4 md:border-l-5 border-cyan-300 pl-4 md:pl-7 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-white mb-2">What Is</h2>
              <div className="text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-2">
                Paint Protection Film?
              </div>
              <div className="space-y-4 mt-4 md:mt-6 text-gray-300 text-sm leading-relaxed max-w-full md:max-w-xl lg:max-w-140">
                <p className="text-justify">
                  Paint Protection Film (PPF) is a transparent polyurethane film applied to your vehicle's painted surfaces to protect them from stone chips, road debris, bug splatters, swirl marks, minor abrasions and other damages.
                </p>
                <p className="text-justify">
                  Designed to preserve your vehicle's factory finish, PPF acts as a sacrificial layer against everyday wear and tear while maintaining the original look of the paint. With self-healing properties and long-term durability, it helps keep your car looking newer for longer and protects its resale value.
                </p>
              </div>
            </div>

            {/* Two Column Benefits */}
            <div className="w-full px-4 md:px-0 pt-5 pb-6 md:py-8 lg:pt-5 lg:pb-10 md:pl-[4%] lg:pl-0">
              <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-50 2xl:gap-60 bg-black">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
                    Invisible and Durable Protection:
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-65">
                    It helps by shielding your car's paint from scratches, rock chips, bird droppings, and UV rays — all without changing how it looks, ensuring long-term beauty and value
                  </p>
                </div>
                <div className="flex-1 2xl:ml-[-60%] lg:ml-[-50%]">
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
                    Preserves Value and Appearance:
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-70">
                    Paint Protection Film (PPF) keeps your car looking new by preventing damage. This helps maintain its resale value and showroom-like finish for years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Image — fully visible */}
          <div className="flex 2xl:ml-40 justify-center md:justify-start w-full px-4 md:px-0 lg:flex-shrink-0 lg:w-auto lg:mr-8">
            <img
              src="/images/layers.png"
             className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:ml-[4%] lg:-ml-50 rounded-2xl"
              style={{ marginRight: '40px', objectFit: 'contain', objectPosition: 'center' }}
              alt="PPF Layers"
            />
          </div>
        </div>
      </div>

      {/* 5 Layers Section */}
      <div className="w-full px-4 md:px-[4%] lg:px-[6%] 2xl:px-[13.5%] py-12 md:py-16">
        <h2 className="text-lg md:text-xl font-normal text-gray-400 mb-1">Structure of</h2>
        <div className="text-3xl md:text-4xl font-bold text-white mb-10">
          5 Layers of PPF
        </div>
        <div className="flex flex-col gap-0">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="flex items-start gap-5 md:gap-8 py-6 border-b border-white/10 group"
            >
              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-cyan-300/40 group-hover:text-cyan-300 transition-colors duration-300 min-w-[48px] md:min-w-[64px] leading-none pt-1">
                {layer.number}
              </div>
              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-start md:gap-12 flex-1">
                <div className="text-base md:text-lg font-semibold text-white md:min-w-[220px] mb-2 md:mb-0">
                  {layer.title}
                </div>
                <div className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  {layer.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full 2xl:ml-[13.5%] px-4 md:px-0 py-8 md:py-12 lg:py-16 md:pl-[4%] lg:pl-[6%]">
        <div className="mt-8 md:mt-12 lg:mt-0">
          <div className="mb-6 lg:mb-6">
            <h2 className="text-lg md:text-xl font-normal text-gray-400 mb-2">Benefits of</h2>
            <div className="text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-3">
              Paint Protection Film
            </div>
          </div>

          {/* Benefits Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 md:gap-6 lg:gap-25 pt-2 lg:pt-3">
            {benefits.slice(0, 5).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:flex-1 lg:min-w-33 lg:max-w-25">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-30 flex mb-2 lg:mb-2 p-2">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-full h-full object-contain text-blue-400"
                  />
                </div>
                <div className="text-xs md:text-sm lg:text-[16px] font-semibold text-white lg:-mt-2 leading-tight text-center">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
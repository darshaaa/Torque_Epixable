"use client";

import React, { useRef } from "react";
import Navlinks from "../../Navlinks/Navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../Components/Footer";

const benefits = [
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Enhances Appearance",
    description: "Paint Protection Films (PPFs), especially those marketed as instant healing or self-healing, have the ability to repair minor scratches and imperfections without external heat application",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Protects Paint and Interior",
    description: "An extreme high gloss car finish refers to a paint job that achieves a mirror-like, exceptionally deep shine, often resembling a polished, wet look",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Improves Hygiene",
    description: "Hydrophobic coatings provide a 'water-repellent' seal on a vehicle. They're great for 'repelling' water and dirt, which can make it easier when it comes to cleaning your car.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Prevents Long-Term Damage",
    description: "Advanced chemical resistance in cars is primarily achieved through specialized coatings, particularly graphene and ceramic coatings, which form a protective layer on the paint, enhancing its durability and resistance to various chemical agents.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Boosts Resale Value",
    description: "High-temperature resistance in cars is crucial for ensuring the durability and performance of various components, particularly those exposed to engine heat or exhaust fumes.",
  },
];


export default function page() {

    const images = [
    "https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193592.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/beautiful-car-interior-clean-up-service_23-2149212256.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193565.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://lakdfs.sirv.com/Images/AD.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-left ml-[6%] lg:ml-[5%] 2xl:ml-[18%] mb-10 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:mt-20 font-bold mb-4 text-cyan-300 tracking-tight">
            Auto Detailing
          </h1>
          <p className="text-white mt-4 md:mt-[5%] w-full md:w-[90%] lg:w-[90%] text-sm md:text-base lg:text-[17px] leading-relaxed max-w-xs md:max-w-md lg:max-w-lg">
 Give your vehicle a complete makeover, inside and out. Experience a sparkling exterior and a refreshed interior with our meticulous cleaning and restoration service.
          </p>
          <a
            href="https://wa.me/919686968315?text=I%20want%20to%20know%20more%20about%20Auto%20Detailing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-32 md:w-35 font-semibold rounded-xl mt-6 md:mt-[4%] cursor-pointer text-black h-11 bg-white px-4">
              Book Now
            </button>
          </a>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full py-8 md:py-12 lg:py-16">
        <div
          ref={scrollRef1}
          className="w-full bg-black py-6 md:py-12 px-4 sm:px-6 md:px-10 lg:px-4 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-6 items-center justify-center">
            {images.map((img, index) => (
              <motion.div
                key={index}
                style={{ x: isDesktop ? xRightToLeft : 0, transition: "transform 0.6s ease-out" }}
                className="rounded-xl overflow-hidden shadow-lg w-full max-w-sm md:max-w-md lg:max-w-[400px] md:w-1/3"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 md:h-56 lg:h-[250px] object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* What Is Section */}
      <div className="w-full px-4 gap-80 2xl:gap-0 flex justify-center items-center md:px-0 py-8 md:py-12 lg:py-16 ">
        <div className="lg:flex lg:items-start">
          <div className="md:pl-[4%] 2xl:ml-50 lg:pl-0 lg:flex-1 mb-8 md:mb-16 lg:mb-0">
            <div className="border-l-4 md:border-l-5 border-cyan-300 pl-4 md:pl-7 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-white mb-2">What Is</h2>
              <div className="text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-2">
                Auto Detailing?
              </div>
              <div className="space-y-4 mt-4 md:mt-6 text-gray-300 text-sm leading-relaxed max-w-full md:max-w-xl lg:max-w-140">
                <p className="text-justify">
Auto detailing is a meticulous cleaning, restoration, and finishing process for vehicles, aimed at maintaining and enhancing both the interior and exterior condition. It goes far beyond a simple car wash by addressing every nook and cranny with specialized techniques and products. Exterior detailing involves washing, clay bar treatment, polishing, and waxing to remove contaminants, scratches, and oxidation, resulting in a glossy, protected finish. 
                </p>
                <p className="text-justify">
Interior detailing includes vacuuming, deep cleaning carpets and upholstery, conditioning leather, and treating plastics to restore and protect surfaces. Detailing improves the vehicle’s appearance, protects it from environmental damage, and helps preserve its value over time. It also enhances the driving experience by creating a cleaner, fresher environment. Professional auto detailing not only makes cars look like new but can extend the life of paint, trim, and interior materials. It is an essential maintenance practice for vehicle enthusiasts and owners wanting to keep their cars in top condition.
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
 Shields your car’s paint with a clear, tough layer that resists damage and lasts long.
                    </p>
                  </div>
                  <div className="flex-1 2xl:ml-[-60%] lg:ml-[-50%]">
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
                      Preserves Value and Appearance:
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-70">
            Keeps your vehicle looking new, maintaining its aesthetic appeal and protecting its resale or trade-in value.
                    </p>
                  </div>
                </div>
              </div>
          </div>
          
          {/* Side Image */}
          <div className="flex 2xl:ml-40 justify-center md:justify-start w-full px-4 md:px-0 lg:flex-shrink-0 lg:w-auto lg:mr-8">
            <img 
              src="https://img.freepik.com/premium-photo/cleaning-interior-luxury-car-with-help-chemistry-with-nanotechnology_155027-907.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740"
              className="w-full max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg h-64 md:h-80 2xl:h-125 2xl:ml-[-140px] lg:h-[350px] xl:h-[400px] object-cover object-center mt-4 md:mt-8 lg:mt-0 md:ml-[4%] lg:ml-0 rounded-2xl"
              style={{ marginRight: '30px' }}
              alt="Car care process" 
            />
          </div>
        </div>

      </div>

      {/* Benefits Section */}
      <div className="w-full 2xl:ml-[13.5%] px-4 md:px-0 py-8 md:py-12 lg:py-16 md:pl-[4%] lg:pl-[6%]">
        <div className="mt-8 md:mt-12 lg:mt-0">
          <div className="mb-6 lg:mb-6">
            <h2 className="text-lg md:text-xl font-normal text-gray-400 mb-2">Benefits of</h2>
            <div className="text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-3">
              Auto Detailing
            </div>
          </div>

          {/* Benefits Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 md:gap-6 lg:gap-25 pt-2 lg:pt-3">
            {benefits.slice(0, 5).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:flex-1 lg:min-w-33 lg:max-w-25">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-26 flex mb-2 lg:mb-2 p-2">
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
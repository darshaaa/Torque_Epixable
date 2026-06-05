import React, { useState, useEffect } from "react";
import { X, Instagram, Facebook, Youtube } from "lucide-react";

const Menu = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    setAnimateIn(true);
    return () => setAnimateIn(false);
  }, []);

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Work", link: "/works" },
  { name: "Service", link: "/services" },
  { name: "Shop", link: "/shoppage" },
  { name: "About", link: "/aboutus" },
  { name: "Contact", link: "/contact" },
];


  return (
    <div 
      className={`fixed top-0 right-0 h-full z-9999999999999 bg-[#1d1d1d] text-white flex flex-col overflow-y-auto ${animateIn ? 'opacity-100' : 'opacity-0'} w-full sm:w-2/3 md:w-1/2 lg:w-1/3`} 
      style={{ transition: "opacity 0.4s ease" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <img 
          src="/Torque-PNG-02.png" 
          alt="Torque Logo" 
          className="h-5 sm:h-6 ml-2 sm:ml-4 md:ml-6" 
        />
        <button
          onClick={onClose}
          className="text-white cursor-pointer lg:w-15 lg:h-15 md:w-8 md:h-8 sm:h-8 sm:w-8 flex justify-center items-center rounded-full bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 transform hover:rotate-90 mr-2 sm:mr-4"
          aria-label="Close menu"
        >
          <X size={16} className="sm:w-5 sm:h-5 lg:w-28" />
        </button>
      </div>

      {/* Stylish HR */}
      <div className="px-4">
        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-600 to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 lg:mt- flex flex-col">
        {/* Navigation */}
        <nav className="w-full px-6 lg:leading-tight sm:px-8 md:px-10 mt-4 sm:mt-6 md:mt-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="overflow-hidden py-2"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a
                href={item.link}
                className="relative anek lg:-mt-5 lg:text-[55px] tracking-tight inline-block text-2xl sm:text-3xl md:text-4xl font-normal leading-tight transition-all duration-300 hover:text-gray-400"
              >
                <span className="block truncate">{item.name}</span>
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Social Media Section */}
      <div className="pb-4 sm:pb-6 lg:ml-2 px-6 sm:px-8 md:px-10 mt-2">
        <h3 className="text-xs font-medium mb-2 opacity-80 uppercase">Socials</h3>
        <div className="flex lg:gap-6 gap-4">
          <a 
            href="https://www.instagram.com/torquedetailingstudio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-1 transition-all duration-300 hover:text-cyan-500"
          >
            <Instagram 
              size={14}
              className="transition-all duration-300 group-hover:scale-110" 
            />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61570408028536#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-1 transition-all duration-300 hover:text-cyan-500"
          >
            <Facebook 
              size={14} 
              className="transition-all duration-300 group-hover:scale-110" 
            />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCGI6Asw5sOPEOuOlRpnzFRQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-1 transition-all duration-300 hover:text-cyan-500"
          >
            <Youtube 
              size={14} 
              className="transition-all duration-300 group-hover:scale-110" 
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        nav > div {
          animation: fadeInUp 0.5s forwards;
          animation-delay: calc(0.1s * var(--index));
          opacity: 0;
        }

        nav > div:nth-child(1) { --index: 1; }
        nav > div:nth-child(2) { --index: 2; }
        nav > div:nth-child(3) { --index: 3; }
        nav > div:nth-child(4) { --index: 4; }
        nav > div:nth-child(5) { --index: 5; }
        nav > div:nth-child(6) { --index: 6; }
        
        @media (max-width: 640px) {
          nav > div {
            animation-delay: calc(0.05s * var(--index));
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
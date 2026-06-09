"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlitchLogo from "../Components/GlitchLogo";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import { usePathname } from "next/navigation";

const Navlinks = ({ isComplete }) => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isComplete) setShowNav(true);
  }, [isComplete]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNav && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-full z-[999999] transition-all duration-300 ${
            scrolled
              ? "bg-black/70 backdrop-blur-sm shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 h-[80px]">
            <GlitchLogo />

            <div className="hidden lg:flex text-xl items-center gap-10">
              <a
                href="/"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                Home
              </a>

              <a
                href="/aboutus"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/aboutus"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                About Us
              </a>

              <a
                href="/services"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/services"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                Services
              </a>

              <a
                href="/portfolio"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/portfolio"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                Portfolio
              </a>

              <a
                href="/shoppage"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/shoppage"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                Shop
              </a>

              <a
                href="/works"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/works"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                Works
              </a>

              <a
                href="/contact"
                className={`relative text-xl font-medium transition-all duration-300 ${
                  pathname === "/contact"
                    ? "text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-cyan-500"
                    : "text-white hover:text-cyan-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                Contact
              </a>

              <Cart />
            </div>

            <div className="lg:hidden">
              <Cart />
            </div>
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navlinks;
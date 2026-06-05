"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const quickLinks = [
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "About Us", link: "/aboutus" },
  ];

  const services = [
    { name: "Windshield Tint", link: "/services/wt" },
    { name: "Interior Detailing", link: "/services/id" },
    { name: "Exterior Detailing", link: "/services/ed" },
  ];

  const specialServices = [
    { name: "Graphene Coating", link: "/services/gc" },
    { name: "Ceramic Coating", link: "/services/cc" },
    { name: "Paint Protection", link: "/services/ppf" },
  ];

  return (
    <footer className="bg-black text-white py-5 md:py-10 px-4 sm:px-6 lg:px-10 w-full ">
      {/* Top Border Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        className="border-b border-gray-700"
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 text-center sm:text-left max-w-7xl mx-auto mt-10">
        {/* 1. Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="text-xl font-semibold">Quick Links</p>
          <ul className="space-y-2 text-gray-400">
            {quickLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, marginLeft: "10px", color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-sm sm:text-base"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 2. Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}

          className="space-y-3"
        >
          <p className="text-xl font-semibold">Services</p>
          <ul className="space-y-3 text-gray-400">
            {services.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-sm sm:text-base leading-relaxed break-words"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 3. Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3"
        >
          <p className="text-xl font-semibold">Special Services</p>
          <ul className="space-y-3 text-gray-400">
            {specialServices.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#00DAFF" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-sm sm:text-base leading-relaxed break-words"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 4. Contact Info + Socials */}
{/* 4. Contact Info + Socials */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  viewport={{ once: true }}
  className="space-y-4"
>
  <p className="text-xl font-semibold">Contact Us</p>
{/* Address with Google Maps link */}
<a
  href="https://www.google.com/maps?q=3-29,+4th+B+Cross,+Koramangala+Industrial+Layout,+Koramangala,+Bengaluru,+Karnataka+560034,+India"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 text-sm sm:text-base leading-relaxed hover:text-[#00DAFF] transition-colors duration-300 block"
>
  3-29, 4th B Cross, Koramangala Industrial Layout, Koramangala,
  Bengaluru, Karnataka 560034, India
</a>

  {/* Phone Numbers in Flex */}
  <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
    <a
      href="tel:+919686968315"
      className="text-[#00DAFF] font-semibold hover:underline"
    >
      +91 96869 68315
    </a>
    <a
      href="tel:+918884440944"
      className="text-[#00DAFF] font-semibold hover:underline"
    >
      +91 88844 40944
    </a>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center sm:justify-start gap-4 mt-4">
    {[
      {
        Icon: FaInstagram,
        href: "https://www.instagram.com/torquedetailingstudio",
      },
      {
        Icon: FaFacebookF,
        href: "https://www.facebook.com/torquedetailingstudio",
      },
      {
        Icon: FaYoutube,
        href: "https://www.youtube.com/channel/UCGI6Asw5sOPEOuOlRpnzFRQ",
      },
    ].map(({ Icon, href }, index) => (
      <motion.a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: "#00DAFF" }}
        transition={{ duration: 0.3 }}
        className="text-xl cursor-pointer"
      >
        <Icon />
      </motion.a>
    ))}
  </div>
</motion.div>


      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        className="border-t border-gray-700 mt-10 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto px-4"
      >
        <p className="mb-2 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-center sm:text-right text-sm text-gray-400 inline-flex items-center gap-2">
          Passionately developed by
          <span className="inline-flex items-center gap-2 font-semibold text-white">
            <a href="https://epixable.com/">
              <img
                src="/LOGO - WHITE-03.png"
                alt="Epixable"
                className="h-5 sm:h-6 w-auto"
              />
            </a>
          </span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";
import Navlinks from "../Navlinks/Navlinks";
import { Check } from 'lucide-react';
import Link from "next/link";
import Footer from "../Components/Footer";

const Page = () => {
  return (
    <div>
      <Navlinks isComplete={true} />
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-black" strokeWidth={2.5} />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-4">
            Thank you.
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Your request has been sent successfully.<br />
            Our team will connect with you shortly.
          </p>

          <Link href="/">
            <button className="w-40 cursor-pointer rounded-xl font-medium h-10 bg-cyan-500">Back to Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

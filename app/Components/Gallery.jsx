"use client"

import React from "react";
import { Check, ChevronDown, Send, X, RotateCcw } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Gallery = () => {
    return (
        <div className="flex text-white flex-col items-center justify-center min-h-[0vh] px-4 py-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <div className="text-center">
                Our <span className="text-cyan-400">Recent Works</span>
            </div>

            <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                <div className="w-full h-64">
                    <video
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="https://res.cloudinary.com/dnr4pvgzd/video/upload/v1780979396/ppf1-new-final_oykzxz.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
                <div className="w-full h-64">
                    <video
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="https://res.cloudinary.com/dnr4pvgzd/video/upload/v1780978335/ppfreel1-new_wsb7es.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
                <div className="w-full h-64">
                    <video
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="https://res.cloudinary.com/dnr4pvgzd/video/upload/v1780978382/ppfreel2-new_cyt7e1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
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
                    <img
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="https://img.freepik.com/premium-photo/applying-ppf-tail-lights_1322206-113751.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740"
                        alt="PPF Tail Lights"
                    />
                </div>
                <div className="w-full h-64">
                    <img
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="https://img.freepik.com/premium-photo/applying-nanoceramics-cars-car-paint-protection-concept_153608-1180.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740"
                        alt="Nano Coating"
                    />
                </div>
                <div className="w-full h-64">
                    <img
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="https://img.freepik.com/free-photo/beautiful-car-interior-clean-up-service_23-2149212256.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740"
                        alt="Interior Cleanup"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;

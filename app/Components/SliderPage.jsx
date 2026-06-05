"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "./ImageSlider";

const SliderPage = () => {
    const features = [
        { img: "https://i.ibb.co/V0Nhcd5s/uv.png", text: "UV & SUNSHINE" },
        { img: "https://i.ibb.co/WvkvkB2T/water-drops.png", text: "WEATHER EROSION" },
        { img: "https://i.ibb.co/Rprj8LQF/acid-rain.png", text: "ACID RAIN" },
        { img: "https://i.ibb.co/yFQjQZ4y/scratches.png", text: "GRAFFITI & SCRATCHES" },
        { img: "https://i.ibb.co/gb5Mt2Rc/bird.png", text: "BIRD DROPPING" },
        { img: "https://i.ibb.co/7tb34sMx/natural-gum.png", text: "TREE GUM" },
    ];

    return (
        <div className="min-h-fit w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-white bebas text-4xl sm:text-5xl lg:text-4xl text-center leading-tight sm:leading-[66px] mb-8 font-bold sm:mb-12">
                    Slide & See What <span className="text-[#00d9ff]">We Can Do</span>
                </h1>

                {/* Image Slider Container */}
                <motion.div
                    initial={{ borderRadius: "20px" }}
                    whileInView={{ borderRadius: "30px" }}
                      viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "circInOut" }}
                    className="w-full flex justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="w-full max-w-[100%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[950px] rounded-2xl overflow-hidden"
                    >
                        <ImageSlider
                            beforeImage="https://i.ibb.co/SwdBjWhD/cosy-01.png"
                            afterImage="https://i.ibb.co/DPFfG53v/cosy.png"
                        />
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div className="mt-12 sm:mt-16">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
                        {features.map((item, index) => (
                            <motion.div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.img}
                                        alt={item.text}
                                        loading="lazy"
                                    />
                                </div>
                                <p className="font-semibold mt-3 text-center text-white text-sm sm:text-base">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SliderPage;

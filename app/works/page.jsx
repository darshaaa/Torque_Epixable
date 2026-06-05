"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainCar, setMainCar] = useState({
    id: "main",
    title: "Porsche 911",
    url: "https://i.ibb.co/84SL0b6S/TQ4.jpg",
  });

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const cursorTarget = useRef({ x: 0, y: 0 });
  const clickableElements = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Loading animation for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const carouselImages = [
    mainCar.url,
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894424/TQ1_kgbzwa.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ2_bunhsw.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ3_l4jnla.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg",
  ];

  const [otherCars, setOtherCars] = useState([
    {
      id: "1",
      title: "BMW X5",
      url: "https://i.ibb.co/WNxHZYT6/TQ2.jpg",
    },
    {
      id: "2",
      title: "Mini Cooper",
      url: "https://i.ibb.co/NgNcFj5p/TQ3.jpg",
    },
    {
      id: "3",
      title: "MG Hector",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896651/u_bnybbp.jpg",
    },
    {
      id: "4",
      title: "Royal Enfield",
      url: "https://i.ibb.co/xKPFrKDJ/TQ1.jpg",
    },
    {
      id: "5",
      title: "Mercedes Benz",
      url: "https://i.ibb.co/6RT7j6Nr/2025-05-07.jpg",
    },
    {
      id: "6",
      title: "KTM Duke",
      url: "https://i.ibb.co/wh1wKb02/unnamed.jpg",
    },
  ]);

  const swapCar = (clickedCar) => {
    setMainCar(clickedCar);
    setCarouselIndex(0);
    setOtherCars((prevCars) =>
      prevCars.map((car) => (car.id === clickedCar.id ? mainCar : car))
    );
  };

  return (
    <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth relative">
        <>
          <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth relative ">
            <Navlinks isComplete={true} />
            <div className="w-full m-auto overflow-x-hidden h-full mt-32">
              <div
                className="w-full min-h-fit py-8 bg-black"
                id="main-carousel-section"
              >
                {/* Top Section: Carousel + 4 Cars */}
                <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[50%] bg-gray-100">
                  {/* Carousel Image */}
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[400px] bg-black/0 bg-no-repeat bg-cover bg-center bg-blend-multiply transition-all duration-700 ease-in-out"
                    style={{
                      backgroundImage: `url(${carouselImages[carouselIndex]})`,
                    }}
                  >


                    {/* </motion.div> */}

                  </motion.div>

                  {/* Top 4 Cars */}
                  <div className="w-full lg:w-[55%] flex flex-wrap">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={otherCars[i].id}
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={() => swapCar(otherCars[i])}
                        className="hover-target w-1/2 h-[150px] sm:h-[200px] bg-black/60 bg-cover bg-center bg-blend-multiply bg-no-repeat transition-all duration-300"
                        style={{ backgroundImage: `url(${otherCars[i].url})` }}
                      >
                        <h1 className="text-white text-base sm:text-lg lg:text-2xl ml-4 pt-4 font-medium">
                          {otherCars[i].title}
                        </h1>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: 2 Cars + Text Block */}
                <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[40%] bg-gray-800">
                  {/* Bottom 2 Cars */}
                  <div className="w-full lg:w-[45%] flex flex-wrap">
                    {otherCars.slice(4).map((car) => (
                      <motion.div
                        key={car.id}
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={() => swapCar(car)}
                        className="hover-target w-1/2 h-[150px] sm:h-[200px] bg-black/60 bg-cover bg-center bg-blend-multiply bg-no-repeat"
                        style={{ backgroundImage: `url(${car.url})` }}
                      >
                        <h1 className="text-white text-base sm:text-lg lg:text-2xl ml-4 pt-4 font-medium">
                          {car.title}
                        </h1>
                      </motion.div>
                    ))}
                  </div>

                  {/* Text Block */}
                  <motion.div
                    initial={{ opacity: 0.5, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[55%] h-auto lg:h-full pb-7 bg-black p-6"
                  >
                    <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium uppercase">
                      Welcome!
                    </h1>
                    <p className="text-white text-sm sm:text-base mt-2 max-w-2xl">
                      For more than 35 years, we have been bringing ambitious
                      projects to life. The pride of our work, the rigor in the
                      execution, the spirit of team, and integrity are the
                      values that animate us on a daily basis.
                    </p>
                      <button className="hover-target cursor-pointer bg-cyan-600 mt-4 px-6 py-2 border border-cyan-600 text-white rounded-full uppercase">
                        <Link href="/aboutus">Read More</Link>
                      </button>
                  </motion.div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
    </div>
  );
};

export default Page;

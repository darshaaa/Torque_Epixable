"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../../Navlinks/Navlinks";
import Footer from "../../Components/Footer";
import Link from "next/link";

const page = () => {
    const benefits = [
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
          title: "Protects from Harmful UV Rays",
          description:
            "The sun's ultraviolet rays can cause paint to oxidize and fade over time. Ceramic coatings protect a vehicle’s paint from the sun’s harsh rays, thereby reducing the risk of oxidization.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_water.svg",
          title: "Hydrophobic Properties",
          description:
            "One of the most noteworthy features of ceramic coatings is their hydrophobic (water-repellent) quality. This means water beads up and rolls off the surface, picking up dirt and grime along the way.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_cloud.svg",
          title: "Chemical Stain Resistance",
          description:
            "Everyday contaminants like acid rain, bird droppings, and tree sap can mar a vehicle’s exterior. Ceramic coatings create a chemically resistant surface, ensuring that contaminants are easily washed away without leaving stains.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_hand.svg",
          title: "Enhanced Durability",
          description:
            "Unlike traditional waxes that need frequent reapplication, ceramic coatings are incredibly durable. They don’t wear off under normal atmospheric conditions, providing protection that lasts for years.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_car.svg",
          title: "Aesthetic Appeal",
          description:
            "Ceramic coating enhances the depth and clarity of the car’s paint, giving it a constant 'just-washed' glossy finish. This sheen is much coveted by car enthusiasts and everyday drivers alike.",
        },
        
      ];
    

  return (
    <div>
      <>
      <Navlinks isComplete={true} />
        <div className="bg-black text-white py-10 pt-30 md:pt-30 lg:pt-30 px-6 md:py-15 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase ">
            CAR CARE KIT
          </h2>
          <p className=" lg:px-50 text-center text-gray-300">
           A car care kit includes essential products to clean, protect, and maintain your vehicle’s exterior and interior for a showroom finish.
          </p>
        </div>

        <div className="bg-black text-white  py-6 px-6 md:px-70">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Text Section */}
            <div className="md:col-span-1 text-sm md:px-6">
              <h1 className="text-sm font-bold mb-2">About Services</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 p-0">
                What Is
                <br />
                <span className="text-[#00DAFF]">
                  Car Care Kit?
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
              A car care kit is a collection of essential products designed to help maintain the cleanliness, shine, and protection of your vehicle. Typically, it includes items such as car shampoo, microfiber towels, tire and wheel cleaner, glass cleaner, interior detailer, wax or polish, and sometimes applicator pads or brushes.
              </p>
              <p className="text-gray-300 mb-4">
                These kits are curated to provide everything a car owner needs for both interior and exterior detailing. Using a car care kit regularly not only keeps your vehicle looking its best but also helps preserve paint, prevent rust, and maintain the car’s resale value. Whether you're a DIY enthusiast or just want to keep your car in great condition, a quality car care kit makes maintenance easier, more effective, and more enjoyable.
              </p>
              {/* <p className="text-gray-300">
                The technology behind PPF has evolved significantly since its
                initial use by the military to protect helicopter rotor blades,
                resulting in today's highly conformable, optically clear, and
                incredibly durable automotive protection solutions.
              </p> */}
            </div>

            {/* Middle Image Section */}
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1144368440/photo/professional-toolbox-service-station-hand-tools.jpg?s=612x612&w=0&k=20&c=_aLqnqdRY1vRQ1r3VUybT7MmCdNkJNdAw5VKe46BNQ8="
                alt="Ceramic Coating"
                className="rounded-lg h-111 object-cover"
              />
              <div className="md:absolute md:bottom-[-20px] md:left-[-40px] absolute bottom-[-20px] left-[80px] border-4 border-white rounded-lg">
                <img
                  src="https://media.istockphoto.com/id/2197479616/photo/a-set-of-wrenches-hex-sockets-and-gears-stacked-around-the-perimeter-on-a-black-background.jpg?s=612x612&w=0&k=20&c=aMLUVFd9zq3wkb_Vz6krB8ANssimNumFzQq9WTW3U0s="
                  alt="Detailing"
                  className="w-32 md:w-40 lg:h-35 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="md:col-span-1">
              <div className="mb-8 ">
                <h3 className="text-[18px] font-semibold mb-2">
                  Invisible and Durable Protection:
                </h3>
                <p className="text-gray-300 text-xs mb-2">
                Car care kits provide clear protective layers like wax or sealants that guard paint against damage while enhancing shine and durability.
                </p>
              </div>
              <div className="">
                <img
                  src="https://media.istockphoto.com/id/2191048877/photo/close-up-view-of-socket-set-for-car-repair.jpg?s=612x612&w=0&k=20&c=J6XL69_Fv9L76Jx9nGZ1gaXoFfRQ4tRiETiNKCvlL4U="
                  className="rounded my-4 w-60 h-40 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">
                  Preserves Value and Appearance:{" "}
                </h3>
                <p className="text-gray-300 text-xs">
               Regular use of a car care kit keeps your vehicle clean, prevents damage, and maintains its fresh, well-kept look over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16 px-4 md:px-20 0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Benefits Of<span className="text-[#00daff]"> Ceramic Coating</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:mt-20 md:py-6 py-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 mb-4" />
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 w-3/4 mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 mb-4" />
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
      <div className="w-full h-80 bg-[#000000] gap-10 pt-[5%] flex items-center justify-center flex-col md:flex-col lg:flex-row">
        <div className="w-[90%] md:w-[70%] lg:w-[30%] h-64 lg:h-full">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745924820/paint_jidkqf.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[30%] h-64 lg:h-full">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745823190/paintprotectionmask_i2mufm.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[30%] h-64 lg:h-full">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745678458/paintprotection_ju2ue0.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
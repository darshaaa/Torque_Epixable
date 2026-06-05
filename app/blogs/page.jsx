"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const blogPosts = [
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/five-tips-for-getting-pet-hair-out-of-your-car-e1743450098468.webp",
    title: "5 Tips for Getting Pet Hair Out of Your Car",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/tips-on-preventing-road-salt-from-damaging-your-car-e1743449897630.webp",
    title: "Tips on Preventing Road Salt From Damaging Your Car",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/protect-your-car-this-winter-with-a-ceramic-coating-1024x684.webp",
    title: "Protect Your Car This Winter With a Ceramic Coating",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/washing-your-car-during-the-winter-tips-1024x684.webp",
    title: "Washing Your Car During the Winter: Tips",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/five-things-to-consider-when-choosing-a-detailing-service-1024x684.webp",
    title: "5 Things to Consider When Choosing a Detailing Service",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/top-ways-to-protect-your-car-windows-at-home-1024x684.webp",
    title: "Top Ways to Protect Your Car Windows at Home",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/bring-your-tires-back-to-live-1024x684.webp",
    title: "Bring Your Tires Back to Life",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/car-detailig-101-1024x684.webp",
    title: "Car Detailing 101",
  },
  {
    src: "https://ocdetailmn.com/wp-content/uploads/2024/02/auto-detailing-shop-in-prior-lake-mn-1024x684.webp",
    title: "Auto Detailing Shop in Prior Lake, MN",
  },
];

const Page = () => {
  return (
    <div className="w-full min-h-full">
        <Navlinks isComplete={true}/>
      {/* <div className="w-full min-h-[220vh] bg-[#0C0D14] flex justify-center items-center"> */}
      <div className="w-full min-h-screen sm:min-h-[220vh] bg-[#0C0D14] flex justify-center items-center">
        <div className="flex flex-col justify-start items-center gap-10 w-full pt-20">
          {/* Header Text */}
          <div className="w-[90%] md:flex-row flex flex-col justify-center items-center gap-6 md:gap-20 text-center md:text-left -translate-y-8">
            <h1 className="bebas text-5xl text-white mb-4 md:mb-0">Our <span className="text-[#00DAFF]">Blog</span></h1>
            <p className="text-md text-white w-full md:w-[66%]">
              Welcome to our blog where we explore the art of car care and
              detailing. Here, you’ll find a mix of handy tips and deep dives
              into advanced treatments, all aimed at boosting your vehicle’s
              look and value.
            </p>
          </div>

          {/* Dynamic Blog Grid */}
          <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {blogPosts.map((post, index) => (
              <div key={index} className="w-full">
                <motion.img
                  whileHover={{ borderWidth: "6px", borderColor: "white" }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 object-cover rounded-xl"
                  src={post.src}
                  alt={post.title}
                />
                <p className="text-sm mt-3 text-gray-600">2 min read</p>
                <p className="text-xl mt-2 font-semibold tracking-tight text-white leading-[2rem]">
                  {post.title}
                </p>
              </div>
            ))}
          </div>

          <div>
            <button className="w-50 h-15 tracking-wide rounded-full bg-transparent border-2 text-white font-bold shadow-[0_0_5px_#ff6a00] hover:shadow-[0_0_0px_#ff6a00] border-[#ff6a00] hover:border-white transition duration-300">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
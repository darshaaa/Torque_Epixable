"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Very good service by Torque team. We got ppf on our new SUV and detailing of 3 year old luxury sedan and 10-year-old mid sedan. Ppf process was a great experience. They explained the pros and cons of all ppf and gave very good advice. The detailing on other 2 cars was simply fantastic. The cars look better than new. We also got detailing done on 7-year-old motorcycle which also came out sparkling clean.Overall superb experience worth every paisa. Planning to get the detailing done every year 👏👏👏.",
    name: "-Samir",
  },
  {
    quote:
      "I recently got PPF (Paint Protection Film) done for my Mahindra XUV 7XO at Torque Detailing Studio, and I must say they did a fantastic job. The overall quality of work was excellent, and the finishing was superb — their attention to detail and accuracy in applying the PPF truly stood out.What impressed me even more was their support beyond their own work. I had installed some accessories at another shop, and an issue arose afterward. Even though it was not related to their work, the team at Torque Detailing Studio stepped in and supported me in resolving the problem. This truly gave me confidence that my vehicle was in safe hands with them.",
    name: "-Pasupati",
  },
  {
    quote:
      "About six months ago, I took my blue Mercedes Benz GLC 300 to Torque Detailing Studio in Koramangala for a graphene coating. Even half a year later, the car still looks incredible—honestly, the deep blue shines better than the day it rolled out of the showroom. Mr. Jeevan and his team did a meticulous job. They were highly professional, explained the process clearly, and handled the car with great care. I also really appreciated that they included a complimentary fumigation with the service, which was a very nice touch. Highly recommend this place to anyone looking for quality work and great customer service.",
    name: "-Sivakumar Subramaniyan",
  },
  {
    quote:
      "I recently took my new car to Torque Detailing Studio for a PPF application and Sun film, and the experience was top-notch from start to finish.The initial consultation was incredibly thorough; they took the time to explain the technical aspects of the PPF application, the different film options, and how to maintain the gloss factor long-term. It really gave me peace of mind knowing exactly what was being applied to my vehicle.What truly sets them apart is their transparency. Once I dropped off the car, they created a dedicated WhatsApp group to share day-to-day progress. Receiving regular photo and video updates of the cleaning, correction, and installation process was fantastic—it felt like I was part of the journey.",
    name: "-Rateesh Ramachandran",
  },
  {
    quote:
      "Just had my coating done at Torque Detailing Studio in Bangalore—what a fantastic experience! Great Value Deal Competitive pricing made this a solid value proposition, delivering premium protection.Attention to Detail The team's meticulous prep, precise application, and flawless finish showed true craftsmanship. Highly recommend for top-notch results.",
    name: "-Rameshwar Jena",
  },
  {
    quote:
      "Team Torque has been very professional in their advice, their execution of work and their time commitment. The team is passionate about their work! Keep up the good work team! 😀👏👏👏.",
    name: "-Narendra Borwankar",
  },
];

const PREVIEW_LENGTH = 220;

const TestimonialCard = ({ testimonial, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > PREVIEW_LENGTH;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg flex flex-col justify-between"
    >
      <p className="italic text-lg text-left">
        {expanded || !isLong
          ? testimonial.quote
          : testimonial.quote.slice(0, PREVIEW_LENGTH) + "..."}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#00DAFF] text-sm mt-2 text-left hover:underline focus:outline-none"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* 5-Star Rating */}
      <div className="flex items-center mt-6 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>

      <div className="mt-2">
        <h4 className="text-left font-semibold text-xl">{testimonial.name}</h4>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="z-0 w-full md:w-[90%] min-h-full m-auto py-16 bg-black text-white px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col md:flex-row w-full md:w-[95%] items-center md:items-end justify-center md:justify-between gap-8 md:gap-0 px-4">
        {/* Text Section */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            The Difference {" "}
            <br className="hidden md:block" />
            <span className="text-[#00DAFF]">we make</span>
          </motion.h2>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[10%] flex justify-center md:justify-end">
          <img
            src="/BROUCHER DESIGN EPIXABLE ACADEMY copy.ai 01 (1)-04.png"
            alt="Illustration"
            className="w-30 max-w-xs sm:max-w-md md:max-w-lg h-20 object-contain"
          />
        </div>
      </div>

      {/* Swiper Container */}
      <div className="relative w-full max-w-8xl px-5 mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <TestimonialCard testimonial={testimonial} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
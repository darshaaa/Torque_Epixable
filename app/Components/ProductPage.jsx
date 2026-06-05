"use client";

import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { MdShoppingCart } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import toast from "react-hot-toast";
import Cart from "../Components/Cart"; // adjust the path as needed
import Link from "next/link";

const products = [
  {
    img: "https://i.ibb.co/SwVrQ885/TR2.jpg",
    name: "Engine Coating",
    mrp: 500,
    discountedPrice: 760,
    discountPercentage: 35,
    Link: "/product",
  },
  {
    img: "https://i.ibb.co/pvp7nzsb/TR4.jpg",
    name: "Tar & Adhesive Remover",
    mrp: 399,
    discountedPrice: 540,
    discountPercentage: 25,
    Link: "/taradhesiveremover",
  },
  {
    img: "https://i.ibb.co/xS9xJPxZ/TR5.jpg",
    name: "Plastic & Rubber Care",
    mrp: 410,
    discountedPrice: 540,
    discountPercentage: 35,
    Link: "/plasticrubbercare",
  },
  {
    img: "https://i.ibb.co/bjXwx3tC/TR3.jpg",
    name: "Upholstery Cleaner",
    mrp: 390,
    discountedPrice: 590,
    discountPercentage: 35,
    Link: "/upholsterycleaner",
  },
];

const ProductPage = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      quantity: 1,
      price: product.discountedPrice, // Use discounted price for cart
    };
    addToCart(productToAdd);
    toast.success(`${product.name} added to cart! ✅`, {
      className: "mt-[70px] z-[9999999999]",
    });
  };

  return (
    <div className="bg-black z-0 text-white w-[90%] m-auto min-h-full my-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-5 text-[#00DAFF]">Our Products</h1>

      {/* Slider Section */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#fff] p-4 shadow-md rounded-md text-black flex flex-col items-center">
              <Link href={product.Link} className="w-full flex flex-col items-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-contain mb-4 rounded-md"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <div className="price-container flex items-center gap-2 mt-1">
                  <p className="text-gray-800 font-bold text-lg">₹{product.mrp}</p>
                  <p className="text-gray-500 line-through text-sm">₹{product.discountedPrice}</p>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium rounded">
                    {product.discountPercentage}% OFF
                  </span>
                </div>
              </Link>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => handleAddToCart(product)}
                className="mt-[60px] bg-[#00DAFF] text-black font-semibold px-6 py-2 rounded-md text-sm hover:bg-[#00c8e0] flex items-center gap-2 shadow-md"
              >
                <MdShoppingCart /> Add to Cart
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-14 px-6 py-3 border-2 border-[#00DAFF] text-[#00DAFF] text-base sm:text-lg font-medium rounded-full flex items-center gap-2 hover:bg-[#00DAFF] hover:text-white transition-all duration-300"
      >
        <Link href="/shoppage">Our Products →</Link>
      </motion.button>
    </div>
  );
};

export default ProductPage;

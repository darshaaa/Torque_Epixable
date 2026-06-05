"use client"

import { faBagShopping, faEye, faMinus, faPlus, faStar, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import toast from "react-hot-toast";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

// Global Cart Notification Component
const CartNotification = ({ message, isVisible, onHide }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-6 right-6 z-[9999] max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white rounded-lg shadow-lg border-l-4 border-cyan-600 p-4 flex items-center">
            <div className="bg-cyan-100 rounded-full w-8 h-8 flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faCheck} className="text-cyan-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-1">Added to Cart</h4>
              <p className="text-sm text-gray-600">{message}</p>
            </div>
            <button 
              onClick={onHide}
              className="ml-4 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Modal component for quick product view
const Modal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const { addToCart } = useCart();

  // Reset quantity when modal opens with new product
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen, product]);

  const increaseQty = () => {
    if (quantity < 50) setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Create product object with the exact same title and use discounted price
    const productToAdd = {
      id: product.id,
      name: product.title, // Preserving exact product title
      img: product.image,
      quantity: quantity,
      mrp: product.discountedPrice,
      price: product.mrp // Using the discounted price for cart
    };
    
    addToCart(productToAdd);
    onAddToCart(product.title);
    onClose();
  };

  if (!isOpen || !product) return null;

  const { title, image, mrp, discountedPrice, discountPercentage } = product;
  
  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/80 backdrop-blur-sm px-4">
      <div 
        className={`bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl relative overflow-hidden ${
          isAnimating ? 'animate-appear' : ''
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black z-10 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-cyan-50 to-gray-100 flex justify-center items-center p-8">
          <div className="relative w-full overflow-hidden rounded-xl">
            <div className="absolute top-4 left-4 z-10 flex space-x-2">
              {discountPercentage > 0 && (
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">{discountPercentage}% OFF</span>
              )}
            </div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-white">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <span className="ml-2 text-gray-500 text-sm">(120 reviews)</span>
            </div>
            
            <div className="mb-6">
              <p className="text-3xl text-cyan-600 font-bold">
                Rs. {mrp}
                {discountPercentage > 0 && <span className="text-sm text-gray-400 line-through ml-2">Rs. {discountedPrice}</span>}
              </p>
              <p className="text-green-600 text-sm font-medium mt-1">In stock - Ready to ship</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed">
                Experience premium quality with our signature product designed for exceptional performance. This advanced formula delivers outstanding results and ensures complete satisfaction with every use. Perfect for maintaining and enhancing your vehicle's appearance.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="mb-6 bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Key Benefits:</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                  Long-lasting protection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                  Easy application
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                  Eco-friendly formula
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                  Professional results
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-full hover:from-cyan-700 hover:to-cyan-800 transition-all font-medium shadow-md flex items-center justify-center"
              >
                Add to Cart <FontAwesomeIcon icon={faBagShopping} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onEyeClick, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const increaseQty = (e) => {
    e.stopPropagation();
    if (quantity < 50) setQuantity(quantity + 1);
  };

  const decreaseQty = (e) => {
    e.stopPropagation();
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Destructure product properties
  const { id, title, image, mrp, discountedPrice, discountPercentage } = product;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    // Create a product object with the exact same title and use discounted price
    const productToAdd = {
      id,
      name: title, // Using the exact title from the product
      img: image,
      quantity: quantity, // Make sure to use the quantity from state
      mrp: discountedPrice,
      price: mrp // Using the discounted price for cart
    };
    
    // Log for debugging
    console.log("Adding to cart:", productToAdd);
    
    addToCart(productToAdd);
    onAddToCart(title);
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onEyeClick(product)}
    >
      {/* Product Image Section */}
      <div className="relative h-64 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {discountPercentage > 0 && (
            <div className="flex justify-center items-center rounded-full px-3 py-1 bg-cyan-600 shadow-md">
              <p className="text-xs font-bold text-white">{discountPercentage}% OFF</p>
            </div>
          )}
        </div>
        
        {/* Product Image */}
        <div className="h-full bg-gradient-to-br from-white to-white flex items-center justify-center p-4">
          <img 
            className={`h-full object-contain transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} 
            src={image} 
            alt={title} 
          />
        </div>
        
        {/* Quick View Button Overlay */}
        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEyeClick(product);
            }}
            className="w-12 h-12 rounded-full bg-cyan-500 flex justify-center items-center hover:bg-cyan-600 group-hover:scale-110 transition-all shadow-lg"
          >
            <FontAwesomeIcon icon={faEye} className="text-gray-700 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
      
      {/* Product Info Section */}
      <div className="p-5 bg-white">
        {/* Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-xs text-gray-500">120 reviews</span>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer">{title}</h3>
        
        {/* Price and Quantity Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-cyan-600">Rs. {discountedPrice}</p>
            {discountPercentage > 0 && <p className="text-sm text-gray-500 line-through">Rs. {mrp}</p>}
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="w-full cursor-pointer h-10 mt-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-medium rounded-full hover:from-cyan-700 hover:to-cyan-800 transition-all shadow-md flex items-center justify-center"
        >
          Add To Cart <FontAwesomeIcon icon={faBagShopping} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Main Shop Component
const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [cartNotification, setCartNotification] = useState({
    visible: false,
    message: ''
  });

  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    
    // Add styles for animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes appear {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }
      .animate-appear {
        animation: appear 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isModalOpen]);

  const handleEyeClick = (product) => {
    setModalData(product);
    setModalOpen(true);
  };

  const handleAddToCart = (productName) => {
    setCartNotification({
      visible: true,
      message: `${productName} has been added to your cart`
    });
  };

  const hideNotification = () => {
    setCartNotification({
      ...cartNotification,
      visible: false
    });
  };

  // Product data with updated pricing information
  const products = [
    {
      id: 1,
      title: "Engine Coating",
      image: "https://i.ibb.co/SwVrQ885/TR2.jpg",
      mrp: 760,
      discountedPrice: 500,
      discountPercentage: 35,
      tag: "featured"
    },
    {
      id: 2,
      title: "Tar & Adhesive Remover",
      image: "https://i.ibb.co/pvp7nzsb/TR4.jpg",
      mrp: 540,
      discountedPrice: 399,
      discountPercentage: 25,
      tag: "bestseller"
    },
    {
      id: 3,
      title: "Upholstery Cleaner",
      image: "https://i.ibb.co/SwVrQ885/TR2.jpg",
      mrp: 590,
      discountedPrice: 390,
      discountPercentage: 35,
      tag: "featured"
    },
    {
      id: 4,
      title: "Glass Cleaner",
      image: "https://i.ibb.co/SwVrQ885/TR2.jpg",
      mrp: 290,
      discountedPrice: 190,
      discountPercentage: 35,
      tag: "featured"
    },
    {
      id: 5,
      title: "Odur Remover & Cabin Sanitizer",
      image: "https://i.ibb.co/bjXwx3tC/TR3.jpg",
      mrp: 630,
      discountedPrice: 410,
      discountPercentage: 40,
      tag: "featured"
    },
    {
      id: 6,
      title: "Herbal Rat Repellent",
      image: "https://i.ibb.co/bjXwx3tC/TR3.jpg",
      mrp: 990,
      discountedPrice: 640,
      discountPercentage: 35,
      tag: "bestseller"
    },
    {
      id: 7,
      title: "Wind Shield Wash",
      image: "https://i.ibb.co/SwVrQ885/TR2.jpg",
      mrp: 90,
      discountedPrice: 59,
      discountPercentage: 35,
      tag: "new"
    },
    {
      id: 8,
      title: "Plastic & Rubber Care",
      image: "https://i.ibb.co/xS9xJPxZ/TR5.jpg",
      mrp: 540,
      discountedPrice: 410,
      discountPercentage: 35,
      tag: "featured"
    },
    {
      id: 9,
      title: "Car Care KIT",
      image: "https://i.ibb.co/SwVrQ885/TR2.jpg",
      mrp: 1199,
      discountedPrice: 720,
      discountPercentage: 40,
      tag: "bestseller"
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.tag === activeFilter);

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-black text-white">
      {/* Global Cart Notification */}
      <CartNotification 
        message={cartNotification.message}
        isVisible={cartNotification.visible}
        onHide={hideNotification}
      />
      
      <div className="absolute top-0 left-0 w-full z-50 overflow-hidden" >
        <motion.div className="w-full px-4 md:px-10">
          <Navlinks isComplete={true} />
        </motion.div>
      </div>
      
      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        product={modalData}
        onAddToCart={handleAddToCart}
      />

      {/* Shop Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Shop Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Shop</span>
        </h1>
        
        {/* Centered Description - Modified to ensure proper centering */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-white leading-relaxed">
            Discover our exclusive range of premium car care products designed to enhance and protect your vehicle's appearance. From advanced cleaning solutions to long-lasting coatings, we have everything you need to keep your car looking its best. Shop now and experience the difference with our top-quality products, trusted by professionals and car enthusiasts alike.
          </p>
        </div>
        
        {/* Product Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'featured', 'bestseller', 'new'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onEyeClick={handleEyeClick}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="w-full"><Footer /></div>
    </div>
  );
};

export default Page;
"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { MdShoppingCart, MdDelete } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.mrp * item.quantity,
    0
  );

  const handleCheckout = () => {
    const message = cart
      .map(
        (item) =>
          `*${item.name}* - Qty: ${item.quantity}, Price: ₹${item.mrp * item.quantity}`
      )
      .join("\n");

    const finalMessage = encodeURIComponent(
      message + `\n\n*Total:* ₹${totalPrice}`
    );

    const whatsappNumber = "9686968315";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <motion.button
        onClick={() => setIsCartOpen(true)}
        whileTap={{ scale: 0.9, opacity: 0.7 }}
        transition={{ duration: 0.2 }}
        className="relative text-white text-2xl z-[60]"
      >
        <MdShoppingCart />
        {cart.length > 0 && (
          <span className="absolute z-[61] right-0 top-0 bg-red-500 text-white text-xs rounded-full px-2">
            {cart.length}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
              onClick={() => setIsCartOpen(false)}
            />
            
            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 right-0 w-full md:w-[350px] lg:w-[400px] h-screen bg-black text-white shadow-xl z-[99999] flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white px-4 md:px-6 py-3 md:py-4 flex-shrink-0">
                <h2 className="text-lg md:text-xl font-bold">Cart</h2>
                <motion.button
                  onClick={() => setIsCartOpen(false)}
                  className="text-sm md:text-base border border-white px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                >
                  Close
                </motion.button>
              </div>

              {/* Cart Items - Scrollable */}
              <div className="flex-1 overflow-y-auto px-4 md:px-6 py-2 md:py-4 min-h-0">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 md:p-3 border-b border-gray-700 last:border-b-0"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-10 h-10 md:w-14 md:h-14 object-cover rounded mr-3 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-base font-medium truncate">{item.name}</p>
                        <p className="text-xs md:text-sm text-gray-400 mt-1">
                          ₹{item.mrp * item.quantity}
                        </p>
                        <div className="flex items-center mt-1 md:mt-2 gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(index, -1);
                            }}
                            className="px-2 py-0.5 md:py-1 border border-white rounded text-xs md:text-sm hover:bg-white hover:text-black transition-colors flex-shrink-0"
                          >
                            -
                          </button>
                          <span className="text-sm md:text-base min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(index, 1);
                            }}
                            className="px-2 py-0.5 md:py-1 border border-white rounded text-xs md:text-sm hover:bg-white hover:text-black transition-colors flex-shrink-0"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => removeFromCart(index)}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="text-red-500 text-lg md:text-xl ml-3 hover:text-red-400 transition-colors flex-shrink-0"
                      >
                        <MdDelete />
                      </motion.button>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400 text-center">Cart is empty.</p>
                  </div>
                )}
              </div>

              {/* Footer - Fixed at bottom */}
              <div className="border-t border-white px-4 md:px-6 py-3 md:py-4 bg-black flex-shrink-0">
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                  Total: ₹{totalPrice}
                </h3>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#00DAFF] text-black font-medium rounded-md hover:bg-[#00c4e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={cart.length === 0}
                >
                  <p className="px-4 md:px-6 py-3 md:py-4">Checkout</p>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
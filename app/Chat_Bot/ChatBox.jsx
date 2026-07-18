"use client"

import React, { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, Send, X, RotateCcw } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const OptionCard = ({ option, selected, onClick }) => (
  <label className="cursor-pointer">
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      onClick={onClick}
      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full tracking-[0.3px] text-[11px] sm:text-[13px] font-medium transition-all border flex items-center gap-1.5 sm:gap-2 mt-0 ${
        selected
          ? "border-transparent bg-[black] text-white"
          : "bg-[black] text-white border-transparent"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-sm transition-all ${
          selected
            ? "border-transparent text-white bg-[black] flex justify-center items-center"
            : "bg-[white]"
        }`}
      >
        {selected && (
          <Check className="text-white w-3 h-3" />
        )}
      </div>
      {option}
    </motion.div>
  </label>
);

const TypingDots = () => (
  <div className="flex space-x-1 pl-1 items-center h-4">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 bg-black rounded-full"
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);
  const [chatData, setChatData] = useState({
    vehicleType: [],
    model: "",
    vehicleAge: "",
    vehicleColor: "",
    service: [],
    mobile: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const messagesEndRef = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, transition: { duration: 3 } });
      await new Promise((res) => setTimeout(res, 3000));
      await controls.start({ opacity: 0, transition: { duration: 1 } });
    };
    sequence();
  }, [controls]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // options[0] = services, options[1] = vehicle type (Car/Bike)
  const options = [
    ["Ceramic Coating", "PPF", "Car Detailing", "Sunfilms","graphene coating"],
    ["Car", "Bike"],
  ];

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        { sender: "bot", text: null }
      ]);
      const timer1 = setTimeout(() => {
        setMessages([
          { sender: "bot", text: "Hello! 👋 I'm Saanvi, your virtual assistant." }
        ]);
      }, 800);

      const timer2 = setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: "Thank you for contacting Torque Detailing Studio. How can I assist you today?" }]);
      }, 1500);

      const timer3 = setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: "Please let us know which vehicle you're looking for a service for:" }]);
      }, 2200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isChatOpen]);

  const resetChat = () => {
    setMessages([{ sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages([
        { sender: "bot", text: "Hello! 👋 I'm Saanvi, your virtual assistant." },
        { sender: "bot", text: "Thank you for contacting Torque Detailing Studio. How can I assist you today?" },
        { sender: "bot", text: "Please let us know which vehicle you're looking for a service for:", style: { marginTop: "-80px" } }
      ]);
    }, 800);
    setStep(0);
    setChatData({ vehicleType: [], model: "", vehicleAge: "", vehicleColor: "", service: [], mobile: "" });
    setSelectedOptions([]);
    setUserInput("");
    setShowForm(false);
    setIsChatEnded(false);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setHasBeenClicked(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "9686968315";
    const message = "Hello! I'm interested in your automotive services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhone = () => {
    window.location.href = "tel:9686968315";
  };

  // Car/Bike selection is instant - no Send button needed
  const handleVehicleTypeSelect = (opt) => {
    const userMessage = { sender: "user", text: opt };

    setChatData(prev => ({ ...prev, vehicleType: [opt] }));
    setMessages(prev => [...prev, userMessage, { sender: "bot", text: null }]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: "bot", text: `${opt} Model:` }
      ]);
      setStep(1);
    }, 800);

    setSelectedOptions([]);
  };

  // Service selection is instant - no Send button needed
  const handleServiceSelect = (opt) => {
    const userMessage = { sender: "user", text: opt };

    setChatData(prev => ({ ...prev, service: [opt] }));
    setShowForm(true);

    setMessages(prev => [...prev, userMessage, { sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: "bot", text: "Sure, That's a great choice" }
      ]);
    }, 800);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "I will call you soon to discuss details. Can I have your mobile number?",
        },
        { sender: "bot", text: "Please type your phone number 😊" },
      ]);
    }, 1200);

    setSelectedOptions([]);
    setStep(5);
  };

  const handleSend = () => {
    // Step 1: Vehicle model
    if (step === 1) {
      if (!userInput.trim()) return;
      const userMessage = { sender: "user", text: userInput };
      const vType = chatData.vehicleType[0] || "vehicle";

      setChatData(prev => ({ ...prev, model: userInput }));
      setMessages(prev => [...prev, userMessage, { sender: "bot", text: null }]);
      setTimeout(() => {
        setMessages(prev => [
          ...prev.slice(0, -1),
          { sender: "bot", text: `${vType} Color:` }
        ]);
        setStep(2);
      }, 800);
      setUserInput("");
      return;
    }

    // Step 2: Vehicle color
    if (step === 2) {
      if (!userInput.trim()) return;
      const userMessage = { sender: "user", text: userInput };
      const vType = chatData.vehicleType[0] || "vehicle";

      setChatData(prev => ({ ...prev, vehicleColor: userInput }));
      setMessages(prev => [...prev, userMessage, { sender: "bot", text: null }]);
      setTimeout(() => {
        setMessages(prev => [
          ...prev.slice(0, -1),
          { sender: "bot", text: `Age of the ${vType}:` }
        ]);
        setStep(3);
      }, 800);
      setUserInput("");
      return;
    }

    // Step 3: Vehicle age
    if (step === 3) {
      if (!userInput.trim()) return;
      const userMessage = { sender: "user", text: userInput };

      setChatData(prev => ({ ...prev, vehicleAge: userInput }));
      setMessages(prev => [...prev, userMessage, { sender: "bot", text: null }]);
      setTimeout(() => {
        setMessages(prev => [
          ...prev.slice(0, -1),
          { sender: "bot", text: "Great! Please select a service." }
        ]);
        setStep(4);
      }, 800);
      setUserInput("");
      return;
    }

  };

  const handleSubmitForm = () => {
    if (!chatData.mobile.trim()) return;
    const userReply = {
      sender: "user",
      text: `Phone: ${chatData.mobile}`,
    };

    const botReply = {
      sender: "bot",
      text: "Thanks for contacting us! We'll connect with you soon.",
    };

    setMessages((prev) => [...prev, userReply, { sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages((prev) => [...prev.slice(0, -1), botReply]);
      setShowForm(false);
      setIsChatEnded(true);
    }, 800);
  };

  const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  useEffect(() => {
    if (chatData.mobile && !validatePhoneNumber(chatData.mobile)) {
      setIsMobileNumberValid(false);
    } else {
      setIsMobileNumberValid(true);
    }
  }, [chatData.mobile]);

  const bounceVariants = {
    bounce: {
      y: [0, -8, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }
    },
    still: {
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden ">
      
      {/* Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed lg:bottom-25 bottom-29 z-999 right-3 md:bottom-25 md:w-[40%] lg:w-[30%] w-[90%] mt-[-100px] sm:mt-0 md:mt-0 lg:mt-[-200px] md:right-6 h-[60vh] sm:h-[65vh] rounded-t-xl sm:rounded-xl shadow-lg bg-white flex flex-col"
          >
            {/* Header */}
            <div className="relative flex items-center w-[full] h-[8%] sm:h-[10%] bg-white rounded-t-xl px-2 sm:px-4 overflow-hidden">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden z-20 bg-white p-1">
                <img
                  src='https://i.ibb.co/wr8NL9nd/istockphoto-1180568095-1024x1024.jpg'
                  alt="Chat Icon"
                  className="w-full object-top h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1 ml-10 sm:ml-12 relative z-10">
                <h1 className="text-black font-semibold tracking-wide text-sm">
                  Hi, Saanvi Here!
                </h1>
                <p className="text-gray-400 mt-[-3px] text-xs">
                  How may I assist you today?
                </p>
              </div>
              <div className="flex gap-1 items-center z-10">
                <button
                  onClick={resetChat}
                  className="text-black p-1 rounded-full"
                >
                  <RotateCcw className="w-4 h-4 hover:text-cyan-700" />
                </button>
                <button
                  onClick={handleCloseChat}
                  className="p-1.5 sm:p-2 flex justify-center items-center rounded-full"
                >
                  <X className="text-black w-5 h-5 hover:text-cyan-700" />
                </button>
              </div>  
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#f5f5f5] rounded-lg p-2 sm:p-3 mt-1 sm:mt-2 overflow-y-auto scroll-smooth text-xs">
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex flex-col gap-2">
                {messages.map((msg, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div
                      className={`max-w-[85%] flex items-start gap-1.5 ${
                        msg.sender === "user"
                          ? "self-end justify-end"
                          : "self-start justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <img
                          src='https://i.ibb.co/wr8NL9nd/istockphoto-1180568095-1024x1024.jpg'
                          alt="Bot"
                          className="w-6 h-6 rounded-full object-top object-cover"
                        />
                      )}
                      <div
                        className={`p-2 pl-3 pr-3 rounded-xl text-sm ${
                          msg.sender === "user"
                            ? "bg-[#131313] text-white"
                            : "bg-[#ececec] text-[#272727] tracking-wide"
                        }`}
                      >
                        {msg.text !== null ? msg.text : <TypingDots />}
                      </div>
                    </div>

                    {((step === 0 && msg.text?.includes("Please let us know which vehicle")) ||
                      (step === 4 && msg.text?.includes("Please select a service"))) && (
                        <div className="flex flex-wrap ml-7 gap-1.5 self-start">
                          {(step === 0 ? options[1] : options[0]).map((opt) => (
                            <OptionCard
                              key={opt}
                              option={opt}
                              selected={selectedOptions.includes(opt)}
                              onClick={() =>
                                step === 0
                                  ? handleVehicleTypeSelect(opt)
                                  : handleServiceSelect(opt)
                              }
                            />
                          ))}
                        </div>
                      )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Footer Input */}
            {!isChatEnded && (
              <div className="p-2 sm:p-3 border-t border-gray-200">
                {showForm ? (
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center border border-gray-300 rounded-xl h-9 w-20">
                      <img
                        src="https://lakdfs.sirv.com/Images/istockphoto-1180568095-1024x1024.jpg"
                        alt="Indian Flag"
                        className="w-3 h-2 mr-1"
                      />
                      <span className="text-gray-600 text-xs">+91</span>
                    </div>
                    <div className="relative w-full flex justify-center items-center">
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={chatData.mobile}
                        onChange={(e) =>
                          setChatData({ ...chatData, mobile: e.target.value })
                        }
                        className="w-full px-3 py-1.5 text-sm rounded-xl text-gray-800"
                      />
                      <button
                        onClick={handleSubmitForm}
                        className={`absolute right-3 text-black rounded-full flex items-center ${
                          !isMobileNumberValid ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={!isMobileNumberValid}
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className={`flex-1 px-3 py-1.5 border rounded-xl text-sm ${
                        step === 0 || step === 4
                          ? "bg-gray-200 cursor-not-allowed text-gray-500"
                          : "focus:outline-none focus:border-black"
                      }`}
                      placeholder={
                        step === 0 || step === 4
                          ? "Select an option above..."
                          : step === 1
                          ? "Enter vehicle model..."
                          : step === 2
                          ? "Enter vehicle color..."
                          : step === 3
                          ? "Enter vehicle age..."
                          : ""
                      }
                      disabled={step === 0 || step === 4}
                    />
                    <button
                      onClick={handleSend}
                      className="p-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Bottom Buttons - WhatsApp and Call (Always Visible) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.button
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-600 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transform transition-all duration-200 hover:scale-110 group"
        >
          <img 
            src="https://i.ibb.co/ZpLZpP8q/download-removebg-preview.png"
            alt="WhatsApp" 
            className="" 
          />
          
          {/* Tooltip */}
          <div className="absolute left-14 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp
          </div>
        </motion.button>

        {/* Call Button */}
        <motion.button
          onClick={handlePhone}
          className="bg-blue-500 hover:bg-blue-600 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transform transition-all duration-200 hover:scale-110 group"
        >
          <img 
            src="https://i.ibb.co/4yRGTZH/telephone.png"
            alt="WhatsApp" 
            className="w-6 h-6" 
          />
          
          {/* Tooltip */}
          <div className="absolute left-14 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call
          </div>
        </motion.button>
      </div>

      {/* Right Bottom Chat Button */}
      <div className="fixed bottom-5 right-6 z-50">
        <motion.button
          onClick={handleOpenChat}
          animate={!hasBeenClicked ? "bounce" : "still"}
          variants={bounceVariants}
          className="w-14 h-14 lg:w-20 lg:h-20 rounded-full  text-white flex justify-center items-center shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 relative"
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="absolute right-20 bg-cyan-600 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap"
          >
            Hello, how may I help you?
          </motion.div>

          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
            <img
              src="https://i.ibb.co/wr8NL9nd/istockphoto-1180568095-1024x1024.jpg"
              alt="Chat Assistant"
              className="w-10 h-10 lg:w-14 lg:h-14 object-cover object-top rounded-full"
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default ChatBox;
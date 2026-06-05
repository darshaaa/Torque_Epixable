"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaTimes, FaCopy } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navlinks from "../Navlinks/Navlinks";
import { useRouter } from "next/navigation";
import GlitchText from "./GlitchText";
import Link from "next/link";
import Glitch from "./Glitchtext1";

const Hero = () => {
  const [progress, setProgress] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hackText, setHackText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formError, setFormError] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // Video ref for manual control
  const videoRef = useRef(null);
  const interactionListenerRef = useRef(null);
  
  // Characters for the hacking effect
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  const finalCodeLength = 8;
  const hackingInterval = useRef(null);
  const hackingDuration = 1500;

  // Detect device type
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const isIOS = () => {
    if (typeof window === 'undefined') return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  };

  // Fixed popup tracking with proper sessionStorage usage
  const hasPopupBeenShown = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('popupShown') === 'true';
    }
    return false;
  };

  const markPopupAsShown = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('popupShown', 'true');
    }
  };

  // Universal video play function
  const playVideo = async () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    try {
      // Ensure video is properly configured
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.playsInline = true;
      video.loop = true;
      
      // For mobile devices, especially iOS
      if (isMobile()) {
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('playsinline', 'true');
      }
      
      // Wait for video to be ready if needed
      if (video.readyState < 2) {
        await new Promise((resolve) => {
          const onLoadedData = () => {
            video.removeEventListener('loadeddata', onLoadedData);
            resolve();
          };
          video.addEventListener('loadeddata', onLoadedData);
        });
      }
      
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        console.log('Video playing successfully');
      }
    } catch (error) {
      console.log('Video play failed:', error);
      
      // If autoplay fails, set up user interaction listener
      if (!hasUserInteracted) {
        setupUserInteractionListener();
      }
    }
  };

  // Setup user interaction listener for devices that block autoplay
  const setupUserInteractionListener = () => {
    if (interactionListenerRef.current) return; // Already set up
    
    const handleUserInteraction = async () => {
      setHasUserInteracted(true);
      
      if (videoRef.current) {
        try {
          const video = videoRef.current;
          video.muted = true;
          video.volume = 0;
          video.playsInline = true;
          
          await video.play();
          console.log('Video started after user interaction');
        } catch (error) {
          console.log('Video play failed even after interaction:', error);
        }
      }
      
      // Remove listeners after first interaction
      removeUserInteractionListener();
    };

    const events = ['touchstart', 'touchend', 'click', 'scroll', 'keydown', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });

    interactionListenerRef.current = () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  };

  const removeUserInteractionListener = () => {
    if (interactionListenerRef.current) {
      interactionListenerRef.current();
      interactionListenerRef.current = null;
    }
  };

  // Video setup effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configure video for maximum compatibility
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.preload = 'auto';
    video.crossOrigin = 'anonymous';
    
    // Set attributes for mobile compatibility
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true');
    video.setAttribute('autoplay', 'true');

    // Event handlers
    const handleCanPlay = () => {
      setVideoLoaded(true);
      setVideoError(false);
      // Try to play immediately when video is ready
      playVideo();
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
      // Try to play as soon as we have data
      playVideo();
    };

    const handleError = (e) => {
      console.error('Video error:', e);
      setVideoError(true);
      setVideoLoaded(false);
    };

    const handlePlay = () => {
      console.log('Video is playing');
    };

    const handlePause = () => {
      console.log('Video paused');
      // Try to restart if paused unexpectedly
      if (videoLoaded && !videoError) {
        setTimeout(() => playVideo(), 100);
      }
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Load the video
    video.load();

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      removeUserInteractionListener();
    };
  }, []);

  // Handle visibility change to restart video
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current && videoLoaded) {
        setTimeout(() => playVideo(), 300);
      }
    };

    const handleFocus = () => {
      if (videoRef.current && videoLoaded) {
        setTimeout(() => playVideo(), 300);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [videoLoaded]);

  // Progress bar effect
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(interval);
      if (hackingInterval.current) {
        clearInterval(hackingInterval.current);
      }
    };
  }, []);

  // Popup timer effect
  useEffect(() => {
    console.log("Checking if popup should show...");
    
    if (!hasPopupBeenShown()) {
      console.log("Setting up popup timer...");
      
      const popupTimer = setTimeout(() => {
        console.log("Popup timer triggered, showing popup");
        setShowPopup(true);
        markPopupAsShown();
      }, 15000);

      return () => {
        clearTimeout(popupTimer);
      };
    } else {
      console.log("Popup already shown, skipping...");
    }
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("second");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupClosed(true);
    setShowCode(false);
    setDiscountCode("");
    setCopied(false);
    setIsGenerating(false);
    setShowForm(false);
    setUserName("");
    setUserPhone("");
    setFormError("");
    if (hackingInterval.current) {
      clearInterval(hackingInterval.current);
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!userName.trim() || !userPhone.trim()) {
      setFormError("Please fill in all fields");
      return;
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userPhone.trim())) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }
    
    setFormError("");
    setShowForm(false);
    generateDiscountCode();
  };

  const generateDiscountCode = () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    setShowCode(true);
    setHackText("");
    
    let startTime = Date.now();
    let finalCode = "";
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < finalCodeLength; i++) {
      finalCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    hackingInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / hackingDuration, 1);
      
      let currentText = "";
      for (let i = 0; i < finalCodeLength; i++) {
        if (i < Math.floor(progress * finalCodeLength)) {
          currentText += finalCode[i];
        } else {
          currentText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }
      
      setHackText(currentText);
      
      if (progress >= 1) {
        clearInterval(hackingInterval.current);
        setDiscountCode(finalCode);
        setIsGenerating(false);
        redirectToWhatsApp(finalCode);
      }
    }, 50);
  };

  const redirectToWhatsApp = (code) => {
    const message = `Hi, I'm ${userName}. I'd like to claim my ₹5000 OFF (code: ${code}) for Torque Detailing Studio services.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919686968315?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
      closePopup();
    }, 4000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Navbar */}
      <motion.div className="absolute top-0 left-0 w-full px-4 md:px-10 z-50">
        <Navlinks isComplete={isComplete} />
      </motion.div>

      {/* Fixed video element with corrected URL and universal autoplay */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
        controls={false}
        disablePictureInPicture
        crossOrigin="anonymous"
        webkit-playsinline="true"
        src="https://ik.imagekit.io/kd1rkvapo/Website%20Video-_1%20(1).mp4?updatedAt=1759230344103"
        className="absolute inset-0 w-full h-full object-cover"
        onContextMenu={(e) => e.preventDefault()} // Prevent right-click
      >
        Your browser does not support the video tag.
      </video>

      {/* Fallback overlay for video loading */}
      {videoError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="text-white text-center">
            <p className="text-lg mb-4">Video failed to load</p>
            <button 
              onClick={() => {
                setVideoError(false);
                videoRef.current?.load();
              }}
              className="px-4 py-2 bg-[#00DAFF] rounded hover:bg-opacity-80 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Interaction overlay to ensure video plays on first user interaction */}
      {!hasUserInteracted && !videoError && (
        <div 
          className="absolute inset-0 z-5 bg-transparent cursor-pointer"
          onClick={() => {
            setHasUserInteracted(true);
            playVideo();
          }}
          onTouchStart={() => {
            setHasUserInteracted(true);
            playVideo();
          }}
        />
      )}

      {/* Heading & Subtitle */}
      <motion.div
        className="absolute mx-5 top-[45%] hidden md:top-[58%] my-20 md:my-0 md:flex flex-col items-start md:items-center md:text-center z-10 "
        initial="hidden"
        animate={isComplete ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {/* Your commented heading code here */}
      </motion.div>

      {/* Discount Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[99999999999999999999999] flex items-center justify-center px-4"
          >
            <div 
              className="fixed inset-0 bg-black bg-opacity-50" 
              onClick={closePopup}
            />
            
            <motion.div 
              className="relative bg-black border-2 border-[#00DAFF] rounded-lg p-6 w-full max-w-md shadow-2xl z-[101]"
              whileHover={{ scale: 1.02 }}
            >
              <button 
                onClick={closePopup}
                className="absolute top-3 right-3 text-white hover:text-[#00DAFF] transition-colors"
              >
                <FaTimes size={20} />
              </button>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  SPECIAL OFFER
                </h2>
                
                <motion.div 
                  className="text-5xl font-extrabold my-4 text-[#00DAFF]"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ₹5000 OFF
                </motion.div>
                
                <p className="text-white mb-2">
                  Limited time offer on PPF!
                </p>
                
                <div className="text-white mb-6">
                  <p className="font-semibold text-[#00DAFF]">Torque Detailing Studio</p>
                  <p className="text-sm">Call us: <a href="tel:9686968315" className="hover:text-[#00DAFF] transition-colors">9686968315</a></p>
                </div>
                
                {!showForm && !showCode && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#00DAFF] to-blue-600 text-white py-3 px-8 rounded-lg font-bold tracking-wide"
                    onClick={handleShowForm}
                  >
                    CLAIM NOW
                  </motion.button>
                )}
                
                {showForm && (
                  <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 mb-4"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="mb-3">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-[#00DAFF]"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="tel" 
                        placeholder="Your Phone Number" 
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-[#00DAFF]"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                      />
                    </div>
                    {formError && (
                      <p className="text-red-400 text-sm mb-3">{formError}</p>
                    )}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#00DAFF] to-blue-600 text-white py-2 px-8 rounded-lg font-bold tracking-wide"
                    >
                      SUBMIT
                    </motion.button>
                  </motion.form>
                )}
                
                {showCode && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 bg-gray-900 rounded-lg p-4 border border-[#00DAFF]"
                  >
                    <p className="text-gray-300 text-sm mb-2">Your discount code:</p>
                    <div className="flex items-center justify-center bg-gray-800 rounded px-4 py-2">
                      <span className="text-[#00DAFF] font-mono text-xl font-bold mr-3">
                        {isGenerating ? hackText : discountCode}
                      </span>
                      {!isGenerating && (
                        <motion.button
                          onClick={copyToClipboard}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-white hover:text-[#00DAFF]"
                          title="Copy to clipboard"
                        >
                          <FaCopy size={18} />
                        </motion.button>
                      )}
                    </div>
                    {copied && !isGenerating && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-green-400 text-xs mt-1"
                      >
                        Copied to clipboard!
                      </motion.p>
                    )}
                    {isGenerating ? (
                      <p className="text-gray-400 text-xs mt-3 animate-pulse">
                        Generating secure discount code...
                      </p>
                    ) : (
                      <div>
                        <p className="text-gray-400 text-xs mt-2">
                          Your discount has been applied to your account
                        </p>
                        <p className="text-gray-300 text-xs mt-1">
                          Thank you <span className="font-semibold">{userName}</span> for choosing Torque Detailing Studio!
                        </p>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-400 font-semibold text-sm mt-3"
                        >
                          Thank you for your submission!
                        </motion.p>
                        <p className="text-gray-300 text-xs mt-1">
                          Redirecting you to WhatsApp...
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
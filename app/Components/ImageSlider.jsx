"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

const ImageSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = '',
  afterLabel = ''
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    if (e.touches) handleTouchMove(e.touches[0]);
  };

  const handleMouseUp = () => setIsResizing(false);

  const handleMouseMove = (e) => {
    if (!isResizing || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (touch) => {
    if (!isResizing || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const mouseEvents = {
      move: handleMouseMove,
      up: handleMouseUp
    };
    const touchEvents = {
      move: (e) => handleTouchMove(e.touches[0]),
      up: handleMouseUp
    };

    if (isResizing) {
      window.addEventListener('mousemove', mouseEvents.move);
      window.addEventListener('mouseup', mouseEvents.up);
      window.addEventListener('touchmove', touchEvents.move);
      window.addEventListener('touchend', touchEvents.up);
    }

    return () => {
      window.removeEventListener('mousemove', mouseEvents.move);
      window.removeEventListener('mouseup', mouseEvents.up);
      window.removeEventListener('touchmove', touchEvents.move);
      window.removeEventListener('touchend', touchEvents.up);
    };
  }, [isResizing]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && !isResizing) {
          let animationFrame;
          let startTime;
          const duration = 2000;
  
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
  
            let newPos;
  
            if (elapsed < duration) {
              newPos = 50 + ((90 - 50) * (elapsed / duration));
            } else if (elapsed < duration * 2) {
              newPos = 90 - ((85) * ((elapsed - duration) / duration));
            } else {
              setPosition(5);
              setHasAnimated(true);
              return;
            }
  
            setPosition(newPos);
            animationFrame = requestAnimationFrame(animate);
          };
  
          animationFrame = requestAnimationFrame(animate);
  
          return () => cancelAnimationFrame(animationFrame);
        }
      },
      {
        threshold: 0.5,
      }
    );
  
    if (sliderRef.current) observer.observe(sliderRef.current);
  
    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, [hasAnimated, isResizing]);

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-[160px] xs:h-[240px] sm:h-[320px] md:h-[400px] lg:h-[420px] overflow-hidden rounded-lg shadow-xl"
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-[100%] h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* After Image (clip path) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        className="absolute top-[10%] bottom-[10%] w-0.5 bg-white cursor-ew-resize select-none touch-none"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <GripVertical className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

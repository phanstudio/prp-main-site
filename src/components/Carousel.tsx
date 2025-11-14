// src/components/Carousel.tsx
import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  interval?: number; // in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create extended array for seamless wrapping
  const extendedImages = [...images, ...images, ...images];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  // Handle the wrap-around reset
  useEffect(() => {
    if (currentIndex === images.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500);
    }
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
        }}
      >
        {extendedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: "calc((100% / 3) - 0.5rem)" }}
          >
            <img src={src} className="w-full h-auto rounded-md object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              idx === (currentIndex % images.length) ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(images.length + idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

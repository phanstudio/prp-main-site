import React, { useState, useEffect } from "react";

const CardFan: React.FC<{ images: Array<string> }> = ({ images }) => {
  const [animate, setAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [cards, setCards] = useState<Array<{ id: number; img: string }>>([]);
  useEffect(() => {
    console.log("Images updated:", images);
    setCards(
      images.map((src, index) => ({
        id: index,
        img: src,
      }))
    );
  }, [images]);

  const getCardStyle = (index: any) => {
    const totalCards = images.length;
    const middleIndex = (totalCards - 1) / 2;
    const offset = index - middleIndex;
    const distanceFromCenter = Math.abs(offset);

    // Responsive multipliers based on screen width
    let cardSize, spacing, rotationMultiplier, arcHeight, scaleReduction;
    
    if (windowWidth < 480) {
      // Extra small mobile
      cardSize = 0.35;
      spacing = 35;
      rotationMultiplier = 8;
      arcHeight = 10;
      scaleReduction = 0.25;
    } else if (windowWidth < 640) {
      // Small mobile
      cardSize = 0.45;
      spacing = 60;
      rotationMultiplier = 10;
      arcHeight = 12;
      scaleReduction = 0.22;
    } else if (windowWidth < 768) {
      // Large mobile
      cardSize = 0.6;
      spacing = 70;
      rotationMultiplier = 12;
      arcHeight = 20;
      scaleReduction = 0.2;
    } else if (windowWidth < 1024) {
      // Tablet
      cardSize = 0.75;
      spacing = 110;
      rotationMultiplier = 13;
      arcHeight = 30;
      scaleReduction = 0.18;
    } else if (windowWidth < 1280) {
      // Small desktop
      cardSize = 0.9;
      spacing = 130;
      rotationMultiplier = 14;
      arcHeight = 35;
      scaleReduction = 0.16;
    } else {
      // Large desktop
      cardSize = 1;
      spacing = 150;
      rotationMultiplier = 10;
      arcHeight = 40;
      scaleReduction = 0.15;
    }

    // Calculate scale based on distance from center
    const baseScale = 1 - distanceFromCenter * scaleReduction;
    const scale = baseScale * cardSize;

    if (!animate) {
      return {
        transform: `scale(${scale})`,
        zIndex: totalCards - distanceFromCenter,
      };
    }

    // Calculate rotation and position
    const rotation = offset * rotationMultiplier;
    const xTranslate = offset * spacing;
    const yTranslate = distanceFromCenter * arcHeight;

    return {
      transform: `translateX(${xTranslate}px) translateY(${yTranslate}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex: totalCards - distanceFromCenter,
    };
  };

  return (
    <div className="flex items-center justify-center min-h-auto bg-transperant p-2 sm:p-4 overflow-hidden w-full">
      <div className="relative w-full max-w-7xl h-40 xs:h-56 sm:h-64 md:h-80 lg:h-100 flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="absolute w-64 h-64 rounded-xl shadow-2xl flex items-center justify-center transition-all duration-1000 ease-out cursor-pointer hover:scale-110 hover:z-50"
            style={getCardStyle(index)}
          >
            <img
              src={card.img}
              alt={`Card ${card.id}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default CardFan;
import React, { useState, useEffect } from "react";

// const CardFan: React.FC<{ images: Array<string> }> = ({ images }) => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     const timer = setTimeout(() => setAnimate(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const [cards, setCards] = useState<Array<{ id: number; img: string }>>([]);
//   useEffect(() => {
//     console.log("Images updated:", images);
//     setCards(
//       images.map((src, index) => ({
//         id: index,
//         img: src,
//       }))
//     );
//   }, [images]);

// const getCardStyle = (index: any) => {
//     const totalCards = images.length;
//     const middleIndex = (totalCards - 1) / 2;
//     const offset = index - middleIndex;
//     const distanceFromCenter = Math.abs(offset);

//     // Calculate scale based on distance from center
//     const scale = 1 - distanceFromCenter * 0.15; // 3=1.0, 2/4=0.85, 1/5=0.7

//     if (!animate) {
//       return {
//         transform: `scale(${scale})`,
//         zIndex: totalCards - distanceFromCenter, // Fix layering from the start
//       };
//     }

//     // Calculate rotation and position
//     const rotation = offset * 15; // degrees
//     const xTranslate = offset * 150; // more space between cards
//     const yTranslate = distanceFromCenter * 40; // slight arc effect

//     return {
//       transform: `translateX(${xTranslate}px) translateY(${yTranslate}px) rotate(${rotation}deg) scale(${scale})`,
//       zIndex: totalCards - distanceFromCenter,
//     };
//   };

//   return (
//     <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <div className="relative w-full h-96 flex items-center justify-center">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`absolute w-72 h-72 rounded-2xl shadow-2xl flex items-center justify-center text-8xl transition-all duration-1000 ease-out cursor-pointer hover:scale-110 hover:z-50`}
//             style={getCardStyle(index)}
//           >
//             <img
//               src={card.img}
//               alt={`Card ${card.id}`}
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



const CardFan: React.FC<{ images: Array<string> }> = ({ images }) => {
  const [animate, setAnimate] = useState(false);
  const [cards, setCards] = useState<Array<{ id: number; img: string }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCards(
      images.map((src, index) => ({
        id: index,
        img: src,
      }))
    );
  }, [images]);

  const getCardStyle = (index: number) => {
    const totalCards = images.length;
    const middleIndex = (totalCards - 1) / 2;
    const offset = index - middleIndex;
    const distanceFromCenter = Math.abs(offset);

    // Responsive scaling
    const baseScale = window.innerWidth < 768 ? 0.9 : 1;
    const scale = baseScale - distanceFromCenter * 0.15;

    if (!animate) {
      return {
        transform: `scale(${scale})`,
        zIndex: totalCards - distanceFromCenter,
      };
    }

    // Responsive rotation and translation
    const rotation = offset * (window.innerWidth < 768 ? 10 : 15);
    const xTranslate = offset * (window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 100 : 150);
    const yTranslate = distanceFromCenter * (window.innerWidth < 768 ? 20 : 40);

    return {
      transform: `translateX(${xTranslate}px) translateY(${yTranslate}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex: totalCards - distanceFromCenter,
    };
  };

  return (
    <div className="flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full px-4">
      <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-x-hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-1000 ease-out cursor-pointer hover:scale-110 hover:z-50"
            style={getCardStyle(index)}
          >
            <img
              src={card.img}
              alt={`Card ${card.id}`}
              className="w-full h-full object-cover rounded-xl md:rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFan;

// import React from "react";
// import explainer from "../../assets/Explainer.png";
// import hangman from "../../assets/prp1.png";

// const AboutSection: React.FC = () => {
//   return (
//     <div
//       id="about"
//       className="justify-around text-center items-start flex pt-20 space-y-6 bg-base-200 "
//     >
//       {/* section image */}
//       <div className="flex flex-col space-y-10">
//         <div className="relative w-[525px] h-[420px]">
//           {/* Back layer */}
//           <div
//             className="
//               absolute inset-0 
//               bg-gray-300 
//               rounded-xl 
//               shadow-xl 
//               rotate-[-4deg]
//             "
//           ></div>

//           {/* Top layer with your image */}
//           <img
//             src={explainer}
//             alt="Meme"
//             className="
//               absolute inset-0 
//               w-full h-full 
//               object-cover 
//               rounded-xl 
//               shadow-xl 
//               rotate-[3deg]
//             "
//           />
//         </div>
//         <div className="flex space-x-4 w-[525px] h-auto overflow-hidden">
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           <img src={hangman} alt="hangman" className="w-50 h-50"/>
//           {/* <div></div>
//           <div></div> */}
//         </div>
//       </div>

//       <div className="space-y-4 text-right  max-w-xl mt-10">
//         <p className="text-5xl font-bold text-[red]">What is PRP?</p>
//         <p className="text-4xl">P O S T - R U G P H O T O S</p>
//         <p className="text-2xl">
//           Post-Rug Photos {"{PRP}"} is a creative collection turning chaos into
//           art, satire and community storytelling. Every meme, animation, and rug
//           is a photo in our shared album of survival.
//         </p>
//         <button className="btn bg-[red] p-6 rounded-full">
//           Take Your Post-Rug Photo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


import React, { useRef, useEffect, useState } from "react";
import explainer from "../../assets/Explainer.png";
import hangman from "../../assets/prp1.png";

const images = [hangman, hangman, hangman, hangman, hangman, hangman, hangman];

const AboutSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    const handleScroll = () => {
      const rect = scrollRef.current!.getBoundingClientRect();
      setCenterX(rect.left + rect.width / 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className="justify-around text-center items-start flex pt-20 space-y-6 bg-base-200 "
    >
      {/* section image */}
      <div className="flex flex-col space-y-10">

        {/* MAIN IMAGE */}
        <div className="relative w-[525px] h-[420px]">
          <div className="absolute inset-0 bg-gray-300 rounded-xl shadow-xl rotate-[-4deg]" />
          <img
            src={explainer}
            alt="Meme"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl rotate-[3deg]"
          />
        </div>

        {/* 🔥 HORIZONTAL SCROLLER */}
        <div
          ref={scrollRef}
          className="flex space-x-6 w-[525px] h-[160px] py-4 overflow-x-scroll hide-scrollbar"
        >
          {images.map((src, i) => (
            <ZoomImage key={i} src={src} centerX={centerX} />
          ))}
        </div>
      </div>

      {/* right text */}
      <div className="space-y-4 text-right max-w-xl mt-10">
        <p className="text-5xl font-bold text-[red]">What is PRP?</p>
        <p className="text-4xl">P O S T - R U G P H O T O S</p>
        <p className="text-2xl">
          Post-Rug Photos {"{PRP}"} is a creative collection turning chaos into
          art, satire and community storytelling. Every meme, animation, and rug
          is a photo in our shared album of survival.
        </p>
        <button className="btn bg-[red] p-6 rounded-full">
          Take Your Post-Rug Photo
        </button>
      </div>
    </div>
  );
};

/* --- ✔️ Auto-zoom based on scroll position --- */
const ZoomImage = ({
  src,
  centerX,
}: {
  src: string;
  centerX: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const imgCenter = rect.left + rect.width / 2;

    const distance = Math.abs(centerX - imgCenter);
    const newScale = Math.max(1, 1.3 - distance / 300);

    setScale(newScale);
  }, [centerX]);

  return (
    <div
      ref={ref}
      className="w-[240px] h-[140px] transition-transform duration-300"
      style={{ transform: `scale(${scale})` }}
    >
      <img
        src={src}
        className="w-full h-full object-cover rounded-xl"
        alt=""
      />
    </div>
  );
};

export default AboutSection;

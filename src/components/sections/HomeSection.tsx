import React from "react";
import CardFan from "../CardFan";
import { stew, prp1, cheers, prp6, prp7, eyes } from "../../assets";

const images = [cheers, prp1, stew, prp6, prp7];

const HomeSection: React.FC = () => {
  return (
    <div
      id="home"
      className="justify-center bg-transparent text-center items-center flex flex-col pt-12 sm:pt-16 md:pt-20 space-y-0 sm:space-y-0 md:space-y-0 mt-8 sm:mt-12 md:mt-15 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-4xl">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          Smile Through The Collapse
        </p>
        <p className="text-sm sm:text-base md:text-mb">
          In a world of inevitable loss, endurance is survival
        </p>
        <p className="text-sm sm:text-base md:text-mb">
          We promote positivity through satire, because what good is success
          without a little pain?
        </p>
      </div>

      <CardFan images={images} />
      {/* hero section */}
      <div className="space-y-3 sm:space-y-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Turn pain into trophies
        </p>
        <a
          href="https://meme.postrugphotos.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="relative btn bg-white text-[#FF4F22] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 
             rounded-full text-sm sm:text-base md:text-lg font-semibold 
             hover:bg-gray-100 transition-colors group"
          >
            <div
              className="absolute inset-0 flex justify-center items-center gap-50 
               opacity-0 translate-y-3 transition-all duration-300 
               group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none"
            >
              <img src={eyes} alt="" className="w-10 sm:w-14 md:w-20" />
              <img src={eyes} alt="" className="w-10 sm:w-14 md:w-20" />
            </div>
            <span className="relative z-10">MAKE A MEME NOW!</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeSection;

// const HomeSection: React.FC = () => {
//   return (
//     <div
//       id="home"
//       className="justify-center text-center items-center flex flex-col pt-12 sm:pt-16 md:pt-20 space-y-6 sm:space-y-8 md:space-y-10 mt-8 sm:mt-12 md:mt-15 px-4 sm:px-6 md:px-8"
//     >
//       <div className="max-w-4xl">
//         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
//           Smile Through The Collapse
//         </p>
//         <p className="text-sm sm:text-base md:text-lg mb-2">
//           In a world of inevitable loss, endurance is survival
//         </p>
//         <p className="text-sm sm:text-base md:text-lg">
//           We promote positivity through satire, because what good is success
//           without a little pain?
//         </p>
//       </div>

//       <CardFan images={images} />

//       <div className="space-y-3 sm:space-y-4 pb-8">
//         <p className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
//           Turn pain into trophies
//         </p>
//         <button className="btn bg-white text-[#FF4F22] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors">
//           MAKE A MEME NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomeSection;

// onhover show eyes
// flip the imaeges

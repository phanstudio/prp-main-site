// import React from "react";
// import {
//   abssoluteCinema,
//   graveSelfie,
//   proveYet,
//   explainer,
// } from "../../assets";
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
//         <div className="flex space-x-4 w-[525px] h-[190px]">
//           <img src={abssoluteCinema} alt="hangman" className="w-42 h-42 object-cover rounded-xl shadow-xl"/>
//           <img src={proveYet} alt="hangman" className="w-42 h-42 object-cover rounded-xl shadow-xl"/>
//           <img src={graveSelfie} alt="hangman" className="w-42 h-42 object-cover rounded-xl shadow-xl"/>
//         </div>
//       </div>

//       <div className="space-y-4 text-right  max-w-xl mt-10">
//         <p className="text-5xl font-bold text-[red]">What is PRP?</p>
//         <p className="text-4xl">P O S T - R U G  P H O T O S</p>
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

import React from "react";
import {
  abssoluteCinema,
  graveSelfie,
  proveYet,
  explainer,
} from "../../assets";

const AboutSection: React.FC = () => {
  return (
    <div
      id="about"
      className="flex flex-col bg-transparent md:flex-row justify-around items-center md:items-start 
                 pt-20 px-4 md:px-10 space-y-10 md:space-y-0"
    >
      {/* IMAGE SECTION */}
      <div className="flex flex-col space-y-10 items-center md:items-start mb-10">
        <div className="relative w-full max-w-[525px] h-[55vw] md:h-[420px]">
          {/* Back layer */}
          <div
            className="
              absolute inset-0 
              bg-gray-300 
              rounded-xl 
              shadow-xl 
              rotate-[-4deg]
            "
          ></div>

          {/* Top layer with image */}
          <img
            src={explainer}
            alt="Meme"
            className="
              absolute inset-0 
              w-full h-full 
              object-cover 
              rounded-xl 
              shadow-xl 
              rotate-3
            "
          />
        </div>

        {/* 3 small images */}
        <div className="flex justify-center md:justify-start space-x-4 w-full max-w-[525px]">
          <img
            src={abssoluteCinema}
            alt="img"
            className="w-1/3 h-[30vw] md:h-[190px] object-cover rounded-xl shadow-xl"
          />
          <img
            src={proveYet}
            alt="img"
            className="w-1/3 h-[30vw] md:h-[190px] object-cover rounded-xl shadow-xl"
          />
          <img
            src={graveSelfie}
            alt="img"
            className="w-1/3 h-[30vw] md:h-[190px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="space-y-4 text-center md:text-right max-w-xl mt-10 md:mt-0 px-4 md:px-0 mb-4">
        <p className="text-4xl md:text-5xl font-bold text-[#FF4F22]">What is PRP?</p>
        <p className="text-2xl md:text-4xl">P O S T - R U G  P H O T O S</p>
        <p className="text-xl md:text-2xl">
          Post-Rug Photos {"{PRP}"} is a creative collection turning chaos into
          art, satire and community storytelling. Every meme, animation, and rug
          is a photo in our shared album of survival.
        </p>
        <button className="btn bg-[#FF4F22] p-2 md:p-4 rounded-full text-white max-w-[300px] truncate whitespace-nowrap overflow-hidden">
          Take Your Post-Rug Photo
        </button>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import CardFan from "../CardFan";
import {
  stew,
  prp1,
  cheers,
  prp6,
  prp7,
} from "../../assets";

const images = [cheers, prp1, stew, prp6, prp7];
// onhover show eyes
// flip the imaeges
const HomeSection: React.FC = () => {
  return (
    <div
      id="home"
      className="justify-center text-center items-center flex flex-col pt-20 space-y-10 mt-15"
    >
      <div>
        <p className="text-4xl font-bold mb-4">
          Smile Through The Collapse
        </p>
        <p>
          In a world of inevitable loss, endurance is the only way to survive.
        </p>
        <p>
          We promote positivity through satire , because success is
          meaningless without the experience of pain.
        </p>
      </div>

      <CardFan images={images}/>
      {/* hero section */}
      <div className="space-y-4">
        <p className="text-4xl font-bold">Turn pain into trophies</p>
        <button className="btn bg-[#ffffff] text-[red] p-6 rounded-full">
          MAKE A MEME NOW
        </button>
      </div>
    </div>
  );
};

export default HomeSection;

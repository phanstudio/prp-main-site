import React from "react";
import logo from "../../assets/prp.jpg";

const HomeSection: React.FC = () => {
  return (
    <div
      id="home"
      className="justify-center text-center items-center flex flex-col pt-20 space-y-10 mt-15"
    >
      <div>
        <p className="text-4xl font-bold mb-4">
          Smile Through The Collaspe
        </p>
        <p>
          In a world of inevitable loss, endurance is the only way to survive.
        </p>
        <p>
          We promote positivity through satire , because success is
          meaningless without the experience of pain.
        </p>
      </div>

      {/* hero section */}
      <div className="space-y-4">
        <img src={logo} alt="logo" className="w-100 h-100" />
        <p className="text-4xl font-bold">Turn pain into trophies</p>
        <button className="btn bg-[#ffffff] text-[red] p-6 rounded-full">
          MAKE A MEME NOW
        </button>
      </div>
    </div>
  );
};

export default HomeSection;

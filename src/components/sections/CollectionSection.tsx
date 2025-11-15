import React from "react";
import Carousel from "../../components/Carousel";
import {
  prp,
  prp1,
  prp2,
  prp3,
  prp4,
  prp5,
} from "../../assets";

const images = [prp1, prp2, prp3, prp4, prp5, prp];

const CollectionSection: React.FC = () => {
  return (
    <div
      id="collection"
      className="flex flex-col items-center text-center py-10 space-y-10 px-4 bg-base-200"
    >
      {/* TOP SECTION */}
      <div>
        <p className="text-3xl md:text-4xl font-bold mb-2">Digital Collectibles</p>
        <p className="text-base md:text-lg max-w-xl">
          Get your own very unique post-rug photo on a peer-to-peer marketplace
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="w-full max-w-4xl">
        <Carousel images={images} interval={1500} />
      </div>

      {/* COMMUNITY SECTION */}
      <div className="space-y-4">
        <p className="text-3xl md:text-4xl font-bold">Join the survivors</p>
        <p className="text-base md:text-lg">The collapse is inevitable, the laugh is optional</p>
        <p className="text-base md:text-lg">
          Join Our <span className="text-[red] font-semibold">Community</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="btn rounded-full p-0 w-12 h-12">
            <img src="public/icons/tiktok.svg" alt="tiktok" className="w-8 h-8" />
          </button>

          <button className="btn rounded-full p-0 w-12 h-12">
            <img
              src="public/icons/x.svg"
              alt="X"
              className="w-8 h-8 invert brightness-0 saturate-100"
            />
          </button>

          <button className="btn rounded-full p-0 w-12 h-12">
            <img src="public/icons/discord.png" alt="discord" className="w-8 h-8" />
          </button>

          <button className="btn rounded-full p-0 w-12 h-12">
            <img src="public/icons/instagram.png" alt="instagram" className="w-8 h-8" />
          </button>

          <button className="btn rounded-full p-0 w-12 h-12">
            <img src="public/icons/youtube3.png" alt="youtube" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;

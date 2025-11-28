import React from "react";
import Carousel from "../../components/Carousel";
import { prp, prp1, prp2, prp3, prp4, prp5 } from "../../assets";
import Header from "../header";

const images = [prp1, prp2, prp3, prp4, prp5, prp];

const CollectionSection: React.FC = () => {
  return (
    <div
      id="collection"
      className="flex flex-col items-center  text-center py-10 space-y-10 px-4 bg-transparent"
    >
      <Header />
      {/* TOP SECTION */}
      <div>
        <p className="text-3xl md:text-4xl font-bold mb-2">
          Digital Collectibles
        </p>
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
        <p className="text-base md:text-4xl">
          The collapse is inevitable, the laugh is optional
        </p>
        <p className="text-base md:text-4xl font-bold">
          Join Our <span className="text-[red] font-semibold">Community</span>
        </p>

        {/* SOCIAL ICONS */}
        <div
          className="flex justify-center items-center mt-6 
             gap-5                /* mobile: open gap */
             md:gap-2             /* desktop: tight gap */
             md:hover:gap-5       /* desktop: expand on hover */
             transition-all duration-300"
        >
          <a
            href="https://www.tiktok.com/@rugstew"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10"
          >
            <button className="btn rounded-full p-0 w-12 h-12 transition-transform hover:scale-115 hover:z-50">
              <img src="/icons/tiktok.svg" alt="tiktok" className="w-8 h-8" />
            </button>
          </a>

          <a
            href="https://x.com/PostRugPhotos"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-3 z-20"
          >
            <button className="btn rounded-full p-0 w-12 h-12 transition-transform hover:scale-115 hover:z-50">
              <img src="/icons/fav.png" alt="X" className="w-8 h-8" />
            </button>
          </a>

          <a
            href="https://discord.gg/FZgT6KT9ed"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-3 z-30"
          >
            <button className="btn rounded-full p-0 w-12 h-12 transition-transform hover:scale-115 hover:z-50">
              <img src="/icons/discord.png" alt="discord" className="w-8 h-8" />
            </button>
          </a>

          <a
            href="https://www.instagram.com/rugstew/"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-3 z-40"
          >
            <button className="btn rounded-full p-0 w-12 h-12 transition-transform hover:scale-115 hover:z-50">
              <img
                src="/icons/instagram.png"
                alt="instagram"
                className="w-8 h-8"
              />
            </button>
          </a>

          <a
            href="https://www.youtube.com/@rugstew"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-3 z-50"
          >
            <button className="btn rounded-full p-0 w-12 h-12 transition-transform hover:scale-115 hover:z-50">
              <img
                src="/icons/youtube3.png"
                alt="youtube"
                className="w-8 h-8"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;

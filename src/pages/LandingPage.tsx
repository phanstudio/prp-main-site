// src/pages/LandingPage.tsx
import React from "react"; // , { useState, useEffect }
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { Lock, Mail } from "lucide-react";
import explainer from "../assets/Explainer.png";
import Header from "../components/main/header";
import HomeSection from "../components/sections/HomeSection";
import thousandYardStare from "../assets/Thousand yard stare.png";
import prp from "../assets/prp.jpg"; // <-- correct path
import prp1 from "../assets/prp1.png";
import prp2 from "../assets/prp2.png";
import prp3 from "../assets/prp3.png";
import prp4 from "../assets/prp4.png";
import prp5 from "../assets/prp5.png";
import Carousel from "../components/Carousel";
import { FolderIcon, PlusCircle, Share2 } from "lucide-react";

// import youtube from "../assets/icons/youtube3.png";
import instagram from "../assets/icons/instagram.png";
import discord from "../assets/icons/discord.png";
import tiktok from "../assets/icons/tiktok.svg";
import X from "../assets/icons/x.svg";

const images = [prp1, prp2, prp3, prp4, prp5, prp];

// add animations later
// fix responsiveness later
export const LandingPage: React.FC = () => {
  return (
    <div className="bg-transperate w-full h-screen space-y-5 ">
      <Header />
      {/* First content */}
      <HomeSection />

      {/* Second content */}
      <div
        id="about"
        className="justify-around text-center items-start flex pt-20 space-y-6 bg-base-200 "
      >
        {/* section image */}
        <div className="flex flex-col space-y-10">
          <div className="relative w-[525px] h-[420px]">
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

            {/* Top layer with your image */}
            <img
              src={explainer}
              alt="Meme"
              className="
              absolute inset-0 
              w-full h-full 
              object-cover 
              rounded-xl 
              shadow-xl 
              rotate-[3deg]
            "
            />
          </div>
          <div>
            <p>different memes</p>
          </div>
        </div>

        {/* hero section */}
        <div className="space-y-4 text-right  max-w-xl mt-10">
          <p className="text-5xl font-bold text-[red]">What is PRP?</p>
          <p className="text-4xl">P O S T - R U G P H O T O S</p>
          <p className="text-2xl">
            Post-Rug Photos {"{PRP}"} is a creative collection turning chaos
            into art, satire and community storytelling. Every meme, animation,
            and rug is a photo in our shared album of survival.
          </p>
          <button className="btn bg-[red] p-6 rounded-full">
            Take Your Post-Rug Photo
          </button>
        </div>
      </div>

      {/* Thrid content */}
      <div
        id="share"
        className="justify-center text-center items-center flex flex-col pt-10 space-y-6"
      >
        <div className="space-y-4">
          <p className="text-4xl font-bold">Share Your Own Story</p>
          <p>Your Ideas, Our Style. Eternal Virality!</p>
        </div>

        <div className="flex space-x-6">
          <button className="btn flex flex-col text-left w-[420px] h-[250px] p-6">
            <div>
              <FolderIcon className="w-8 h-8 mb-4" />
              <p className="text-3xl mb-2">Choose a template</p>
              <p>Find the perfect meme base!</p>
              <p>Choose from thousands of templates to bring to life.</p>
            </div>
          </button>
          <button className="btn flex flex-col text-left w-[420px] h-[250px] p-6">
            <div>
              <PlusCircle className="w-8 h-8 mb-4" />
              <p className="text-3xl mb-2">Add your trauma</p>
              <p>Add your personal touch!</p>
              <p>
                Insert your text here to transform this template into a meme
                about your trauma.
              </p>
            </div>
          </button>
          <button className="btn flex flex-col text-left w-[420px] h-[250px] p-10">
            <div>
              <Share2 className="w-8 h-8 mb-4" />
              <p className="text-3xl mb-2">Share your survival meme</p>
              <p>Did you make a meme?</p>
              <p>
                Don't keep it to yourself! Share your survival meme with the
                world and see who relates.
              </p>
            </div>
          </button>
        </div>

        <div className="justify-around text-center items-center flex px-10 space-y-6 w-full text-lg">
          {/* hero section */}
          <div className="space-y-4 text-left max-w-xl mt-10 ">
            <p className="text-3xl">Story to memes</p>
            <p className="text-5xl font-bold text-[red]">
              Every Scar Tells a Story
            </p>

            <div>
              <p>Got a scar from the market? A loss that still stings?</p>
              <p>
                Every wound has a story, and every survivor deserves a laugh.
              </p>
            </div>
            <div className="text-xl">
              <p>Share your scars, your stories, and your humor.</p>
              <p>
                Because the best survivors don't hide their scars they meme
                them.
              </p>
            </div>

            <button className="btn bg-gray-200 px-12 py-8 text-[red] text-lg">
              Tell The Story
            </button>
          </div>

          <img src={thousandYardStare} alt="logo" className="w-150 h-150" />
        </div>
      </div>

      {/* Forth content */}
      <div
        id="collection"
        className="justify-center text-center items-center flex flex-col py-10 space-y-10 bg-base-200"
      >
        <div>
          <p className="text-4xl font-bold mb-4">Digital Collection</p>
          <p>
            Get your own very unique post-rug photo on a peer to peer
            marketplace
          </p>
        </div>
        <Carousel images={images} interval={1500} />
        <div>
          <p className="text-4xl font-bold mb-4">Join the survivors</p>
          <p>The collapse is inevitable, the laugh is optional</p>
          <p>
            Join Our <span className="text-[red]">Community</span>
          </p>
          <p>the communities</p>
          <div className="flex space-x-4 justify-center">
            <button className="btn rounded-full p-0 w-12 h-12">
              <img src='\icons\tiktok.svg' alt="tiktok" className="w-8 h-8" />
            </button>
            <button className="btn rounded-full p-0 w-12 h-12">
              <img src='\icons\x.svg' alt="X" className="w-8 h-8" />
            </button>
            <button className="btn rounded-full p-0 w-12 h-12">
              <img src='\icons\discord.png' alt="discord" className="w-8 h-8" />
            </button>
            <button className="btn rounded-full p-0 w-12 h-12">
              <img src='\icons\instagram.png' alt="instagram" className="w-8 h-8" />
            </button>
            <button className="btn p-0 w-12 h-12 rounded-full">
              <img src='\icons\youtube3.png' alt="youtube" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

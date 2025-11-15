import React from "react";
import { FolderIcon, PlusCircle, Share2 } from "lucide-react";
import { thousandYardStare } from "../../assets";

const ShareSection: React.FC = () => {
  return (
    <div
      id="share"
      className="flex flex-col items-center text-center pt-10 space-y-10 px-4"
    >
      {/* HEADER */}
      <div className="space-y-4">
        <p className="text-3xl md:text-4xl font-bold">Share Your Own Story</p>
        <p className="text-base md:text-lg">
          Your Ideas, Our Style. Eternal Virality!
        </p>
      </div>

      {/* 3 CARDS */}
      <div
        className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-6 
    w-full 
    max-w-6xl
  "
      >
        <button className="btn flex flex-col text-left p-6 min-h-[250px] w-full h-auto">
          <FolderIcon className="w-8 h-8 mb-4" />
          <p className="text-2xl md:text-3xl mb-2 line-clamp-3">
            Choose a template
          </p>
          <p>Find the perfect meme base!</p>
          <p className="line-clamp-4">
            Choose from thousands of templates to bring to life.
          </p>
        </button>

        <button className="btn flex flex-col text-left p-6 min-h-[250px] w-full h-auto">
          <PlusCircle className="w-8 h-8 mb-4" />
          <p className="text-2xl md:text-3xl mb-2 line-clamp-3">
            Add your trauma
          </p>
          <p>Add your personal touch!</p>
          <p className="line-clamp-4">
            Insert your text here to transform this template into a meme about
            your trauma.
          </p>
        </button>

        <button className="btn flex flex-col text-left p-6 min-h-[250px] w-full h-auto">
          <Share2 className="w-8 h-8 mb-4" />
          <p className="text-2xl md:text-3xl mb-2 line-clamp-3">
            Share your survival meme
          </p>
          <p>Did you make a meme?</p>
          <p className="line-clamp-4">
            Don't keep it to yourself! Share your survival meme with the world
            and see who relates.
          </p>
        </button>
      </div>

      {/* BOTTOM SECTION */}
      <div
        className="
          flex flex-col-reverse md:flex-row
          items-center justify-between
          w-full max-w-6xl
          space-y-10 md:space-y-0 md:space-x-10
          text-center md:text-left
        "
      >
        {/* TEXT */}
        <div className="max-w-xl space-y-6">
          <p className="text-2xl md:text-3xl">Story to memes</p>
          <p className="text-4xl md:text-5xl font-bold text-[red]">
            Every Scar Tells a Story
          </p>

          <div className="space-y-1 text-base md:text-lg">
            <p>Got a scar from the market? A loss that still stings?</p>
            <p>Every wound has a story, and every survivor deserves a laugh.</p>
          </div>

          <div className="text-lg md:text-xl space-y-1">
            <p>Share your scars, your stories, and your humor.</p>
            <p>
              Because the best survivors don't hide their scars, they meme
              them.
            </p>
          </div>
          
          <a
          href="https://meme.postrugphotos.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-gray-200 px-10 py-6 text-[red] text-lg">
            Tell The Story
          </button>
        </a>
        </div>

        {/* IMAGE */}
        <img
          src={thousandYardStare}
          alt="logo"
          className="w-full max-w-[300px] md:max-w-[400px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ShareSection;

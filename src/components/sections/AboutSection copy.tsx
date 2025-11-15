import React, { useState, useRef, useEffect } from "react";
import {
  hangman,
  explainer,
  Yes,
  proveYet,
  graveSelfie,
  cheers,
  abssoluteCinema,
  cat
} from "../../assets";

const images = [Yes, abssoluteCinema, proveYet, hangman, explainer, graveSelfie, cheers, cat];

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const isAutoScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Create extended array for infinite scroll effect
  const extendedImages = [...images, ...images, ...images];
  const middleSetStart = images.length;

  const getClosestIndex = () => {
    if (!scrollContainerRef.current) return middleSetStart;

    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const items = container.children;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(items).forEach((item, index) => {
      const element = item as HTMLElement;
      const itemCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const handleScroll = () => {
    if (isAutoScrollingRef.current) return;

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Debounce the selection update
    scrollTimeoutRef.current = setTimeout(() => {
      const closestIndex = getClosestIndex();
      const actualIndex = closestIndex % images.length;
      setSelectedIndex(actualIndex);

      // Check if we need to reposition (wrap around)
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;

      // Only reposition if we're in the first or last set (not middle set)
      if (closestIndex < middleSetStart - 1) {
        // Jump to equivalent position in middle set
        const equivalentIndex = closestIndex + images.length;
        const item = container.children[equivalentIndex] as HTMLElement;
        if (item) {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const containerCenter = container.offsetWidth / 2;
          container.scrollLeft = itemCenter - containerCenter;
        }
      } else if (closestIndex >= middleSetStart + images.length + 1) {
        // Jump to equivalent position in middle set
        const equivalentIndex = closestIndex - images.length;
        const item = container.children[equivalentIndex] as HTMLElement;
        if (item) {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const containerCenter = container.offsetWidth / 2;
          container.scrollLeft = itemCenter - containerCenter;
        }
      }
    }, 150);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    isAutoScrollingRef.current = true;
    const container = scrollContainerRef.current;
    const item = container.children[index] as HTMLElement;

    if (item) {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const containerCenter = container.offsetWidth / 2;
      const scrollPosition = itemCenter - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 800);
    }
  };

  const selectImage = (actualIndex: number) => {
    const targetIndex = middleSetStart + actualIndex;
    scrollToIndex(targetIndex);
    setSelectedIndex(actualIndex);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    autoScrollTimerRef.current = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const next = (prevIndex + 1) % images.length;
        selectImage(next);
        return next;
      });
    }, 2000);
  };

  useEffect(() => {
    // Initialize to middle set
    setTimeout(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const item = container.children[middleSetStart] as HTMLElement;
        if (item) {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const containerCenter = container.offsetWidth / 2;
          container.scrollLeft = itemCenter - containerCenter;
        }
      }
    }, 100);

    // Start auto-scroll
    resetAutoScroll();

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="justify-around text-center items-start flex pt-20 space-y-6 bg-base-200"
    >
      {/* section image */}
      <div className="flex flex-col space-y-10">
        {/* MAIN IMAGE */}
        <div className="relative w-[525px] h-[420px]">
          <div className="absolute inset-0 bg-gray-300 rounded-xl shadow-xl rotate-[-4deg]" />
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl rotate-[3deg] transition-opacity duration-500"
            key={selectedIndex}
          />
        </div>

        {/* Scrollable carousel */}
        <div className="w-[525px] overflow-hidden relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-200 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-200 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-scroll scrollbar-hide py-2 items-center h-[200px]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingLeft: "calc(50% - 80px)",
              paddingRight: "calc(50% - 80px)",
            }}
          >
            {extendedImages.map((img, index) => {
              const actualIndex = index % images.length;
              const isMiddleSet =
                index >= middleSetStart &&
                index < middleSetStart + images.length;
              const isSelected = actualIndex === selectedIndex && isMiddleSet;

              return (
                <div
                  key={`${index}-${img}`}
                  onClick={() => selectImage(actualIndex)}
                  className={`flex-shrink-0 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden ${
                    isSelected
                      ? "w-40 h-40 ring-4 ring-primary scale-100"
                      : "w-32 h-32 opacity-50 hover:opacity-75 scale-90"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${actualIndex + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* right text */}
      <div className="space-y-4 text-right max-w-xl mt-10">
        <p className="text-5xl font-bold text-[red]">What is PRP?</p>
        <p className="text-4xl">P O S T - R U G  P H O T O S</p>
        <p className="text-2xl">
          Post-Rug Photos {"{PRP}"} is a creative collection turning chaos into
          art, satire and community storytelling. Every meme, animation, and rug
          is a photo in our shared album of survival.
        </p>
        <button className="btn bg-[red] p-6 rounded-full">
          Take Your Post-Rug Photo
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;

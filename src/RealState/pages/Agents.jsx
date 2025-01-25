import React, { useEffect, useRef } from "react";
import Call from "../Components/Call";

const Agents = () => {
  const gridItemsRef = useRef([]);

  useEffect(() => {
    // Parallax effect handler
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Apply parallax effect to each grid item
      gridItemsRef.current.forEach((item, index) => {
        if (item) {
          const speed = 0.3 + index * 0.05; // Adjust speed for each item
          item.style.transform = `translateY(${scrollY * speed}px)`;
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div className="text-center font-semibold my-14">
          <p className="bg-[#EDF3FF] w-fit m-auto font-semibold text-[#3675ff] px-5 py-2 rounded-full">
            Agents
          </p>
          <h1 className="sm:text-[60px] text-[7.4vw] leading-10 mt-10">
            Meet our exceptional agents
          </h1>
          <h1 className="sm:text-[60px] text-[7.4vw]">
            for a <span className="text-[#3675ff]">seamless </span>experience
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {[
            "https://framerusercontent.com/images/bDbAKXnf93kg4xgDr2naOX9Hos.jpg",
            "https://framerusercontent.com/images/I3gfAQe3MC9t15Ya3mItXqXoQ.jpg",
            "https://framerusercontent.com/images/ROxXw7mHMl35ZpOmxuK3aG14rtc.jpg",
            "https://framerusercontent.com/images/Kv3esn4UiahiRhRtlUWqTXUu0.jpg",
            "https://framerusercontent.com/images/yuMT38uSZAf5RhP6xfohbl4kpg.jpg",
            "https://framerusercontent.com/images/tU4X9bugMWK1LfGleFrokhGKi8.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="h-[60vh] rounded-2xl bg-gray-200 overflow-hidden relative"
              // Attach ref to each grid item
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/60 text-white font-semibold">
                <div className="absolute bottom-0 p-6">
                  <h1 className="text-[10vw] sm:text-[2.5vw]">Ethan Carter</h1>
                  <h2 className="text-[#CFD7E4]">Senior Consultant</h2>
                </div>
              </div>
              <img
                className="h-full w-full object-cover transition-transform duration-300 ease-out"
                src={src}
                alt={`Agent ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
      <Call />
    </>
  );
};

export default Agents;

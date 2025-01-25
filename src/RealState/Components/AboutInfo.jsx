import React, { useEffect, useRef } from "react";

const AboutInfo = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    // Parallax effect handler
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Apply parallax effect to each image
      imgRefs.current.forEach((img, index) => {
        if (img) {
          const speed = 0.2 + index * 0.1; // Vary speed slightly for each image
          img.style.transform = `translateY(${scrollY * speed}px)`;
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
    <section>
      <div className="text-center font-semibold my-14">
        <p className="bg-[#EDF3FF] w-fit m-auto font-semibold text-[#3675ff] px-5 py-2 rounded-full">
          About
        </p>
        <h1 className="sm:text-[4vw] text-[5.8vw] leading-10 mt-10">
          Connect with our experts and bring
        </h1>
        <h1 className="sm:text-[4vw] text-[5.8vw]">
          your <span className="text-[#3675ff]">Real Estate</span> ideas to life
        </h1>
      </div>

      <div className="h-[110vh] grid sm:grid-cols-2 grid-rows-2 gap-6">
        {/* Large Image with Parallax */}
        <div className="row-span-2 rounded-3xl bg-gray-300  overflow-hidden">
          <img
            ref={(el) => (imgRefs.current[0] = el)} // Attach ref to the first image
            src="https://framerusercontent.com/images/qwvmH0EQXSPYJ0JrSilGkq7aUzk.webp?scale-down-to=1024"
            className="h-full object-cover w-full   duration-300 ease-out"
            alt="Expertise"
          />
        </div>

        {/* Smaller Images with Parallax */}
        <div className="rounded-3xl overflow-hidden bg-gray-300">
          <img
            ref={(el) => (imgRefs.current[1] = el)} // Attach ref to the second image
            src="https://framerusercontent.com/images/BeFApd0BHsxGKeT3w5xAG9ehdOk.jpg"
            className="h-full w-full  object-cover transition-transform duration-300 ease-out"
            alt="Consultation"
          />
        </div>
        <div className="rounded-3xl overflow-hidden bg-gray-300">
          <img
            ref={(el) => (imgRefs.current[2] = el)} // Attach ref to the third image
            src="https://framerusercontent.com/images/ybeQwZzWtmmY9eSaqgljwDs31hI.jpg?scale-down-to=1024"
            className="h-full w-full  object-cover transition-transform duration-300 ease-out"
            alt="Real Estate Ideas"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;

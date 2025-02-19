import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heropic from '../Assets/home.avif';
const AboutInfo = () => {
  const ta = useRef(null)
  useGSAP(()=>{
    ta.current = gsap.timeline()
    .from(".about h1",{y:-100,scale:0.5,opacity:0, duration:.5})
    .from(".about p",{y:-100,scale:0.5,opacity:0, duration:.5})
  })

  return (
    <section>
      <div className="about text-center font-semibold my-14">
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
        {/* Large Image */}
        <div className="row-span-2 rounded-3xl bg-gray-300 overflow-hidden">
          <img
            src={heropic}
            className="h-full object-cover w-full"
            alt="Expertise"
          />
        </div>

        {/* Smaller Images */}
        <div className="rounded-3xl overflow-hidden bg-gray-300">
          <img
            src="https://lifestyleinvestmentsind.com/images/About/how-we-work.png"
            className="h-full w-full object-cover"
            alt="Consultation"
          />
        </div>
        <div className="rounded-3xl overflow-hidden bg-gray-300">
          <img
            src="https://framerusercontent.com/images/ybeQwZzWtmmY9eSaqgljwDs31hI.jpg?scale-down-to=1024"
            className="h-full w-full object-cover"
            alt="Real Estate Ideas"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
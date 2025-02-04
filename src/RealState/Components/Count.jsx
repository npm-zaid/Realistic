import React, { useState, useEffect, useRef } from 'react';

const Count = () => {
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [propertiesSold, setPropertiesSold] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const sectionRef = useRef(null); // Ref for the section element

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const increment = 10; // Increment value for each step

    const animateNumber = (targetValue, setValue) => {
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          clearInterval(interval);
          setValue(targetValue);
        } else {
          setValue(current);
        }
      }, duration / (targetValue / increment));
    };

    // Intersection Observer callback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation when the section is in the viewport
            animateNumber(98, setSatisfactionRate);
            animateNumber(200, setPropertiesSold);
            animateNumber(500, setProjectsDone);
            animateNumber(90, setHappyClients);

            // Stop observing after the animation starts
            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="grid bg-[#EDF3FF] grid-cols-1 md:grid-cols-4 gap-8 mt-16 py-14 rounded-2xl">
        <div className="text-center border-r border-zinc-400">
          <h2 className="text-5xl font-bold text-blue-600">
            <span className="text-black">{satisfactionRate}</span>%
          </h2>
          <p className="text-[#808080] text-xl mt-2">Satisfaction Rate</p>
        </div>
        <div className="text-center border-r border-zinc-400">
          <h2 className="text-5xl font-bold text-blue-600">
            <span className="text-black">{propertiesSold}</span>+
          </h2>
          <p className="text-[#808080] text-xl mt-2">Properties Sold</p>
        </div>
        <div className="text-center border-r border-zinc-400">
          <h2 className="text-5xl font-bold text-blue-600">
            <span className="text-black">{projectsDone}</span>+
          </h2>
          <p className="text-[#808080] text-xl mt-2">Projects Done</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-600">
            <span className="text-black">{happyClients}</span>%
          </h2>
          <p className="text-[#808080] text-xl mt-2">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
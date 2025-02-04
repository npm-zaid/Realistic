import React, { useEffect } from "react";
import Call from "../Components/Call";
import { agentsData } from "../Components/data";
import { NavLink } from "react-router-dom";

const Agents = () => {
useEffect(()=>{
  window.scrollTo(0, 0);
})
 

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
          {agentsData.map((agent, index) => (
            <div
              key={index}
              className="h-[60vh] rounded-2xl bg-gray-200 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/60 text-white font-semibold">
              <NavLink to={`/agents/${agent.name}`} className='absolute inset-0'/>
               
              
                <div className="absolute bottom-0 p-6">
                  <h1 className="text-[10vw] sm:text-[2.5vw]">{agent.name}</h1>
                  <h2 className="text-[#CFD7E4]">{agent.role}</h2>
                </div>
              </div>
              <img
                className="h-full w-full object-cover transition-transform duration-300 ease-out"
                src={agent.url}
              />
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
};

export default Agents;

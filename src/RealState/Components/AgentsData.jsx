
import React from 'react';
import { agentsData } from "../Components/data";
import { NavLink } from 'react-router-dom';
function AgentsData() {
  return (
    <section className='min-h-screen  flex flex-col items-center'>
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
      <div className="group flex max-md:flex-col justify-center gap-2 w-[90%] mx-auto mb-10 mt-3">
        {agentsData.map((agent, i) => {
          return (
            <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300">
              <NavLink
                className="absolute inset-0 text-white z-10  p-3 flex flex-col justify-end"
                to={`/agents/${agent.name}`}>
                <h1 className=" sm:text-5xl text-3xl mb-2 font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {agent?.name}
                </h1>
                <span className=" sm:text-xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {agent?.role}
                </span>
              </NavLink>
              <img
                className="object-cover h-72 md:h-[420px]  w-full"
                src={agent?.url}
                width="960"
                height="480"
                alt="Image 01"
              />
              
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default AgentsData;

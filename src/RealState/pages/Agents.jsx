import React, { useEffect } from "react";
import Call from "../Components/Call";
import { agentsData } from "../Components/data";
import { NavLink } from "react-router-dom";
import AgentsData from "../Components/AgentsData";

const Agents = () => {
useEffect(()=>{
  window.scrollTo(0, 0);
})
 

  return (
    <>
    <AgentsData/>
      
    </>
  );
};

export default Agents;

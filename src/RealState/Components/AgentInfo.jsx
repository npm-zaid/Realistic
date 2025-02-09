
import { useEffect } from "react";
import { agentsData } from "./data";
import { NavLink, useParams } from "react-router-dom";
const AgentInfo = () => {
  const { agent_Id } = useParams();
  const agent = agentsData.find((agent) => agent.name === agent_Id);
  console.log(agent);
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <section className="min-h-screen ">
      <div className="grid my-10 m-auto sm:grid-cols-12 grid-cols-1 h-screen sm:h-[60vh] p-4 rounded-[40px] bg-[#3675FF]">
        <div className=" col-span-4 h-[100%] overflow-hidden shadow-gray-900 shadow-2xl  rounded-[40px]">
          <img
            className="object-cover h-full w-full   "
            src={agent.url}
            alt=""
          />
        </div>
        <div className="col-span-8 font-semibold  flex flex-col gap-2 items-center justify-center">
          <h1 className="sm:text-[4vw] text-[10vw] text-white">
            {agent.name}
          </h1>
          <p className="text-[#D7E3FF] text-2xl">{agent.role}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-12 grid-cols-1">
        <div className="sm:col-span-4   flex flex-col gap-4  p-5">
          <h1 className="text-3xl  font-semibold">Book A Call</h1>
          <div>
            <i className="text-2xl ri-phone-fill text-[#3675FF] mr-3 "></i>
            <a href="tel:9411903629" className="text-xl">
              +123 456 789
            </a>
          </div>
          <div>
            <i class="text-2xl ri-mail-open-fill text-[#3675FF] mr-3"></i>
            <a href="mailto:zaidcodes.404@gmail.com" className="text-xl">
              testing@gmail.com
            </a>
          </div>
          <div>
            <i class="text-2xl ri-map-pin-fill text-[#3675FF] mr-3"></i>
            <a href="" className="text-xl">
              Doha, Qatar
            </a>
          </div>
          <NavLink
            to="/contact"
            className="px-5 py-2 bg-[#3675FF] text-white text-center  font-semibold w-2/3 rounded-full"
          >
            Hire Me
          </NavLink>
        </div>
        <div className="sm:col-span-8  p-5">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-4">About Me</h1>
            <p className="text-xl">{agent.about}</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">Experience</h1>
            <p className="text-xl">{agent.experience}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentInfo;

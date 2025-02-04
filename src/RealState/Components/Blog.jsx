import React from "react";
import { blogsData } from "./data";
import { NavLink } from "react-router-dom";

const Blog = ()=>{
return(
    <section className="py-7">
 <div>
        <h2 className='sm:text-md text-xl mb-6 '>Blogs</h2>
        <h1 className='sm:text-[3.4vw] text-[7vw] font-semibold leading-10'>Expert advice and market</h1>
        <h1 className='sm:text-[3.4vw] text-[7vw] font-semibold'>update on real estate</h1>
    </div>

    <div className="grid sm:grid-cols-3 grid-cols-1 my-8 gap-6">
       {blogsData.map((blog)=>{
        return(
        <NavLink to={`/blogs/${blog.btn}`}>
        <div className="h-[50vh] rounded-3xl overflow-hidden">
        <img className="h-full w-full object-cover hover:scale-110 transition-all duration-300 " src={blog.url} />
        </div>

        <div className="flex flex-col gap-4 py-4">
        <p className='bg-[#EDF3FF] w-fit font-semibold text-[#3675ff] px-3 py-2 rounded-full'>{blog.btn}</p>
        <h1 className='sm:text-2xl text-[6.2vw] font-semibold '>{blog.title}</h1>
        </div>
        
    </NavLink>
      ) })} 
       
    </div>
    </section>
)
}

export default Blog;

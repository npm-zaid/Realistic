import React from 'react'
import { blogsData } from '../Components/data'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const BlogInfo = () => {

    const { blog_Id } = useParams();
    const blog = blogsData.find((b) => b.btn === blog_Id);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <section>
        <div className='py-10'>
            <p className='text-white w-fit font-semibold bg-[#3675ff] px-5 py-2 rounded-full'>{blog.btn}</p>
            <div className='text-5xl font-semibold my-5'>
                <h1>How to choose the right real</h1>
                <h1>estate agent for your needs</h1>
            </div>
            <p className='text-2xl text-gray-400'><i class="ri-calendar-2-line mr-3"></i>Sep 25, 2024</p>
            
        </div>

        <div className='h-screen w-full rounded-3xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={blog.url} alt="" />
        </div>

        <div className='flex flex-col gap-8 py-8'>
        <h1 className='text-xl'>{blog.para1}</h1>
        <h1 className='text-xl'>{blog.para2}</h1>
        <h1 className='text-xl'>{blog.para3}</h1>
        <h1 className='text-xl'>{blog.para4}</h1>
      </div>

      <div className='p-5 border-t border-zinc-400'>
        <div className='flex gap-4 items-center'>
            <div className='h-24 w-24 rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover ' src="https://framerusercontent.com/images/kC4NaEZxsydpz9tHiu9G7wUvUK8.jpg?scale-down-to=512" alt="" />
            </div>
         
          <div>
            <p>written by</p>
            <p className='text-2xl font-semibold'>{blog.writer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogInfo
import React from 'react'

import { blogsData } from '../Components/data'

const Blogs = () => {

  const blog = blogsData.find((b) => b.btn === 'Resources');

  return (
 <section>
      <div  className='text-center font-semibold  my-14'>
        <p className='bg-[#EDF3FF] w-fit m-auto font-semibold text-[#3675ff] px-5 py-2 rounded-full'>{blog.btn}</p>
    <h1 className='sm:text-[4.4vw] text-[7.4vw] leading-10 mt-10'>Expert advice and market </h1>
    <h1 className='sm:text-[4.4vw] text-[7.4vw]'>updates on <span className='text-[#3675ff]'> real estate</span></h1>
    </div>
    <div className='h-[110vh] relative font-semibold rounded-3xl overflow-hidden'>
      <img className='h-full w-full absolute  z-0 object-cover' src={blog.url}/>
      <div className='absolute z-10 bottom-10 left-5 sm:left-10 rounded-2xl sm:p-8 p-2 bg-white/30 backdrop-blur-sm  '>
      <p className='text-[#EDF3FF] w-fit  bg-[#3675ff] px-3 py-2 rounded-full'>{blog.btn}</p>
      <h1 className='sm:text-3xl text-[6.2vw]  my-4'>The ultimate guide to buying<br/> your first home</h1>
      <p className='text-gray-500 '><i class="ri-calendar-line"></i> Sep 5, 2024</p>
      </div>
      
    </div>
    <div className='flex flex-col gap-8 py-8'>
        <h1 className='text-xl'>{blog.para1}</h1>
        <h1 className='text-xl'>{blog.para2}</h1>
        <h1 className='text-xl'>{blog.para3}</h1>
        <h1 className='text-xl'>{blog.para4}</h1>
      </div>
      <div className='p-5 border-t border-zinc-400'>
        <div className='flex gap-4 items-center'>
          <img className='h-20 w-20 rounded-full' src="https://framerusercontent.com/images/kC4NaEZxsydpz9tHiu9G7wUvUK8.jpg?scale-down-to=512" alt="" />
          <div>
            <p>written by</p>
            <p className='text-2xl font-semibold'>{blog.writer}</p>
          </div>
        </div>
      </div>
 </section>
  )
}

export default Blogs

import React from "react";


const Blog = ()=>{
return(
    <section className="py-7">
 <div>
        <h2 className='sm:text-md text-xl mb-6 '>Blogs</h2>
        <h1 className='sm:text-[3.4vw] text-[7vw] font-semibold leading-10'>Expert advice and market</h1>
        <h1 className='sm:text-[3.4vw] text-[7vw] font-semibold'>update on real estate</h1>
    </div>

    <div className="grid sm:grid-cols-3 grid-cols-1 my-8 gap-6">
        <div>
            <div className="h-[50vh] rounded-3xl overflow-hidden">
            <img className="h-full w-full object-cover" src="https://framerusercontent.com/images/gdYugKRVEppOdaBaZCcPZkB1pM.jpg?scale-down-to=512" />
            </div>

            <div className="flex flex-col gap-4 py-4">
            <p className='bg-[#EDF3FF] w-fit font-semibold text-[#3675ff] px-3 py-2 rounded-full'>Resources</p>
            <h1 className='sm:text-2xl text-[6.2vw] font-semibold '>The ultimate guide to buying your first home</h1>
            </div>
            
        </div>
        <div>
            <div className="h-[50vh] rounded-3xl overflow-hidden">
            <img className="h-full w-full object-cover" src='https://framerusercontent.com/images/DoL7rLpeJI9ztSVa21pdQO70.jpg' />
            </div>

            <div className="flex flex-col gap-4 py-4">
            <p className='bg-[#EDF3FF] w-fit font-semibold text-[#3675ff] px-3 py-2 rounded-full'>Resources</p>
            <h1 className='sm:text-2xl text-[6.2vw] font-semibold '>The ultimate guide to buying your first home</h1>
            </div>
            
        </div>
        <div>
            <div className="h-[50vh] rounded-3xl overflow-hidden">
            <img className="h-full w-full object-cover" src='https://framerusercontent.com/images/AHgC80AiH0eRvNIrDtQIzemwidk.jpg' />
            </div>

            <div className="flex flex-col gap-4 py-4">
            <p className='bg-[#EDF3FF] w-fit font-semibold text-[#3675ff] px-3 py-2 rounded-full'>Resources</p>
            <h1 className='sm:text-2xl text-[6.2vw] font-semibold '>The ultimate guide to buying your first home</h1>
            </div>
            
        </div>
    </div>
    </section>
)
}

export default Blog;

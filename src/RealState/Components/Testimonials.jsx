import Carousel from "./Carousel";
const Testimonials =()=>{
    return(
        <section className="min-h-screen bg-[#EDF3FF] rounded-3xl">
            <div className="flex flex-col items-center justify-center py-5 text-[#171717]">
<p className="text-lg mb-5">Testimonials</p>
<h1 className='sm:text-[4vw] text-[6.2vw] font-semibold leading-10'>Real feedback from our </h1>
<h1 className='sm:text-[4vw] text-[6.2vw] font-semibold '>satisfied clients
</h1>
</div>
<div className="swiper">
<Carousel/>
</div>
        </section>
    )
}

export default Testimonials;
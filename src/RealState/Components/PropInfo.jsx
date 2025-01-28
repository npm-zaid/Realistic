import { useParams} from 'react-router-dom'
import { cards } from './data'

const PropInfo = ()=>{
    const { prop_Id } = useParams()
    console.log(prop_Id)
    const property = cards.find((card)=>card.id === prop_Id)
    console.log(property)
    return(
        <section className="min-h-screen">

         {/* INFO */}   
        <div className='flex flex-col w-[80vw] m-auto gap-5  my-10'>
        <p className='px-5  py-2 bg-[#3675FF] rounded-full w-fit text-white font-semibold'>{property.isSale ? "For Sale" : "For Rent"}</p>
            <p className='text-5xl font-semibold '>{property.title}</p>
          
         
            <div className='flex gap-6 text-[#ACACAC] sm:text-xl'>
            <p>{property.bedrooms} Bedrooms</p>
            <p>{property.bathrooms} Bathrooms</p>
            <p>{property.length} sqft</p></div>
            <p  className='text-4xl font-semibold '>{property.price}</p>
           
            
          
        </div>

        {/* MAIN IMAGES */}
        <div className='h-[90vh] w-full'>
        <img className='rounded-2xl object-cover h-full w-full' src={property.img} alt={property.title} />
        </div>
        
        {/* SUB LOCATION  */}
        <div className='flex flex-col w-[80vw] m-auto gap-10  my-10'>
        <p className='font-semibold text-gray-500 text-2xl '>{property.description}</p>
        <p className='px-5  py-2 bg-[#3675FF] rounded-full w-fit text-white font-semibold'>Book Now</p>
        <p className='sm:text-[3vw] text-[6.5vw] font-semibold '><i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i> {property.location}</p>
        </div>

        {/* CALCULATION */}
        <div className='flex flex-col sm:flex-row sm:my-0 my-16  items-center gap-8 h-screen'>
<div className='sm:w-[60%] w-full font-semibold text-2xl  '>


<div className='flex justify-between p-5 border-b border-gray-300'>
<p>Size</p>
<p>{property.length} sq.rt</p>
</div>

<div className='flex justify-between p-5 border-b border-gray-300'>
<p>Built Year</p>
<p>{property.buildYear}</p>
</div>

<div className='flex justify-between p-5 border-b border-gray-300'>
<p>Floor Plan</p>
<p>{property.floorPlan}</p>
</div>

<div className='flex justify-between p-5 border-b border-gray-300'>
<p>Bedrooms</p>
<p>{property.bedrooms}</p>
</div>

<div className='flex justify-between p-5 border-b border-gray-300'>
<p>Bathrooms</p>
<p>{property.bathrooms}</p>
</div>

<div className='flex justify-between  p-5 border-b border-gray-300'>
<p>Parking Lots</p>
<p>{property.parkingLots}</p>
</div>

</div>
<div className='sm:w-[40%] w-full rounded-2xl overflow-hidden'>
<img className='h-full w-full object-contain' src="https://framerusercontent.com/images/qx0ewX2XwtSCPSA6KF4ZrTSpmxs.webp?scale-down-to=1024" alt="" />
</div>
        </div>
        
        {/* SUB IMAGES */}
        <div className='grid grid-cols-2 grid-rows-2 h-[150vh] gap-5'>
            <div className=' overflow-hidden col-span-2 bg-blue-300/20 rounded-xl'>
            <img className='h-full w-full object-cover' src="https://framerusercontent.com/images/RXla26WbuFj6R9GWdx8I0Z9zfc.webp" alt="" /></div>
            <div className=' overflow-hidden bg-blue-300/20 rounded-xl'>
            <img className='h-full w-full object-cover' src="https://framerusercontent.com/images/xDKhHBlIqiPtfNLkw3MbqJyzD7k.webp" alt="" /></div>
            <div className=' overflow-hidden bg-blue-300/20 rounded-xl'>
            <img className='h-full w-full object-cover' src="https://framerusercontent.com/images/qZZ0GnVetPgHSs2stFqHL7fWhUQ.webp?scale-down-to=1024" alt="" /></div>
        </div>

        {/* CHECKS */}
        <div className='sm:h-[80vh] flex flex-col sm:flex-row gap-5 my-10 font-semibold'>
            <div className='sm:w-1/2 flex items-center justify-center'>
            <h1 className='sm:text-[3.5vw] text-[8vw]'>Amenities Included:</h1>
            </div>
            <div className='sm:w-1/2 flex flex-col  justify-center'>
            <p className='sm:text-[2.5vw] text-[6vw]'><i className="text-[#3675FF] mr-3 ri-check-fill"></i>Fitness Center</p>
            <p className='sm:text-[2.5vw] text-[6vw]'><i className="text-[#3675FF] mr-3 ri-check-fill"></i>Pet-Friendly Facilities</p>
            <p className='sm:text-[2.5vw] text-[6vw]'><i className="text-[#3675FF] mr-3 ri-check-fill"></i>Business Center</p>
            <p className='sm:text-[2.5vw] text-[6vw]'><i className="text-[#3675FF] mr-3 ri-check-fill"></i>Air Conditioning</p>
            <p className='sm:text-[2.5vw] text-[6vw]'><i className="text-[#3675FF] mr-3 ri-check-fill"></i>Elevator</p>
            </div>
        </div>

    </section>
    )
}

export default PropInfo;
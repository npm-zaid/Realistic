
import bed from '../Assets/bed.png'
import bath from '../Assets/bath.png'
import { NavLink } from 'react-router-dom'
const Card = ({id,length,img,title,location,price,bedrooms,bathrooms,isSale})=>{
    return(
        <div className="card group relative">
          <div className='px-3  py-1 bg-[#3675FF] group-hover:left-0 -left-16 group-hover:opacity-[1] transition-all duration-500 opacity-0 absolute z-50 rounded-full text-white m-3'><i class="ri-price-tag-3-line mr-1"></i>{isSale?<span>For Sale</span>:<span>For Rent</span>}</div>
        <NavLink  to={`/properties/${id}`}><div className='h-[50vh] rounded-3xl  overflow-hidden'>
        <img className='h-full w-full object-cover group-hover:scale-110 transition-all duration-500' src={img} alt="house" />
        </div></NavLink>
        <div className="card-content py-4">
          <p className='text-sm'> <i className="text-[#3859FF] mr-2 ri-map-pin-fill"></i>{location}</p>
          <h2 className='font-semibold text-2xl my-2'>{title}</h2>
          <div className='flex gap-4 pt-4 text-sm text-[#8C8C8C]'> 
    <div className='flex gap-2'>
              <img src={bed} className='w-[1.4vw]' alt="bed" />
              <p>{bedrooms}</p>
            </div>
            <div className='flex gap-2 px-4 border-x-2'>
              <img src={bath} className='w-[1.4vw]' alt="bed" />
              <p>{bathrooms}</p>
            </div>  
            <p>{length} sqrt ft.</p>
            
           
            </div>
        </div>
      </div>
    )
}

export default Card
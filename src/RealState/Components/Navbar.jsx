import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect,useState } from 'react';
import logo from '../Assets/Untitled_logo_3_free-file.png'
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    let prevScrollY = window.screenY
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY  > prevScrollY) {
        setShowNavbar(true); // Hide nav when scrolling down
        
      } else {
        setShowNavbar(false); // Show nav when scrolling up
      }
      
      prevScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
  <nav className={`fixed z-50  top-0 left-0 ease-in-out lg:backdrop-blur-sm w-full px-[3vw] py-4 flex justify-between items-center transition-all duration-500  ${showNavbar ? 'translate-y-[-100%] ' : 'translate-y-0'}`}>
<div className='font-semibold flex items-center sm:text-[2.2vw] text-[7vw] group'><img className='sm:w-[4vw] w-[11vw] group-hover:rotate-[90deg] transition-all duration-500 ' src={logo} alt="" /><NavLink to='/'>Realistic</NavLink></div>
<div className=' sm:flex font-semibold text-gray-700 hidden gap-8   text-lg'>
    <NavLink  className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100' to='/about'>About</NavLink>
    <NavLink  className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100' to='/properties'>Properties</NavLink>
    <NavLink  className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100' to='/agents'>Agents</NavLink>
    <NavLink  className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100' to='/blogs'>Blogs</NavLink>
</div>
<NavLink to='/contact' className='px-4 py-2 rounded-full text-white font-semibold text-md bg-[#3675FF]'>Contact us</NavLink>
    </nav>
    <div className='h-[14vh] '></div>
    </>
  )
}

export default Navbar

import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Untitled_logo_3_free-file.png';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menu, setMenu] = useState(false); // State for hamburger menu
  const burgerRef = useRef(null); // Ref for the checkbox input
  const tl = useRef(); // GSAP timeline ref

  // Scroll handler to show/hide navbar
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setShowNavbar(true); // Hide nav when scrolling down
      } else {
        setShowNavbar(false); // Show nav when scrolling up
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // GSAP animation for sidebar
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
      .to('.sidebar', {
        x: '0%',
        ease: 'power4.in',
        duration: 0.7,
      })
      .from('.sidebar a', { opacity: 0, x: 100, ease: 'power4.in',duration:.5, stagger:0.05 });
  });

  // Toggle sidebar animation based on menu state
  useEffect(() => {
    if (menu) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menu]);

  // Close sidebar and uncheck checkbox when a NavLink is clicked
  const handleNavLinkClick = () => {
    setMenu(false); // Close the sidebar
    if (burgerRef.current) {
      burgerRef.current.checked = false; // Uncheck the checkbox
    }
  };

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 ease-in-out lg:backdrop-blur-sm w-full px-[3vw] py-4 flex justify-between items-center transition-all duration-500 ${
          showNavbar ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
      >
        <div className='font-semibold flex items-center sm:text-[2.2vw] text-[8vw] group'>
          <img
            className='sm:w-[4vw] w-[13vw] group-hover:rotate-[90deg] transition-all duration-500'
            src={logo}
            alt=''
          />
          <NavLink to='/'>Realistic</NavLink>
        </div>

        <div className='sm:flex font-semibold text-gray-700 hidden gap-8 text-lg'>
          <NavLink
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
            to='/properties'
          >
            Properties
          </NavLink>
          <NavLink
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
            to='/agents'
          >
            Agents
          </NavLink>
          <NavLink
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
            to='/blogs'
          >
            Blogs
          </NavLink>
        </div>

        <NavLink
          to='/contact'
          className='px-4 py-2 hidden sm:block rounded-full text-white font-semibold text-md bg-[#3675FF]'
        >
          Contact us
        </NavLink>

        {/* Hamburger Menu */}
        <input
          ref={burgerRef}
          type='checkbox'
          id='checkbox'
          className='hidden'
          onChange={() => setMenu(!menu)}
        />
        <label htmlFor='checkbox' className='toggle z-50 cursor-pointer sm:hidden absolute'>
          <div className='bars' id='bar1'></div>
          <div className='bars' id='bar2'></div>
          <div className='bars' id='bar3'></div>
        </label>

        {/* Sidebar */}
        <div className='sidebar absolute h-[100vh] w-full left-0 top-0 translate-x-[100%] z-40 bg-gradient-to-t from-blue-500/50 via-gray-500/50 backdrop-blur-xl to-white p-4'>
          <div className='flex flex-col gap-6 text-4xl text-zinc-800 font-semibold'>
            <NavLink onClick={handleNavLinkClick} to='/'>
              Home
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to='/properties'>
              Properties
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to='/about'>
              About
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to='/agents'>
              Agents
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to='/contact'>
              Contact
            </NavLink>
            <NavLink onClick={handleNavLinkClick} to='/blogs'>
              Blogs
            </NavLink>
          </div>
        </div>
      </nav>
      <div className='h-[14vh]'></div>
    </>
  );
}

export default Navbar;
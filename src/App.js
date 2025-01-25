import React from 'react'
import Home from './RealState/pages/Home';
import { useRef ,useEffect} from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './RealState/Components/Navbar'
import Properties from './RealState/pages/Properties';
import Agents from './RealState/pages/Agents';
import About from './RealState/pages/About';
import Contact from './RealState/pages/Contact';
import Blogs from './RealState/pages/Blogs';
import Footer from './RealState/Components/Footer';
import { Route,Routes } from 'react-router-dom';



const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust as needed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch:true,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1, 
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis; // Store Lenis instance in ref

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);
 

  return (
  <div className='px-[4vw] scroll-container'>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} /> 
     <Route path="/contact" element={<Contact />} />
     <Route path="/blogs" element={<Blogs />} />
     <Route path="/properties" element={<Properties/>} />
     <Route path="/agents" element={<Agents/>} />

  </Routes>
  <Footer/>
  </div>

  )
}

export default App;

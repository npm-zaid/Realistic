import React from 'react'
import Home from './RealState/pages/Home';
import { useRef ,useEffect} from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './RealState/Components/Navbar'
import Properties from './RealState/pages/Properties';
import Agents from './RealState/pages/Agents';
import About from './RealState/pages/About';
import Contact from './RealState/pages/Contact';
import Blogs from './RealState/pages/Blogs';
import Footer from './RealState/Components/Footer';
import PropInfo from './RealState/Components/PropInfo';
import AgentInfo from './RealState/Components/AgentInfo';
import { Routes, Route, useLocation } from 'react-router-dom';
import Call from './RealState/Components/Call';
import BlogInfo from './RealState/Components/BlogInfo'





const App = () => {
  const lenisRef = useRef();
  const location = useLocation(); 
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
 
  const pageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.98, 
      y: 80, 
      rotateX: -10, 
      filter: "blur(10px)" 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: "easeOut", 
        type: "spring", 
        stiffness: 120 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.02, 
      y: -60, 
      rotateX: 10,
      filter: "blur(15px)", 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
  <div className='px-[4vw] scroll-container'>
    <Navbar/>
  
    
    <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} /> 
    <Route path="/contact" element={<Contact />} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/blogs/:blog_Id" element={<BlogInfo />} />
    <Route path="/properties" element={<Properties/>} />
    <Route path="/agents" element={<Agents/>} />
    <Route path="/agents/:agent_Id" element={<AgentInfo/>} />
     <Route path="/properties/:prop_Id" element={<PropInfo/>} />
     
     </Routes>
        </motion.div>
      </AnimatePresence>
  <Call/>
  <Footer/>
  </div>

  )
}

export default App;

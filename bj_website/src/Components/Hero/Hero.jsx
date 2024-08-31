import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import bj_websitepic1 from "../../assets/bj_websitepic1.jpg";
import './Hero.css';

const Hero = () => {
  // Prevent body scrolling when Hero component is active
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="hero bg-cover bg-center fixed top-0 left-0 h-screen w-screen"
      style={{
        backgroundImage: `url(${bj_websitepic1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label="Background image"
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="hero-title text-7xl font-bold">BLACK JACK</h1>

          <motion.a
            href="#"
            className="mt-6 inline-block bg-red-600 hover:bg-red-800 text-white py-6 px-12 rounded-full text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            PLAY
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
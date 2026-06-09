import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with slow zoom and warm overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <img
          src="/images/hero_bg_1780986040381.png"
          alt="DJ Coffee & Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-800/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Glassmorphism overlay for text */}
      <div className="glass bg-white/20 backdrop-blur-lg rounded-2xl p-8 mx-4 md:mx-0 max-w-4xl mx-auto mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-coffee-300 font-medium tracking-widest uppercase text-sm md:text-base mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            EST. IN LETANG, NEPAL
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-gradient">DJ Coffee &amp; Cafe</span>
            <span className="badge ml-3 inline-block">Letang's Finest</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-light text-balance">
            Welcome to DJ Coffee &amp; Cafe – Your cozy coffee destination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a href="/Menu" className="w-full sm:w-auto btn-premium">
              View Menu
            </a>
            <button onClick={onOpenReservation} className="w-full sm:w-auto btn-premium">
              Reserve a Table
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
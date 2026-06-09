import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" 
                alt="Pouring coffee at DJ Coffee & Cafe" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-coffee-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-xl hidden md:block border border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-coffee-100 dark:bg-coffee-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-coffee-600 dark:text-coffee-400">4.2</span>
                </div>
                <div>
                  <div className="flex text-amber-400 text-sm mb-1">
                    {'★'.repeat(4)}{'☆'.repeat(1)}
                  </div>
                  <p className="text-sm font-medium text-stone-600 dark:text-stone-300">25+ Happy Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-coffee-600 dark:text-coffee-400 font-medium tracking-wider uppercase text-sm mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white mb-6 leading-tight">
              A warm & cozy café <br/> in the heart of Letang.
            </h3>
            
            <div className="space-y-6 text-stone-600 dark:text-stone-300 text-lg font-light leading-relaxed">
              <p>
                Welcome to DJ Coffee & Cafe, where every cup tells a story. Located on the Kanepokhari–Letang Road, we've created a sanctuary for coffee lovers, remote workers, and friends seeking a comfortable spot to connect.
              </p>
              <p>
                We believe in the power of a great atmosphere paired with exceptional flavors. Whether you're craving freshly brewed coffee, refreshing beverages, delicious snacks, or just quality time with loved ones, our doors are open to provide an unforgettable experience.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-white mb-2">Daily</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm">Freshly baked pastries & premium roasted coffee.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-white mb-2">Cozy</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm">Perfect ambiance for studying or chilling.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
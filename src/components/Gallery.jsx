import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1495474472204-51ece6f691ba?auto=format&fit=crop&w=800&q=80', alt: 'Coffee Beans', className: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1559925393-8be0ab4a6b8b?auto=format&fit=crop&w=800&q=80', alt: 'Cafe Interior', className: 'md:col-span-1 md:row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80', alt: 'Latte Art', className: 'md:col-span-1 md:row-span-1' },
  { src: 'https://images.unsplash.com/photo-1525648199074-ceeeace8225e?auto=format&fit=crop&w=800&q=80', alt: 'Friends Gathering', className: 'md:col-span-2 md:row-span-1' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-coffee-600 dark:text-coffee-400 font-medium tracking-wider uppercase text-sm mb-3">Moments</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white mb-4">Our Gallery</h3>
            <p className="text-stone-600 dark:text-stone-400">
              A glimpse into the cozy moments, delicious treats, and warm atmosphere at DJ Coffee & Cafe.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block px-6 py-3 border border-stone-200 dark:border-stone-700 rounded-full hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors text-stone-800 dark:text-stone-200 font-medium"
          >
            Follow on Instagram
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
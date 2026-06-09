import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const menuCategories = ['All', 'Coffee', 'Cold Drinks', 'Food & Snacks'];

const menuItems = [
  { id: 1, name: 'Café Latte', desc: 'Espresso with steamed milk and a light layer of foam.', price: 'Rs. 150', category: 'Coffee', img: '/images/gallery_latte_1780986090316.png' },
  { id: 2, name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk, and milk foam.', price: 'Rs. 160', category: 'Coffee', img: '/images/gallery_latte_1780986090316.png' },
  { id: 3, name: 'Espresso', desc: 'Strong, concentrated coffee served in a small shot.', price: 'Rs. 100', category: 'Coffee', img: '/images/gallery_beans_1780986077348.png' },
  { id: 4, name: 'Cold Coffee', desc: 'Blended iced coffee with milk and vanilla ice cream.', price: 'Rs. 180', category: 'Cold Drinks', img: '/images/about_pouring_1780986064901.png' },
  { id: 5, name: 'Mojito Mocktail', desc: 'Refreshing mint, lime, and soda water blend.', price: 'Rs. 200', category: 'Cold Drinks', img: '/images/about_pouring_1780986064901.png' },
  { id: 6, name: 'Fresh Lassi', desc: 'Traditional creamy yogurt-based sweet drink.', price: 'Rs. 120', category: 'Cold Drinks', img: '/images/about_pouring_1780986064901.png' },
  { id: 7, name: 'Grilled Chicken Nanglo Set', desc: 'Our signature special platter with authentic flavors.', price: 'Rs. 450', category: 'Food & Snacks', img: '/images/gallery_friends_1780986119375.png' },
  { id: 8, name: 'Bakery Items', desc: 'Fresh daily selection of croissants and muffins.', price: 'Rs. 150+', category: 'Food & Snacks', img: '/images/gallery_beans_1780986077348.png' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-coffee-600 dark:text-coffee-400 font-medium tracking-wider uppercase text-sm mb-3">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white mb-6">Featured Menu</h3>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Discover our carefully curated selection of beverages and bites, crafted with love to make your day better.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {menuCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-coffee-600 text-white shadow-md' 
                    : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-stone-100 dark:border-stone-800 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-coffee-600 dark:text-coffee-400 shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-2">{item.name}</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm line-clamp-2">{item.desc}</p>
                <button className="mt-4 flex items-center gap-2 text-coffee-600 dark:text-coffee-400 text-sm font-medium hover:text-coffee-700 transition-colors">
                  <SafeIcon icon={FiIcons.FiPlusCircle} /> Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
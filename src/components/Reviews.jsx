import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const reviews = [
  { text: "Great coffee, relaxing atmosphere, and excellent service. Definitely my go-to spot in Letang!", author: "Aayush Gurung", rating: 5 },
  { text: "One of the best cafés in Letang. Perfect place to chill with friends after a long day.", author: "Sneha Rai", rating: 5 },
  { text: "The Grilled Chicken Nanglo Set is a must-try! Very affordable prices for such quality food.", author: "Bikash Tamang", rating: 4 },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-coffee-600 dark:text-coffee-400 font-medium tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white">What Our Customers Say</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-950 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 relative"
            >
              <SafeIcon icon={FiIcons.FiMessageSquare} className="absolute top-6 right-6 text-4xl text-stone-100 dark:text-stone-800" />
              
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiIcons.FiStar} className={i < review.rating ? 'fill-current' : 'text-stone-300 dark:text-stone-700'} />
                ))}
              </div>
              
              <p className="text-stone-600 dark:text-stone-300 mb-6 italic relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-coffee-100 dark:bg-coffee-900/50 rounded-full flex items-center justify-center text-coffee-600 dark:text-coffee-400 font-bold">
                  {review.author.charAt(0)}
                </div>
                <span className="font-medium text-stone-900 dark:text-white">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
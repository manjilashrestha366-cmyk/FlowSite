import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const features = [
  { icon: FiIcons.FiCoffee, title: 'Freshly Brewed', desc: 'Premium beans roasted to perfection for the best taste.' },
  { icon: FiIcons.FiHeart, title: 'Cozy Atmosphere', desc: 'A relaxing environment perfect for chilling or working.' },
  { icon: FiIcons.FiDollarSign, title: 'Affordable Prices', desc: 'Quality food and beverages that won\'t break the bank.' },
  { icon: FiIcons.FiSmile, title: 'Friendly Service', desc: 'Our staff is dedicated to making your visit special.' },
  { icon: FiIcons.FiWifi, title: 'Free Wi-Fi', desc: 'Stay connected while enjoying your favorite drink.' },
  { icon: FiIcons.FiUsers, title: 'Great Hangout Spot', desc: 'The perfect gathering place in Letang for friends.' },
];

const Features = () => {
  return (
    <section className="py-24 bg-coffee-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-coffee-200 max-w-2xl mx-auto"
          >
            More than just a cafe, we provide an experience that keeps our customers coming back.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-coffee-800 rounded-xl flex items-center justify-center mb-6">
                <SafeIcon icon={feat.icon} className="text-2xl text-coffee-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-coffee-200/80 leading-relaxed text-sm">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const ReservationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white dark:bg-stone-900 w-full max-w-lg rounded-3xl shadow-2xl p-8 overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-stone-400 hover:text-stone-600 dark:hover:text-white transition-colors"
          >
            <SafeIcon icon={FiIcons.FiX} className="text-2xl" />
          </button>

          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-white mb-2">Book a Table</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm">Join us for a cozy experience at DJ Coffee & Cafe</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1 uppercase tracking-wider">Date</label>
                <div className="relative">
                  <SafeIcon icon={FiIcons.FiCalendar} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none dark:text-white text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1 uppercase tracking-wider">Time</label>
                <div className="relative">
                  <SafeIcon icon={FiIcons.FiClock} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input type="time" className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none dark:text-white text-sm" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1 uppercase tracking-wider">Guests</label>
              <div className="relative">
                <SafeIcon icon={FiIcons.FiUsers} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none dark:text-white text-sm appearance-none">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1 uppercase tracking-wider">Contact Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none dark:text-white text-sm" />
            </div>

            <button 
              type="submit"
              className="w-full bg-coffee-600 hover:bg-coffee-700 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-coffee-600/20 mt-4"
              onClick={() => {
                alert("Reservation request sent! We will contact you shortly to confirm.");
                onClose();
              }}
            >
              Confirm Reservation
            </button>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ReservationModal;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, resetMessage } from '../store/contactSlice';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const dispatch = useDispatch();
  const { sent, senderName } = useSelector((state) => state.contact);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage({ name: form.name }));
    setForm({ name: '', email: '', phone: '', message: '' });

    // Auto-hide toast after 4 seconds
    setTimeout(() => dispatch(resetMessage()), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-stone-950 relative">

      {/* ✅ Success Toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-coffee-700 text-white px-6 py-4 rounded-2xl shadow-2xl"
          >
            <CheckCircleIcon className="h-6 w-6 flex-shrink-0" />
            <div>
              <p className="font-semibold text-base">Message Sent!</p>
              <p className="text-sm text-coffee-200">
                Thank you{senderName ? `, ${senderName}` : ''}! We'll get back to you soon. ☕
              </p>
            </div>
            <button
              onClick={() => dispatch(resetMessage())}
              className="ml-4 text-coffee-200 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-coffee-600 dark:text-coffee-400 font-medium tracking-wider uppercase text-sm mb-3">Visit Us</h2>
            <h3 className="text-4xl font-serif font-bold text-stone-900 dark:text-white mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-50 dark:bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 text-coffee-600 dark:text-coffee-400">
                  <SafeIcon icon={FiIcons.FiMapPin} className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">Location</h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    PGQ3+M36, Kanepokhari–Letang Road<br/>
                    Letang 56600, Morang, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-50 dark:bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 text-coffee-600 dark:text-coffee-400">
                  <SafeIcon icon={FiIcons.FiPhone} className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">Contact</h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm">
                    +977 9860984547<br/>
                    +977 9765471410
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-50 dark:bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 text-coffee-600 dark:text-coffee-400">
                  <SafeIcon icon={FiIcons.FiClock} className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">Hours</h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm">
                    Open Daily<br/>
                    Closes at 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-64 bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden relative shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.355152862369!2d87.4720!3d26.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef5b5b5b5b5b5b%3A0x0!2sLetang!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 dark:bg-stone-900 p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 dark:border-stone-800"
          >
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none transition-all dark:text-white"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none transition-all dark:text-white"
                    placeholder="+977"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:ring-2 focus:ring-coffee-500 outline-none transition-all resize-none dark:text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-coffee-600 hover:bg-coffee-700 text-white font-medium py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                Send Message
                <SafeIcon icon={FiIcons.FiSend} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
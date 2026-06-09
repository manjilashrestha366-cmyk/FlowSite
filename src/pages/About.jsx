import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-800">
            About Cozy Café
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            A warm neighborhood spot where coffee, tea, and pastries are crafted
            with love.
          </p>
        </motion.div>

        {/* Two‑column layout */}
        <div className="lg:flex lg:gap-12">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"
              alt="Cozy café interior"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-coffee-700">
              Our Story
            </h3>
            <p className="mb-4 text-gray-800">
              Founded in 2015 by coffee enthusiast Maya Patel, Cozy Café began as a
              tiny stall at the local farmer’s market. Our mission is simple:
              serve the highest‑quality coffee while fostering a sense of community.
            </p>
            <p className="mb-4 text-gray-800">
              Every bean is ethically sourced, roasted locally, and brewed to
              perfection. In addition to our signature espresso drinks, we bake fresh
              pastries daily and offer a curated selection of teas.
            </p>
            <p className="text-gray-800">
              Today we’re a beloved neighborhood hub—thanks to our loyal patrons
              and the passionate team behind the counter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

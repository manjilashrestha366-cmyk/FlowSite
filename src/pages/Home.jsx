import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

import ScrollToTop from '../components/ScrollToTop';
import ReservationModal from '../components/ReservationModal';

function Home() {
  const [isReservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <Hero onOpenReservation={() => setReservationOpen(true)} />
      <About />
      <Reviews />
      <Contact />

      <ScrollToTop />
      <ReservationModal isOpen={isReservationOpen} onClose={() => setReservationOpen(false)} />
    </>
  );
}

export default Home;

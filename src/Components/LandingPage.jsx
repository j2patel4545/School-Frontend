import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'; 
import { motion } from 'framer-motion';

import Navbar from './Navbar';
import Footer from './Footer';
import Notices from './Principal/Notices';

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    'https://images.pexels.com/photos/8926456/pexels-photo-8926456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8466783/pexels-photo-8466783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8466701/pexels-photo-8466701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8926456/pexels-photo-8926456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8466783/pexels-photo-8466783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8466701/pexels-photo-8466701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

    //optional
    'https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8471978/pexels-photo-8471978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4145074/pexels-photo-4145074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    
    'https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8471978/pexels-photo-8471978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4145074/pexels-photo-4145074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8471978/pexels-photo-8471978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4145074/pexels-photo-4145074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    
  ];

  const totalSlides = images.length;

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === totalSlides) {
      setCurrentSlide(0);
    } else if (currentSlide === -1) {
      setCurrentSlide(totalSlides - 1);
    }
  };

  return (
    <div className="bg-zinc-950 text-zinc-50">
      <Navbar />
      <div id='ABC' className='flex w-screen pt-10 justify-center'>
        <div className="mt-12 flex w-5/6 h-96 justify-center items-center relative overflow-hidden">
          <div
            className={`relative flex h-4/5 w-4/5 transition-transform duration-700 ease-in-out`}
            style={{
              transform: `translateX(-${(currentSlide + 1) * 100}%)`,
              transitionDuration: isTransitioning ? '0.7s' : '0s',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="relative w-full flex-shrink-0 opacity-85">
              <img
                src={images[totalSlides - 1]}
                alt={`Slide ${totalSlides}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {images.map((image, index) => (
              <div
                key={index}
                className={`relative w-full flex-shrink-0 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-30'
                }`}
                style={{
                  transition: 'opacity 0.7s ease-in-out',
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}

            <div className="relative w-full flex-shrink-0 opacity-60">
              <img
                src={images[0]}
                alt={`Slide 1`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <button
            className="absolute left-4 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors duration-300"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="w-8 h-8 text-zinc-300 hover:text-zinc-50 transition-colors duration-300" />
          </button>
          <button
            className="absolute right-4 z-10 flex justify-center items-center w-12 h-12 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors duration-300"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="w-8 h-8 text-zinc-300 hover:text-zinc-50 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Additional sections */}
      <div className="bg-gradient-to-b from-zinc-950 to-zinc-800 text-zinc-50">
  {/* Welcome Section */}
  <div className="relative px-6 py-12 md:py-24">
    <motion.div
      className="absolute inset-0 bg-gradient-radial from-zinc-700/30 via-transparent to-transparent -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4 md:text-6xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Welcome to Apna School
      </motion.h2>
      <motion.p
        className="text-lg max-w-3xl mx-auto md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        Discover our latest features and offerings. We have a lot in store for you, from exclusive services to the latest updates!
      </motion.p>
    </motion.div>
    <motion.div
      className="absolute top-0 right-0 w-24 h-24 bg-zinc-600 rounded-full opacity-20"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-700 rounded-full opacity-20"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    />
  </div>

  {/* Services Section */}
  <div className="relative bg-zinc-800 px-6 py-12 md:py-24">
    <h3 className="text-3xl font-semibold text-center mb-8 md:text-4xl">Our Services</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {["Service 1", "Service 2", "Service 3", "Service 4","Service 5","Service 6","Service 7"].map((service, index) => (
        <motion.div
          key={index}
          className="relative bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 p-6 rounded-lg shadow-lg w-full max-w-xs md:w-72 hover:shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <h4 className="text-xl font-bold mb-2 text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">{service}</h4>
          <p className="text-zinc-50">
            Description of {service.toLowerCase()}, highlighting the key features and benefits.
          </p>
        </motion.div>
      ))}
    </div>
    <motion.div
      className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-b from-pink-500 to-yellow-500 rounded-full opacity-20"
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full opacity-20"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
  </div>

  {/* Latest News Section */}
  <div className="relative bg-zinc-950 px-6 py-12 md:py-24">
    <h3 className="text-3xl font-semibold text-center mb-8 md:text-4xl">Latest News</h3>
    <ul className="list-disc list-inside px-4 max-w-2xl mx-auto space-y-4">
      {["News Item 1", "News Item 2", "News Item 3"].map((newsItem, index) => (
        <motion.li
          key={index}
          className="text-lg md:text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ x: 10, color: "#FFD700" }}
        >
          <strong>{newsItem}:</strong> Brief description of {newsItem.toLowerCase()}, highlighting key points and updates.
        </motion.li>
      ))}
    </ul>
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </div>

  {/* Contact Us Section */}
  <div className="relative bg-zinc-800 px-6 py-12 md:py-24">
    <h3 className="text-3xl font-semibold text-center mb-8 md:text-4xl">Contact Us</h3>
    <div className="max-w-md mx-auto bg-zinc-950 p-8 rounded-lg shadow-lg relative">
      <form className="flex flex-col gap-4">
        <motion.label
          className="text-lg md:text-xl"
          htmlFor="name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Name
        </motion.label>
        <input
          type="text"
          id="name"
          className="p-3 rounded-md border border-zinc-600 bg-zinc-700 text-zinc-50"
          placeholder="Your Name"
        />
        <motion.label
          className="text-lg md:text-xl"
          htmlFor="email"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Email
        </motion.label>
        <input
          type="email"
          id="email"
          className="p-3 rounded-md border border-zinc-600 bg-zinc-700 text-zinc-50"
          placeholder="Your Email"
        />
        <motion.label
          className="text-lg md:text-xl"
          htmlFor="message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Message
        </motion.label>
        <textarea
          id="message"
          className="p-3 rounded-md border border-zinc-600 bg-zinc-700 text-zinc-50"
          placeholder="Your Message"
          rows="4"
        ></textarea>
        <motion.button
          type="submit"
          className="bg-zinc-50 text-zinc-950 py-3 px-6 rounded-md mt-4 hover:bg-zinc-300 transition-colors duration-300"
          whileHover={{ scale: 1.05, backgroundColor: "#FFD700" }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </form>
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-full opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default LandingPage;

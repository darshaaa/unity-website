import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
// 1. IMPORT YOUR NEW CONTENT COMPONENT
import HomeContent from './homeContent'; 
import QuickLinksSection from './quickLinksSection';
import HomeSections from './homeSections';

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg",
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg",
    "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. TOP SECTION (Togglebar + Navbar) */}
      <Navbar />

      {/* 2. HERO SLIDER SECTION */}
      <main className="flex-grow">
        <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden bg-gray-200">
          
          {/* THE IMAGE SLIDER */}
          <div className="w-full h-full relative">
            {slides.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img 
                  src={img} 
                  alt={`Slide ${index}`} 
                  className="w-full h-full object-cover"
                />
                {/* Overlay text if needed like in the image */}
                <div className="absolute inset-0 bg-black/20 flex items-center px-10 lg:px-20">
                   <h2 className="text-white text-4xl lg:text-6xl font-black drop-shadow-xl uppercase tracking-tighter">
                     Academic <br/> Overview
                   </h2>
                </div>
              </div>
            ))}

            {/* Manual Controls */}
            <button 
              onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-12 h-12 rounded-full hover:bg-black/60 transition-all z-10"
            >
              ❮
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-12 h-12 rounded-full hover:bg-black/60 transition-all z-10"
            >
              ❯
            </button>
          </div>
        </div>

        {/* 2. PAGE CONTENT SECTION (HOME CONTENT IMPORTED HERE) */}
        {/* We replace the previous placeholder with the specific layouts for Welcome, Updates, and Events */}
        <div className="bg-white">
          <HomeContent />
        </div>
        <div className="bg-white">
          <QuickLinksSection />
        </div>
        <div className="bg-white">
          <HomeSections />
        </div>
      </main>

      {/* 3. FOOTER SECTION */}
      <Footer />

      {/* Animation Style */}
      <style>
        {`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker {
            animation: ticker 35s linear infinite;
          }
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default HomeHero;
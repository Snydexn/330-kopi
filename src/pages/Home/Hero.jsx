// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#f4e1d2] mt-15"> 
      <div className='animate__animated animate__fadeInUp animate__delay-1s'>
        <div className="relative w-full flex justify-center z-0">
          <img 
            src="/assets/hero.png" 
            alt="Promo Image" 
            className="max-w-[100%] h-auto rounded-lg shadow-lg" 
          />
          
          <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 text-base md:text-2xl px-4 md:px-8 py-1 md:py-2 text-white rounded-full">
            <a 
              href="/menu" 
              className="bg-[#C59464] text-white px-15 py-3 text-2xl rounded-full hover:bg-[#5F3826] hover:text-white transition-all"
              style={{ fontFamily: 'Want Coffee' }}
            >
              MENU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

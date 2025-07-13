// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#f4e1d2] mt-15"> 
      <div>
        {/* Image container with relative positioning */}
        <div className="relative w-full flex justify-center z-0">
          <img 
            src="/assets/hero.png" 
            alt="Promo Image" 
            className="max-w-[100%] h-auto rounded-lg shadow-lg" 
          />
          
          {/* Button inside the image */}
          <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2">
            <a 
              href="#menu" 
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

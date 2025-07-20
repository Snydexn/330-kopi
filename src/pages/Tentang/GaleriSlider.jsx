import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useRef, useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../../components/Footer';

const GaleriSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const slides = [
    '/assets/slide/Picture1.jpg',
    '/assets/slide/Picture2.jpg',
    '/assets/slide/Picture3.jpeg',
    '/assets/slide/Picture4.jpeg',
    '/assets/slide/Picture5.jpeg',
    '/assets/slide/Picture6.jpeg',
    '/assets/slide/Picture7.jpeg',
    '/assets/slide/Picture8.jpeg',
    '/assets/slide/Picture9.jpeg',
  ];

  // Re-render setelah tombol ref siap
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="w-full px-4 py-12 bg-[#C59464] relative">
      <h2
        className="text-4xl text-white text-center mb-8 tracking-wide"
        style={{ fontFamily: 'Want Coffee' }}
      >
        POTRET 3:30 KOPI
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Tombol Kiri */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 
                  bg-[#5F3826] text-white w-10 h-10 
                  flex items-center justify-center rounded-full 
                  shadow-md hover:bg-[#8B5E3C] transition"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Tombol Kanan */}
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 
                  bg-[#5F3826] text-white w-10 h-10 
                  flex items-center justify-center rounded-full 
                  shadow-md hover:bg-[#8B5E3C] transition"
        >
          <FaChevronRight size={18} />
        </button>

        {/* Swiper */}
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GaleriSlider;

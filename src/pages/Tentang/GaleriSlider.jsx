import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import potret1 from '../../assets/maps.png';
import potret2 from '../../assets/hero.png';
import potret3 from '../../assets/ilusi.png';
import potret4 from '../../assets/history.png'; // opsional

export default function GaleriSlider() {
  return (
    <div className="bg-[#D0935B] border-2 border-[#87CEFA] rounded-xl p-6 mt-12">
      <h2 className="text-2xl font-bold text-center text-white mb-6">POTRET 3:30 KOPI</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[potret1, potret2, potret3, potret4].map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Potret ${i + 1}`} className="rounded-lg w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

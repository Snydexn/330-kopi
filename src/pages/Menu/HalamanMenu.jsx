import React from 'react';
import MenuKopi from './MenuKopi';
import MenuNonKopi from './MenuNonKopi';
import MenuMakanan from './MenuMakanan';
import Footer from '../../components/Footer';

const HalamanMenu = () => {
  return (
    <div className="relative bg-[#E7DBCC] overflow-hidden">
      {/* Ornamen sebagai background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            url('/assets/bg/Atas_Menu.png'),
            url('/assets/bg/Bawah_Menu.png')
          `,
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'top -750px center, bottom center', // geser lebih atas
          backgroundSize: '1500px, 1200px', // perbesar agar lebih proporsional
          opacity: 0.45,
        }}
      ></div>

      {/* Konten utama */}
      <div className="relative z-10 pt-[60px]">
        <MenuKopi />
        <MenuNonKopi />
        <MenuMakanan />
      </div>
      <Footer />
    </div>
  );
};

export default HalamanMenu;

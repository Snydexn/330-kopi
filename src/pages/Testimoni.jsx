// pages/Testimoni.jsx
import React from 'react';
import Footer from '../components/Footer';

const testimonies = [
  {
    name: 'U Nazha',
    image: '/assets/testimoni/testi1.png',
    rating: 5,
    content:
      'Tempat asik seru buat diskusi, kerja kelompok, ngobrol, meeting, harga terjangkau, malam minggu suka ada live music nya, paling pinggir di atas liat jalan dan langit itu favorit, kalau ujan pindah masuk di dalem hehe.',
  },
  {
    name: 'Fajri Wira Pratama',
    image: '/assets/testimoni/testi2.png',
    rating: 5,
    content:
      'Tempatnyaa asyikk.. Apalagi sore viewnya dapet banget❤️ Cocok nongkrong bareng temen,pacar, keluarga. Buat foto2, mau tik-tokan bareng teman viewnya dapet.',
  },
  {
    name: 'Azarine Dyandra Andita 4H',
    image: '/assets/testimoni/testi3.png',
    rating: 5,
    content:
      'Tempatnya enak buat nongkrong..ada live music nya juga, variasi makan & minumnya buanyak & enak2.. pasti bakal dateng lagi..',
  },
  {
    name: 'Fanny H Kusuma',
    image: '/assets/testimoni/testi4.png',
    rating: 5,
    content:
      'Tempat yang nyaman buat nyantai.. Langsung ditemenin owner yang baek.. Cofee dan mie nya wuenal puol..',
  },
  {
    name: 'Rahma Nofa',
    image: '/assets/testimoni/testi5.png',
    rating: 5,
    content:
      'Mie hotplate kesukaan... tiap mampir sllpesan menu ini, kafe dgn menu2 hotplate yg enak & murah',
  },
  {
    name: 'Bayu',
    image: '/assets/testimoni/testi6.png',
    rating: 4,
    content:
      'lumayan lah tempatnya buat nongki2, setiap kamis ada open mic jadi ada hiburannya mantapsssssss',
  },
  {
    name: 'Rama Ervan',
    image: '/assets/testimoni/testi7.png',
    rating: 5,
    content:
      'Salah satu cafe yg konsisten menyediakan komedi standup di kamis malam.',
  },
  {
    name: 'Hilman Zulfahmi',
    image: '/assets/testimoni/testi8.png',
    rating: 5,
    content:
      'Luas banget di atas, mau nongkrong beramai2 juga bisa. Sore adem bgt di atas banyak angin.',
  },
  {
    name: 'Renovatio Gamer',
    image: '/assets/testimoni/testi9.png',
    rating: 5,
    content:
      'barista nya ramah harga terjangkau dan konsep dari tempatnya bagus',
  },
  {
    name: 'Ferdanio Rizky',
    image: '/assets/testimoni/testi10.png',
    rating: 5,
    content:
      'Rasa makanan dan minumannya enak"',
  },
  {
    name: 'Ibu Sumiem',
    image: '/assets/testimoni/testi11.png',
    rating: 5,
    content:
      'Base camp anak anak touring alumni SMA 90 tahun 95.',
  },
  {
    name: 'Andika Pratama',
    image: '/assets/testimoni/testi12.png',
    rating: 5,
    content:
      'Keren buat nongkrong kalangan anak muda',
  },
];

const Testimoni = () => {
  return (
    <div
      className="relative min-h-screen py-10 px-4 md:px-12 overflow-hidden bg-[#E7DBCC]"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ fontFamily: 'Louis George Cafe' }}
    >
{/* Ornamen Kiri Desktop */}
<img
  src="/assets/bg/Kiri_Testi.png"
  alt="Ornamen Kiri"
  className="
    hidden md:block
    absolute 
    top-0 bottom-0 my-auto
    left-[-16vw] md:left-[-12vw] lg:left-[-8vw]
    w-auto h-[180vh]
    object-contain 
    opacity-30 
    pointer-events-none 
    z-0"
/>

{/* Ornamen Kiri Mobile */}
<img
  src="/assets/bg/Kiri_Testi.png"
  alt="Ornamen Kiri Mobile"
  className="
    block md:hidden
    absolute 
    top-0 left-0
    w-[180vw] h-[180vh]
    object-cover 
    opacity-20 
    pointer-events-none 
    z-0"
/>

{/* Ornamen Kanan Desktop */}
<img
  src="/assets/bg/Kanan_Testi.png"
  alt="Ornamen Kanan"
  className="
    hidden md:block
    absolute 
    top-0 bottom-0 my-auto
    right-[-16vw] md:right-[-12vw] lg:right-[-8vw]
    w-auto h-[180vh]
    object-contain 
    opacity-30 
    pointer-events-none 
    z-0"
/>

{/* Ornamen Kanan Mobile */}
<img
  src="/assets/bg/Kanan_Testi.png"
  alt="Ornamen Kanan Mobile"
  className="
    block md:hidden
    absolute 
    bottom-0 right-0
    w-[180vw] h-[180vh]
    object-cover 
    opacity-20 
    pointer-events-none 
    z-0"
/>



      {/* Konten Utama */}
      <div className="relative z-10 bg-[#5F3826] rounded-xl px-6 py-10 md:px-14 md:py-12 shadow-lg max-w-7xl mx-auto">
        <h2
          className="text-center text-white text-5xl mb-8"
          style={{ fontFamily: 'Want Coffee' }}
        >
          TESTIMONI
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonies.map((item, index) => (
            <div
              key={index}
              className="bg-[#C59464] rounded-xl p-4 text-white flex gap-4 items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h4 className="font-bold mb-1">{item.name}</h4>
                <div className="flex mb-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-base leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimoni;
import React from 'react';

const menu = [
  {
    name: 'Almara Coffee',
    image: '/assets/almara.png',
    desc: 'Almara Kopi adalah salah satu menu andalan di 3:30 Kopi.',
    price: '22.000',
  },
  {
    name: 'Ilusi Coffee',
    image: '/assets/ilusi.png',
    desc: 'Ilusi Kopi adalah salah satu menu andalan di 3:30 Kopi.',
    price: '25.000',
  },
  {
    name: 'Charcoal',
    image: '/assets/charcoal.png',
    desc: 'Minuman susu segar dengan bubuk charcoal aktif dari 3:30 Kopi.',
    price: '22.000',
  },
  {
    name: 'Ice Matcha',
    image: '/assets/matcha.png',
    desc: 'Minuman berbahan matcha pilihan dan susu segar.',
    price: '25.000',
  }
];

const Rekomendasi = () => {
  return (
    <div
      className="w-full min-h-screen p-4 bg-[#C59464] relative"
      style={{ fontFamily: 'Louis George Cafe' }}
    >
{/* Ornamen Kiri untuk Desktop */}
<img
  src="/assets/bg/Kiri_Home.png"
  alt="Ornamen Kiri"
  className="absolute top-[-1200px] left-[-37vw] h-[150vh] md:h-[450vh] w-auto object-contain opacity-30 pointer-events-none z-0 hidden md:block"
/>

{/* Ornamen Kanan untuk Desktop */}
<img
  src="/assets/bg/Kanan_Home.png"
  alt="Ornamen Kanan"
  className="absolute top-[-1200px] right-[-37vw] h-[150vh] md:h-[450vh] w-auto object-contain opacity-30 pointer-events-none z-0 hidden md:block"
/>

{/* Ornamen Kiri untuk Mobile */}
<img
  src="/assets/bg/Kiri_Home.png"
  alt="Ornamen Kiri Mobile"
  className="absolute top-0 left-0 h-[180vh] w-[180vw] object-cover opacity-20 pointer-events-none z-0 block md:hidden"
/>

{/* Ornamen Kanan untuk Mobile */}
<img
  src="/assets/bg/Kanan_Home.png"
  alt="Ornamen Kanan Mobile"
  className="absolute bottom-0 right-0 h-[180vh] w-[180vw] object-cover opacity-20 pointer-events-none z-0 block md:hidden"
/>



    
      <h1
        className="text-4xl p-4 text-center text-white mb-12"
        style={{ fontFamily: 'Want Coffee' }}
      >
        Rekomendasi Barista
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 justify-items-center"
        data-aos="fade-up" data-aos-duration="1000">
        {menu.map((item, index) => (
          <div
            key={index}
            className="bg-[#5F3826] rounded-2xl shadow-lg overflow-hidden flex flex-col h-auto hover:scale-105 transition-transform duration-300 w-[300px] sm:w-[280px] z-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-white leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
              <div className="bg-[#C59464] text-white text-center py-1 rounded-md w-24 mx-auto font-semibold text-sm">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rekomendasi;

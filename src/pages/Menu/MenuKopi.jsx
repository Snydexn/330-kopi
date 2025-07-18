// MenuPage.jsx
import React from 'react';

const menus = [
  {
    name: 'Cappuccino',
    image: '/assets/menu/cappuccino 3.jpeg',
    desc: 'Rasanya seimbang, cocok untuk pecinta kopi klasik yang creamy.',
    price: '22.000',
  },
  {
    name: 'Caramel Latte',
    image: '/assets/menu/caramel latte 2.jpeg',
    desc: 'Cocok untuk kamu yang suka kopi dengan rasa lembut dan manis.',
    price: '22.000',
  },
  {
    name: 'Coffee Latte',
    image: '/assets/menu/coffee latte.jpeg',
    desc: 'Cocok untuk kamu yang suka kopi tanpa rasa yang terlalu kuat.',
    price: '20.000',
  },
  {
    name: 'Almara Coffee',
    image: '/assets/menu/almara kopi 2.jpeg',
    desc: 'Cocok untuk pecinta kopi kekinian dengan sentuhan tradisional.',
    price: '22.000',
  },
  {
    name: 'Mochaccino',
    image: '/assets/menu/mochaccino.jpeg',
    desc: 'Cocok untuk kamu yang suka kopi dengan rasa cokelat lembut.',
    price: '22.000',
  },
  {
    name: 'Matcha Latte',
    image: '/assets/matcha.png',
    desc: 'Pas untuk dinikmati saat butuh rileks atau penyegar hari.',
    price: '27.000',
  },
  {
    name: 'Hazelnut Latte',
    image: '/assets/menu/hazelnut latte.jpeg',
    desc: 'Cocok untuk kamu yang suka kopi ringan dengan sentuhan rasa unik.',
    price: '22.000',
  },
  {
    name: 'Ocean Latte',
    image: '/assets/menu/ocean latte 3.jpeg',
    desc: 'Cocok untuk pecinta kopi dengan rasa unik dan Instagramable!',
    price: '22.000',
  },
  {
    name: 'Single Origin',
    image: '/assets/menu/single origin.jpeg',
    desc: 'Cocok untuk pecinta kopi yang ingin jelajahi rasa khas Indonesia.',
    price: '20.000',
  },
  {
    name: 'Vanilla Latte',
    image: '/assets/menu/vanilla latte 2.jpeg',
    desc: 'Pilihan pas untuk penikmat kopi yang suka rasa manis dan lembut.',
    price: '22.000',
  },
];

const MenuKopi = () => {
  return (
    <div
      className="min-h-screen px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{ fontFamily: 'Louis George Cafe', backgroundColor: '#E7DBCC' }}
    >
      {/* Judul KOPI */}
      <div className="text-center mb-6">
        <h2
          className="bg-[#5F3826] text-white text-2xl rounded-lg tracking-wide px-30 py-2 inline-block max-w-full"
          style={{ fontFamily: 'Want Coffee' }}
        >
          KOPI
        </h2>
      </div>

      {/* Grid Menu */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-2"
      data-aos="fade-up" data-aos-duration="1000">
        {menus.map((item, index) => (
          <div
            key={index}
            className="bg-[#C59464] rounded-xl shadow-lg p-4 flex flex-col text-white min-h-[330px]"
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-[#5F3826] mt-2 mb-4 shadow-md"
              />
            </div>
            <h3 className="bg-[#5F3826] px-4 py-1 rounded-md text-lg mb-1 text-center">
              {item.name}
            </h3>
            <p className="text-sm text-center flex-grow">{item.desc}</p>
            <div className="flex justify-end mt-auto">
              <div className="bg-[#5F3826] px-3 py-1 rounded-md text-sm font-semibold">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MenuKopi;

import React from 'react'

const menuItems = [
  {
    name: 'Cappuccino',
    desc: 'Rasanya seimbang, cocok untuk pecinta kopi klasik yang creamy.',
    price: 22000,
    image: cappuccino
  },
  {
    name: 'Caramel Latte',
    desc: 'Cocok untuk kamu yang suka kopi dengan rasa lembut dan manis.',
    price: 22000,
    image: caramel
  },
  {
    name: 'Coffee Latte',
    desc: 'Cocok untuk kamu yang suka kopi tanpa rasa yang terlalu kuat.',
    price: 20000,
    image: latte
  },
  {
    name: 'Almara Coffee',
    desc: 'Cocok untuk pecinta kopi kekinian dengan sentuhan tradisional.',
    price: 22000,
    image: almara
  },
  {
    name: 'Mochaccino',
    desc: 'Cocok untuk kamu yang suka kopi dengan rasa cokelat lembut.',
    price: 22000,
    image: mochaccino
  },
  {
    name: 'Moatcha Latte',
    desc: 'Pas untuk dinikmati saat butuh rileks atau penyegar hari.',
    price: 27000,
    image: matcha
  },
  {
    name: 'Hazelnut Latte',
    desc: 'Cocok untuk kamu yang suka kopi ringan dengan sentuhan rasa unik.',
    price: 22000,
    image: hazelnut
  },
  {
    name: 'Ocean Latte',
    desc: 'Cocok untuk pecinta kopi dengan rasa unik dan Instagram-able!',
    price: 22000,
    image: ocean
  },
    {
    name: 'Single Origin',
    desc: 'Cocok untuk pecinta kopi yang ingin jelajahi rasa khas Indonesia.',
    price: 20000,
    image: single
  },
    {
    name: 'Vanilla Latte',
    desc: 'Pilihan pas untuk penikmat kopi yang suka rasa manis dan lembut.',
    price: 22000,
    image: vanilla
  },
];

const Kopi = () => {
  return (
    <div className="bg-[#F5F0E5] min-h-screen py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-white bg-[#5C3A26] py-3 rounded-md mb-8">KOPI</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#D0935B] text-white rounded-xl p-4 flex flex-col items-center text-center shadow-md"
          >
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-[#5C3A26]" />
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p className="text-sm mt-1 mb-3">{item.desc}</p>
            <div className="bg-[#5C3A26] px-4 py-1 rounded-full font-semibold">
              Rp {item.price.toLocaleString('id-ID')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kopi
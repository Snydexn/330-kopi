import React from 'react';

const menus = [
  {
    name: 'Yakult Melon',
    image: '/assets/menu/yakult melon.jpeg',
    desc: 'Pilihan tepat buat penyegar suasana di hari yang panas!',
    price: '20.000',
  },
  {
    name: 'Chocoreo',
    image: '/assets/menu/chocoreo 2.jpeg',
    desc: 'Cocok untuk pecinta minuman manis dan cokelat kaya rasa.',
    price: '25.000',
  },
  {
    name: 'Rainbow Squash',
    image: '/assets/menu/rainbow squash 3.jpeg',
    desc: 'Tampilan cantik, rasa segar, dan bikin mood jadi ceria!',
    price: '20.000',
  },
  {
    name: 'Milisis',
    image: '/assets/menu/milsis 2.jpeg',
    desc: 'Favorit semua usia – simple, enak, dan selalu ngangenin!',
    price: '20.000',
  },
  {
    name: 'Red Velvet',
    image: '/assets/menu/red velvet 3.jpeg',
    desc: 'Cocok untuk yang suka minuman cantik, creamy, dan lembut di lidah.',
    price: '22.000',
  },
  {
    name: 'Milbro',
    image: '/assets/menu/milbro 2.jpeg',
    desc: 'Manisnya pas, cokelatnya terasa, bikin nagih tiap tegukan!',
    price: '22.000',
  },
  {
    name: 'Orange Milk',
    image: '/assets/menu/orange milk.jpeg',
    desc: 'Perpaduan unik susu dan jeruk yang bikin penasaran!',
    price: '18.000',
  },
  {
    name: 'Charcoal',
    image: '/assets/menu/charcoal 2.jpeg',
    desc: 'Cocok untuk pecinta minuman kekinian yang ingin coba hal baru!',
    price: '22.000',
  },
  {
    name: 'Black Sun Kiss',
    image: '/assets/menu/black sun kiss.jpeg',
    desc: 'Cocok untuk kamu yang suka eksplorasi rasa yang berbeda.',
    price: '18.000',
  },
  {
    name: 'Choco Orange Milk',
    image: '/assets/menu/choco orange 2.jpeg',
    desc: 'Cocok untuk kamu yang suka manis dan segar.',
    price: '20.000',
  },
];

const MenuNonKopi = () => {
  return (
    <div
      className="relative px-4 py-12 max-w-7xl mx-auto"
      style={{ fontFamily: 'Louis George Cafe'}}
    >
      {/* Judul */}
      <div className="text-center mb-6">
        <h2
          className="inline-block bg-[#5F3826] text-white text-2xl rounded-lg tracking-wide px-32 py-2"
          style={{ fontFamily: 'Want Coffee' }}
        >
          NON KOPI
        </h2>
      </div>

      {/* Grid Menu */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-20 max-w-7xl mx-auto px-5 mt-30"
      data-aos="fade-up" data-aos-duration="1000"
      >
        {menus.map((item, index) => (
          <div
            key={index}
            className="bg-[#C59464] rounded-xl shadow-lg p-3 flex flex-col text-white min-h-[250px]"

          >
            <div className="flex justify-center relative -mt-19 z-10">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-full mt-2 mb-4 shadow-md"
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

export default MenuNonKopi;

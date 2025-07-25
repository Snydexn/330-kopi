import React from 'react';

const menus = [
{   
    name: 'Pasta Aglio Olio', 
    image: '/assets/menu/pasta aglio olio.jpeg', 
    desc: 'Cocok untuk kamu yang suka pasta ringan tapi tetap kaya rasa.', 
    price: '22.000' 
},
{   
    name: 'Pasta Rendang', 
    image: '/assets/menu/pasta rendang.jpeg', 
    desc: 'Cocok untuk pecinta rasa tradisional dengan sentuhan modern.', 
    price: '25.000' 
},
{   
    name: 'Pasta Dendeng', 
    image: '/assets/menu/pasta dendeng.jpeg', 
    desc: 'Cocok untuk pecinta rasa tradisional dengan sentuhan modern.', 
    price: '25.000' 
},
{   
    name: 'Rice Bowl Chicken Teriyaki', 
    image: '/assets/menu/rice bowl chicken teriyaki 2.jpeg', 
    desc: 'Lezat, mengenyangkan, dan cocok untuk semua.',
    price: '25.000' 
},
{   
    name: 'Seblak 330', 
    image: '/assets/menu/seblak 330 2.jpeg', 
    desc: 'Hangat, pedas, dan pas buat temen nongkrong!', 
    price: '15.000' 
},
{   
    name: 'Roti Es Krim Chocolate', 
    image: '/assets/menu/roti goreng es krim coklat 2.jpeg', 
    desc: 'Roti hangat & es krim dingin yang nyegeriiin!', 
    price: '22.000' 
},
{ 
    name: 'Roti Es Krim Strawberry', 
    image: '/assets/menu/roti goreng es krim strawberry 2.jpeg', 
    desc: 'Roti hangat & es krim dingin yang nyegeriiin!', 
    price: '22.000' 
},
{ 
    name: 'Roti Es Krim Vanilla', 
    image: '/assets/menu/roti goreng es krim vanilla 2.jpeg', 
    desc: 'Roti hangat & es krim dingin yang nyegeriiin!',
    price: '22.000' 
},
{ 
    name: 'Rice Bowl Beef Teriyaki', 
    image:'/assets/menu/rice bowl beef teriyaki.jpeg', 
    desc: 'Lezat, mengenyangkan, dan cocok untuk semua.', 
    price:'28.000' 
},
{ 
    name: 'Mie Ayam Hotplate', 
    image: '/assets/menu/mie ayam hotplate.jpeg', 
    desc: 'Cocok buat penyuka mie ayam unik!', 
    price: '20.000' 
},
{ 
    name: 'Ayam Geprek Sambal Bawang', 
    image: '/assets/menu/ayam geprek sambal bawang 2.jpeg', 
    desc: 'Gurih pedasnya cocok buat pecinta rasa kuat.', 
    price: '25.000' 
},
{ 
    name: 'Nasi Goreng Rendang', 
    image: '/assets/menu/nasi goreng rendang 2.jpeg', 
    desc: 'Pas buat pecinta nasi goreng rasa nusantara.', 
    price: '25.000' 
},
{ 
    name: 'Large Platter', 
    image: '/assets/menu/large platter 2.jpeg', 
    desc: 'Camilan lengkap buat sharing bareng teman!', 
    price: '30.000' 
},
{ 
    name: 'Garlic Bread', 
    image: '/assets/menu/garlic bread.jpeg', 
    desc: 'Roti panggang gurih dengan aroma bawang yang menggoda.',
    price: '15.000' 
},
{ 
    name: 'Roti Bakar', 
    image: '/assets/menu/roti bakar.jpeg', 
    desc: 'Camilan klasik yang cocok untuk teman ngobrol santai!', 
    price: '18.000' 
},
];

const MenuMakanan = () => {
  return (
    <div
      className="relative px-4 py-12 max-w-7xl mx-auto"
      style={{ fontFamily: 'Louis George Cafe'}}
    >
      <div className="text-center mb-6">
        <h2
          className="inline-block bg-[#5F3826] text-white text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg tracking-wide px-20 sm:px-10 md:px-20 lg:px-32 py-2"
          style={{ fontFamily: 'Want Coffee' }}
        >
          MAKANAN
        </h2>
      </div>

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

export default MenuMakanan;

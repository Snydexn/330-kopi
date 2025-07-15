import React from 'react';

const promos = [
  {
    image: '/assets/promo/promo 1.png',
    alt: 'Promo Hari Kamis',
  },
  {
    image: '/assets/promo/promo 2.png',
    alt: 'Iced Latte Couple',
  },
  {
    image: '/assets/promo/promo 3.jpeg',
    alt: 'Promo Mahasiswa dan Siswa',
  },
];

const events = [
  {
    image: '/assets/promo/Event 1.jpg',
    alt: 'Event Nobar',
    description: (
      <>
        Nonton bareng The Jak Mania Ciledug Plus<br />
        Barito Putra vs Persija Jakarta<br /><br />
        Jum'at, 10 Januari 2025<br />
        Lokasi <a href="https://instagram.com/330kopi" target="_blank" rel="noopener noreferrer">@330kopi</a><br />
        Open gate 15:00 WIB<br />
        HTM 20K
      </>
    ),
  },
  {
    image: '/assets/promo/Event 2.jpg',
    alt: 'Event MLBB',
    description: (
      <>
        CHAMPIONSHIP KPM MLBB<br />
        Offline Tournament!<br />
        Match Day: 11 – 12 Juni 2022<br />
        Pendaftaran ditutup tanggal 09 Juni 2022<br />
        TM tanggal 10 Juni 2022<br /><br />
        Biaya pendaftaran IDR 100.000,- / Slot<br />
        Include Voucher Snack PerTeam<br />
        Venue: Jln Cipto Mangunkusumo hj mencong, Paninggilan Utara Ciledug Tangerang – <a href="https://instagram.com/330kopi" target="_blank" rel="noopener noreferrer">@330kopi</a>
      </>
    ),
  },
];

const Informasi = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-[#E7DBCC]" style={{ fontFamily: 'Louis George Cafe' }}>
      {/* PROMO */}
      <div className="bg-[#C59464] rounded-xl shadow-lg p-6 max-w-6xl mx-auto mb-12">
        <div className="text-center mb-6 text-4xl text-white">
          <h2 style={{ fontFamily: 'Want Coffee' }}>PROMO</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {promos.map((promo, index) => (
            <div key={index} className="rounded-xl p-2 flex justify-center">
              <img
                src={promo.image}
                alt={promo.alt}
                className="w-64 h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* EVENT */}
      <div className="bg-[#C59464] rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
        <div className="text-center mb-6 text-4xl text-white">
          <h2 style={{ fontFamily: 'Want Coffee' }}>EVENT</h2>
        </div>

        <div className="flex flex-col gap-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <img
                src={event.image}
                alt={event.alt}
                className="w-full md:w-64 h-auto rounded-lg object-cover"
              />
              <div className="bg-[#5F3826] text-white p-12 rounded-xl text-lg flex-1">
                {event.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Informasi;

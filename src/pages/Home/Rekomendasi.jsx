import React from 'react';

const Rekomendasi = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/rekomendasi-bg.png')] bg-cover bg-center py-10" style={{ fontFamily: 'Louis George Cafe' }}>
        <h1 className="text-4xl text-center text-white mb-12" style={{ fontFamily: 'Want Coffee' }}>Rekomendasi Barista</h1>
        <div className="flex flex-wrap justify-around gap-6">
          {/* Almara Coffee Card */}
          <div className="bg-[#5F3826] w-60 p-2 text-center rounded-lg shadow-lg">
            <img src="/assets/almara.png" alt="Almara Coffee" className="max-w-[100%] h-auto rounded-lg shadow-lg" />
            <h3 className="text-2xl text-white mt-4">Almara Coffee</h3>
            <p className="text-sm text-white">Almara Kopi adalah salah satu menu andalan di 3:30 Kopi.</p>
            <div className="relative left-30 bg-[#C59464] text-white w-20 rounded-lg text-lg mt-4">
              22.000
            </div>
          </div>

          {/* Ilusi Coffee Card */}
          <div className="bg-[#5F3826] w-60 p-2 text-center rounded-lg shadow-lg">
            <img src="/assets/ilusi.png" alt="Ilusi Coffee" className="max-w-[100%] h-auto object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold text-white mt-4">Ilusi Coffee</h3>
            <p className="text-sm text-white">Ilusi Kopi adalah salah satu menu andalan di 3:30 Kopi.</p>
            <div className="relative left-30 bg-[#C59464] text-white w-20 rounded-lg text-lg mt-4">
              25.000
            </div>
          </div>

          {/* Charcoal Card */}
          <div className="bg-[#5F3826] w-60 p-2 text-center rounded-lg shadow-lg">
            <img src="/assets/charcoal.png" alt="Charcoal" className="max-w-[100%] h-auto object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold text-white mt-4">Charcoal</h3>
            <p className="text-sm text-white">Minuman susu segar dengan bubuk charcoal aktif dari 3:30 Kopi.</p>
            <div className="relative left-30 bg-[#C59464] text-white w-20 rounded-lg text-lg mt-4">
              22.000
            </div>
          </div>

          {/* Ice Matcha Card */}
          <div className="bg-[#5F3826] w-60 p-2 text-center rounded-lg shadow-lg">
            <img src="/assets/matcha.png" alt="Ice Matcha" className="max-w-[100%] h-auto object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold text-white mt-4">Ice Matcha</h3>
            <p className="text-sm text-white">Minuman berbahan matcha pilihan dan susu segar.</p>
            <div className="relative left-30 bg-[#C59464] text-white w-20 rounded-lg text-lg mt-4">
              25.000
            </div>
          </div>
        </div>
      </div>
  );
};

export default Rekomendasi;

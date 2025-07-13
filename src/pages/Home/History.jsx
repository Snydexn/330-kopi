import React from 'react'

const History = () => {
  return (
    <div className="bg-[#5F3826] p-0 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl text-white mb-4 p-3 text-center" style={{ fontFamily: 'Want Coffee' }}>SEJARAH 3:30 Kopi</h2>
          <p className="text-2xl text-white leading-relaxed mb-4" style={{ fontFamily: 'Louis George Cafe' }}>
            3:30 Kopi adalah salah satu coffee shop modern yang terletak di daerah Ciledug kota Tangerang. 
            Nama 3:30 Kopi berasal dari Surat Ali 'Imran ayat ke-30 dalam Al-Qur'an. 
            Ayat ini mengingatkan orang untuk selalu berbuat baik dan menghindari keburukan, 
            karena semua perbuatan manusia akan diperhitungkan di hari akhir. 
            Selain itu nama 3:30 Kopi juga di aplikasikan untuk jam pembukaan coffee tersebut. 
            3:30 Kopi didirikan oleh Bapak Bhakti Tedjo Purwanto pada November 2019 soft opening dan 
            Januari 2020 grand opening.
          </p>
        </div>
        {/* Right Section (Image) */}
        <div className="relative flex justify-center items-center">
          <img src="/assets/history.png" alt="3:30 Kopi" className="max-w-[90%] h-auto rounded-lg shadow-xl" />
        </div>
      </div>

        {/* Contact and Other Links */}
      <div className="bg-[#C59464] p-0 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Left Section - MAPS Image */}
          <div className="w-full max-w-sm p-2">
            <img
              src="/assets/maps.png"
              alt="3:30 Kopi Location"
              className="max-w-[130%] h-auto rounded-lg shadow-xl"
            />
          </div> 
        
         {/* Right Section - ALAMAT, SOSIAL MEDIA */}
        <div className="space-y-10 text-white" style={{ fontFamily: 'Kenyan Coffee' }}>
          {/* ALAMAT Section */}
          <div className="bg-[#5F3826] p-3 rounded-lg shadow-lg tracking-wider">
            <h3 className="text-2xl text-center">ALAMAT</h3>
          </div>

          <div className="space-y-10">
          {/* No Kontak Section */}
          <div className="bg-[#5F3826] p-3 rounded-lg shadow-lg tracking-wider">
            <h3 className="text-2xl text-center">NO KONTAK</h3>
          </div>

          {/* SOSIAL MEDIA Section */}
          <div className="bg-[#5F3826] p-3 rounded-lg shadow-lg tracking-wider">
            <h3 className="text-2xl text-center">SOSIAL MEDIA</h3>
            </div>
          </div>
          </div>
          </div>
       </div>
    </div>

  );
};

export default History
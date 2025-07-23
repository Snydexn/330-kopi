import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const History = () => {
  return (
    <div className="bg-[#5F3826] p-0 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8" data-aos="fade-up" data-aos-duration="1000">
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
      <div className="bg-[#C59464] p-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Left Section - MAPS Embedded */}
      <div className="w-full p-2">
        <iframe
          title="Lokasi 330 KOPI"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.194053211735!2d106.71432557462772!3d-6.23813499375012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb5b00a4a229%3A0xab258576934cc15f!2s330%20KOPI!5e0!3m2!1sen!2sid!4v1752663945134!5m2!1sen!2sid"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg w-full h-[350px]"
        ></iframe>
      </div>

         {/* Right Section - ALAMAT, SOSIAL MEDIA */}
        <div className="space-y-10 p-15  text-white" style={{ fontFamily: 'Kenyan Coffee' }}>
          {/* ALAMAT Section */}
          <a
          href='https://maps.app.goo.gl/z9gKqXNMZkJVEBjp6'
          target='_blank'
          rel="noopener noreferrer"
          className='block mb-10'>
          <div className="bg-[#5F3826] p-3 rounded-lg shadow-lg tracking-wider hover:bg-[#744734] transition-all">
            <h3 className="text-2xl text-center">ALAMAT</h3>
          </div>
          </a>

          <a
            href="https://wa.me/6285216464519"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-10"
          >
            <div className="bg-[#5F3826] p-3 rounded-lg shadow-lg tracking-wider hover:bg-[#744734] transition-all">
              <h3 className="text-2xl text-center">WHATSAPP</h3>
            </div>
          </a>

          {/* SOSIAL MEDIA Section */}
          <a
            href="https://www.instagram.com/330kopi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#5F3826] p-3 rounded-lg shadow-lg tracking-wider hover:bg-[#744734] transition-all">
              <h3 className="text-2xl text-center">SOSIAL MEDIA</h3>
            </div>
          </a>
          </div>
          </div>
          <Footer />
       </div>
    </div>

  );
};

export default History
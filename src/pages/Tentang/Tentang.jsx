import Footer from "../../components/Footer";
import Navigationbar from "../../components/Navigationbar";
import GaleriSlider from "./GaleriSlider";

export default function Tentang() {
  return (
    <div className="relative bg-[#E7DBCC] min-h-screen text-[#4D2B1F] overflow-hidden">
  {/* Ornamen Kiri Atas */}
  <img
    src="/assets/bg/Kiri_Tentang.png"
    alt="Ornamen Kiri"
    className="absolute top-10 left-[-10vw] h-[170vh] w-auto opacity-30 pointer-events-none z-0 object-contain"
  />

  {/* Ornamen Kanan Atas */}
  <img
    src="/assets/bg/Kanan_Tentang.png"
    alt="Ornamen Kanan"
    className="absolute top-10 right-[-10vw] h-[170vh] w-auto opacity-30 pointer-events-none z-0 object-contain"
  />

  {/* Ornamen Kiri Bawah */}
  <div className="absolute bottom-0 left-[-25vw] w-[60vw] h-[40vh] overflow-hidden pointer-events-none z-0">
    <img
      src="/assets/bg/Kiri_Tentang.png"
      alt="Ornamen Kiri"
      className="w-full h-auto opacity-30 object-cover"
    />
  </div>

  {/* Ornamen Kanan Bawah */}
  <div className="absolute bottom-0 right-[-25vw] w-[60vw] h-[40vh] overflow-hidden pointer-events-none z-0">
    <img
      src="/assets/bg/Kiri_Tentang.png"
      alt="Ornamen Kanan"
      className="w-full h-auto opacity-30 object-cover scale-x-[-1]"
    />
  </div>


      {/* Konten utama */}
      <div className="relative z-10 py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto animate__animated animate__fadeInUp overflow-hidden">
        <h1 className="text-3xl md:text-4xl text-center mb-10 font-['Want_Coffee'] bg-[#5F3826] text-white py-6 md:py-12 rounded-lg">
          TENTANG KAMI
        </h1>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
          <img 
            src="/assets/profile.png" 
            alt="Profil 330 Kopi" 
            className="w-full max-w-full h-auto rounded-lg"
          />

          <div className="bg-[#C59464] text-white p-5 md:p-6.5 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl text-center mb-3 font-['Want_Coffee']">PROFILE</h2>
            <p className="text-lg md:text-2xl leading-relaxed font-['Louis_George_Cafe']">
              3:30 Kopi adalah coffeeshop lokal yang mengusung konsep industrial pada area indoor dan taman minimalis di area outdoor.
              Desain ruangannya memadukan material seperti besi, baja, kayu, serta beton dengan tampilan alami dan tekstur kasar,
              menghadirkan kesan autentik, tegas, dan modern. Penyeduhan kopi dilakukan manual atau dengan mesin untuk rasa yang lebih autentik.
            </p>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="mt-10 bg-[#5C3A26] p-4 md:p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2  bg-[#C59464] text-white">
              {/* VISI */}
              <div className="p-4 md:p-6">
                <h2 className="text-3xl md:text-4xl mb-3 text-center font-['Want_Coffee']">VISI</h2>
                <p className="text-lg md:text-2xl font-['Louis_George_Cafe'] leading-relaxed">
                  Menjadikan 3:30 Kopi sebagai tempat dan rasa untuk dikenang bagi pelanggan dengan memberikan pelayanan terbaik,
                  produk berkualitas tinggi, tempat dan suasana yang nyaman.
                </p>
              </div>

              {/* MISI */}
              <div className="p-4 md:p-6">
                <h2 className="text-3xl md:text-4xl mb-3 text-center font-['Want_Coffee']">MISI</h2>
                <p className="text-lg md:text-2xl font-['Louis_George_Cafe'] leading-relaxed">
                  a) Memastikan bahwa makanan dan minuman yang fresh, higienis, lezat dan bervariasi dengan harga standar dan dapat dijangkau oleh semua kalangan. <br />
                  b) Menciptakan lingkungan yang ramah, menerima berbagai komunitas dan mendukung praktik bisnis yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20 rounded-lg overflow-hidden">
        <GaleriSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

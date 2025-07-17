import Navigationbar from "../../components/Navigationbar";


export default function Tentang() {
  return (
    <div className="bg-[#E7DBCC] min-h-screen text-[#4D2B1F] animate__animated animate__fadeInUp"> 
      <div className="py-10 px-6 mx-auto">
        <h1 className="text-4xl text-center mb-10 font-['Want_Coffee'] bg-[#5F3826] text-white py-12 rounded-lg">TENTANG KAMI</h1>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 items-start">
          <img src="/assets/profile.png" alt="Profil 330 Kopi" className="rounded-lg max-w-[90%] h-auto" />
          <div className="bg-[#C59464] text-white p-7 rounded-lg shadow-lg">
            <h2 className="text-4xl text-center mb-3 font-['Want_Coffee']">PROFILE</h2>
            <p className="text-2xl leading-relaxed font-['Louis_George_Cafe']">
              3:30 Kopi adalah coffeeshop lokal yang mengusung konsep industrial pada area indoor dan taman minimalis di area outdoor.
              Desain ruangannya memadukan material seperti besi, baja, kayu, serta beton dengan tampilan alami dan tekstur kasar,
              menghadirkan kesan autentik, tegas, dan modern. Penyeduhan kopi dilakukan manual atau dengan mesin untuk rasa yang lebih autentik.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[#5C3A26] p-6 rounded-xl">
          {/* Frame biru di dalam background coklat */}
          <div className="border-2 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 bg-[#C59464] text-white">
              {/* VISI */}
              <div className="p-6">
                <h2 className="text-4xl mb-3 text-center text-white font-['Want_Coffee']">VISI</h2>
                <p className="text-2xl font-['Louis_George_Cafe']">
                  Menjadikan 3:30 Kopi sebagai tempat dan rasa untuk dikenang bagi pelanggan dengan memberikan pelayanan terbaik,
                  produk berkualitas tinggi, tempat dan suasana yang nyaman.
                </p>
              </div>

              {/* MISI */}
              <div className="p-6">
                <h2 className="text-4xl mb-3 text-center text-white font-['Want_Coffee']">MISI</h2>
                <p className="text-2xl font-['Louis_George_Cafe']">
                  a) Memastikan bahwa makanan dan minuman yang fresh, higienis, lezat dan bervariasi dengan harga standar dan dapat dijangkau oleh semua kalangan. <br />
                  b) Menciptakan lingkungan yang ramah, menerima berbagai komunitas dan mendukung praktik bisnis yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

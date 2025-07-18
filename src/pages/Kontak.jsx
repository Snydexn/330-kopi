import React from 'react';

const Kontak = () => {
  return (
    <div className="bg-[#E7DBCC] min-h-screen flex flex-col justify-between font-['Louis_George_Cafe'] animate__animated animate__fadeInUp">
      <main className="container mx-auto p-6">
        {/* Judul */}
        <section className="text-center">
          <div className="bg-[#5F3826] rounded-xl p-6 md:p-10">
            <h1 className="text-5xl text-white" style={{ fontFamily: 'Want Coffee' }}>
              KONTAK KAMI
            </h1>
          </div>
        </section>

        {/* Informasi */}
        <section className="bg-[#C59464] mt-10 rounded-xl p-6 md:p-10 text-white text-lg md:text-2xl text-center">
          <p>
            Kalau kamu ingin tahu lebih banyak tentang menu, promo, atau kerja sama dengan 3:30 Kopi,
            silakan akses bagian kontak yang ada di bawah, ya. Kami siap membantu menjawab pertanyaanmu
            dan senang bisa terhubung langsung dengan kamu.
          </p>
        

       <section className="mt-10 overflow-x-auto">
  <div className="flex gap-4 justify-center md:justify-center w-max mx-auto px-2">
    {[
      {
        href: 'tel:+6285216464519',
        img: '/assets/kontak/telepon 1.png',
        alt: 'Telepon',
      },
      {
        href: 'https://wa.me/6285216464519',
        img: '/assets/kontak/whatsapp 1.png',
        alt: 'WhatsApp',
      },
      {
        href: 'https://instagram.com/330kopi',
        img: '/assets/kontak/instagram 1.png',
        alt: 'Instagram',
      },
      {
        href: 'https://www.facebook.com/p/330kopi-100058869713184',
        img: '/assets/kontak/facebook 1.png',
        alt: 'Facebook',
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#5F3826] w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-xl flex items-center justify-center flex-shrink-0"
      >
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center"
        >
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-full object-contain hover:scale-110 transition duration-300"
          />
        </a>
      </div>
    ))}
  </div>
</section>

    </section>

      </main>
    </div>
  );
};

export default Kontak;

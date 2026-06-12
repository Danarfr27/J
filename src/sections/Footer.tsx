const footerLinks = [
  'Tentang kami',
  'Cara Betting',
  'Link 7meter',
  'mobile',
  'kalkulator-mix-parlay',
  'Zona 7Meter',
  'Anti Blokir',
  'Jadwal Piala Dunia',
];

export default function Footer() {
  return (
    <footer className="w-full bg-purple-900 mt-8">
      {/* Footer Navigation */}
      <div className="border-b border-purple-700">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center flex-wrap gap-x-1 gap-y-1">
            {footerLinks.map((link, index) => (
              <span key={index} className="flex items-center">
                <a 
                  href="#" 
                  className="text-white text-xs hover:text-gold transition-colors px-2 py-1"
                >
                  {link}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-purple-600">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Licensing Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo and License */}
          <div className="flex items-center gap-6">
            <img 
              src="/logo.png" 
              alt="7meter" 
              className="h-10 w-auto opacity-80"
            />
            <div className="text-center">
              <p className="text-gold text-xs mb-2">Lisensi</p>
              <div className="flex items-center gap-3">
                {/* BMM Testlabs */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 text-[8px] font-bold">
                  BMM
                </div>
                {/* 18+ */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 text-xs font-bold border-2 border-gold">
                  18+
                </div>
                {/* PAGCOR */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 text-[7px] font-bold text-center leading-tight">
                  PAG<br/>COR
                </div>
                {/* Online Safety */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 text-[7px] font-bold text-center leading-tight">
                  ONLINE<br/>SAFETY
                </div>
                {/* Spam Free */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-900 text-[7px] font-bold text-center leading-tight">
                  SPAM<br/>FREE
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl text-center">
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              7meter adalah situs sportbook paling populer dan merupakan pionir sebagai platform agen taruhan terpercaya di Indonesia. 
              Daftar sekarang juga dan dapatkan kesempatan mendapatkan promo menarik, hanya dengan 1 akun saja setiap member 
              berkesempatan memainkan semua game yang disajikan 7meter seperti Sportbook, Idnlive, Slots, Live Casino, 
              E-Lottery, IDNRaffle, Tembak ikan, Bolatangkas, Togel, E-sports, IDNTrade, Idnrng dan Poker. 
              Pelayanan terbaik 7meter melalui customer service profesional hadir selama 24 jam setiap hari menemani dan 
              menjawab pertanyaan seputar permainan.
            </p>
            <p className="text-gray-300 text-xs leading-relaxed">
              Sebagai pelopor dan yang menjadi pertama situs taruhan bola di Indonesia 7meter memiliki komitmen untuk 
              memberikan fasilitas terbaik dengan pelayanan maksimal untuk setiap member. Hadir dengan berbagai fitur paling 
              update untuk memberikan kenyamanan dan keamanan terbaik adalah prioritas utama 7meter. Proses transaksi seperti 
              deposit dan withdraw di 7meter sangat cepat dengan berbagai pilihan pembayaran dan bank swasta terpopuler. 
              7meter merupakan situs taruhan resmi dan terbaik dibuktikan dengan diraihnya lisensi PAGCOR 
              (Philippine Amusement And Gaming Corporation).
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-purple-700 w-full">
            <p className="text-gray-400 text-xs">
              Copyright © - 7Meter. Hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

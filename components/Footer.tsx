import { Shield, ExternalLink } from 'lucide-react';

const footerLinks = [
  { label: 'Tentang kami', href: '#' },
  { label: 'Cara Betting', href: '#' },
  { label: 'Link 7meter', href: '#' },
  { label: 'Mobile', href: '#' },
  { label: 'Kalkulator Mix Parlay', href: '#' },
  { label: 'Zona 7Meter', href: '#' },
  { label: 'Anti Blokir', href: '#' },
  { label: 'Jadwal Piala Dunia', href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-game-purple-900 border-t border-game-purple-700/50 mt-12">
      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {footerLinks.map((link, index) => (
            <span key={index} className="flex items-center gap-2">
              <a
                href={link.href}
                className="text-xs text-white/60 hover:text-game-gold transition-colors flex items-center gap-1"
              >
                {link.label}
                <ExternalLink size={10} />
              </a>
              {index < footerLinks.length - 1 && (
                <span className="text-white/20">|</span>
              )}
            </span>
          ))}
        </div>

        {/* License Info */}
        <div className="bg-game-purple-800/30 rounded-lg p-4 border border-game-purple-700/30 mb-4">
          <div className="flex items-start gap-3">
            <Shield className="w-8 h-8 text-game-gold shrink-0 mt-1" />
            <div>
              <p className="text-xs text-white/70 leading-relaxed">
                <span className="text-game-gold font-bold">7meter</span> adalah situs sportbook paling populer dan merupakan 
                pionir sebagai platform agen taruhan terpercaya di Indonesia. Daftar sekarang juga dan dapatkan 
                kesempatan mendapatkan promo menarik, hanya dengan 1 akun saja setiap member berkesempatan 
                memainkan semua game yang disajikan 7meter seperti Sportbook, Idnlive, Slots, Live Casino, 
                E-Lottery, IDNRaffle, Tembak ikan, Bolatangkas, Togel, E-sports, IDNTrade, Idnrng dan Poker. 
                Pelayanan terbaik 7meter melalui customer service profesional hadir selama 24 jam setiap hari 
                menemani dan menjawab pertanyaan seputar permainan.
              </p>
              <p className="text-xs text-white/70 leading-relaxed mt-2">
                Sebagai pelopor dan yang menjadi pertama situs taruhan bola di Indonesia 7meter memiliki 
                komitmen untuk memberikan fasilitas terbaik dengan pelayanan maksimal untuk setiap member. 
                Hadir dengan berbagai fitur paling update untuk memberikan kenyamanan dan keamanan terbaik 
                adalah prioritas utama 7meter. Proses transaksi seperti deposit dan withdraw di 7meter sangat 
                cepat dengan berbagai pilihan pembayaran dan bank swasta terpopuler. 7meter merupakan situs 
                taruhan resmi dan terbaik dibuktikan dengan diraihnya lisensi PAGCOR (Philippine Amusement 
                And Gaming Corporation).
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-game-purple-700/30">
          <p className="text-xs text-white/50">
            Copyright &copy; 2024 - 7Meter. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

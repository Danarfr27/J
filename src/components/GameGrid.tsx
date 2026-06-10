import { useState, useEffect, useRef } from 'react';
import { slotGames } from '../data/games';
import GameCard from './GameCard';
import { ChevronUp } from 'lucide-react';

export default function GameGrid() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleGames, setVisibleGames] = useState(24);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadMore = () => {
    setVisibleGames(prev => Math.min(prev + 12, slotGames.length));
  };

  const displayedGames = slotGames.slice(0, visibleGames);

  return (
    <main className="flex-1 min-w-0" ref={gridRef}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
        <a href="#" className="hover:text-game-gold transition-colors">Beranda</a>
        <span>/</span>
        <span className="text-game-gold font-bold">Slots</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden border-2 border-game-purple-600 mb-6 shadow-game">
        <img
          src="/images/hero-slot-games.jpg"
          alt="Slot Games"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-game-purple-900/80 via-transparent to-game-purple-900/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-black text-white text-glow tracking-wider">
            SLOT GAMES
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="bg-game-purple-800/50 rounded-lg p-4 mb-6 border border-game-purple-600/30">
        <p className="text-sm text-white/80 leading-relaxed text-center">
          Nikmati fitur kenyamanan serta sensasi permainan slots dari 7METER. Kategori game yang satu ini 
          Tidak bisa di anggap remeh, karena dari permainannya yang simple tidak membosankan, Juga permainan 
          yang semakin ramai penggunanya, animasi suara serta efek gambar yang tersaji akan membuat anda 
          betah nyaman untuk bermain.
        </p>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleGames < slotGames.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-gradient-to-r from-game-purple-600 to-game-purple-500 hover:from-game-purple-500 hover:to-game-purple-400 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 border border-game-purple-400/50"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-game-purple-600 hover:bg-game-purple-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 border border-game-purple-400/50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </main>
  );
}

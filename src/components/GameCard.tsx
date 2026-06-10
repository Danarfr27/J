import { useState } from 'react';
import { Play } from 'lucide-react';
import type { SlotGame } from '../data/games';

interface GameCardProps {
  game: SlotGame;
  index: number;
}

export default function GameCard({ game, index }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const badgeColors = {
    PROMO: 'bg-red-500',
    NEW: 'bg-green-500',
    EKSKLUSIF: 'bg-purple-500',
  };

  return (
    <div
      className="game-card relative group rounded-lg overflow-hidden border-2 border-game-purple-600 hover:border-game-gold transition-all duration-300 cursor-pointer"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {game.badge && (
        <div className={`absolute top-2 right-2 z-20 ${badgeColors[game.badge]} text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg`}>
          {game.badge}
        </div>
      )}

      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-game-purple-800">
        <img
          src={game.image}
          alt={game.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 brightness-75' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-game-purple-700 animate-pulse" />
        )}

        {/* Hover overlay with play button */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white font-bold rounded-full shadow-lg transition-all duration-200 hover:scale-110">
            <Play size={16} fill="white" />
            <span className="text-sm">Main Sekarang</span>
          </button>
        </div>
      </div>

      {/* Game title */}
      <div className="bg-game-purple-800 px-2 py-2 border-t border-game-purple-600/50">
        <p className="text-xs font-bold text-white text-center truncate group-hover:text-game-gold transition-colors">
          {game.name}
        </p>
      </div>
    </div>
  );
}

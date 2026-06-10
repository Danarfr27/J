import { Home } from 'lucide-react';
import { navItems } from '../data/games';

export default function NavBar() {
  return (
    <nav className="w-full bg-game-purple-800 border-b border-game-purple-600/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-1 overflow-x-auto">
          {/* Home icon */}
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 bg-game-purple-700 hover:bg-game-purple-600 transition-colors"
          >
            <Home size={18} className="text-game-gold" />
          </a>

          {/* Nav items */}
          {navItems.slice(1).map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative nav-item whitespace-nowrap ${item.active ? 'active' : ''}`}
            >
              <span className="flex items-center gap-1">
                {item.label}
                {item.promo && (
                  <span className="bg-red-500 text-white text-[9px] px-1 py-0.5 rounded-full font-bold animate-pulse-badge">
                    PROMO
                  </span>
                )}
                {item.new && (
                  <span className="bg-green-500 text-white text-[9px] px-1 py-0.5 rounded-full font-bold animate-bounce-badge">
                    NEW
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import { Crown, Download, MessageCircle, Phone, HelpCircle, Eye, EyeOff } from 'lucide-react';

export default function TopBar() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-game-purple-600 via-game-purple-500 to-game-purple-600 border-b border-game-purple-400/30">
      {/* Top links row */}
      <div className="bg-game-purple-900/50 py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-4 text-[11px] text-white/80">
          <a href="#" className="flex items-center gap-1 hover:text-game-gold transition-colors">
            <Download size={12} />
            <span>Download APK</span>
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="flex items-center gap-1 hover:text-game-gold transition-colors">
            <MessageCircle size={12} />
            <span>Live Chat</span>
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="flex items-center gap-1 hover:text-game-gold transition-colors">
            <Phone size={12} />
            <span>Hubungi Kami</span>
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="flex items-center gap-1 hover:text-game-gold transition-colors">
            <HelpCircle size={12} />
            <span>Lupa Password?</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Crown className="w-8 h-8 text-game-gold mr-1" />
            <div className="flex flex-col">
              <span className="text-2xl font-black italic text-game-gold tracking-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                7meter
              </span>
              <span className="text-[8px] -mt-1 text-white/70 tracking-widest uppercase">Sportbook Betting</span>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Username"
            className="px-3 py-1.5 rounded text-sm bg-white text-black placeholder-gray-500 w-32 focus:outline-none focus:ring-2 focus:ring-game-gold"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Kata sandi"
              className="px-3 py-1.5 pr-8 rounded text-sm bg-white text-black placeholder-gray-500 w-32 focus:outline-none focus:ring-2 focus:ring-game-gold"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
          <button
            onClick={() => (window.location.href = 'https://7meterslotwin1.vercel.app/')}
            className="px-4 py-1.5 bg-green-500 hover:bg-green-400 text-white font-bold text-sm rounded transition-all duration-200 hover:scale-105"
          >
            MASUK
          </button>
          <button
            onClick={() => (window.location.href = 'https://7meterslotwin1.vercel.app/')}
            className="px-4 py-1.5 bg-game-yellow hover:bg-yellow-400 text-black font-bold text-sm rounded transition-all duration-200 hover:scale-105"
          >
            DAFTAR
          </button>
          <div className="w-8 h-5 rounded overflow-hidden border border-white/30 ml-1">
            <div className="w-full h-full bg-red-600 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">ID</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

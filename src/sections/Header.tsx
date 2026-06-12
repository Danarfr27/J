import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Header() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <header 
      className="w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #6A1B9A 0%, #4A148C 50%, #6A1B9A 100%)',
      }}
    >
      {/* Decorative character on left */}
      <div className="absolute left-0 top-0 bottom-0 w-48 opacity-60 pointer-events-none">
        <img 
          src="/pirate-character.png" 
          alt="" 
          className="h-full w-full object-contain object-left"
        />
      </div>

      {/* Decorative character on right */}
      <div className="absolute right-0 top-0 bottom-0 w-48 opacity-60 pointer-events-none">
        <img 
          src="/woman-character.png" 
          alt="" 
          className="h-full w-full object-contain object-right"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="7meter" 
            className="h-14 w-auto"
          />
        </div>

        {/* Login Form */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-1.5 rounded text-sm text-gray-800 bg-white w-28 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-1.5 pr-8 rounded text-sm text-gray-800 bg-white w-28 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <button 
            className="px-4 py-1.5 bg-success text-white text-sm font-bold rounded hover:bg-green-600 transition-colors"
          >
            MASUK
          </button>
          <button 
            className="px-4 py-1.5 bg-blue-500 text-white text-sm font-bold rounded hover:bg-blue-600 transition-colors"
          >
            DAFTAR
          </button>
          <div className="w-6 h-4 bg-red-600 relative overflow-hidden rounded-sm ml-1">
            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

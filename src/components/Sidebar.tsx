import { useState } from 'react';
import { bankList } from '../data/games';
import { LogIn } from 'lucide-react';

interface BankItemProps {
  name: string;
  status: 'online' | 'offline' | 'gangguan';
}

function StatusDot({ status }: { status: string }) {
  const colors = {
    online: 'bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]',
    offline: 'bg-red-500',
    gangguan: 'bg-yellow-500',
  };

  return (
    <span className={`w-2.5 h-2.5 rounded-full ${colors[status as keyof typeof colors]} inline-block`} />
  );
}

function BankItem({ name, status }: BankItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex items-center justify-between px-3 py-1.5 hover:bg-game-purple-600/50 rounded cursor-pointer transition-colors"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="text-xs text-white/90 font-medium">{name}</span>
      <StatusDot status={status} />
      {showTooltip && (
        <div className="absolute left-full ml-2 bg-black/90 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50">
          {status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : 'Gangguan'}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[220px] shrink-0 space-y-4">
      {/* CTA Section */}
      <div className="bg-gradient-to-b from-game-purple-700 to-game-purple-800 rounded-lg p-4 border border-game-purple-600/50 shadow-game">
        <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm">
          DAFTAR GRATIS
        </button>
        <div className="mt-3 text-center">
          <p className="text-xs text-white/70">Sudah punya akun?</p>
          <a href="#" className="text-xs text-game-gold hover:text-yellow-300 flex items-center justify-center gap-1 mt-1 transition-colors">
            <LogIn size={12} />
            <span>Login Disini</span>
          </a>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="rounded-lg overflow-hidden border border-game-purple-600/50 shadow-game">
        <img
          src="/images/hero-slot-games.jpg"
          alt="Promo"
          className="w-full h-32 object-cover"
        />
        <div className="bg-game-purple-800 p-2 text-center">
          <p className="text-xs text-game-gold font-bold">Bonus Turnover Slot</p>
          <p className="text-[10px] text-white/70">Mainkan Sekarang!</p>
        </div>
      </div>

      {/* Bank Status */}
      <div className="bg-gradient-to-b from-game-purple-700 to-game-purple-800 rounded-lg border border-game-purple-600/50 shadow-game overflow-hidden">
        <div className="bg-game-purple-900/50 px-4 py-2 border-b border-game-purple-600/30">
          <h3 className="text-sm font-bold text-game-gold text-center">JADWAL BANK OFFLINE</h3>
        </div>
        <div className="p-2 space-y-0.5">
          {bankList.map((bank, index) => (
            <BankItem key={index} name={bank.name} status={bank.status} />
          ))}
        </div>
        <div className="px-4 py-2 border-t border-game-purple-600/30 flex items-center justify-center gap-4 text-[10px]">
          <div className="flex items-center gap-1">
            <StatusDot status="online" />
            <span className="text-white/70">Online</span>
          </div>
          <div className="flex items-center gap-1">
            <StatusDot status="offline" />
            <span className="text-white/70">Offline</span>
          </div>
          <div className="flex items-center gap-1">
            <StatusDot status="gangguan" />
            <span className="text-white/70">Gangguan</span>
          </div>
        </div>
      </div>

      {/* Side decoration */}
      <div className="relative h-40 rounded-lg overflow-hidden opacity-60">
        <img
          src="/images/asset_5.jpg"
          alt="Decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-purple-900 via-transparent to-transparent" />
      </div>
    </aside>
  );
}

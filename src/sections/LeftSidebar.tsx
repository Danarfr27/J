import { ChevronRight } from 'lucide-react';

interface BankItem {
  name: string;
  status: 'online' | 'offline' | 'gangguan';
  logo: string;
}

const banks: BankItem[] = [
  { name: 'OVO', status: 'online', logo: 'OVO' },
  { name: 'Gopay', status: 'online', logo: 'gopay' },
  { name: 'LinkAja', status: 'online', logo: 'LinkAja!' },
  { name: 'DANA', status: 'online', logo: 'DANA' },
  { name: 'SeaBank', status: 'gangguan', logo: 'SeaBank' },
  { name: 'Jenius', status: 'online', logo: 'jenius' },
  { name: 'Sakuku', status: 'online', logo: 'Sakuku' },
  { name: 'Jago', status: 'online', logo: 'Jago' },
  { name: 'Sinarmas', status: 'online', logo: 'sinarmas' },
  { name: 'BCA', status: 'online', logo: 'BCA' },
  { name: 'Mandiri', status: 'online', logo: 'mandiri' },
  { name: 'BNI', status: 'online', logo: 'BNI' },
  { name: 'Bank BRI', status: 'online', logo: 'BANK BRI' },
  { name: 'PermataBank', status: 'online', logo: 'PermataBank' },
  { name: 'Maybank', status: 'online', logo: 'Maybank' },
  { name: 'PaninBank', status: 'online', logo: 'PaninBank' },
  { name: 'Bank Mega', status: 'online', logo: 'BANK MEGA' },
];

const statusColors = {
  online: 'bg-success',
  offline: 'bg-danger',
  gangguan: 'bg-warning',
};

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-4">
      {/* Register CTA Card */}
      <div 
        className="rounded-lg p-4 border border-gold/30"
        style={{ background: 'rgba(45, 10, 78, 0.9)' }}
      >
        <button className="w-full py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-dark transition-colors text-sm animate-pulse-glow">
          DAFTAR GRATIS
        </button>
        <p className="text-center text-white text-xs mt-3">
          Sudah punya akun?{' '}
          <a href="#" className="text-gold underline hover:text-gold-dark">Login Disini</a>
        </p>
      </div>

      {/* Promo Banner */}
      <div className="rounded-lg overflow-hidden border border-gold/30 shadow-lg">
        <img 
          src="/promo-banner.jpg" 
          alt="Referral Bonus 21.95%" 
          className="w-full h-auto"
        />
      </div>

      {/* Mini Bank Schedule */}
      <div 
        className="rounded-lg p-3 border border-gold/30"
        style={{ background: 'rgba(45, 10, 78, 0.9)' }}
      >
        <h3 className="text-gold text-sm font-bold text-center mb-3">JADWAL BANK OFFLINE</h3>
        <div className="space-y-1.5">
          {banks.map((bank, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-purple-800/50 transition-colors cursor-pointer group"
            >
              <div className={`w-2 h-2 rounded-full ${statusColors[bank.status]} flex-shrink-0`}></div>
              <span className="text-white text-xs flex-1 font-medium">{bank.logo}</span>
              <ChevronRight className="w-3 h-3 text-purple-400 group-hover:text-gold transition-colors" />
            </div>
          ))}
        </div>
        
        {/* Status Legend */}
        <div className="flex items-center justify-center gap-3 mt-3 pt-2 border-t border-purple-700">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span className="text-white text-[10px]">Online</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-danger"></div>
            <span className="text-white text-[10px]">Offline</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-warning"></div>
            <span className="text-white text-[10px]">Gangguan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

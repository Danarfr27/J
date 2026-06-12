import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface BankSchedule {
  name: string;
  logo: string;
  status: 'online' | 'offline' | 'gangguan';
  schedule: string | { days: string; time: string }[];
}

const bankSchedules: BankSchedule[] = [
  { name: 'BSI', logo: 'BSI', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'OVO', logo: 'OVO', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'Gopay', logo: 'gopay', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'LinkAja', logo: 'LinkAja!', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'DANA', logo: 'DANA', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'SeaBank', logo: 'SeaBank', status: 'gangguan', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'Jenius', logo: 'jenius', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'Sakuku', logo: 'Sakuku', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'Jago', logo: 'Jago', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'Sinarmas', logo: 'Sinarmas', status: 'online', schedule: 'Senin - Minggu 22:00 - 00:00 WIB' },
  { 
    name: 'BCA', 
    logo: 'BCA', 
    status: 'online', 
    schedule: [
      { days: 'Senin', time: '23:00-03:00' },
      { days: 'Selasa-Jumat', time: '23:00-00:30' },
      { days: 'Sabtu', time: 'Tidak ada offline' },
      { days: 'Minggu', time: '00:00-05:00' },
    ]
  },
  { 
    name: 'Mandiri', 
    logo: 'mandiri', 
    status: 'online', 
    schedule: [
      { days: 'Senin - Sabtu', time: '23:00-03:30' },
      { days: 'Minggu', time: '23:00-05:00' },
    ]
  },
  { name: 'BNI', logo: 'BNI', status: 'online', schedule: 'Senin - Minggu 01:30 - 03:30 WIB' },
  { name: 'Bank BRI', logo: 'BANK BRI', status: 'online', schedule: 'Senin - Minggu 22:00 - 06:00 WIB' },
  { name: 'CIMB Niaga', logo: 'CIMB Niaga', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { name: 'PermataBank', logo: 'PermataBank', status: 'online', schedule: 'Senin - Minggu 23:00 - 00:00 WIB' },
  { name: 'Maybank', logo: 'Maybank', status: 'online', schedule: 'Senin - Minggu 22:00 - 01:00 WIB' },
  { name: 'PaninBank', logo: 'PaninBank', status: 'online', schedule: 'Senin - Minggu Tidak ada offline' },
  { 
    name: 'Bank Mega', 
    logo: 'BANK MEGA', 
    status: 'online', 
    schedule: [
      { days: 'Senin - Sabtu', time: '23:00-03:30' },
      { days: 'Minggu', time: '23:00-05:00' },
    ]
  },
];

const statusColors = {
  online: 'bg-success',
  offline: 'bg-danger',
  gangguan: 'bg-warning',
};

export default function RightSidebar() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const itemHeight = 52;
  const maxVisibleItems = 10;
  const maxOffset = Math.max(0, (bankSchedules.length - maxVisibleItems) * itemHeight);

  const handleScrollUp = () => {
    setScrollOffset(prev => Math.max(0, prev - itemHeight * 3));
  };

  const handleScrollDown = () => {
    setScrollOffset(prev => Math.min(maxOffset, prev + itemHeight * 3));
  };

  const renderSchedule = (schedule: BankSchedule['schedule']) => {
    if (typeof schedule === 'string') {
      return <span className="text-white text-[11px]">{schedule}</span>;
    }
    return (
      <div className="flex flex-col gap-0.5">
        {schedule.map((item, idx) => (
          <div key={idx} className="flex gap-2 text-[10px]">
            <span className="text-purple-300">{item.days}</span>
            <span className="text-white">{item.time}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Title */}
      <div 
        className="rounded-t-lg p-2.5 text-center border border-gold/30 border-b-0"
        style={{ background: 'rgba(45, 10, 78, 0.95)' }}
      >
        <h3 className="text-gold text-sm font-bold">JADWAL BANK OFFLINE</h3>
      </div>

      {/* Table container */}
      <div 
        className="relative overflow-hidden border-x border-gold/30"
        style={{ background: 'rgba(45, 10, 78, 0.9)', height: `${maxVisibleItems * itemHeight}px` }}
      >
        <div 
          className="transition-transform duration-300"
          style={{ transform: `translateY(-${scrollOffset}px)` }}
        >
          {bankSchedules.map((bank, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-3 py-2 border-b border-purple-700/50 hover:bg-purple-800/30 transition-colors"
              style={{ height: `${itemHeight}px` }}
            >
              <div className={`w-2 h-2 rounded-full ${statusColors[bank.status]} flex-shrink-0`}></div>
              <span className="text-gold text-xs font-bold w-24 flex-shrink-0">{bank.logo}</span>
              <div className="flex-1 min-w-0">
                {renderSchedule(bank.schedule)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll buttons */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <button 
          onClick={handleScrollUp}
          className="w-7 h-7 bg-purple-700 hover:bg-purple-600 flex items-center justify-center rounded transition-colors"
        >
          <ChevronUp className="w-4 h-4 text-white" />
        </button>
        <button 
          onClick={handleScrollDown}
          className="w-7 h-7 bg-purple-700 hover:bg-purple-600 flex items-center justify-center rounded transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Footer with legend */}
      <div 
        className="rounded-b-lg p-2.5 border border-gold/30 border-t-0"
        style={{ background: 'rgba(45, 10, 78, 0.95)' }}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
            <span className="text-white text-xs">Online</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-danger"></div>
            <span className="text-white text-xs">Offline</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-warning"></div>
            <span className="text-white text-xs">Gangguan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

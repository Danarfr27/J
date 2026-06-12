import { Home, Star } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: '', href: '#', icon: <Home className="w-4 h-4" /> },
  { label: 'SPORTBOOK', href: '#', badge: 'PROMO', badgeColor: 'bg-gold text-black' },
  { label: 'E-SPORTS', href: '#', badge: 'PROMO', badgeColor: 'bg-gold text-black' },
  { label: 'SLOTs', href: '#', badge: 'PROMO', badgeColor: 'bg-gold text-black' },
  { label: 'IDN LIVE', href: '#', badge: 'PROMO', badgeColor: 'bg-gold text-black' },
  { label: 'ARCADE', href: '#', badge: 'NEW', badgeColor: 'bg-green-500 text-white' },
  { label: 'LIVE CASINO', href: '#', badge: 'PROMO', badgeColor: 'bg-gold text-black' },
  { label: 'TOGEL', href: '#' },
  { label: 'POKER', href: '#' },
  { label: 'TANGKAS', href: '#' },
  { label: 'TEMBAK IKAN', href: '#' },
  { label: 'REFERRAL', href: '#' },
  { label: 'PROMOSI', href: '#' },
  { label: 'VIP', href: '#', icon: <Star className="w-3 h-3" /> },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-primary sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-2">
        <ul className="flex items-center justify-center gap-0 text-xs">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative flex items-center gap-1 px-2 py-2.5 text-white font-medium hover:bg-purple-800 transition-colors group"
              >
                {item.icon && <span>{item.icon}</span>}
                <span className="uppercase">{item.label}</span>
                {item.badge && (
                  <span 
                    className={`absolute -top-0 left-1/2 -translate-x-1/2 text-[8px] font-bold px-1 py-0.5 rounded-sm ${item.badgeColor}`}
                    style={{ lineHeight: 1 }}
                  >
                    {item.badge}
                  </span>
                )}
                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

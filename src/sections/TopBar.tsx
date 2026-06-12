import { Download, MessageCircle, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-purple-900 h-8 flex items-center justify-end px-4 text-xs text-white">
      <div className="flex items-center gap-1">
        <a href="#" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Download className="w-3 h-3" />
          <span>Download APK</span>
        </a>
        <span className="mx-2 text-purple-600">|</span>
        <a href="#" className="flex items-center gap-1 hover:text-gold transition-colors">
          <MessageCircle className="w-3 h-3" />
          <span>Live Chat</span>
        </a>
        <span className="mx-2 text-purple-600">|</span>
        <a href="#" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Phone className="w-3 h-3" />
          <span>Hubungi Kami</span>
        </a>
        <span className="mx-2 text-purple-600">|</span>
        <a href="#" className="hover:text-gold transition-colors">Lupa Password ?</a>
        <span className="mx-2 text-purple-600">|</span>
        <div className="w-5 h-3 bg-red-600 relative overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
        </div>
      </div>
    </div>
  );
}

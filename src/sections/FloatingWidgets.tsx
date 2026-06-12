import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side promo widgets */}
      <div className="fixed left-0 top-1/3 z-40 flex flex-col gap-2">
        <div 
          className="w-10 h-20 rounded-r-lg border border-gold/30 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          style={{ background: 'rgba(45, 10, 78, 0.95)' }}
        >
          <img src="/logo.png" alt="" className="w-8 h-auto opacity-80" />
        </div>
        <div 
          className="w-10 h-20 rounded-r-lg border border-gold/30 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          style={{ background: 'rgba(45, 10, 78, 0.95)' }}
        >
          <div className="w-6 h-8 bg-gradient-to-b from-purple-500 to-gold rounded flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">7M</span>
          </div>
        </div>
      </div>

      {/* Bottom left QR code widget */}
      <div 
        className="fixed left-2 bottom-4 z-40 rounded-lg border border-gold/30 p-2 text-center"
        style={{ background: 'rgba(45, 10, 78, 0.95)', width: '70px' }}
      >
        <div className="w-12 h-12 bg-white mx-auto rounded mb-1 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-purple-700 rounded flex items-center justify-center">
            <span className="text-gold text-[8px] font-bold">QR</span>
          </div>
        </div>
        <p className="text-white text-[8px]">Aplikasi Mobile Android</p>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-20 z-40 w-10 h-10 rounded-full bg-purple-700 border border-gold/30 flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 text-gold" />
      </button>

      {/* Chat FAB */}
      <button
        className="fixed right-4 bottom-4 z-40 w-12 h-12 rounded-full bg-purple-600 border-2 border-gold/50 flex items-center justify-center shadow-lg hover:bg-purple-500 transition-colors animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </>
  );
}

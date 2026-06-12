export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(180deg, #4A148C 0%, #2D0A4E 40%, #4A148C 100%)',
        }}
      ></div>

      {/* Decorative circles */}
      <div 
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #00BCD4 0%, transparent 70%)',
          top: '10%',
          left: '-5%',
        }}
      ></div>
      <div 
        className="absolute w-48 h-48 rounded-full opacity-15"
        style={{ 
          background: 'radial-gradient(circle, #E91E63 0%, transparent 70%)',
          top: '5%',
          right: '20%',
        }}
      ></div>
      <div 
        className="absolute w-56 h-56 rounded-full opacity-10"
        style={{ 
          background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
          bottom: '30%',
          left: '15%',
        }}
      ></div>
      <div 
        className="absolute w-40 h-40 rounded-full opacity-15"
        style={{ 
          background: 'radial-gradient(circle, #00BCD4 0%, transparent 70%)',
          top: '40%',
          right: '5%',
        }}
      ></div>

      {/* Decorative diamonds */}
      <div 
        className="absolute w-24 h-24 opacity-10"
        style={{ 
          background: 'linear-gradient(45deg, #FFD700 0%, transparent 50%)',
          transform: 'rotate(45deg)',
          top: '20%',
          right: '30%',
        }}
      ></div>
      <div 
        className="absolute w-16 h-16 opacity-10"
        style={{ 
          background: 'linear-gradient(45deg, #E91E63 0%, transparent 50%)',
          transform: 'rotate(45deg)',
          bottom: '20%',
          left: '25%',
        }}
      ></div>

      {/* Character decorations */}
      <div 
        className="absolute left-0 top-1/4 w-72 h-96 opacity-30"
        style={{
          background: 'url(/pirate-character.png) no-repeat left center',
          backgroundSize: 'contain',
        }}
      ></div>
      <div 
        className="absolute right-0 top-1/3 w-64 h-80 opacity-25"
        style={{
          background: 'url(/woman-character.png) no-repeat right center',
          backgroundSize: 'contain',
          transform: 'scaleX(-1)',
        }}
      ></div>

      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
}

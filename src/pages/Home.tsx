import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Marquee from '../components/Marquee';
import Sidebar from '../components/Sidebar';
import GameGrid from '../components/GameGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-game-purple-800 via-game-purple-900 to-game-purple-900">
      {/* Fixed background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <TopBar />
      <NavBar />
      <Marquee />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Game Grid */}
          <GameGrid />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

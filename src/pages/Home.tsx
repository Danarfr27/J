import TopBar from '../sections/TopBar';
import Header from '../sections/Header';
import NavBar from '../sections/NavBar';
import NewsTicker from '../sections/NewsTicker';
import LeftSidebar from '../sections/LeftSidebar';
import CenterContent from '../sections/CenterContent';
import RightSidebar from '../sections/RightSidebar';
import Footer from '../sections/Footer';
import FloatingWidgets from '../sections/FloatingWidgets';
import Background from '../sections/Background';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Bar */}
        <TopBar />

        {/* Header */}
        <Header />

        {/* Navigation */}
        <NavBar />

        {/* News Ticker */}
        <NewsTicker />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <LeftSidebar />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-5">
              <CenterContent />
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <RightSidebar />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Widgets */}
      <FloatingWidgets />
    </div>
  );
}

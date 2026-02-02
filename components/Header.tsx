
import React from 'react';

interface HeaderProps {
  currentView?: string;
  onHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView = 'main', onHome }) => {
  const handleReachOut = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
      <div 
        onClick={onHome}
        className="flex items-center gap-4 text-xl font-extrabold group cursor-pointer"
      >
        <div className="relative transform transition-transform duration-500 group-hover:scale-110">
          <i className="fa-solid fa-ghost text-teal-400 text-2xl animate-logo-float will-change-transform"></i>
          <div className="absolute -inset-2 bg-teal-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent tracking-tight">
          Nishant
        </span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8">
        {currentView !== 'main' && (
          <button 
            onClick={onHome}
            className="text-white/60 hover:text-white transition-all duration-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]"
          >
            Home
          </button>
        )}
        <button className="hidden md:block text-gray-500 hover:text-teal-400 transition-all duration-300 text-xs font-bold uppercase tracking-[0.3em]">
          Portfolio
        </button>
        <button 
          onClick={handleReachOut}
          className="bg-white text-black px-5 md:px-7 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-teal-400 transition-all duration-300 active:scale-95 shadow-2xl shadow-white/5"
        >
          {currentView === 'main' ? 'Reach Out' : 'Hire Me'}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logo-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(8deg); }
        }
        @keyframes gradient-text {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .animate-logo-float {
          animation: logo-float 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .animate-gradient-text {
          animation: gradient-text 5s ease infinite;
        }
        .will-change-transform { will-change: transform; }
      `}} />
    </nav>
  );
};

export default Header;

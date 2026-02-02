
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoleSelection from './components/RoleSelection';
import ContactSection from './components/ContactSection';
import AudioPlayer from './components/AudioPlayer';
import SolarSystemBackground from './components/SolarSystemBackground';
import VideoEditorView from './components/VideoEditorView';
import SoftwareDevView from './components/SoftwareDevView';

type ViewState = 'main' | 'video-editor' | 'software-dev';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('main');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-[#05070a] overflow-x-hidden selection:bg-teal-500/30">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-900/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      <SolarSystemBackground />

      <Header currentView={currentView} onHome={() => setCurrentView('main')} />
      
      <main className="relative z-10 transition-all duration-700">
        {currentView === 'main' ? (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <Hero />
            <RoleSelection onSelectRole={(role) => setCurrentView(role)} />
            <ContactSection />
          </div>
        ) : currentView === 'video-editor' ? (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <VideoEditorView />
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <SoftwareDevView />
          </div>
        )}
      </main>
      
      <AudioPlayer />
      
      <footer className="py-12 px-8 border-t border-white/5 bg-black/60 backdrop-blur-md relative z-10 text-center">
        <div className="space-y-3">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
            &copy; 2026 Nishant • Video Editor & Developer
          </p>
          <p className="text-gray-600 text-[10px] md:text-xs font-medium tracking-wide italic">
            Crafting visuals & code with creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

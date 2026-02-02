
import React from 'react';

interface RoleSelectionProps {
  onSelectRole?: (role: 'video-editor' | 'software-dev') => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <section id="role-selection" className="relative py-32 px-8 flex flex-col items-center z-10 overflow-hidden">
      {/* Background Atmosphere - Matching Hero's Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none opacity-40" />
      
      <div className="animate-slideUp space-y-20 w-full max-w-7xl text-center">
        <div className="space-y-4">
          <h4 className="text-teal-400 font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">
            Step into my world
          </h4>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            CHOOSE YOUR PATH
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32 w-full mx-auto px-4">
          
          {/* Video Editor Card */}
          <button 
            onClick={() => onSelectRole?.('video-editor')}
            className="role-card group w-full lg:flex-1 relative max-w-[420px]"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-transparent group-hover:bg-teal-400/[0.02] group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-20px_rgba(0,242,234,0.15)]">
              
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] rounded-[2.5rem] border-glow-teal animate-border-beam" />
              </div>

              <div className="absolute -inset-x-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:inset-x-full z-10" />
              
              <div className="flex flex-col items-center gap-6 relative z-20">
                <div className="w-24 h-24 rounded-3xl bg-teal-400/10 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_40px_rgba(45,212,191,0.3)]">
                  <i className="fa-solid fa-clapperboard text-teal-400 text-4xl"></i>
                </div>
                <div className="space-y-3">
                  <span className="text-white font-bold text-3xl md:text-4xl tracking-tight block transition-colors group-hover:text-teal-400">
                    Video Editor
                  </span>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Explore Visual Stories
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Visual Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 h-full z-0 opacity-20 pointer-events-none">
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-teal-400 to-transparent" />
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]" />
            </div>
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          </div>

          {/* Software Developer Card */}
          <button 
            onClick={() => onSelectRole?.('software-dev')}
            className="role-card group w-full lg:flex-1 relative max-w-[420px]"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-transparent group-hover:bg-blue-400/[0.02] group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)]">
              
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] rounded-[2.5rem] border-glow-blue animate-border-beam" />
              </div>

              <div className="absolute -inset-x-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:inset-x-full z-10" />
              
              <div className="flex flex-col items-center gap-6 relative z-20">
                <div className="w-24 h-24 rounded-3xl bg-blue-400/10 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  <i className="fa-solid fa-code text-blue-400 text-4xl"></i>
                </div>
                <div className="space-y-3">
                  <span className="text-white font-bold text-3xl md:text-4xl tracking-tight block transition-colors group-hover:text-blue-400">
                    Software Dev
                  </span>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    View My Codebases
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .role-card {
          perspective: 2000px;
          outline: none;
        }

        .border-glow-teal {
          background: conic-gradient(from var(--angle), transparent 70%, #00f2ea 100%);
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          padding: 2px;
        }
        .border-glow-blue {
          background: conic-gradient(from var(--angle), transparent 70%, #3b82f6 100%);
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          padding: 2px;
        }

        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes border-beam {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }

        .animate-border-beam {
          animation: border-beam 3s linear infinite;
        }
      `}} />
    </section>
  );
};

export default RoleSelection;

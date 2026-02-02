
import React, { useEffect, useState, useRef } from 'react';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const roles = [
    {
      title: "Video Editor",
      description: "Passionate editor specializing in high-energy reels, cinematic YouTube content, and thumb-stopping brand promotions that leave a lasting impact."
    },
    {
      title: "Software Developer",
      description: "I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * -12; 
    const rotateX = ((y - centerY) / centerY) * 12;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToRoles = () => {
    const element = document.getElementById('role-selection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2 items-center px-8 md:px-24 pt-32 lg:pt-0 overflow-hidden relative">
      <div className="space-y-6 animate-fadeIn relative z-20">
        <div className="h-8 overflow-hidden">
          <h3 className={`text-teal-400 font-semibold tracking-[0.3em] uppercase text-sm md:text-base transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isTransitioning ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            {roles[roleIndex].title}
          </h3>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-light text-gray-400 tracking-tight">Hello, I'm</h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          Nishant Kumar Gupta
        </h1>
        
        <div className="h-32 md:h-24 overflow-hidden relative">
          <p className={`text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            {roles[roleIndex].description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <button 
            type="button"
            onClick={scrollToRoles}
            className="glow-btn group relative px-10 py-4 rounded-full font-black text-white transition-all duration-[400ms] cubic-bezier-bounce hover:scale-110 active:scale-95 hover:shadow-[0_0_50px_rgba(45,212,191,0.5)]"
          >
            <span className="relative z-10 tracking-widest uppercase text-xs drop-shadow-md">View My Work</span>
          </button>
        </div>

        <div className="pt-10">
          <SocialLinks />
        </div>
      </div>

      <div 
        className="relative flex justify-center items-center mt-12 lg:mt-0 perspective-2000 h-[600px] lg:h-[800px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {/* Background Ambient Glows */}
        <div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute w-[200px] h-[200px] bg-pink-500/5 rounded-full blur-[100px] translate-y-[-20%] animate-float-slow" />
        
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-out will-change-transform flex flex-col items-center justify-center"
          style={{ 
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative z-10 w-full max-w-[340px] md:max-w-[500px] group transition-all duration-500 translate-z-100">
             {/* Eye-Glow Matching Pulse */}
             <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-40 h-20 bg-pink-500/20 rounded-full blur-[45px] animate-eye-pulse z-0 pointer-events-none"></div>
             
             <img 
               src="robot.png" 
               alt="Nishant Robot Character"
               className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none pointer-events-none animate-float-character"
             />

             {/* Floor Shadow */}
             <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-56 h-8 bg-black/60 blur-2xl rounded-full scale-x-125 animate-shadow-pulse"></div>
          </div>

          {/* Floating Skill Icons */}
          <div className="absolute top-10 right-10 translate-z-50 animate-float-slow">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <i className="fa-solid fa-code text-teal-400 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-24 left-4 translate-z-30 animate-float-delayed">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <i className="fa-solid fa-video text-pink-400 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-2000 { perspective: 2000px; }
        .translate-z-100 { transform: translateZ(100px); }
        .translate-z-50 { transform: translateZ(50px); }
        .translate-z-30 { transform: translateZ(30px); }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse 8s ease-in-out infinite; }

        @keyframes eye-pulse {
          0%, 100% { opacity: 0.1; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, -5px) scale(1.1); }
        }
        .animate-eye-pulse { animation: eye-pulse 4s ease-in-out infinite; }

        @keyframes float-character {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-character { animation: float-character 5s ease-in-out infinite; }

        @keyframes shadow-pulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
          50% { transform: translateX(-50%) scale(0.85); opacity: 0.3; }
        }
        .animate-shadow-pulse { animation: shadow-pulse 5s ease-in-out infinite; }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-slow 10s ease-in-out infinite reverse; animation-delay: 1.5s; }

        .cubic-bezier-bounce {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .glow-btn {
          background: linear-gradient(135deg, #2dd4bf 0%, #3b82f6 50%, #ec4899 100%);
          background-size: 200% auto;
          overflow: hidden;
          border: none;
          outline: none;
          animation: gradient-shift 4s ease infinite;
        }

        .glow-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent 0deg, transparent 280deg, rgba(255,255,255,0.4) 360deg);
          animation: rotate-glow 3.5s linear infinite;
          z-index: 1;
        }

        .glow-btn::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: linear-gradient(135deg, #14b8a6 0%, #2563eb 100%);
          border-radius: 9999px;
          z-index: 2;
          transition: filter 0.3s ease;
        }
        
        .glow-btn:hover::after { filter: brightness(1.15); }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes rotate-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .will-change-transform { will-change: transform; }
      `}} />
    </section>
  );
};

export default Hero;

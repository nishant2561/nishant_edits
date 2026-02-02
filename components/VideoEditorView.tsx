
import React, { useState, useRef } from 'react';
import ContactSection from './ContactSection';

const VideoItem: React.FC<{ src: string, title: string, subtitle: string }> = ({ src, title, subtitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.error("Video playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 hover:border-teal-400/50 hover:-translate-y-2">
      {/* Video Overlay */}
      <div className={`absolute inset-0 z-10 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 hover:opacity-100 pointer-events-none' : 'opacity-100'}`}>
         <button 
           onClick={togglePlay}
           className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl hover:scale-110 active:scale-95 transition-all pointer-events-auto"
         >
           <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
         </button>
         <span className="mt-4 text-[10px] uppercase tracking-[0.4em] font-black text-white/60">Click to {isPlaying ? 'Pause' : 'Play'}</span>
      </div>

      {/* Mute Toggle */}
      <button 
        onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
      </button>

      <video 
        ref={videoRef}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full aspect-[9/16] object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="p-6 space-y-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute bottom-0 left-0 w-full">
        <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-[10px] text-teal-400/80 font-bold uppercase tracking-widest">{subtitle}</p>
      </div>
    </div>
  );
};

const VideoEditorView: React.FC = () => {
  const skills = [
    { name: 'Premiere Pro', level: '90%', icon: 'fa-film', color: 'text-purple-400' },
    { name: 'After Effects', level: '80%', icon: 'fa-wand-magic-sparkles', color: 'text-indigo-400' },
    { name: 'CapCut', level: '85%', icon: 'fa-scissors', color: 'text-teal-400' },
    { name: 'DaVinci Resolve', level: '70%', icon: 'fa-circle-nodes', color: 'text-blue-400' },
    { name: 'Final Cut Pro', level: '75%', icon: 'fa-clapperboard', color: 'text-red-400' },
    { name: 'Photoshop', level: '90%', icon: 'fa-image', color: 'text-blue-500' }
  ];

  const videos = [
    { 
      src: 'https://player.vimeo.com/external/370331493.sd.mp4?s=338d351d291d3977b073c0c32c87caf9de69573c&profile_id=164&oauth2_token_id=57447761', 
      title: 'Mountain Cinematic', 
      subtitle: 'Brand Promotion' 
    },
    { 
      src: 'https://player.vimeo.com/external/517090025.sd.mp4?s=f52033620e23114d643878b2d1804d9c02d665a3&profile_id=164&oauth2_token_id=57447761', 
      title: 'Urban Lifestyle', 
      subtitle: 'Social Media Reel' 
    },
    { 
      src: 'https://player.vimeo.com/external/494348466.sd.mp4?s=7b94b150c950d87a6f23f663f73ef4d7b2756d11&profile_id=164&oauth2_token_id=57447761', 
      title: 'Nightclub Vibe', 
      subtitle: 'Event Aftermovie' 
    },
    { 
      src: 'https://player.vimeo.com/external/362332610.sd.mp4?s=d004652c7f66a213e4726c59c63a6a9b49f9977f&profile_id=164&oauth2_token_id=57447761', 
      title: 'Action Sports', 
      subtitle: 'YouTube Feature' 
    },
    { 
      src: 'https://player.vimeo.com/external/403844030.sd.mp4?s=4a41d954cf605d33690d3f2730b9d62354c49d8c&profile_id=164&oauth2_token_id=57447761', 
      title: 'Culinary Art', 
      subtitle: 'Commercial Edit' 
    },
    { 
      src: 'https://player.vimeo.com/external/451804369.sd.mp4?s=13904a84920678b87e97d6677c77c13ca78e1215&profile_id=164&oauth2_token_id=57447761', 
      title: 'Tech Showcase', 
      subtitle: 'Product Launch' 
    },
    { 
      src: 'https://player.vimeo.com/external/421445100.sd.mp4?s=12e0f8f17540236a2e26081e7410027f311c626e&profile_id=165&oauth2_token_id=57447761', 
      title: 'Fashion Story', 
      subtitle: 'Luxury Commercial' 
    },
    { 
      src: 'https://player.vimeo.com/external/517090025.sd.mp4?s=f52033620e23114d643878b2d1804d9c02d665a3&profile_id=164&oauth2_token_id=57447761', 
      title: 'Street Pulse', 
      subtitle: 'Cinematic Reel' 
    },
    { 
      src: 'https://player.vimeo.com/external/370331493.sd.mp4?s=338d351d291d3977b073c0c32c87caf9de69573c&profile_id=164&oauth2_token_id=57447761', 
      title: 'Nature Escape', 
      subtitle: 'Travel Vlog' 
    },
    { 
      src: 'https://player.vimeo.com/external/494348466.sd.mp4?s=7b94b150c950d87a6f23f663f73ef4d7b2756d11&profile_id=164&oauth2_token_id=57447761', 
      title: 'Party Energy', 
      subtitle: 'Event Promo' 
    },
    { 
      src: 'https://player.vimeo.com/external/403844030.sd.mp4?s=4a41d954cf605d33690d3f2730b9d62354c49d8c&profile_id=164&oauth2_token_id=57447761', 
      title: 'Food Visuals', 
      subtitle: 'Recipe Short' 
    },
    { 
      src: 'https://player.vimeo.com/external/362332610.sd.mp4?s=d004652c7f66a213e4726c59c63a6a9b49f9977f&profile_id=164&oauth2_token_id=57447761', 
      title: 'Extreme Waves', 
      subtitle: 'Action Montage' 
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-32">
      {/* Hero Section */}
      <section className="px-8 md:px-24 flex flex-col items-center text-center space-y-8 py-20">
        <div className="space-y-4 max-w-4xl">
           <h4 className="text-teal-400 font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs animate-slideUp">Visual Storyteller</h4>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] uppercase bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
             Editing is where <br /> the magic happens
           </h1>
           <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto pt-6">
             Passionate editor specializing in high-energy reels, cinematic YouTube content, and thumb-stopping brand promotions that leave a lasting impact.
           </p>
        </div>
      </section>

      {/* My Experience Section */}
      <section className="space-y-16">
        <div className="px-8 md:px-24 max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">My Experience</h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            With over 5 years of experience across different visual mediums, I've mastered the art of pacing, color grading, and sound design to create immersive stories. My workflow is optimized for speed without compromising cinematic quality.
          </p>
        </div>

        {/* Scrolling Skill Ticker */}
        <div className="relative overflow-hidden border-y border-white/5 py-16 flex bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="flex animate-scroll-left hover:pause whitespace-nowrap gap-12 px-6">
            {[...skills, ...skills, ...skills].map((skill, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-6 bg-white/[0.03] backdrop-blur-[32px] border border-white/10 px-10 py-6 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
              >
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl ${skill.color}`}>
                  <i className={`fa-solid ${skill.icon}`}></i>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black">{skill.name}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-white tracking-tighter">{skill.level}</span>
                    <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-1000" style={{ width: skill.level }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Edits Section */}
      <section className="px-8 md:px-24 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h4 className="text-teal-400 font-bold uppercase tracking-[0.6em] text-[10px]">Portfolio Showcase</h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">My Best Edits</h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm italic border-l border-white/10 pl-4">A curated collection of visual experiences tailored for modern engagement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, idx) => (
            <VideoItem key={idx} {...video} />
          ))}
        </div>
      </section>

      {/* Contact Integration */}
      <ContactSection />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        .animate-slideUp {
          animation: slideUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />
    </div>
  );
};

export default VideoEditorView;

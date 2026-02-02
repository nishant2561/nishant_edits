
import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio playback failed or was blocked by browser:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-10 right-10 flex items-center gap-4 z-50">
      <audio 
        ref={audioRef}
        loop
        preload="none"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <span className="hidden md:block text-xs italic text-gray-500 font-medium">
        Wanna play music while scrolling?
      </span>
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center text-black text-xl shadow-lg shadow-teal-500/40 hover:scale-110 active:scale-95 transition-all"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </button>
    </div>
  );
};

export default AudioPlayer;

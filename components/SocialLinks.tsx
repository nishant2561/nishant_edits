
import React from 'react';

const SocialLinks: React.FC = () => {
  const links = [
    { icon: 'fa-youtube', url: 'https://youtube.com/@cute_cartoon28?si=-rX8UhUQROmEdexV', color: 'group-hover:text-red-500', glow: 'group-hover:bg-red-500/10' },
    { icon: 'fa-instagram', url: '#', color: 'group-hover:text-pink-500', glow: 'group-hover:bg-pink-500/10' },
    { icon: 'fa-linkedin', url: '#', color: 'group-hover:text-blue-500', glow: 'group-hover:bg-blue-500/10' },
    { icon: 'fa-github', url: '#', color: 'group-hover:text-white', glow: 'group-hover:bg-white/10' },
    { icon: 'fa-pinterest', url: '#', color: 'group-hover:text-red-600', glow: 'group-hover:bg-red-600/10' },
  ];

  return (
    <div className="flex gap-6 md:gap-8 items-center py-4">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        >
          {/* Background Glow Circle */}
          <div className={`absolute inset-0 rounded-full transition-all duration-500 scale-0 group-hover:scale-100 ${link.glow} blur-md opacity-0 group-hover:opacity-100`}></div>
          
          <i className={`fa-brands ${link.icon} text-2xl text-gray-500 transition-all duration-500 z-10 ${link.color} group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_12px_currentColor] will-change-transform`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

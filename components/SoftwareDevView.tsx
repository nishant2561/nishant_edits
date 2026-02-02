
import React from 'react';
import ContactSection from './ContactSection';

const ProjectCard: React.FC<{ title: string, description: string, tags: string[], link: string }> = ({ title, description, tags, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group relative block rounded-3xl overflow-hidden bg-white/5 border border-white/5 p-8 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2">
    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
      <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
    </div>
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 font-bold uppercase tracking-widest group-hover:border-blue-500/20 group-hover:text-blue-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const SoftwareDevView: React.FC = () => {
  const stack = [
    { name: 'TypeScript', icon: 'fa-brands fa-js', color: 'text-blue-400' },
    { name: 'React', icon: 'fa-brands fa-react', color: 'text-cyan-400' },
    { name: 'Next.js', icon: 'fa-solid fa-n', color: 'text-white' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-green-400' },
    { name: 'Python', icon: 'fa-brands fa-python', color: 'text-yellow-400' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: 'text-blue-500' }
  ];

  const projects = [
    { 
      title: 'Cosmic Analytics', 
      description: 'A high-performance real-time data visualization platform for monitoring interstellar satellite arrays.',
      tags: ['React', 'D3.js', 'Firebase'],
      link: '#' 
    },
    { 
      title: 'NexGen E-Commerce', 
      description: 'Fully responsive headless commerce platform with optimized checkout flow and AI product recommendations.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      link: '#' 
    },
    { 
      title: 'SyncEngine API', 
      description: 'A robust Node.js backend architecture supporting thousands of concurrent WebSocket connections for live editing.',
      tags: ['Node.js', 'Redis', 'WebSockets'],
      link: '#' 
    },
    { 
      title: 'Portfolio Engine', 
      description: 'The very site you are browsing. Built with performance and developer experience at its core.',
      tags: ['TypeScript', 'Vite', 'Three.js'],
      link: '#' 
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-32">
      {/* Hero Intro */}
      <section className="px-8 md:px-24 flex flex-col items-center text-center space-y-8 py-20">
        <div className="space-y-4 max-w-4xl">
           <h4 className="text-blue-400 font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">System Architect</h4>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] uppercase bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
             Code is the <br /> New Canvas
           </h1>
           <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto pt-6">
             I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
           </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 md:px-24 space-y-16 text-center">
         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">Tech Stack</h2>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {stack.map(tech => (
             <div key={tech.name} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col items-center gap-4 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-2 group">
               <i className={`${tech.icon} text-4xl ${tech.color} group-hover:scale-110 transition-transform`}></i>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{tech.name}</span>
             </div>
           ))}
         </div>
      </section>

      {/* Projects */}
      <section className="px-8 md:px-24 space-y-16">
        <div className="space-y-4">
          <h4 className="text-blue-400 font-bold uppercase tracking-[0.6em] text-[10px]">Development History</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">Featured Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default SoftwareDevView;


import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for reaching out! (This is a demo)');
  };

  const socialLinks = [
    { name: 'youtube', icon: 'fa-youtube', url: 'https://youtube.com/@cute_cartoon28?si=-rX8UhUQROmEdexV', color: 'hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5' },
    { name: 'instagram', icon: 'fa-instagram', url: '#', color: 'hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5' },
    { name: 'linkedin', icon: 'fa-linkedin', url: '#', color: 'hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5' },
    { name: 'github', icon: 'fa-github', url: '#', color: 'hover:text-white hover:border-white/30 hover:bg-white/5' },
    { name: 'pinterest', icon: 'fa-pinterest', url: '#', color: 'hover:text-red-600 hover:border-red-600/30 hover:bg-red-600/5' },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 flex flex-col items-center z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full">
        <div className="mb-20 space-y-4">
          <h4 className="text-teal-400 font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">
            Ready to collaborate?
          </h4>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Whether you have a question about a project or just want to say hi, my inbox is always open.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:ng5160750@gmail.com" className="group flex items-center gap-4 text-white/80 hover:text-teal-400 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Me</p>
                    <p className="text-lg font-medium">ng5160750@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://maps.app.goo.gl/pPYJu8ab2WuAn8xM8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white/80 hover:text-teal-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Location</p>
                    <p className="text-lg font-medium">Based in India • Remote</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black mb-6">Social Networks</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-500 hover:scale-110 active:scale-95 ${social.color}`}
                  >
                    <i className={`fa-brands ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="relative group p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden">
              {/* Internal glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full group-hover:bg-teal-500/20 transition-all duration-700" />
              
              <div className="relative z-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Nishant Gupta"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-400/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-700"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="hello@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-700"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-700 resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full relative py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs text-black transition-all duration-500 group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover/btn:scale-x-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

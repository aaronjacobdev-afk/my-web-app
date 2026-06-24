import React, { useState } from 'react';

export default function App() {
  // State to control the visibility of the "My Card" modal
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="min-h-screen bg-[#020d06] text-emerald-100/90 font-sans antialiased scroll-smooth selection:bg-red-500 selection:text-white">
      
      {/* Decorative top ambient glowing lines */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[250px] left-1/4 w-[600px] h-[400px] bg-red-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute -top-[200px] right-1/4 w-[500px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#020d06]/80 backdrop-blur-md border-b border-emerald-900/40 z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider text-red-500 hover:text-red-400 transition cursor-pointer">AJ.DEV</div>
        <div className="flex space-x-6 text-sm font-semibold tracking-wide">
          <a href="#about" className="text-emerald-300/80 hover:text-red-400 transition">About</a>
          <a href="#skills" className="text-emerald-300/80 hover:text-red-400 transition">Skills</a>
          <a href="#contact" className="text-emerald-300/80 hover:text-red-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center px-6 pt-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-400 mb-6 tracking-wide uppercase">
          ⚡ BCA STUDENT & WEB DEVELOPER
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-400 font-black">Aaron Jacob</span>
        </h1>
        <p className="text-lg md:text-xl text-emerald-300/60 max-w-xl mb-10 leading-relaxed font-light">
          Sculpting high-performance frontend designs and clean, robust backend architectures.
        </p>
        <a 
          href="#contact" 
          className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl shadow-red-900/30 hover:shadow-red-600/20 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Get In Touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 max-w-4xl mx-auto border-t border-emerald-950">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
          About <span className="text-red-500">Me</span>
        </h2>
        <div className="bg-[#041409]/60 border border-emerald-900/40 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Subtle glowing card accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          
          <p className="text-emerald-100/90 leading-relaxed text-lg font-light">
            I am a <strong className="text-red-400 font-semibold">BCA student at SB College</strong> dedicated to mastering both <strong className="text-red-400 font-semibold">frontend and backend development</strong> frameworks. I thrive on translating structural logic into beautiful digital realities.
          </p>
          <p className="text-emerald-300/70 leading-relaxed text-base font-light">
            When I step away from my code compiler, you'll catch me tactical planning on the <strong className="text-white">chess</strong> board, executing playmakers on the <strong className="text-white">football</strong> pitch, or loading up on knowledge with a great <strong className="text-white">book</strong>.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#031107]/50 border-t border-emerald-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-14 text-center text-white tracking-tight">
            My <span className="text-red-500">Technical Skills</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {['Python', 'JavaScript', 'CSS', 'C', 'Java'].map((skill) => (
              <div 
                key={skill} 
                className="bg-[#05180c]/80 border border-emerald-900/30 p-5 rounded-xl text-center hover:border-red-500/60 transition duration-300 shadow-md group cursor-default"
              >
                <p className="font-bold text-emerald-200 group-hover:text-red-400 transition duration-300">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-lg mx-auto border-t border-emerald-950">
        <div className="bg-[#041409] border border-emerald-900/40 rounded-2xl p-8 shadow-2xl relative">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-tight">
            Contact <span className="text-red-500">Me</span>
          </h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <div>
              <label className="block text-xs font-semibold tracking-wider text-red-400 mb-2 uppercase">Name :</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#020b05] border border-emerald-900/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition duration-300 placeholder-emerald-800"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wider text-red-400 mb-2 uppercase">Email :</label>
              <input 
                type="email" 
                required
                className="w-full bg-[#020b05] border border-emerald-900/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition duration-300 placeholder-emerald-800"
                placeholder="your.email@example.com"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-900/20 active:translate-y-px"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Socials / Footer Section */}
      <footer className="bg-[#020d06] border-t border-emerald-950 py-12 px-6 text-center">
        <h3 className="text-xs font-semibold tracking-widest text-red-400 mb-6 uppercase">Connect With Me</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/aaronjacobdev-afk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#05180c] hover:bg-[#072412] border border-emerald-900/40 hover:border-red-500/40 text-sm text-emerald-200 font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/aaronjacob-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#05180c] hover:bg-[#072412] border border-emerald-900/40 hover:border-red-500/40 text-sm text-emerald-200 font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            LinkedIn
          </a>
          <button 
            onClick={() => setShowCard(true)}
            className="bg-red-950/40 hover:bg-red-900/40 border border-red-800/40 hover:border-red-500 text-sm text-red-400 hover:text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            My Card
          </button>
        </div>
        <p className="text-xs text-emerald-900 mt-10">© {new Date().getFullYear()} Aaron Jacob. All rights reserved.</p>
      </footer>

      {/* Digital Profile Card Modal Layout */}
      {showCard && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex justify-center items-center p-4">
          <div className="bg-[#031408] border border-emerald-900/60 w-full max-w-sm rounded-2xl p-8 relative shadow-[0_0_50px_rgba(239,68,68,0.15)] text-center animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowCard(false)}
              className="absolute top-5 right-5 text-emerald-500 hover:text-red-500 transition text-lg font-bold"
            >
              ✕
            </button>
            <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-red-500/20">
              AJ
            </div>
            <h3 className="text-2xl font-extrabold text-white">Aaron Jacob</h3>
            <p className="text-xs text-red-400 font-bold uppercase tracking-wider mb-5">BCA Student & Developer</p>
            
            <div className="border-t border-emerald-950 my-5 pt-5 text-left space-y-3.5 text-sm text-emerald-300/80 font-light">
              <p>📍 <strong className="text-emerald-100 font-medium">College:</strong> SB College</p>
              <p>⚽ <strong className="text-emerald-100 font-medium">Hobbies:</strong> Chess, Football, Reading</p>
              <p>💻 <strong className="text-emerald-100 font-medium">Focus:</strong> Full-Stack Development</p>
            </div>

            <button 
              onClick={() => setShowCard(false)}
              className="mt-6 w-full bg-emerald-950 hover:bg-[#062911] text-xs font-semibold py-3 rounded-xl text-emerald-300 border border-emerald-900/40 transition duration-300"
            >
              Close Card
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

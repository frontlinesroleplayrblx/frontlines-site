import React from "react";

export default function StartPage() {
  const departments = [
    {
      name: "Police Department",
      icon: "🚔",
      desc: "Patrol the streets, respond to emergencies, and maintain law and order"
    },
    {
      name: "Fire & Rescue",
      icon: "🚒",
      desc: "Fight fires, perform rescues, and provide emergency medical assistance"
    },
    {
      name: "Emergency Medical",
      icon: "🚑",
      desc: "Provide life-saving medical care and rapid emergency response"
    },
    {
      name: "Communications",
      icon: "📡",
      desc: "Coordinate operations and dispatch units from our state-of-the-art CAD system"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
            <span className="text-2xl font-bold text-white">F</span>
          </div>
          <span className="text-xl font-bold tracking-wider">FRONTLINES RP</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-gray-600 transition-colors">ABOUT</a>
            <a href="#departments" className="hover:text-gray-600 transition-colors">DEPARTMENTS</a>
            <a href="#links" className="hover:text-gray-600 transition-colors">LINKS</a>
          </nav>
          <a href="/login">
            <button className="px-6 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded font-semibold text-sm transition-colors">
              LOGIN
            </button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center bg-gray-50">
        <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-700 text-sm font-medium">SERVERS ONLINE</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          FRONTLINES
          <br />
          <span className="text-4xl md:text-6xl font-normal text-gray-600">ROLEPLAY</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          The premier emergency services roleplay community on Roblox
        </p>

        <a href="/signup">
          <button className="group px-12 py-5 bg-gray-900 hover:bg-gray-700 text-white rounded font-bold text-xl transition-colors">
            <span className="flex items-center justify-center">
              JOIN NOW
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </a>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-24 max-w-3xl w-full">
          {[
            { num: "500+", label: "Active Members" },
            { num: "24/7", label: "Operations" },
            { num: "15+", label: "Staff Members" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-black text-gray-900">{stat.num}</div>
              <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-6 text-center">
            ABOUT US
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed">
                Frontlines Roleplay is a premium emergency services community on Roblox, dedicated to providing the most realistic and immersive first responder experience. Founded by passionate roleplayers, we combine authentic operations with a welcoming community atmosphere.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to create an environment where players can experience the thrill and responsibility of emergency services through realistic scenarios, professional training, and advanced technology including our custom CAD/MDT system.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional training programs, realistic emergency scenarios, custom vehicles and equipment, active staff support, regular community events, and opportunities for advancement through our rank structure.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a veteran roleplayer or completely new to the scene, we have a place for you. Our comprehensive training ensures everyone can participate and enjoy realistic emergency services roleplay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4 text-center">
            DEPARTMENTS
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">Choose your path and make a difference</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, idx) => (
              <div key={idx} className="group bg-white border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-3xl mb-4 group-hover:bg-gray-200 transition-colors">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{dept.name}</h3>
                <p className="text-gray-600 leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4">
            QUICK LINKS
          </h2>
          <p className="text-gray-600 text-lg mb-12">Connect with our community</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://discord.gg/frontlines" className="group bg-gray-50 border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Discord Server</h3>
              <p className="text-gray-500 text-sm">Join our community hub</p>
            </a>
            
            <a href="https://roblox.com/groups/frontlines" className="group bg-gray-50 border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Roblox Group</h3>
              <p className="text-gray-500 text-sm">Follow us on Roblox</p>
            </a>
            
            <a href="https://roblox.com/games/frontlines" className="group bg-gray-50 border border-gray-200 rounded p-8 hover:border-gray-400 transition-colors">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-2">Game Server</h3>
              <p className="text-gray-500 text-sm">Play now on Roblox</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 text-center text-gray-500 text-sm bg-gray-50">
        <p>© 2024 Frontlines Roleplay. Not affiliated with Roblox Corporation.</p>
        <p className="mt-2">Contact: <a href="mailto:contact@frontlinesrp.com" className="text-gray-900 hover:text-gray-600">contact@frontlinesrp.com</a></p>
      </footer>
    </div>
  );
}
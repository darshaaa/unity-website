import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Cpu, Wifi, ShieldCheck, Terminal, Layers, Radio, Monitor, Globe, Database } from "lucide-react";

const InformationTechnology = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg" 
            className="w-full h-full object-cover" 
            alt="Advanced Computing Server Room"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-24">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-white uppercase bg-blue-600 rounded-lg shadow-lg">
              Gigabit Powered Campus
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              The Digital <span className="text-blue-500">Backbone</span>
            </h2>
          </div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter">
            IT & <span className="text-blue-500">Innovation</span>
          </h1>
          <p className="max-w-3xl text-xl text-blue-200 border-l-4 border-blue-500 pl-6 leading-relaxed">
            A 100% Wi-Fi enabled campus powered by gigabit fiber, integrating AI-assisted 
            learning and advanced cyber-security protocols to prepare students for a 
            tech-first future.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12" />
      </section>

      {/* --- SPECIALITIES & INFRASTRUCTURE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/3861932/pexels-photo-3861932.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Coding Lab" />
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Collaborative Tech" />
            <img src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="AI Research" />
            <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Software Development" />
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase mb-8 leading-tight italic">
              Tech <span className="text-blue-600">Specialisations</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-blue-600 hover:bg-white hover:shadow-xl transition-all group">
                <Monitor className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">High-Performance Computing</h4>
                  <p className="text-sm text-slate-500 mt-1">Workstations equipped with dedicated GPUs for intensive tasks like 3D rendering and machine learning model training.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-red-600 hover:bg-white hover:shadow-xl transition-all group">
                <Globe className="text-red-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Campus-Wide Connectivity</h4>
                  <p className="text-sm text-slate-500 mt-1">Seamless roaming Wi-Fi 6 coverage across all academic blocks, hostels, and sports arenas.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-green-600 hover:bg-white hover:shadow-xl transition-all group">
                <Database className="text-green-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Centralized Cloud Server</h4>
                  <p className="text-sm text-slate-500 mt-1">A private institutional cloud allowing students to access their projects and digital course-ware from any device on campus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CORE IT ADVANTAGES --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">The Digital <span className="text-blue-600">Edge</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium italic">Building a future-proof environment for next-generation innovators.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-slate-50 rounded-[3.5rem] relative overflow-hidden group border-b-8 border-transparent hover:border-blue-600 transition-all shadow-sm hover:shadow-2xl">
              <Terminal className="text-blue-600 mb-6" size={40} />
              <h4 className="text-2xl font-black text-[#0a1f44] uppercase italic mb-4">Advanced Computing Labs</h4>
              <p className="text-slate-600 leading-relaxed mb-4">Equipped with 64-bit architecture workstations for 3D modeling, Python coding, and professional data analytics training. This lab serves as the primary hub for college-level research.</p>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Industry Standard Software Installed</span>
              <div className="absolute top-0 right-0 p-8 text-blue-100/50 group-hover:text-blue-200/50 transition-colors">
                  <Layers size={120} strokeWidth={1} />
              </div>
          </div>

          <div className="p-12 bg-slate-50 rounded-[3.5rem] relative overflow-hidden group border-b-8 border-transparent hover:border-red-600 transition-all shadow-sm hover:shadow-2xl">
              <Radio className="text-red-600 mb-6" size={40} />
              <h4 className="text-2xl font-black text-[#0a1f44] uppercase italic mb-4">Digital Language Lab</h4>
              <p className="text-slate-600 leading-relaxed mb-4">A specialized hub for our English Fluency Program, utilizing AI to track and improve student phonetics and speech clarity through real-time feedback loops.</p>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">AI-Driven Phonetics Training</span>
              <div className="absolute top-0 right-0 p-8 text-red-100/50 group-hover:text-red-200/50 transition-colors">
                  <ShieldCheck size={120} strokeWidth={1} />
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InformationTechnology;
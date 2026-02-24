import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Trophy, Target, Activity, Heart, Shield, Award, PlayCircle, Dumbbell } from "lucide-react";

const Ground = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* --- HIGH-IMPACT HERO --- */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#0a1f44]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 scale-105" 
            alt="Running Track"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Trophy size={14} /> National Standard Facilities
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.9] tracking-tighter mb-8">
            Level Up <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Your Game
            </span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300 font-medium leading-relaxed">
            Where sweat meets strategy. Our 20-acre sports complex is engineered to 
            transform raw talent into professional excellence through elite coaching 
            and world-class infrastructure.
          </p>
        </div>
      </section>

      {/* --- THE SPORTS CATEGORIES: DYNAMIC GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic text-[#0a1f44]">
              Diverse <span className="text-red-600">Disciplines</span>
            </h2>
            <div className="h-2 w-24 bg-red-600 mt-4"></div>
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
            20+ Sports | Professional Coaches | State-of-the-art Gear
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-t border-l border-slate-200 shadow-2xl rounded-[3rem] overflow-hidden">
          {/* Field Sports */}
          <div className="p-12 bg-white border-r border-b border-slate-200 group hover:bg-[#0a1f44] transition-all duration-500">
            <Target className="text-red-600 mb-8 group-hover:scale-125 transition-transform" size={48} />
            <h3 className="text-2xl font-black uppercase italic mb-6 group-hover:text-white">The Fields</h3>
            <ul className="space-y-4">
              {["Cricket (Turf Pitch)", "Football (Professional)", "Hockey", "Archery Range"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 font-bold text-sm">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Court Sports */}
          <div className="p-12 bg-white border-r border-b border-slate-200 group hover:bg-[#0a1f44] transition-all duration-500">
            <Activity className="text-red-600 mb-8 group-hover:scale-125 transition-transform" size={48} />
            <h3 className="text-2xl font-black uppercase italic mb-6 group-hover:text-white">The Courts</h3>
            <ul className="space-y-4">
              {["Floodlit Basketball", "Indoor Badminton", "Synthetic Tennis", "Volleyball Arena"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 font-bold text-sm">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Wellness */}
          <div className="p-12 bg-white border-r border-b border-slate-200 group hover:bg-[#0a1f44] transition-all duration-500">
            <Heart className="text-red-600 mb-8 group-hover:scale-125 transition-transform" size={48} />
            <h3 className="text-2xl font-black uppercase italic mb-6 group-hover:text-white">Mind & Combat</h3>
            <ul className="space-y-4">
              {["Taekwondo Dojo", "Karate Training", "Yoga Pavilion", "Competitive Chess"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 font-bold text-sm">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- FULL WIDTH FEATURE SECTION --- */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <img 
              src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80" 
              className="rounded-[3rem] shadow-2xl relative z-10" 
              alt="Football Match" 
            />
            
          </div>
          <div>
            <h4 className="text-sm font-black text-red-600 uppercase tracking-widest mb-4">The Training Philosophy</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] uppercase italic mb-6">
              More Than Just <br /> <span className="text-red-600">Playing.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We focus on the science of sports. From video analysis of techniques 
              to specialized nutrition plans and injury prevention protocols, 
              we treat every student as a developing professional athlete.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="flex items-center gap-3">
                  <Shield className="text-red-600" size={20} />
                  <span className="font-bold text-sm uppercase">First-Aid Ready</span>
               </div>
               <div className="flex items-center gap-3">
                  <Dumbbell className="text-red-600" size={20} />
                  <span className="font-bold text-sm uppercase">Advanced Gym</span>
               </div>
               <div className="flex items-center gap-3">
                  <PlayCircle className="text-red-600" size={20} />
                  <span className="font-bold text-sm uppercase">Video Analysis</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award className="text-red-600" size={20} />
                  <span className="font-bold text-sm uppercase">Scholarships</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-[#0a1f44] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-black text-red-500 mb-2">20+</p>
            <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Acres of Turf</p>
          </div>
          <div>
            <p className="text-5xl font-black text-white mb-2">15</p>
            <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Elite Coaches</p>
          </div>
          <div>
            <p className="text-5xl font-black text-white mb-2">200+</p>
            <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Medals Won</p>
          </div>
          <div>
            <p className="text-5xl font-black text-red-500 mb-2">100%</p>
            <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Floodlit Courts</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ground;
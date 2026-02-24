import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Laptop, Airplay, Sun, Maximize, Zap, Lightbulb, Users, ShieldCheck, Cpu } from "lucide-react";

const Classrooms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg" 
            className="w-full h-full object-cover" 
            alt="Modern Smart Classroom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-24">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-white uppercase bg-red-600 rounded-lg">
              Next-Gen Learning Environment
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Where Tech Meets <span className="text-blue-400">Talent</span>
            </h2>
          </div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter">
            Smart <span className="text-red-600">Living</span> <br /> Laboratories
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 border-l-4 border-blue-600 pl-6 leading-relaxed">
            We move beyond traditional four-walled instruction. Our classrooms are tech-integrated 
            spaces designed to stimulate cognitive curiosity and collaborative problem-solving 
            for both school and college students.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12" />
      </section>

      {/* --- SPECIALITIES & ADVANTAGES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-12">
            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Airplay size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#0a1f44] uppercase">Interactive Kiosks</h4>
                <p className="text-slate-500 mt-2 leading-relaxed">Every classroom is equipped with 4K touch-enabled smart boards connected to the central institutional cloud for seamless digital resource sharing.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Maximize size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#0a1f44] uppercase">Modular Ergo-Seating</h4>
                <p className="text-slate-500 mt-2 leading-relaxed">Ergonomic furniture designed to prevent fatigue. These modular units can be rearranged in minutes to support solo exams or collaborative debates.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Sun size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#0a1f44] uppercase">Intelligent Climate Control</h4>
                <p className="text-slate-500 mt-2 leading-relaxed">Automated ventilation and daylight harvesting sensors maintain a CO2-balanced environment, ensuring maximum cognitive focus.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" className="rounded-3xl shadow-lg h-64 w-full object-cover" alt="Student Group" />
               <img src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg" className="rounded-3xl shadow-lg h-64 w-full object-cover mt-12" alt="Smart Board" />
            </div>
          </div>
        </div>

        {/* --- THE CLASSROOM ADVANTAGE GRID --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">Why Our <span className="text-red-600">Spaces</span> Work</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium italic">Strategically designed to reduce distractions and boost retention.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-blue-600">
            <Users className="text-blue-600 mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Low Density</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Strict student-to-space ratios ensure every learner has the personal room required for comfortable movement and individual attention.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-red-600">
            <ShieldCheck className="text-red-600 mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Health-First</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Anti-bacterial surfaces and medical-grade air filtration systems are standard across all instructional wings.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-green-600">
            <Zap className="text-green-600 mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Visual-Audio</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Acoustically treated walls and surround-sound systems ensure that every word from the lecturer is heard clearly at the back of the room.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classrooms;
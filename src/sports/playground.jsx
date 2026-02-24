import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Trophy, Activity, Target, Timer, Medal, Heart, Users, ChevronRight, Star, Dumbbell, Zap } from "lucide-react";

const PlayGround = () => {
  const sportsCategories = [
    {
      title: "Field Sports",
      icon: <Target className="text-red-600" />,
      info: "Our sprawling fields are maintained with professional-grade turf and drainage systems for year-round play.",
      items: [
        { name: "Cricket", detail: "Full-sized turf pitch with 4 automated practice nets." },
        { name: "Football", detail: "Natural grass field with professional goalposts and markings." },
        { name: "Hockey", detail: "Dedicated field designed for high-speed tactical play." },
        { name: "Archery", detail: "Safe, 50-meter range with professional coaching." }
      ]
    },
    {
      title: "Court Sports",
      icon: <Activity className="text-blue-600" />,
      info: "Precision-engineered courts with high-visibility floodlights for evening training sessions.",
      items: [
        { name: "Basketball", detail: "Two floodlit outdoor courts with hydraulic hoops." },
        { name: "Badminton", detail: "Four indoor wooden-floor courts with standard clearance." },
        { name: "Tennis", detail: "Synthetic hard courts with night-match lighting." },
        { name: "Volleyball", detail: "Standard outdoor courts with sand-mix surfacing." }
      ]
    },
    {
      title: "Wellness & Combat",
      icon: <Heart className="text-green-600" />,
      info: "Focusing on the synergy between mental discipline and physical self-defense.",
      items: [
        { name: "Yoga", detail: "An open-air 'Zen Deck' for morning mindfulness." },
        { name: "Taekwondo", detail: "Professional 'Dojo' with safety mats and gear." },
        { name: "Karate", detail: "Structured belt-grading program by black-belt instructors." },
        { name: "Chess", detail: "Strategic 'Think Tank' lounge for competitive chess play." }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg"
            className="w-full h-full object-cover" 
            alt="Olympic Standard Athletic Track"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-24">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-white uppercase bg-green-600 rounded-lg shadow-lg">
              Elite Athletic Infrastructure
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              The Arena of <span className="text-red-500">Champions</span>
            </h2>
          </div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#0a1f44] mb-8 uppercase italic tracking-tighter">
            Sports <span className="text-green-600">Arena</span>
          </h1>
          <p className="max-w-3xl text-xl text-slate-600 border-l-4 border-red-600 pl-6 leading-relaxed">
            Physical vigor is the catalyst for analytical rigor. Our Olympic-standard grounds 
            host everything from primary sports days to university-level cricket tournaments, 
            ensuring a balanced development for every student.
          </p>
        </div>
      </section>

      {/* --- NEW ADDITION: SECONDARY FEATURE IMAGE --- */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto relative h-[400px] rounded-[4rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/34563722/pexels-photo-34563722.png" 
            className="w-full h-full object-cover" 
            alt="High-speed Athletics"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-white text-3xl font-black uppercase italic tracking-tight">Built for Speed. Designed for Victory.</h3>
             </div>
          </div>
        </div>
      </section>

      {/* --- DETAILED GAMES EXPLORATION --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] uppercase italic">
            Explore <span className="text-red-600">Our Games</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            A comprehensive athletic ecosystem featuring 20+ disciplines led by certified coaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {sportsCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <div className="p-4 bg-slate-900 text-white rounded-2xl">
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-black text-[#0a1f44] uppercase italic">{cat.title}</h4>
              </div>
              
              <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed">
                {cat.info}
              </p>

              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="group p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border-l-4 border-transparent hover:border-red-600">
                    <h5 className="font-black text-[#0a1f44] uppercase text-sm mb-1">{item.name}</h5>
                    <p className="text-xs text-slate-500 font-medium">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CHAMPIONSHIP STATS --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
         <div className="bg-[#0a1f44] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
               <div>
                  <h2 className="text-4xl font-black uppercase italic mb-6 leading-tight">Annual <br/><span className="text-red-600">Sports Meet</span></h2>
                  <p className="max-w-xl text-blue-100 text-lg leading-relaxed">
                      Our flagship event where students showcase peak performance 
                      in discipline, teamwork, and athletic excellence before thousands of spectators.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-8 shrink-0">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <p className="text-4xl font-black text-red-500">100+</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-blue-300 mt-2">Annual Events</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <p className="text-4xl font-black text-yellow-500">25+</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-blue-300 mt-2">NIS Coaches</p>
                  </div>
               </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
         </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlayGround;
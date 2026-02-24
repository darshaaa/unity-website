import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Trophy, Activity, Target, Timer, Medal, Heart, ShieldCheck, Zap, Users } from "lucide-react";

const Ground = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/12843871/pexels-photo-12843871.jpeg" 
            className="w-full h-full object-cover" 
            alt="Olympic Standard Athletic Track"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
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
      <section className="pt-16 pb-20 bg-green-50 border-b">
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

      {/* --- SPECIALITIES & ADVANTAGES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/163444/sport-treadmill-training-fitness-163444.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Indoor Gym" />
            <img src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Basketball Court" />
            <img src="https://images.pexels.com/photos/61135/pexels-photo-61135.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Football Turf" />
            <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Cricket Pitch" />
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase mb-8 leading-tight italic">
              Elite <span className="text-red-600">Specialisations</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-red-600 hover:bg-white hover:shadow-xl transition-all">
                <Target className="text-red-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Track & Field</h4>
                  <p className="text-sm text-slate-500 mt-1">A professional 400m synthetic track designed for high-impact athletics and inter-house racing events.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-blue-600 hover:bg-white hover:shadow-xl transition-all">
                <Activity className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Standardized Courts</h4>
                  <p className="text-sm text-slate-500 mt-1">Fully floodlit courts for basketball, tennis, and badminton that allow for evening practice and university-level tournaments.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-green-600 hover:bg-white hover:shadow-xl transition-all">
                <Heart className="text-green-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Yoga & Wellness Deck</h4>
                  <p className="text-sm text-slate-500 mt-1">An open-air pavilion dedicated to early morning mindfulness, flexibility training, and holistic wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- THE SPORTS ADVANTAGE GRID --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">The Athletic <span className="text-green-600">Edge</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium italic">Professional facilities that build discipline, teamwork, and resilience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-red-600">
            <Trophy className="text-red-600 mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Competitive spirit</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Our structured house system encourages healthy competition, allowing students to earn laurels for their teams through 100+ events.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-blue-600">
            <ShieldCheck className="text-blue-600 mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Safety & Rehab</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Medical-grade first-aid and physiotherapy support on-call during all major sporting sessions to ensure student safety.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-green-600">
            <Zap className="text-green-600 mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Pro Coaching</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Access to certified sports mentors who provide specialised training for national and state-level qualifications.</p>
          </div>
        </div>
      </section>

      {/* --- ANNUAL MEET HIGHLIGHT --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
         <div className="bg-[#0a1f44] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl font-black uppercase italic mb-6">Annual <span className="text-red-600">Sports Meet</span></h2>
              <p className="max-w-2xl text-blue-100 text-lg leading-relaxed mb-8">
                  Our flagship event where both School and College wings showcase peak performance 
                  in discipline, teamwork, and athletic excellence. Witness the spirit of the institution come alive.
              </p>
              <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3"><Medal className="text-yellow-500"/> <span className="text-xs font-bold uppercase tracking-widest">100+ Competitive Events</span></div>
                  <div className="flex items-center gap-3"><Timer className="text-red-500"/> <span className="text-xs font-bold uppercase tracking-widest">Professional Officiating</span></div>
                  <div className="flex items-center gap-3"><Users className="text-blue-400"/> <span className="text-xs font-bold uppercase tracking-widest">3000+ Participants</span></div>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
         </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ground;
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Map, Shield, Trees, Building2, MoveUpRight, Zap, Target, Heart, Award, Globe } from "lucide-react";

const CampusOverview = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg" 
            className="w-full h-full object-cover" 
            alt="Main Campus Aerial View"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-60"></div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="pt-10 pb-20 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-widest text-green-600 uppercase bg-green-100 rounded-lg">
            Institutional Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#0a1f44] mb-8 uppercase italic tracking-tighter">
            Our <span className="text-red-600">Campus</span>
          </h1>
          <p className="max-w-4xl text-xl text-slate-600 leading-relaxed border-l-4 border-red-600 pl-6">
            Spanning over a sprawling landscape, our campus is a masterpiece of modern architecture 
            specifically zoned into three academic blocks. This design ensures that school-level 
            nurturing and college-level analytical rigor coexist in a safe, expansive environment.
          </p>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="py-12 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center border-r border-white/10 last:border-0">
            <h3 className="text-4xl font-black text-red-600">15+</h3>
            <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-2 font-bold">Total Acreage</p>
          </div>
          <div className="text-center border-r border-white/10 last:border-0">
            <h3 className="text-4xl font-black text-red-600">03</h3>
            <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-2 font-bold">Academic Blocks</p>
          </div>
          <div className="text-center border-r border-white/10 last:border-0">
            <h3 className="text-4xl font-black text-red-600">100%</h3>
            <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-2 font-bold">CCTV Coverage</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-red-600">24/7</h3>
            <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-2 font-bold">Security Personnel</p>
          </div>
        </div>
      </section>

      {/* --- CAMPUS GALLERY & SPECIALITIES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Main Building" />
            <img src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Campus Greenery" />
            <img src="https://images.pexels.com/photos/159213/pexels-photo-159213.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Library Block" />
            <img src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Sports Arena" />
          </div>
          
          <div>
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase mb-8 leading-tight italic">
              Specialized <span className="text-red-600">Infrastructure</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-blue-600 hover:bg-white hover:shadow-xl transition-all">
                <Target className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Focus-Centric Zoning</h4>
                  <p className="text-sm text-slate-500 mt-1">Dedicated noise-controlled zones for senior college research while keeping the school primary wings vibrant and play-focused.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-green-600 hover:bg-white hover:shadow-xl transition-all">
                <Heart className="text-green-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Wellness & Ventilation</h4>
                  <p className="text-sm text-slate-500 mt-1">Cross-ventilated buildings designed for natural cooling, reducing digital eye strain and maintaining high oxygen levels for better concentration.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-red-600 hover:bg-white hover:shadow-xl transition-all">
                <Award className="text-red-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Professional Standard Arena</h4>
                  <p className="text-sm text-slate-500 mt-1">A multi-purpose sports ground that meets university-level athletic standards, hosting our flagship annual sports meets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CORE ADVANTAGES GRID --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">The Campus <span className="text-red-600">Advantage</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium italic">Why our physical environment is essential to our academic success.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group">
            <Trees className="text-green-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Eco-Sustainable</h3>
            <p className="text-slate-500 leading-relaxed">Integrated rainwater harvesting and solar grids power 40% of our common area lighting, fostering environmental consciousness in students from a young age.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group border-t-8 border-red-600">
            <Shield className="text-red-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Safe Haven</h3>
            <p className="text-slate-500 leading-relaxed">A strictly monitored perimeter with biometric access for staff and smart-card entry for senior students ensures a worry-free environment for parents.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group">
            <Building2 className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 text-[#0a1f44]">Zoned Planning</h3>
            <p className="text-slate-500 leading-relaxed">Separate wings for primary, secondary, and college blocks ensure that age-appropriate facilities and social environments are always maintained.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusOverview;
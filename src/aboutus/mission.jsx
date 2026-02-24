import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  Target, 
  Star, 
  Heart, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap,
  Users2 
} from "lucide-react";

const Mission = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Mission Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44]/90 to-[#0a1f44]/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Our <span className="text-red-600">Mission</span>
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto my-6" />
          <p className="text-blue-200 uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
            Defining the Purpose of Unity Institution
          </p>
        </div>
      </section>

      {/* 2. CORE STATEMENT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-6">
                <Target size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Driven by Purpose</span>
              </div>
              <h2 className="text-[#0a1f44] text-4xl md:text-5xl font-black uppercase mb-6 leading-[1.1]">
                Empowering Minds <br /> 
                <span className="text-red-600">Transforming Lives.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                <p>
                  At <span className="text-[#0a1f44] font-bold">Unity Institution</span>, our mission is to provide a transformative educational experience that empowers students from their foundational school years through to their advanced college levels.
                </p>
                <p>
                  We are committed to fostering an inclusive and intellectually stimulating community where academic rigor meets ethical character. We don't just prepare students for exams; we prepare them to navigate and lead in a rapidly changing global society by instilling a lifelong passion for discovery.
                </p>
                <p className="border-l-4 border-red-600 pl-6 italic font-medium py-2 bg-slate-50">
                  "Our daily mandate is to bridge the gap between potential and achievement, ensuring every student leaves our halls with the confidence to change the world."
                </p>
              </div>
            </div>

            {/* EXPANDED OBJECTIVES */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-[2rem] border-l-4 border-red-600 shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-white rounded-xl text-[#0a1f44]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase text-sm tracking-tight mb-1">Academic Integrity</h4>
                  <p className="text-xs text-slate-500">Implementing rigorous international standards and research-based teaching methodologies at every level.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-[2rem] border-l-4 border-[#0a1f44] shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-white rounded-xl text-red-600">
                  <Users2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase text-sm tracking-tight mb-1">Holistic Development</h4>
                  <p className="text-xs text-slate-500">Nurturing emotional intelligence, leadership qualities, and physical well-being alongside technical skills.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:sticky lg:top-10">
            {/* CLEAN IMAGE - NO OFFSET FRAME */}
            <img 
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg" 
              className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover h-[450px] w-full"
              alt="Unity Students"
            />
            
            {/* FUTURE ASPIRATIONS OVERLAY (MATCHING VISION UI) */}
            <div className="mt-12 bg-[#0a1f44] text-white p-10 rounded-[2.5rem] shadow-2xl">
              <Zap className="text-red-500 mb-4" />
              <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Core Strategic Goals</h3>
              <ul className="space-y-4">
                {[
                  "Cultivating critical thinking through project-based learning",
                  "Ensuring 1:1 mentorship for college-level research projects",
                  "Integrating global citizenship into the core school curriculum",
                  "Expanding infrastructure for high-tech digital laboratories",
                  "Building strong ethical foundations through community service",
                  "Securing 100% placement and university entrance success"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-blue-100">
                    <CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY PILLARS STRIP */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 mb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <div className="group">
              <Star className="mx-auto text-red-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-black text-[#0a1f44] uppercase mb-2">Academic Excellence</h3>
              <p className="text-sm text-slate-500">Uncompromising standards in education and student performance.</p>
           </div>
           <div className="group">
              <Heart className="mx-auto text-red-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-black text-[#0a1f44] uppercase mb-2">Character Building</h3>
              <p className="text-sm text-slate-500">Instilling values of integrity, empathy, and social responsibility.</p>
           </div>
           <div className="group">
              <GraduationCap className="mx-auto text-red-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-black text-[#0a1f44] uppercase mb-2">Future Readiness</h3>
              <p className="text-sm text-slate-500">Preparing students for the challenges of a global career path.</p>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
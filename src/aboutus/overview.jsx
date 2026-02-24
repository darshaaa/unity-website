import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  History, 
  Users, 
  CheckCircle2, 
  BookOpen, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Lightbulb 
} from "lucide-react";

const Overview = () => {
  const stats = [
    { label: "Years of Excellence", value: "25+", icon: <History className="w-6 h-6" /> },
    { label: "Expert Educators", value: "150+", icon: <Users className="w-6 h-6" /> },
    { label: "Global Awards", value: "40+", icon: <Trophy className="w-6 h-6" /> },
    { label: "Student Success", value: "100%", icon: <CheckCircle2 className="w-6 h-6" /> },
  ];

  const pillars = [
    {
      title: "Academic Rigor",
      desc: "Our curriculum is designed to challenge students while providing the support needed to master complex concepts.",
      icon: <ShieldCheck className="text-red-600" size={28} />
    },
    {
      title: "Digital Innovation",
      desc: "Integrating AI and modern technology into the classroom to prepare students for a tech-driven future.",
      icon: <Cpu className="text-red-600" size={28} />
    },
    {
      title: "Creative Expression",
      desc: "Nurturing the arts and lateral thinking to ensure our graduates are as creative as they are capable.",
      icon: <Lightbulb className="text-red-600" size={28} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Campus Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/90 to-[#0a1f44]/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-red-500 font-black tracking-[0.3em] uppercase text-sm mb-4 block">
            About Unity Institution
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">Overview</span>
          </h1>
          <div className="w-24 h-2 bg-red-600 mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. CORE IDENTITY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-[#0a1f44] text-3xl md:text-4xl font-black uppercase mb-8 leading-tight">
            Empowering the Leaders <br /> 
            <span className="text-red-600">of Tomorrow.</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
            <p>
              <span className="font-bold text-[#0a1f44]">Unity Institution</span> has evolved from a local center of learning into a globally recognized educational powerhouse. We provide a rich, multicultural environment where students from diverse backgrounds are empowered to reach their full potential.
            </p>
            <p>
              Our pedagogical approach combines the discipline of traditional education with the flexibility required for modern innovation. We believe that true education lies in the balance between academic prowess and emotional intelligence.
            </p>
            <p className="border-l-4 border-red-600 pl-6 italic font-medium py-2 bg-slate-50">
              "Unity is not just our name; it is our philosophy. We bring together technology, values, and community to build a better future."
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-600 rounded-[2.5rem] z-0" />
          <img 
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg" 
            className="relative z-10 rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            alt="Students at Unity Institution"
          />
        </div>
      </section>

      {/* 3. STRATEGIC PILLARS SECTION (NEW) */}
      <section className="bg-[#0a1f44] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
              Our Strategic <span className="text-red-600">Pillars</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto uppercase text-xs font-bold tracking-[.2em]">The foundation of our excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS STRIP */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-red-600 rounded-2xl shadow-sm mb-4 group-hover:bg-[#0a1f44] group-hover:text-white transition-all">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-[#0a1f44] mb-1">{stat.value}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GLOBAL ENGAGEMENT SECTION (NEW) */}
      <section className="py-24 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
           <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Classroom" />
              <img src="https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg" className="rounded-3xl h-64 w-full object-cover mt-8 shadow-lg" alt="Laboratory" />
           </div>
        </div>
        <div className="lg:w-1/2">
          <span className="text-red-600 font-bold uppercase text-xs tracking-widest block mb-4">World Class Exposure</span>
          <h2 className="text-[#0a1f44] text-3xl font-black uppercase leading-tight mb-6">Connecting our students <br/> to a Global Stage</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Unity Institution maintains active partnerships with educational bodies across the globe. Through student exchange programs and international seminars, we ensure our curriculum is always aligned with world-wide standards.
          </p>
          <div className="flex gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
              <Globe className="text-[#0a1f44] mb-2" />
              <p className="text-xs font-black uppercase text-[#0a1f44]">Global Certifications</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
              <BookOpen className="text-[#0a1f44] mb-2" />
              <p className="text-xs font-black uppercase text-[#0a1f44]">Research Focus</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Trophy = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

export default Overview;
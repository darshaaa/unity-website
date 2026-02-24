import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Lightbulb, Workflow, Target, Zap, Users, BookOpen, Search, Medal } from "lucide-react";

const MethodologyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-widest text-green-600 uppercase bg-green-100 rounded-lg">
            Pedagogical Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#0a1f44] mb-8 uppercase italic tracking-tighter">
            Our Teaching <br /> <span className="text-red-600">Methodology</span>
          </h1>
          <p className="max-w-3xl text-xl text-slate-600 leading-relaxed border-l-4 border-red-600 pl-6">
            We employ a multi-dimensional approach to learning, moving beyond rote memorization 
            to foster critical thinking, creativity, and the "Generosity of Spirit" outlined in 
            our institutional mission.
          </p>
        </div>
      </section>

      {/* --- CORE PHILOSOPHY: HEART, HEAD, HAND --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase italic mb-8">
              The <span className="text-green-600">3-Pillar</span> Approach
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm">
                  <Workflow size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0a1f44] uppercase">Inquiry-Based Learning</h4>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    Encouraging students to ask 'why' and 'how.' We utilize case studies and real-world 
                    problem-solving to spark natural curiosity from an early age.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                  <Users size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0a1f44] uppercase">Collaborative Synergy</h4>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    Group projects and peer-to-peer mentoring ensure students develop the teamwork 
                    and leadership skills necessary for modern professional environments.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
                  <Zap size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0a1f44] uppercase">Experiential Mastery</h4>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    "Learning by doing" through high-tech labs, role plays, and field visits that 
                    translate abstract concepts into practical knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50" />
            <div className="relative bg-[#0a1f44] p-12 rounded-[4rem] text-white shadow-2xl">
                <h3 className="text-2xl font-black uppercase mb-6 text-red-500">Methodical Rigor</h3>
                <ul className="space-y-6">
                    <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <CheckCircle className="text-green-500" /> Continuous Formative Assessment
                    </li>
                    <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <CheckCircle className="text-green-500" /> Semester-wise Academic Planning
                    </li>
                    <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <CheckCircle className="text-green-500" /> Peer-Reviewed Research Thesis
                    </li>
                    <li className="flex items-center gap-4">
                        <CheckCircle className="text-green-500" /> Remedial Support Systems
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY BY LEVEL --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic tracking-widest">Evolution of <span className="text-red-600">Learning</span></h2>
            <p className="text-slate-400 mt-4">How our methods adapt to the student's journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden">
            {/* SCHOOL LEVEL */}
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-all">
              <span className="text-red-500 font-black text-xs uppercase tracking-widest">Level 01</span>
              <h4 className="text-2xl font-black mt-4 mb-6 uppercase">The School Wing</h4>
              <p className="text-slate-400 leading-relaxed mb-8">
                Focus on <strong>English Immersion</strong> and <strong>Holistic Nurturing</strong>. 
                We use storytelling, skits, and multimedia tools to build foundational fluency and moral values.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <Medal size={18} className="text-yellow-500" /> NEP 2020 Aligned
              </div>
            </div>

            {/* COLLEGE LEVEL */}
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-all">
              <span className="text-green-500 font-black text-xs uppercase tracking-widest">Level 02</span>
              <h4 className="text-2xl font-black mt-4 mb-6 uppercase">The College Wing</h4>
              <p className="text-slate-400 leading-relaxed mb-8">
                Focus on <strong>Analytical Rigor</strong> and <strong>Industry Readiness</strong>. 
                Semester systems with 70+ instructional days and specialized entrance coaching (JEE/NEET/CA).
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <Target size={18} className="text-red-500" /> Result Oriented
              </div>
            </div>

            {/* RESEARCH LEVEL */}
            <div className="p-12 hover:bg-white/5 transition-all">
              <span className="text-blue-500 font-black text-xs uppercase tracking-widest">Level 03</span>
              <h4 className="text-2xl font-black mt-4 mb-6 uppercase">Research & Beyond</h4>
              <p className="text-slate-400 leading-relaxed mb-8">
                Focus on <strong>Global Benchmarks</strong>. Thesis evaluation by global examiners, 
                Extra Mural Lecture series, and faculty exchange programs.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <Search size={18} className="text-blue-500" /> Evidence Based
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INNOVATION SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase mb-8">
              Digital <span className="text-red-600">Methodology</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Our campus is a "Smart-Living Laboratory." We integrate AI tools, E-classrooms, 
              and multimedia libraries into the daily curriculum to ensure students are 
              digitally fluent and technologically ahead.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="font-bold text-[#0a1f44] flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full" /> Hybrid Learning
                </div>
                <div className="font-bold text-[#0a1f44] flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full" /> Data Analytics
                </div>
                <div className="font-bold text-[#0a1f44] flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full" /> VR Classrooms
                </div>
                <div className="font-bold text-[#0a1f44] flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full" /> Digital Portfolios
                </div>
            </div>
          </div>
          <div className="flex-1">
             <img 
               src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg" 
               className="rounded-[3rem] shadow-xl" 
               alt="Digital Learning" 
             />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Internal Helper for Icons
const CheckCircle = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

export default MethodologyPage;
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BookOpen, Award, Users, Globe, Laptop, ShieldCheck, Microscope, GraduationCap } from "lucide-react";

const AcademicsOverview = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION: ACADEMICS HEADER --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Academics Hero"
        />
        <div className="absolute inset-0 bg-[#0a1f44]/60 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
            Academics
          </h1>
          <div className="w-24 h-2 bg-green-600 mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* --- SECTION 1: INSTITUTIONAL CORE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-[#0a1f44] text-4xl font-black leading-tight uppercase">
              Diverse Talent & <br /> <span className="text-red-600">Innovative Thinking</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              The Institute strongly believes that talent and good ideas can come from anywhere. 
              We host a remarkably diverse community, drawing students from across all regions 
              and backgrounds. Intensely curious and driven to explore, our student community 
              values rigorous analytical thinking, ingenuity, and hands-on problem solving.
            </p>
            <div className="p-8 border-l-8 border-green-600 bg-slate-50 italic text-2xl font-medium text-slate-700">
              "The roots of education are bitter, but the fruit is sweet." — Aristotle
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <Microscope className="text-red-600 mb-4" size={40} />
              <h4 className="font-black text-[#0a1f44] text-lg uppercase">Research Excellence</h4>
              <p className="text-slate-500 mt-2">Evaluation based on peer-reviewed thesis by global examiners.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mt-8">
              <ShieldCheck className="text-green-600 mb-4" size={40} />
              <h4 className="font-black text-[#0a1f44] text-lg uppercase">Academic Integrity</h4>
              <p className="text-slate-500 mt-2">Standardized ordinances prepared by the Senate academic body.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ACADEMIC RIGOR & STRUCTURE --- */}
      <section className="py-24 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-widest italic">Programs & Rigor</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-red-600">Semester Systems</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Courses are organized as semester programs, providing a minimum of seventy 
                instructional days per term with continuous evaluation by the faculty.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-green-600">Medium of Instruction</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                English is the primary medium of instruction. Students engage in debates, 
                assemblies, and academic discourse exclusively in English to build global confidence.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-blue-500">Holistic Balance</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                The rigors of academic study are balanced with co-curricular activities and 
                Special Lectures from the Extra Mural Lecture series.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WORLD-CLASS INFRASTRUCTURE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-[#0a1f44] text-4xl font-black leading-tight uppercase">
              Global <span className="text-green-600">Infrastructure</span> Standards
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Spread across three academic blocks, we boast spacious and well-ventilated classrooms. 
              Our infrastructure is comparable to world standards, featuring state-of-the-art 
              educational spaces, Wi-Fi enabled campuses, and language labs.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-3 font-bold text-[#0a1f44]">
                <div className="w-2 h-2 bg-red-600 rounded-full" /> Multimedia Library
              </li>
              <li className="flex items-center gap-3 font-bold text-[#0a1f44]">
                <div className="w-2 h-2 bg-red-600 rounded-full" /> E-Classrooms
              </li>
              <li className="flex items-center gap-3 font-bold text-[#0a1f44]">
                <div className="w-2 h-2 bg-red-600 rounded-full" /> Computer Labs
              </li>
              <li className="flex items-center gap-3 font-bold text-[#0a1f44]">
                <div className="w-2 h-2 bg-red-600 rounded-full" /> Activity Rooms
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg" className="rounded-3xl h-64 w-full object-cover shadow-lg" alt="Lab" />
              <img src="https://images.pexels.com/photos/159711/books-bookcase-library-read-159711.jpeg" className="rounded-3xl h-64 w-full object-cover shadow-lg mt-8" alt="Library" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: COLLABORATION & INDUSTRY --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Award className="mx-auto text-red-600" size={60} />
          <h2 className="text-[#0a1f44] text-4xl font-black uppercase italic">Academic Relationships & Industry</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The Institute maintains academic relationships with several other educational 
            institutes globally through faculty exchange programs and Memoranda of Understanding (MOUs), 
            resulting in co-operative projects for mutual benefit. We set a fine example of 
            interaction with industry through consultancy services and sponsored innovative projects.
          </p>
        </div>
      </section>

      {/* --- SECTION 5: EDUCATION PHILOSOPHY STATEMENT --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <GraduationCap className="mx-auto text-red-600 mb-6" size={50} />
        <h2 className="text-3xl md:text-5xl font-black text-[#0a1f44] leading-tight uppercase">
          Empowering The Leaders <br /> of <span className="text-red-600">Tomorrow</span>
        </h2>
        <p className="mt-8 text-xl text-slate-500 leading-relaxed font-medium">
          Aligned with the National Education Policy (NEP) 2020 principles, we epitomise 
          21st-century education. We acknowledge the paramount importance of adaptability 
          in navigating the complexities of today's dynamic world.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicsOverview;
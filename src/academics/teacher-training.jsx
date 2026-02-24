import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { GraduationCap, Users, BookOpen, Award, BarChart, RefreshCw, Star, ShieldCheck, Zap, Globe, Heart, Shield } from "lucide-react";

const TeacherTraining = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-widest text-red-500 uppercase bg-red-500/10 rounded-lg">
            Professional Development & Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter leading-tight">
            Empowering our <br /> <span className="text-red-600">Educators</span>
          </h1>
          <p className="max-w-4xl text-xl text-slate-400 leading-relaxed border-l-4 border-red-600 pl-6">
            Our Faculty Development Program (FDP) is a systematic initiative designed to enhance the 
            academic and intellectual environment of the Institute. We ensure that our teachers are 
            equipped with contemporary pedagogical tools, emotional intelligence, and the analytical 
            rigor required to mentor the leaders of tomorrow. By investing in our staff, we ensure 
            the highest standards of instruction for both our School and College wings.
          </p>
        </div>
      </section>

      {/* --- TRAINING PILLARS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase italic">The Four <span className="text-red-600">Pillars</span> of Growth</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Our training architecture is built on four fundamental quadrants that ensure a balanced approach to modern education.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group p-8 bg-slate-50 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <RefreshCw size={32} />
                </div>
                <h4 className="font-black text-[#0a1f44] uppercase mb-3">NEP 2020 Workshops</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Transitioning from rote learning to competency-based education through immersive workshops on the latest National Education Policy shifts and implementation strategies.</p>
            </div>
            <div className="group p-8 bg-slate-50 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <BarChart size={32} />
                </div>
                <h4 className="font-black text-[#0a1f44] uppercase mb-3">Continuous Assessment</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Training faculty in Formative and Summative assessment techniques, utilizing data analytics to track student progress and provide personalized remedial support.</p>
            </div>
            <div className="group p-8 bg-slate-50 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={32} />
                </div>
                <h4 className="font-black text-[#0a1f44] uppercase mb-3">Academic Ethics</h4>
                <p className="text-sm text-slate-500 italic leading-relaxed">Maintaining the highest levels of integrity in research, peer reviews, and thesis evaluation by aligning with global standards of institutional governance.</p>
            </div>
            <div className="group p-8 bg-slate-50 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl">
                <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <Star size={32} />
                </div>
                <h4 className="font-black text-[#0a1f44] uppercase mb-3">Mentorship Skills</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Grooming educators to act as mentors and life-coaches, focusing on communication, leadership, and the "Generosity of Spirit" central to our mission.</p>
            </div>
        </div>
      </section>

      {/* --- STRATEGIC TRAINING MODULES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-black text-[#0a1f44] uppercase italic mb-8">
                Curriculum <span className="text-green-600">Enhancement</span> Modules
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                As part of our commitment to global standards, our educators undergo semester-wise 
                training modules. These are designed by the Senate academic body to ensure that 
                classroom delivery matches the technological and social needs of the 21st century. 
                Our modules are updated annually to incorporate global best practices from top-tier 
                universities and research institutions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="p-8 bg-white rounded-[2.5rem] shadow-md border-b-8 border-red-600">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="text-red-600" size={20} />
                        <h5 className="font-black text-[#0a1f44] uppercase">Digital Literacy</h5>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">Mastering e-classrooms, multimedia libraries, and AI-integrated teaching tools. Teachers learn to create interactive digital content that resonates with modern learners.</p>
                 </div>
                 <div className="p-8 bg-white rounded-[2.5rem] shadow-md border-b-8 border-blue-600">
                    <div className="flex items-center gap-3 mb-4">
                        <Heart className="text-blue-600" size={20} />
                        <h5 className="font-black text-[#0a1f44] uppercase">Child Psychology</h5>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">Specialized training in identifying and supporting the emotional and social development of every child, ensuring a safe and inclusive learning environment.</p>
                 </div>
                 <div className="p-8 bg-white rounded-[2.5rem] shadow-md border-b-8 border-green-600">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="text-green-600" size={20} />
                        <h5 className="font-black text-[#0a1f44] uppercase">Subject Mastery</h5>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">Advanced deep-dives into core subjects led by industry experts. We foster analytical rigor in faculty so they can inspire higher-order thinking in students.</p>
                 </div>
                 <div className="p-8 bg-white rounded-[2.5rem] shadow-md border-b-8 border-yellow-600">
                    <div className="flex items-center gap-3 mb-4">
                        <Globe className="text-yellow-600" size={20} />
                        <h5 className="font-black text-[#0a1f44] uppercase">Global Peer Link</h5>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">Engaging in faculty exchange programs with international academic institutes, sharing research papers, and collaborating on co-operative global projects.</p>
                 </div>
              </div>
            </div>
            <div className="flex-1 relative">
                <div className="absolute -inset-4 bg-red-600/10 rounded-[4rem] rotate-3" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl z-10 h-[600px]">
                    <img 
                      src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg" 
                      className="w-full h-full object-cover" 
                      alt="Teacher Training Workshop"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0a1f44] to-transparent">
                        <p className="text-white font-black italic uppercase tracking-widest">In-House Training Session 2025</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FACULTY EXCHANGE & GUEST LECTURES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#0a1f44] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
            </div>
            
            <Users className="mx-auto text-red-600 mb-8 relative z-10" size={60} />
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic mb-8 relative z-10">
              Extra Mural <span className="text-red-600">Mentorship</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium italic max-w-4xl mx-auto relative z-10">
              "Our teachers are not just lecturers; they are facilitators of innovation. Through the 
              Extra Mural Lecture series, our faculty interacts with global examiners, industry experts, 
              and veteran academicians to refine their own horizons. This interaction ensures that 
              the knowledge passed to our students is both current and visionary."
            </p>
            <div className="mt-12 flex justify-center gap-4 relative z-10">
                <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">Industry Connect</div>
                <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">Faculty Exchange</div>
                <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">Peer Review</div>
            </div>
        </div>
      </section>

      {/* --- PHILOSOPHY FOOTER --- */}
      <section className="py-20 px-6 text-center">
         <Shield className="mx-auto text-green-600 mb-6" size={40} />
         <h3 className="text-2xl font-black text-[#0a1f44] uppercase mb-4">A Commitment to Quality</h3>
         <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed">
            Every faculty member at our institute is a student at heart. By maintaining a 
            <strong> 1:15 Teacher-to-Training ratio</strong>, we ensure that every educator 
            receives at least 100 hours of professional development annually.
         </p>
      </section>

      <Footer />
    </div>
  );
};

export default TeacherTraining;
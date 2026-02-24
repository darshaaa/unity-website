import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BookOpen, CheckCircle, Cpu, Globe, GraduationCap, Microscope, ShieldCheck, Laptop } from "lucide-react";

const ComprehensiveCurriculum = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#0a1f44] mb-8 uppercase italic tracking-tighter">
            Academic <span className="text-red-600">Framework</span>
          </h1>
          <p className="max-w-3xl text-xl text-slate-600 leading-relaxed border-l-4 border-green-600 pl-6">
            Aligned with the National Education Policy (NEP) 2020, our curriculum is designed to nurture 
            enlightened, responsible global citizens through rigorous analytical thinking and ingenuity.
            We integrate traditional values with 21st-century skills to prepare students for the complexities 
            of a dynamic world, ensuring they are not just learners, but future-ready leaders.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: THE SCHOOL PATHWAY (Nursery - Class XII) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase mb-6">School <span className="text-green-600">Education</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We focus on holistic development, providing a conducive environment where students 
              excel in communication, cultural awareness, and core academic strengths. Our schooling 
              system is divided into progressive stages that cater to the specific developmental 
              needs of every age group.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle className="text-green-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0a1f44]">Foundational & Primary (Nursery - Grade 5)</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Emphasis on early childhood education to lay the foundation for lifelong learning. 
                    We utilize play-way and activity-based learning to develop cognitive, motor, 
                    and social skills in a stress-free environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <Globe className="text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0a1f44]">English Fluency & Global Communication</h4>
                  <p className="text-slate-500 leading-relaxed">
                    An immersive English-only environment. From morning assemblies to inter-house 
                    debates, essay writing, and daily interactions, we ensure students gain the 
                    confidence to express themselves fluently on global platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <BookOpen className="text-red-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0a1f44]">Secondary & Senior Secondary (Grade 6 - 12)</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Transitioning to rigorous academic discipline with a focus on core subjects, 
                    laboratories, and competitive exam preparation while maintaining a balance 
                    with arts and physical education.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-slate-100 rounded-[3rem] h-[550px] overflow-hidden shadow-2xl">
             <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" className="w-full h-full object-cover" alt="Schooling" />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE COLLEGE & RESEARCH WING --- */}
      <section className="py-24 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic tracking-widest">Higher <span className="text-red-600">Education</span> & Research</h2>
            <p className="text-blue-100 mt-4 max-w-3xl mx-auto text-lg">
              Our higher education wing bridges the gap between theoretical knowledge and industry 
              application through rigorous analytical thinking and hands-on problem solving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all">
              <Microscope className="text-red-600 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">Academic Rigor & Structure</h3>
              <p className="text-slate-300 leading-relaxed">
                Programs are organized into a strict semester system. We guarantee a minimum of 
                seventy instructional days per term, ensuring deep subject immersion and 
                systematic coverage of advanced syllabi.
              </p>
            </div>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all">
              <GraduationCap className="text-green-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">Continuous Evaluation System</h3>
              <p className="text-slate-300 leading-relaxed">
                Assessment is a continuous process involving faculty-led internals and peer 
                reviews. Research work is evaluated by national and global examiners to 
                maintain international benchmarks of excellence.
              </p>
            </div>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all">
              <ShieldCheck className="text-blue-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">Academic Governance</h3>
              <p className="text-slate-300 leading-relaxed">
                Our ordinances and academic programs are strictly governed by the Senate—the 
                highest academic body—ensuring that our degrees and certifications carry 
                significant weight in the professional world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: INFRASTRUCTURE & TECH (FOR ALL) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">Campus <span className="text-green-600">Infrastructure</span></h2>
          <div className="w-20 h-1.5 bg-green-600 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Laptop className="text-red-600" />, 
              title: "Smart Classrooms", 
              desc: "Spacious, well-ventilated e-classrooms equipped with multimedia projection systems and ergonomic seating for enhanced focus." 
            },
            { 
              icon: <Cpu className="text-blue-600" />, 
              title: "Technology Integration", 
              desc: "A fully Wi-Fi-enabled campus supporting advanced computer labs and digital language labs for 21st-century skill acquisition." 
            },
            { 
              icon: <BookOpen className="text-green-600" />, 
              title: "Multimedia Library", 
              desc: "A state-of-the-art resource center housing vast physical and digital collections to support teaching, research, and independent study." 
            },
            { 
              icon: <ShieldCheck className="text-yellow-600" />, 
              title: "Specialized Activity Blocks", 
              desc: "Three distinct academic blocks designed for unhindered movement, featuring dedicated rooms for performing arts and specialized activities." 
            }
          ].map((item, idx) => (
            <div key={idx} className="text-center p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-[#0a1f44] mb-4 text-lg">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- EXTRA MURAL LECTURES SECTION (Added Depth) --- */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white rounded-full shadow-md mb-6">
                <GraduationCap className="text-[#0a1f44]" size={32} />
            </div>
            <h2 className="text-3xl font-black text-[#0a1f44] uppercase mb-6">Beyond the Classroom</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Academic studies are balanced with a vibrant co-curricular program and special 
                lectures under our <strong>Extra Mural Lecture series</strong>. We maintain 
                active academic relationships with international institutes for faculty exchange 
                programs, collaborative research, and sponsored industrial projects.
            </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComprehensiveCurriculum;
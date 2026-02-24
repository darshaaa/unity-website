import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  Trophy, 
  BookOpen, 
  Users, 
  Clock, 
  GraduationCap, 
  MapPin, 
  Target, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

const QuickFacts = () => {
  // Simplified school-focused statistics
  const stats = [
    { 
      icon: <Users size={32} />, 
      label: "Student Community", 
      value: "1,500+" 
    },
    { 
      icon: <Trophy size={32} />, 
      label: "Years of Legacy", 
      value: "5+" 
    },
    { 
      icon: <CheckCircle2 size={32} />, 
      label: "Academic Results", 
      value: "100%" 
    },
    { 
      icon: <GraduationCap size={32} />, 
      label: "Expert Teachers", 
      value: "50+" 
    },
  ];

  const overviewData = [
    { title: "Education Philosophy", content: "Aligned with the National Education Policy (NEP) 2020 principles, Unity Society epitomises 21st-century education. We strongly emphasise early childhood education, recognizing its critical role in laying the foundation for lifelong learning." },
    { title: "English Fluency", content: "Cultivating English fluency is central to our educational approach. We believe in providing an immersive English-only environment where students constantly engage in activities that enhance their communication skills from morning assemblies to debates." },
    { title: "Infrastructure", content: "Spread across three academic blocks, our campus boasts spacious and well-ventilated classrooms. Activity rooms facilitate unhindered movement for teachers and students, enhancing the learning experience." },
    { title: "Technological Integration", content: "The school leverages technology with a Wi-Fi-enabled campus, e-classrooms, multimedia library, language labs, and computer labs equipped with the latest resources." },
    { title: "Cross-Cultural Environment", content: "Unity Society actively embraces the rich tapestry of India's diverse cultural landscape. We foster a vibrant cross-cultural environment by enthusiastically celebrating festivals from various religions." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Campus" />
        <div className="absolute inset-0 bg-[#0a1f44]/90" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
            Quick <span className="text-red-600">Facts</span>
          </h1>
          <div className="w-20 h-1.5 bg-red-600 mx-auto my-6 rounded-full" />
          <p className="text-blue-200 uppercase tracking-[0.4em] font-bold text-xs">Unity Society at a Glance</p>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] text-center border-b-4 border-red-600 shadow-xl hover:-translate-y-2 transition-all">
              <div className="text-red-600 flex justify-center mb-4">{stat.icon}</div>
              <div className="text-[#0a1f44] text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INSTITUTIONAL OVERVIEW */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="flex-1 space-y-12">
              {overviewData.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-1 h-8 bg-green-600 rounded-full group-hover:bg-red-600 transition-colors mt-1" />
                    <h3 className="text-[#0a1f44] text-2xl font-black tracking-tight uppercase">
                      {item.title}:
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg pl-5 max-w-3xl">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[450px] shrink-0">
              <div className="sticky top-32">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                  <img 
                    src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg" 
                    className="w-full h-[400px] object-cover" 
                    alt="School Building" 
                  />
                </div>
                <div className="mt-8 bg-[#0a1f44] p-8 rounded-3xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-red-600" />
                    <h4 className="font-black uppercase tracking-widest text-sm">Our Goal</h4>
                  </div>
                  <p className="italic text-blue-100 font-medium">
                    "To prepare our students to meet the future with skill, confidence, clarity of thought, and generosity of spirit."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     {/* 4. KEY PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#0a1f44] rounded-2xl flex items-center justify-center text-white">
              <Target size={32} />
            </div>
            <h3 className="text-[#0a1f44] text-xl font-black uppercase">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed">To nurture future leaders through a fusion of traditional moral values and modern technological literacy.</p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white">
              <Clock size={32} />
            </div>
            <h3 className="text-[#0a1f44] text-xl font-black uppercase">School Hours</h3>
            <p className="text-slate-500 leading-relaxed">Primary: 8:30 AM - 2:30 PM <br /> College: 8:00 AM - 3:30 PM <br /> Saturday: 8:30 AM - 12:30 PM</p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-[#0a1f44] text-xl font-black uppercase">Safety First</h3>
            <p className="text-slate-500 leading-relaxed">Unity Society is a 100% smoke-free and plastic-free campus with advanced emergency protocols.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuickFacts;

      
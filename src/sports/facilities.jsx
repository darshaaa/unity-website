import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  BookOpen, 
  Cpu, 
  Bus, 
  Shield, 
  HeartPulse, 
  Trophy, 
  Layout, 
  ArrowRight,
  Globe
} from "lucide-react";

const Facilities = () => {
  const facilityList = [
    {
      title: "Smart Classrooms",
      desc: "Interactive learning environments with high-end projection and audio.",
      link: "/classrooms",
      icon: <Layout className="text-blue-600" />,
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
    },
    {
      title: "Sports Arena",
      desc: "Olympic-standard tracks, turf pitches, and multi-sport courts.",
      link: "/ground",
      icon: <Trophy className="text-green-600" />,
      img: "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80"
    },
    {
      title: "IT & Innovation",
      desc: "Gigabit-powered labs with 64-bit architecture for AI and coding.",
      link: "/it-innovation",
      icon: <Cpu className="text-purple-600" />,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    },
    {
      title: "Knowledge Repository",
      desc: "50,000+ volumes and 24/7 access to digital research databases.",
      link: "/library",
      icon: <BookOpen className="text-red-600" />,
      img: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg"
    },
    {
      title: "Safe Transit",
      desc: "Air-conditioned fleet covering a 30km radius with trained staff.",
      link: "/transportation",
      icon: <Bus className="text-yellow-600" />,
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
    },
    {
      title: "Health & Wellness",
      desc: "Full-time nursing care and isolation wards for student safety.",
      link: "/sick-bay",
      icon: <HeartPulse className="text-pink-600" />,
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
    },
    {
      title: "Security & Vigilance",
      desc: "3-tier security protocol with 500+ AI-enabled IP cameras.",
      link: "/security",
      icon: <Shield className="text-slate-900" />,
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">
            World Class <span className="text-blue-500">Facilities</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            Explore the ecosystem built to support every dimension of a student’s 
            academic, athletic, and personal journey.
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
      </section>

      {/* --- FACILITIES GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityList.map((facility, index) => (
            <Link 
              to={facility.link} 
              key={index} 
              className="group relative bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                  {facility.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#0a1f44] uppercase mb-3 italic tracking-tight">
                  {facility.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {facility.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:gap-4 transition-all">
                  Explore Details <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- CAMPUS ECOSYSTEM SUMMARY --- */}
      <section className="mb-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase italic mb-6 leading-tight">
              An Integrated <br /><span className="text-blue-600">Learning Environment</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our campus isn't just a collection of buildings; it is a meticulously 
              designed ecosystem. Every facility is connected by high-speed fiber 
              optics and guarded by a 24/7 professional security network.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-blue-600">50+</span>
                <span className="text-[10px] uppercase font-black text-slate-400">Acres Campus</span>
              </div>
              <div className="w-px h-10 bg-slate-200 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-blue-600">20+</span>
                <span className="text-[10px] uppercase font-black text-slate-400">Tech Labs</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm">
              <Globe className="text-blue-500 mb-4" size={32} />
              <p className="text-xs font-bold uppercase text-slate-400">Green Campus</p>
            </div>
            <div className="aspect-square bg-[#0a1f44] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white shadow-xl">
              <Shield className="text-red-500 mb-4" size={32} />
              <p className="text-xs font-bold uppercase text-blue-100">Safe Zone</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
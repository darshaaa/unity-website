import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Book, Globe, Search, Database, Award, FileText, Bookmark, Coffee, Lightbulb } from "lucide-react";

const Library = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg" 
            className="w-full h-full object-cover" 
            alt="Main Institutional Library"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-24">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-white uppercase bg-red-600 rounded-lg shadow-lg">
              50,000+ Resource Volumes
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              The Intellectual <span className="text-blue-400">Hub</span>
            </h2>
          </div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#0a1f44] mb-8 uppercase italic tracking-tighter">
            Knowledge <span className="text-red-600">Repository</span>
          </h1>
          <p className="max-w-3xl text-xl text-slate-600 border-l-4 border-red-600 pl-6 leading-relaxed">
            Spanning multiple floors, our library is the heartbeat of the institution. 
            From tactile printed classics to vast digital databases, we provide the 
            tools for both early literacy and high-level academic research.
          </p>
        </div>
      </section>

      {/* --- GALLERY & SPECIALITIES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Study Carrels" />
            <img src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Book Stacks" />
            <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" className="rounded-[2rem] h-64 w-full object-cover shadow-lg" alt="Digital Catalog" />
            <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg" className="rounded-[2rem] h-64 w-full object-cover mt-8 shadow-lg" alt="Reading Room" />
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#0a1f44] uppercase mb-8 leading-tight italic">
              Library <span className="text-red-600">Specialisations</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-blue-600 hover:bg-white hover:shadow-xl transition-all group">
                <Bookmark className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">The Junior Wing</h4>
                  <p className="text-sm text-slate-500 mt-1">A vibrant, cushion-filled space designed to foster a love for reading in younger students through storytelling sessions.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-red-600 hover:bg-white hover:shadow-xl transition-all group">
                <Search className="text-red-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Advanced OPAC</h4>
                  <p className="text-sm text-slate-500 mt-1">Our Cloud-based Online Public Access Catalog allows students to reserve books and track availability from any mobile device.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border-l-4 border-green-600 hover:bg-white hover:shadow-xl transition-all group">
                <Coffee className="text-green-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase">Collaborative Zone</h4>
                  <p className="text-sm text-slate-500 mt-1">A separate, sound-insulated lounge where students can engage in group discussions and project brainstorming sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CORE FEATURES GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           {[
             { icon: <Database />, title: "Digital Access", text: "Global subscriptions to JSTOR, IEEE, and Nature for college-level research." },
             { icon: <Book />, title: "RFID Circulation", text: "Automated tracking for lightning-fast checkouts and zero-error inventory." },
             { icon: <Globe />, title: "24/7 E-Catalog", text: "Access thousands of journals and e-books through our private student portal." },
             { icon: <Award />, title: "Rare Archives", text: "A climate-controlled wing housing rare manuscripts and institutional history." }
           ].map((item, i) => (
             <div key={i} className="p-8 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all group border-b-4 border-transparent hover:border-red-600">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-black text-[#0a1f44] uppercase mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;
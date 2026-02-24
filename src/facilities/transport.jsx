import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Bus, MapPin, ShieldCheck, Clock, Phone, Users, CheckCircle2, Navigation } from "lucide-react";

const Transportation = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION WITH RELIABLE IMAGE --- */}
      <section className="pt-20">
        <div className="w-full h-[60vh] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Institutional Transportation Fleet"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-12 left-6 md:left-24 text-white">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest uppercase bg-yellow-500 text-slate-900 rounded-lg shadow-lg">
              Reliable Daily Transit
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter">
              The <span className="text-yellow-500">Commute</span>
            </h2>
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-black text-[#0a1f44] mb-6 uppercase italic">
              Safety in <span className="text-yellow-600">Motion</span>
            </h1>
            <p className="text-xl text-slate-600 border-l-4 border-yellow-500 pl-6 leading-relaxed">
              Our transportation network is built on the pillars of punctuality and protection. 
              We operate a massive fleet of modern vehicles that undergo rigorous weekly safety 
              inspections to ensure a worry-free journey for every student, from primary to college levels.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-3xl shadow-sm border-t-4 border-yellow-500">
                <h3 className="text-3xl font-black text-[#0a1f44]">30+</h3>
                <p className="text-xs uppercase font-bold text-slate-400">Fixed Routes</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-sm border-t-4 border-blue-600">
                <h3 className="text-3xl font-black text-[#0a1f44]">100%</h3>
                <p className="text-xs uppercase font-bold text-slate-400">AC Fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILED SAFETY PROTOCOLS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">Rigorous <span className="text-yellow-600">Standards</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">Beyond just a ride—we provide a secure environment managed by professionals.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all">
            <ShieldCheck className="text-yellow-600 mb-6" size={48} />
            <h4 className="text-xl font-black text-[#0a1f44] uppercase mb-4">Certified Personnel</h4>
            <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600" /> Drivers with 10+ years experience</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600" /> Mandatory female bus attendants</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600" /> Background-verified staff</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-t-8 border-yellow-500">
            <Navigation className="text-yellow-600 mb-6" size={48} />
            <h4 className="text-xl font-black text-[#0a1f44] uppercase mb-4">Route Optimization</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
                Our routes are strategically mapped to ensure that no student spends more than 45 minutes 
                in transit. We utilize dedicated transport nodes to keep movement efficient and on-time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all">
            <Clock className="text-yellow-600 mb-6" size={48} />
            <h4 className="text-xl font-black text-[#0a1f44] uppercase mb-4">Maintenance Hub</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
                We maintain an in-house workshop where every bus undergoes a 20-point safety check 
                every weekend, including braking systems, speed governors, and emergency exits.
            </p>
          </div>
        </div>

        {/* --- ROUTE COVERAGE CALLOUT --- */}
        <div className="mt-20 bg-[#0a1f44] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-black uppercase italic mb-6">Regional <span className="text-yellow-500">Reach</span></h2>
                    <p className="text-blue-100 text-lg leading-relaxed">
                        Our service extends across the city and neighboring districts. 
                        To request a new stop or check availability in your sector, 
                        please contact our Transport Helpdesk.
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                        <Phone className="text-yellow-500" />
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-blue-300">Transport Helpline</p>
                            <p className="text-xl font-black">+91 000-000-0000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transportation;
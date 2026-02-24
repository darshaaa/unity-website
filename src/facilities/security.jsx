import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Shield, Eye, Lock, Fingerprint, UserCheck, HardDrive, ShieldAlert, Radio, BellRing } from "lucide-react";

const Security = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- BIG TOP HEADER PHOTO --- */}
      <section className="pt-20">
        <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Advanced Surveillance Systems"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] via-[#0a1f44]/40 to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-24">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-widest text-white uppercase bg-blue-600 rounded-lg shadow-lg">
              24/7 Command Center
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Absolute <span className="text-blue-500">Vigilance</span>
            </h2>
          </div>
        </div>
      </section>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 bg-[#0a1f44] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter">
            Safe <span className="text-red-600">Campus</span>
          </h1>
          <p className="max-w-3xl text-xl text-blue-100 border-l-4 border-red-600 pl-6 leading-relaxed">
            Safety is not a feature; it is our foundation. We maintain a "Zero-Blindspot" 
            infrastructure through a 3-tier security protocol that integrates elite 
            physical guarding with next-generation AI surveillance.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 skew-x-12" />
      </section>

      {/* --- PROTOCOLS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0a1f44] uppercase">Our 3-Tier <span className="text-red-600">Defense</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">Overlapping security layers ensuring a secure learning environment.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Tier 1 */}
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-blue-600 group">
            <Fingerprint className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h4 className="text-xl font-black text-[#0a1f44] uppercase mb-4 italic">Tier 1: Access</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Every entry point is restricted by biometric scanners and RFID smart-cards. 
              Unauthorized access is physically impossible through our gated perimeter.
            </p>
          </div>

          {/* Tier 2 */}
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-red-600 group">
            <Eye className="text-red-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h4 className="text-xl font-black text-[#0a1f44] uppercase mb-4 italic">Tier 2: IP Vision</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              500+ HD IP cameras with night-vision capabilities monitor every corridor, 
              classroom, and blind spot, feeding directly into our Central Command.
            </p>
          </div>

          {/* Tier 3 */}
          <div className="p-10 bg-slate-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-slate-900 group">
            <UserCheck className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h4 className="text-xl font-black text-[#0a1f44] uppercase mb-4 italic">Tier 3: Personnel</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Uniformed security marshals patrol the campus 24/7. Our staff is trained 
              in emergency evacuation, fire safety, and basic first aid.
            </p>
          </div>
        </div>

        {/* --- VISITOR & TECH DETAILS --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[4rem] shadow-2xl" 
              alt="Security Monitoring" 
            />
           
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-black text-[#0a1f44] uppercase italic">The Digital <span className="text-blue-600">Shield</span></h3>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <HardDrive size={24} />
              </div>
              <div>
                <h5 className="font-bold text-[#0a1f44] uppercase text-sm">30-Day Video Backup</h5>
                <p className="text-slate-500 text-sm mt-1">All surveillance footage is encrypted and stored on our private cloud for legal and safety audits.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                <Radio size={24} />
              </div>
              <div>
                <h5 className="font-bold text-[#0a1f44] uppercase text-sm">VHF Communication</h5>
                <p className="text-slate-500 text-sm mt-1">Marshals use a dedicated radio frequency for lag-free communication across the 50-acre campus.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h5 className="font-bold text-[#0a1f44] uppercase text-sm">Visitor Management (VMS)</h5>
                <p className="text-slate-500 text-sm mt-1">Digital logs for every visitor, including photo ID capture and automatic SMS alerts to the concerned department.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CALLOUT --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
         <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">A Trusted <span className="text-blue-500">Sanctuary</span></h2>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10">
              We understand that peace of mind is essential for academic excellence. 
              Our security systems are audited quarterly by external safety consultants.
            </p>
            <div className="flex justify-center gap-8 border-t border-white/10 pt-10">
               <div>
                  <p className="text-2xl font-black">500+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Smart Cameras</p>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Gated Perimeter</p>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div>
                  <p className="text-2xl font-black">24/7</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Active Patrol</p>
               </div>
            </div>
         </div>
      </div>

      <Footer />
    </div>
  );
};

export default Security;
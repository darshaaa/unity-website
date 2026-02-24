import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Calendar as CalendarIcon, Clock, MapPin, Info, ChevronRight, Download, Printer, Filter } from "lucide-react";

const AcademicCalendar = () => {
  const events = [
    { date: "April 01", event: "New Academic Session Begins (School)", type: "General", color: "bg-blue-600" },
    { date: "June 15", event: "Semester Registration Starts (College)", type: "Academic", color: "bg-red-600" },
    { date: "Aug 15", event: "Independence Day Celebration", type: "Holiday", color: "bg-green-600" },
    { date: "Sept 10-25", event: "Mid-Term Assessment / Sessional Exams", type: "Examination", color: "bg-yellow-500" },
    { date: "Oct 20-30", event: "Autumn Break / Diwali Vacation", type: "Holiday", color: "bg-green-600" },
    { date: "Dec 05-20", event: "End-Semester Examinations (Phase I)", type: "Examination", color: "bg-yellow-500" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <CalendarIcon className="text-red-600" />
                <span className="uppercase tracking-[0.3em] font-bold text-sm text-blue-300">Session 2025-2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Academic <br /> <span className="text-red-600">Calendar</span>
              </h1>
              <p className="mt-8 text-xl text-blue-100 leading-relaxed border-l-4 border-green-600 pl-6">
                A comprehensive roadmap of the academic year, including <strong>70+ instructional days per semester</strong>, 
                scheduled assessments, cultural festivities, and administrative milestones.
              </p>
            </div>
            <div className="flex gap-4">
               <button className="flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all font-bold uppercase text-xs tracking-widest">
                  <Download size={18} /> PDF Version
               </button>
               <button className="flex items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 rounded-2xl transition-all font-bold uppercase text-xs tracking-widest shadow-lg">
                  <Printer size={18} /> Print
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALENDAR BODY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT: LEGEND & INFO */}
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-xl font-black text-[#0a1f44] uppercase mb-6 flex items-center gap-2">
                <Filter size={20} className="text-red-600" /> Legend
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  <span className="text-sm font-bold text-slate-600">General Openings</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-red-600" />
                  <span className="text-sm font-bold text-slate-600">Academic Deadlines</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-green-600" />
                  <span className="text-sm font-bold text-slate-600">Holidays / Breaks</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-yellow-500" />
                  <span className="text-sm font-bold text-slate-600">Examinations</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-green-600 rounded-[2.5rem] text-white shadow-xl">
              <Info className="mb-4" />
              <h4 className="text-lg font-black uppercase mb-2">Note to Students</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                Adherence to the semester schedule is mandatory. Any changes due to unforeseen 
                circumstances will be notified via the <strong>Official Circulars</strong> portal.
              </p>
            </div>
          </div>

          {/* RIGHT: TIMELINE VIEW */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {events.map((item, idx) => (
                <div key={idx} className="group relative flex items-center gap-8 p-8 bg-white hover:bg-slate-50 border border-slate-100 rounded-[2.5rem] transition-all hover:shadow-lg">
                  <div className="flex flex-col items-center justify-center min-w-[100px] text-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Date</span>
                    <span className="text-xl font-black text-[#0a1f44]">{item.date.split(' ')[0]}</span>
                    <span className="text-sm font-bold text-red-600">{item.date.split(' ')[1]}</span>
                  </div>
                  
                  <div className="h-12 w-[2px] bg-slate-100 group-hover:bg-red-200" />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.type}</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#0a1f44] group-hover:text-red-600 transition-colors">{item.event}</h4>
                  </div>

                  <ChevronRight className="text-slate-200 group-hover:text-red-600 transition-all" />
                </div>
              ))}
            </div>

            {/* UPCOMING DEADLINES CARD */}
            <div className="mt-12 p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic mb-2">Examination <span className="text-red-600">Notice</span></h3>
                        <p className="text-slate-400 text-sm">Admit cards for the upcoming Mid-Term Assessment will be available 7 days prior.</p>
                    </div>
                    <button className="px-8 py-4 bg-white text-[#0a1f44] font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-all">
                        View Exam Portal
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full -mr-16 -mt-16" />
            </div>
          </div>
        </div>
      </section>

      {/* --- ATTENDANCE POLICY SECTION --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
             <div className="flex gap-4">
                <Clock className="text-red-600 shrink-0" />
                <div>
                   <h5 className="font-black text-[#0a1f44] uppercase mb-2">School Timings</h5>
                   <p className="text-sm text-slate-500">Mon - Fri: 08:00 AM - 02:30 PM<br/>Sat: 08:00 AM - 12:30 PM</p>
                </div>
             </div>
             <div className="flex gap-4">
                <Clock className="text-blue-600 shrink-0" />
                <div>
                   <h5 className="font-black text-[#0a1f44] uppercase mb-2">College Timings</h5>
                   <p className="text-sm text-slate-500">Mon - Sat: 09:00 AM - 04:00 PM<br/>(Second Saturdays are Holidays)</p>
                </div>
             </div>
             <div className="flex gap-4">
                <MapPin className="text-green-600 shrink-0" />
                <div>
                   <h5 className="font-black text-[#0a1f44] uppercase mb-2">Academic Venues</h5>
                   <p className="text-sm text-slate-500">All assessments take place in the respective Academic Blocks I, II, and III.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicCalendar;
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Bell, Download, Calendar, Search, Megaphone, Edit3, Trash2, Plus } from "lucide-react";

const CircularsPage = () => {
  const circulars = [
    {
      date: "Oct 24, 2025",
      title: "Revised Semester Examination Schedule - Autumn 2025",
      category: "College",
      tag: "Urgent",
      color: "text-red-600 bg-red-50"
    },
    {
      date: "Oct 20, 2025",
      title: "Annual Sports Meet & Inter-House Athletics Registration",
      category: "School",
      tag: "Activity",
      color: "text-green-600 bg-green-50"
    },
    {
      date: "Oct 15, 2025",
      title: "Advisory on National Education Policy (NEP 2020) Integration",
      category: "Academic",
      tag: "Official",
      color: "text-blue-600 bg-blue-50"
    },
    {
      date: "Oct 10, 2025",
      title: "Extra Mural Lecture Series: Guest Speaker from IIT Madras",
      category: "College",
      tag: "Event",
      color: "text-purple-600 bg-purple-50"
    },
    {
      date: "Oct 05, 2025",
      title: "Winter Uniform Specifications and Procurement Notice",
      category: "School",
      tag: "General",
      color: "text-slate-600 bg-slate-50"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Megaphone className="text-red-500" />
                <span className="uppercase tracking-[0.3em] font-bold text-sm text-blue-300">Admin Control Panel</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Manage <br /> <span className="text-red-600">Circulars</span>
              </h1>
              <p className="mt-8 text-xl text-blue-100 leading-relaxed border-l-4 border-green-600 pl-6">
                Update, edit, or remove institutional notifications. Ensure all academic 
                and administrative data remains current for students and faculty.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-96">
                <button className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 rounded-2xl transition-all shadow-lg">
                    <Plus size={20} /> Add New Circular
                </button>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search records..." 
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
                    />
                    <Search className="absolute right-6 top-4 text-white/40" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CIRCULARS MANAGEMENT TABLE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-8 text-[#0a1f44] font-black uppercase tracking-widest text-sm">Release Date</th>
                  <th className="p-8 text-[#0a1f44] font-black uppercase tracking-widest text-sm">Circular Title</th>
                  <th className="p-8 text-[#0a1f44] font-black uppercase tracking-widest text-sm">Category</th>
                  <th className="p-8 text-[#0a1f44] font-black uppercase tracking-widest text-sm text-center">Management</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {circulars.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-8">
                      <div className="flex items-center gap-3 text-slate-500 font-bold">
                        <Calendar size={18} className="text-red-600" />
                        {item.date}
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex flex-col gap-2">
                        <span className={`inline-block w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.color}`}>
                          {item.tag}
                        </span>
                        <h4 className="text-lg font-bold text-[#0a1f44]">
                          {item.title}
                        </h4>
                      </div>
                    </td>
                    <td className="p-8">
                      <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">{item.category}</span>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center justify-center gap-3">
                        {/* VIEW/DOWNLOAD */}
                        <button title="Download" className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                          <Download size={18} />
                        </button>
                        {/* EDIT */}
                        <button title="Edit" className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all">
                          <Edit3 size={18} />
                        </button>
                        {/* DELETE */}
                        <button title="Delete" className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* INFO BOX */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-between p-10 bg-green-50 rounded-[2.5rem] border border-green-100">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Bell size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#0a1f44]">Archive Access</h3>
              <p className="text-slate-600">Looking for older notifications? Contact the Registrar's office for the full academic archive.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-[#0a1f44] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-xl">
            View Archived Circulars
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CircularsPage;

        {/* INFO BOX */}
        {/* <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-between p-10 bg-green-50 rounded-[2.5rem] border border-green-100">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Bell size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#0a1f44]">Archive Access</h3>
              <p className="text-slate-600">Looking for older notifications? Contact the Registrar's office for the full academic archive.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-[#0a1f44] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-xl">
            View Archived Circulars
          </button>
        </div> */}
      
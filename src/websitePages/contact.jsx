import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-[#0a1f44] py-16 md:py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <nav className="flex justify-center items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Link
                to="/"
                className="opacity-60 hover:opacity-100 hover:text-white transition"
              >
                Home
              </Link>
              <ChevronRight size={12} />
              <span>Contact</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
              Connect With <span className="text-red-600">Us</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Get in touch with Unity International School & College for
              admissions, inquiries, or support.
            </p>
          </div>
        </section>

        {/* GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 -mt-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl rounded-[2rem] overflow-hidden bg-white border border-slate-100">
            {/* CONTACT INFO */}
            <div className="bg-slate-50 p-10 lg:p-12 border-r border-slate-100">
              <h2 className="text-2xl font-black text-[#0a1f44] uppercase mb-8">
                Reach Us
              </h2>

              <div className="space-y-10">
                <div className="flex gap-4">
                  <MapPin className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                      Campus Address
                    </h4>
                    <p className="text-slate-700 font-bold leading-snug">
                      Nanjangud, Mysuru District, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                      Call Us
                    </h4>
                    <p className="text-slate-700 font-bold">+91 XXXXX XXXXX</p>
                    <p className="text-slate-700 font-bold">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                      Email Support
                    </h4>
                    <p className="text-slate-700 font-bold">
                      info@unityinternationalschool.com
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3 text-[#0a1f44]">
                    <Clock size={20} className="text-red-600" />
                    <div>
                      <p className="text-xs font-bold uppercase">
                        Office Hours
                      </p>
                      <p className="text-sm text-slate-500 font-medium">
                        Mon - Fri: 8:30 AM – 4:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2 p-10 lg:p-16">
              <h2 className="text-2xl font-black text-[#0a1f44] uppercase mb-8">
                Quick Inquiry
              </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-slate-100 py-3 focus:border-red-600 outline-none transition-colors text-slate-700 font-bold placeholder:text-slate-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-slate-100 py-3 focus:border-red-600 outline-none transition-colors text-slate-700 font-bold placeholder:text-slate-300"
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                    How can we help?
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border-2 border-slate-50 bg-slate-50 rounded-xl p-4 focus:bg-white focus:border-red-600 outline-none transition-all text-slate-700 font-bold"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button className="bg-[#0a1f44] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all flex items-center gap-3 shadow-lg hover:shadow-red-200">
                    Send Message <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="rounded-[2rem] overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border border-slate-100 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=nanjangud&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px]"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;

import React from "react";
import {
  Bell,
  Calendar,
  FileText,
  ArrowUpRight,
  Clock,
  ChevronRight,
} from "lucide-react";

const HomeContent = () => {
  const latestUpdates = [
    {
      text: "SCHEDULE FOR PRE-BOARD EXAMINATIONS (CLASSES X & XII) — 2025-26",
      link: "#",
      isNew: true,
    },
    {
      text: "SCHEDULE FOR PERIODIC TEST II (VI TO VIII) AND PT-III (IX) — 2025-26",
      link: "#",
      isNew: true,
    },
    {
      text: "SCHEDULE FOR UNIT TEST-II (CLASSES III TO V) — 2025-26",
      link: "#",
      isNew: false,
    },
    {
      text: "SCHEDULE FOR CYCLE ASSESSMENT-III (PRE-NURSERY TO II) — 2025-26",
      link: "#",
      isNew: false,
    },
    {
      text: "Datesheet of the Senior School Certificate Examination — 2026 (Class XII)",
      link: "#",
      isNew: false,
    },
  ];

  const circulars = [
    {
      date: "17",
      month: "OCT",
      year: "2025",
      title: "PARENTAL CIRCULAR (DPSG/013/2025-26)",
      isNew: true,
    },
    {
      date: "20",
      month: "SEP",
      year: "2025",
      title: "PARENTAL CIRCULAR (DPSG/012/2025-26) - Durga Puja Assembly",
      isNew: true,
    },
    {
      date: "26",
      month: "AUG",
      year: "2025",
      title: "PARENTAL CIRCULAR (DPSG/011/2025-26) - Ganesh Chaturthi",
      isNew: false,
    },
    {
      date: "20",
      month: "AUG",
      year: "2025",
      title: "PARENTAL CIRCULAR (DPSG/010/2025-26) - Inter House Sports",
      isNew: false,
    },
    {
      date: "15",
      month: "AUG",
      year: "2025",
      title: "Independence Day Celebration Circular",
      isNew: false,
    },
    {
      date: "10",
      month: "AUG",
      year: "2025",
      title: "Monsoon Break Guidelines for Students",
      isNew: false,
    },
  ];

  const events = [
    {
      title: "Maha Shivratri",
      date: "15",
      month: "FEB",
      img: "https://images.pexels.com/photos/4595295/pexels-photo-4595295.jpeg",
      desc: "Special assembly and cultural program.",
    },
    {
      title: "Holi Celebration",
      date: "04",
      month: "MAR",
      img: "https://images.pexels.com/photos/2041707/pexels-photo-2041707.jpeg",
      desc: "Festival of colors with traditional music.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 font-sans text-slate-800 bg-[#fdfdfd]">
      {/* SECTION 1: HERO CONTENT */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Left: Content Area */}
        <div className="lg:w-2/3">
          <div className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase mb-4">
            Excellence in Education
          </div>

          <h2 className="text-[#0a1f44] text-4xl md:text-5xl font-black mb-8 leading-tight">
            Shaping Bright Minds, <br />
            <span className="text-red-600">Building Strong Futures.</span>
          </h2>

          <div className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 mb-10 overflow-hidden">
            <p className="relative z-10 text-lg md:text-xl italic text-slate-600 leading-relaxed pl-4 border-l-4 border-amber-600">
              “Education is not just about learning facts, but about developing
              wisdom, character, and confidence.
              <span className="font-bold text-[#0a1f44] not-italic">
                {" "}
                Knowledge with values is the foundation of true success.”
              </span>
            </p>
          </div>

          <div className="space-y-6 text-base md:text-[17px] leading-relaxed text-slate-500 text-justify font-medium">
            <p>
              Guided by a commitment to academic excellence and holistic
              development,{" "}
              <span className="font-bold text-[#0a1f44]">
                Unity International School
              </span>{" "}
              strives to nurture young minds with strong values, creativity, and
              leadership qualities. We provide a dynamic learning environment
              that encourages curiosity, innovation, and confidence in every
              student.
            </p>

            <p>
              With a balanced approach to academics, co-curricular activities,
              and life skills, we prepare students to excel in a rapidly
              changing world while instilling discipline, integrity, and respect
              for society.
            </p>
          </div>
        </div>

        {/* Right: Updates Ticker (STOPS ON HOVER) */}
        <div className="lg:w-1/3">
          <div className="bg-[#0a1f44] rounded-[2rem] shadow-2xl h-[450px] flex flex-col overflow-hidden relative border-4 border-white">
            <div className="px-8 py-6 bg-[#0a1f44] flex justify-between items-center z-20">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Bell size={16} className="text-blue-400" /> Updates
              </h3>
            </div>

            <div className="flex-1 overflow-hidden relative group">
              <div className="animate-verticalTicker py-4 hover:pause-ticker">
                {[...latestUpdates, ...latestUpdates].map((update, i) => (
                  <div
                    key={i}
                    className="mx-4 mb-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group/item flex flex-col gap-2"
                  >
                    <p className="text-[13px] font-semibold text-blue-50 leading-snug group-hover/item:text-blue-300 uppercase italic">
                      {update.text}
                    </p>
                    {update.isNew && (
                      <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded w-fit">
                        NEW
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: EVENTS & CIRCULARS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Upcoming Events Design */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-black text-slate-900 uppercase">
            Upcoming <span className="text-red-600">Events</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lg border-4 border-white"
              >
                <img
                  src={ev.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-6 left-6 bg-white rounded-2xl p-3 flex flex-col items-center shadow-xl">
                  <span className="text-2xl font-black text-[#0a1f44] leading-none">
                    {ev.date}
                  </span>
                  <span className="text-[10px] font-black text-red-600">
                    {ev.month}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl font-black text-white mb-2">
                    {ev.title}
                  </h4>
                  <p className="text-white/70 text-sm font-medium line-clamp-1">
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Circulars Section (MANUAL SIDE SCROLLER) */}
        <div className="space-y-8">
          <h2 className="text-3xl font-black text-slate-900 uppercase">
            Circulars
          </h2>
          <div className="bg-slate-50 rounded-[2rem] h-[400px] overflow-y-auto custom-scrollbar relative border border-slate-100 p-4">
            {circulars.map((item, i) => (
              <div
                key={i}
                className="mb-4 flex bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-[#0a1f44] transition-all group/card cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-[#0a1f44] text-white shrink-0">
                  <span className="text-lg font-black leading-none">
                    {item.date}
                  </span>
                  <span className="text-[8px] font-bold opacity-70">
                    {item.month}
                  </span>
                </div>
                <div className="pl-4 overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-700 leading-tight group-hover/card:text-[#0a1f44] uppercase truncate">
                    {item.title}
                  </p>
                  <span className="text-[9px] text-red-600 font-black mt-2 block uppercase">
                    Download PDF →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes verticalTicker {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-verticalTicker {
          animation: verticalTicker 20s linear infinite;
        }

        .pause-ticker {
          animation-play-state: paused !important;
        }

        /* Custom Scrollbar for Circulars */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0a1f44;
        }
      `}</style>
    </div>
  );
};

export default HomeContent;

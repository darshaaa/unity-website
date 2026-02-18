import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ExternalLink,
  PhoneCall,
  GraduationCap,
  BookOpen,
  School,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Users,
  Globe,
} from "lucide-react";

const HomeSections = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const scrollRef = useRef(null);

  const cards = [
    {
      title: "Admission @ Unity International School",
      icon: <GraduationCap className="w-6 h-6" />,
      img: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
      desc: "Admissions are open for classes Pre-Nursery to IX. We produce students excellent in academics and ethical values.",
      link: "/procedure",
      color: "border-green-500",
    },
    {
      title: "Comprehensive Curriculum",
      icon: <BookOpen className="w-6 h-6" />,
      img: "https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg",
      desc: "Our curriculum supports natural development where teachers act as facilitators for lifelong learning.",
      link: "/curriculum",
      color: "border-blue-500",
    },
    {
      title: "Spacious Facilities",
      icon: <School className="w-6 h-6" />,
      img: "https://images.pexels.com/photos/8926446/pexels-photo-8926446.jpeg",
      desc: "Large airy classrooms and varied activity zones designed for children to spread their wings.",
      link: "/facilities",
      color: "border-amber-500",
    },
    {
      title: "Sports Excellence",
      icon: <Trophy className="w-6 h-6" />,
      img: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
      desc: "World-class coaching in cricket, football, and swimming to foster athletic spirit and teamwork.",
      link: "/sports",
      color: "border-red-500",
    },
    {
      title: "Parent Community",
      icon: <Users className="w-6 h-6" />,
      img: "https://images.pexels.com/photos/5692265/pexels-photo-5692265.jpeg",
      desc: "A strong bond between parents and school ensures the best growth environment for every child.",
      link: "/parents",
      color: "border-purple-500",
    },
    {
      title: "Global Perspective",
      icon: <Globe className="w-6 h-6" />,
      img: "https://images.pexels.com/photos/8499547/pexels-photo-8499547.jpeg",
      desc: "Integrating international standards with Indian values to prepare global citizens for the future.",
      link: "/global",
      color: "border-cyan-500",
    },
  ];

  const faqs = [
    {
      q: "What is the school calendar year?",
      a: "The school calendar year is from 1st April to 31st March.",
    },
    {
      q: "Who will administer medication in the school?",
      a: "Medication is administered by qualified nursing staff following parental consent.",
    },
    {
      q: "What is the timing of the afterschool program?",
      a: "The afterschool program typically runs from 2:30 PM to 4:30 PM.",
    },
    {
      q: "What afterschool (extended day) activities are provided?",
      a: "Activities include robotics, swimming, sports, and performing arts.",
    },
    {
      q: "Is transportation facility provided for toddlers?",
      a: "Yes, safe, GPS-tracked transportation with female attendants is provided.",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 350;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#fcfcfc] font-sans overflow-hidden">
      {/* 1. ENHANCED CONTACT SECTION */}
      <section className="bg-[#0a1f44] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-left md:max-w-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4 uppercase tracking-tighter">
              Ready to give your child <br />
              <span className="text-red-500">The Best Start?</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Join the Unity family today. Reach out to our admissions office
              for a campus tour.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black py-5 px-10 rounded-2xl transition-all shadow-xl shadow-red-900/40 uppercase text-xs tracking-[0.2em]"
            >
              <PhoneCall size={18} /> Call Us Now
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black py-5 px-10 rounded-2xl transition-all backdrop-blur-md uppercase text-xs tracking-[0.2em]"
            >
              Request Info
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EXCELLENCE CARDS SLIDER */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 text-center">
          <span className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Excellence in Education
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a1f44] tracking-tighter uppercase">
            Our Core Pillars
          </h2>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[380px] snap-start group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 border border-slate-100 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0a1f44]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <a
                    href={card.link}
                    className="bg-white p-4 rounded-xl text-[#0a1f44] font-black text-xs uppercase flex items-center gap-2 shadow-2xl"
                  >
                    Details <ExternalLink size={14} />
                  </a>
                </div>
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur p-3 rounded-2xl text-[#0a1f44]">
                  {card.icon}
                </div>
              </div>

              <div className="p-8">
                <h3
                  className={`text-[#0a1f44] font-black text-xl mb-4 border-l-4 ${card.color} pl-4 leading-tight uppercase`}
                >
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 italic mb-6">
                  "{card.desc}"
                </p>
                <a
                  href={card.link}
                  className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:tracking-[0.2em] transition-all"
                >
                  View Program →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons centered below cards */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0a1f44] hover:text-white transition-all shadow-sm active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0a1f44] hover:text-white transition-all shadow-sm active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="bg-slate-50/50 py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0a1f44] tracking-tighter uppercase mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl transition-all duration-500 overflow-hidden border-2 ${openIndex === i ? "border-[#0a1f44] shadow-2xl translate-x-2" : "border-transparent shadow-sm"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex justify-between items-center p-7 text-left group"
                >
                  <span
                    className={`font-black text-sm md:text-base uppercase transition-colors ${openIndex === i ? "text-[#0a1f44]" : "text-slate-600"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-all duration-500 ${openIndex === i ? "bg-[#0a1f44] text-white rotate-180" : "bg-slate-100 text-slate-400"}`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-8 pb-8 pt-2 text-slate-500 text-sm md:text-[15px] leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HomeSections;

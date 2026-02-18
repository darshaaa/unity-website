import React from "react";
import schoolLogo from "../assets/logo.jpg";
import img1 from "../assets/campus/campus-1.png";
import img2 from "../assets/campus/campus-2.png";
import img3 from "../assets/campus/campus-3.png";
import img4 from "../assets/campus/campus-4.png";
import img5 from "../assets/campus/campus-5.png";
import img6 from "../assets/campus/campus-6.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ChevronRight,
} from "lucide-react";

const campusImages = [img1, img2, img3, img4, img5, img6];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a1f44] text-white font-sans pt-16 pb-8 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* BRAND - Centered on mobile, Left aligned on MD+ */}
          <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-2xl shadow-xl shadow-black/20 shrink-0">
                <img
                  src={schoolLogo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="text-xl font-black tracking-tighter leading-tight">
                UNITY <br className="hidden md:block" />
                <span className="text-red-500 text-2xl">INTERNATIONAL</span>
              </h2>
            </div>

            <p className="text-sm leading-loose text-gray-400 max-w-sm">
              Unity International School & College, Nanjangud is committed to
              delivering quality education that blends academic excellence and
              modern learning practices.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <Facebook size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Twitter size={18} />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-red-500">
              Quick Navigation
            </h3>
            <ul className="space-y-4">
              {[
                "Admissions",
                "Academic Calendar",
                "Fee Structure",
                "Careers",
                "School Almanac",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[13px] font-medium flex items-center justify-center md:justify-start gap-2 group transition-colors"
                  >
                    <ChevronRight
                      size={14}
                      className="text-red-600 md:opacity-0 md:-ml-4 md:group-hover:opacity-100 md:group-hover:ml-0 transition-all"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-red-500">
              Student Resources
            </h3>
            <ul className="space-y-4">
              {[
                "Download Syllabus",
                "E-Learning Portal",
                "Assignments",
                "Photo Gallery",
                "FAQs",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[13px] font-medium flex items-center justify-center md:justify-start gap-2 group transition-colors"
                  >
                    <ChevronRight
                      size={14}
                      className="text-red-600 md:opacity-0 md:-ml-4 md:group-hover:opacity-100 md:group-hover:ml-0 transition-all"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CAMPUS GALLERY */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-red-500">
              Campus Life
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto md:mx-0">
              {campusImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                >
                  <img
                    src={img}
                    alt="Campus"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT BAR - Stacked on mobile, Grid on MD+ */}
        <div className="border-t border-white/10 pt-10 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LOCATION */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-red-500 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Our Location
                </p>
                <p className="text-sm font-bold text-gray-200">
                  Nanjangud, Karnataka
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-10">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-red-500 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Admissions Contact
                </p>
                <p className="text-sm font-bold text-gray-200">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-4 text-center md:text-left">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-red-500 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  Official Email
                </p>
                <p className="text-sm font-bold text-gray-200">
                  info@unityschool.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase text-center md:text-left">
            © 2026 UNITY INTERNATIONAL. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE FRIENDLY SCROLL BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:bg-red-700 active:scale-90 md:hover:-translate-y-2 transition-all duration-300 z-[100] group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;

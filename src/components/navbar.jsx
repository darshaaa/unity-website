import React, { useState } from "react";
import { Link } from "react-router-dom"; // Added Link
import schoolLogo from "../assets/logo.jpg";
import {
  MapPin,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  const navItems = [
    { name: "HOME", hasDropdown: false, href: "/" },
    {
      name: "ABOUT US",
      hasDropdown: true,
      subItems: [
        { label: "OVERVIEW", link: "/about/overview" },
        { label: "OUR MISSION", link: "/about/mission" },
        { label: "OUR VISION", link: "/about/vision" },
        { label: "Unity SOCIETY", link: "/about/society" },
        { label: "MESSAGE FROM PRO-VICE CHAIRMAN", link: "/about/vc-message" },
        { label: "MESSAGE FROM PRINCIPAL", link: "/about/principal-message" },
        { label: "QUICK FACTS", link: "/about/facts" },
        { label: "FAQS", link: "/about/faqs" },
      ],
    },
    {
      name: "ADMISSION",
      hasDropdown: true,
      subItems: [
        { label: "ADMISSION PROCESS", link: "/admission/process" },
        { label: "FEE STRUCTURE", link: "/admission/fees" },
        { label: "REGISTRATION", link: "/admission/registration" },
      ],
    },
    {
      name: "ACADEMICS",
      hasDropdown: true,
      subItems: [
        { label: "OVERVIEW", link: "/academics/overview" },
        { label: "COMPREHENSIVE CURRICULUM", link: "/academics/curriculum" },
        {
          label: "EARLY YEARS",
          link: "#",
          hasSubMenu: true,
          nestedItems: [
            {
              label: "PRE-NURSERY",
              link: "/academics/early-years/pre-nursery",
            },
            { label: "NURSERY", link: "/academics/early-years/nursery" },
            {
              label: "PREPARATORY",
              link: "/academics/early-years/preparatory",
            },
          ],
        },
        { label: "CIRCULARS", link: "/academics/circulars" },
        { label: "METHODOLOGY", link: "/academics/methodology" },
        {
          label: "TEACHER TRAINING PROGRAM",
          link: "/academics/teacher-training",
        },
        { label: "ACADEMIC CALENDAR", link: "/academics/calendar" },
        { label: "ANNUAL REPORT", link: "/academics/report" },
      ],
    },
    {
      name: "INFRASTRUCTURE",
      hasDropdown: true,
      subItems: [
        { label: "CAMPUS OVERVIEW", link: "/infrastructure/campus" },
        { label: "MULTIPURPOSE HALL", link: "/infrastructure/hall" },
        { label: "CLASSROOMS", link: "/infrastructure/classrooms" },
        { label: "LIBRARY", link: "/infrastructure/library" },
        { label: "INFORMATION TECHNOLOGY", link: "/infrastructure/it" },
        {
          label: "INNOVATION LAB",
          link: "/infrastructure/robotics",
        },
      ],
    },
    {
      name: "FACILITIES",
      hasDropdown: true,
      subItems: [
        { label: "TRANSPORTATION", link: "/facilities/transport" },
        { label: "SICK BAY", link: "/facilities/sick-bay" },
        { label: "SECURITY & SAFETY", link: "/facilities/security" },
      ],
    },
    {
      name: "SPORTS",
      hasDropdown: true,
      subItems: [
        { label: "CURRICULUM", link: "/sports/curriculum" },
        { label: "WIDE RANGE OF SPORTS", link: "/sports/range" },
        { label: "FACILITIES", link: "/sports/facilities" },
        { label: "PLAY GROUND", link: "/sports/ground" },
      ],
    },
    // { name: "BLOG", hasDropdown: false, href: "/blog" },
    { name: "CONTACT", hasDropdown: false, href: "/contact" },
  ];

  const updates = [
    "Badminton Championship 2025-26 - Winners Announced!",
    "Admissions are now open for the Academic Session 2025-26",
    "CBSE Cluster - III Badminton Championship 2025-26",
    "Science Fair on December 15, 2025",
    "Annual Sports Meet scheduled for January 2026",
  ];

  const toggleMobileSubmenu = (name) => {
    setActiveMobileMenu(activeMobileMenu === name ? null : name);
  };

  return (
    <header className="w-full font-sans shadow-md relative">
      {/* 1. LATEST UPDATES TICKER */}
      <div className="w-full h-10 md:h-12 bg-[#0a1f44] flex items-center z-[70] overflow-hidden border-b border-white/10">
        <div className="bg-[#FFC107] h-full px-4 md:px-6 flex items-center gap-2 text-black font-black whitespace-nowrap z-30 shadow-[5px_0_15px_rgba(0,0,0,0.3)]">
          <span className="text-[10px] flex items-center gap-1 md:text-[12px] uppercase tracking-widest">
            <span className="text-gray-900">★</span>Updates
          </span>
        </div>
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
          <div className="animate-ticker whitespace-nowrap inline-flex items-center">
            {[...updates, ...updates].map((text, i) => (
              <div key={i} className="flex items-center gap-3 mx-6 md:mx-10">
                <span className="bg-white/20 text-[8px] md:text-[10px] text-white font-bold px-2 py-0.5 rounded uppercase">
                  New
                </span>
                <span className="text-white text-[12px] md:text-[13px] font-medium hover:text-yellow-400 cursor-pointer transition-colors uppercase">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. LOGO HEADER */}
      <div className="bg-white px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 lg:gap-3">
          <img
            src={schoolLogo}
            alt="Logo"
            className="w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-[#0a1f44] font-black text-xs md:text-xl lg:text-2xl leading-none tracking-tight">
              UNITY INTERNATIONAL SCHOOL
            </h1>
            <p className="text-red-500 text-[7px] md:text-[10px] font-bold uppercase tracking-tighter">
              An Institution of Unity International School & College, Nanjangud
            </p>
            <p className="hidden md:block text-gray-500 text-[9px] border-t mt-1 pt-1 italic">
              Affiliated to the State Education Board
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="hidden sm:flex gap-3 mr-2">
            {[
              { Icon: MapPin, label: "LOCATION" },
              { Icon: Phone, label: "CONTACT" },
              { Icon: Mail, label: "MAIL" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
              >
                <item.Icon size={16} />
                <span className="text-[8px] font-bold">{item.label}</span>
              </div>
            ))}
          </div>
          <button className="bg-[#E31E24] text-white px-4 py-2 text-xs sm:text-sm md:text-xs lg:text-sm rounded-md font-bold uppercase shadow-sm hover:bg-red-700 transition-all duration-300 w-full sm:w-auto active:scale-95">
            Admission Now
          </button>

          <button
            className="lg:hidden p-1 text-[#0a1f44]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* 3. DESKTOP NAVIGATION */}
      <nav className="bg-[#0a1f44] w-full sticky top-0 z-50 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <ul className="flex items-center gap-6 h-full">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="group relative h-full flex items-center"
              >
                <Link
                  to={item.href || "#"}
                  className="text-white text-[11px] font-bold flex items-center gap-1 group-hover:text-yellow-400 transition-all uppercase whitespace-nowrap"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={12}
                      className="opacity-70 group-hover:rotate-180 transition-transform"
                    />
                  )}
                </Link>

                {item.hasDropdown && (
                  <div className="absolute top-[100%] left-0 pt-1 hidden group-hover:block z-[100] animate-fadeIn">
                    <div className="bg-white shadow-2xl rounded-b-xl min-w-[280px] border-t-[4px] border-red-500 overflow-hidden">
                      <div className="flex flex-col py-3">
                        {item.subItems?.map((sub, i) => (
                          <div key={i} className="relative group/nested">
                            <Link
                              to={sub.link}
                              className="flex justify-between items-center px-6 py-3.5 text-[13.5px] font-bold text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all uppercase tracking-wide border-l-[4px] border-transparent hover:border-red-500"
                            >
                              <span>{sub.label}</span>
                              {sub.hasSubMenu && (
                                <ChevronRight
                                  size={14}
                                  className="text-gray-400"
                                />
                              )}
                            </Link>

                            {sub.hasSubMenu && (
                              <div className="absolute left-[100%] top-0 pl-1 hidden group-hover/nested:block animate-fadeIn">
                                <div className="bg-white shadow-2xl rounded-xl min-w-[220px] border-l-[4px] border-[#0a1f44] py-2">
                                  {sub.nestedItems.map((nest, ni) => (
                                    <Link
                                      key={ni}
                                      to={nest.link}
                                      className="block px-6 py-3 text-[12px] font-bold text-gray-600 hover:text-[#0a1f44] hover:bg-gray-50 uppercase transition-colors"
                                    >
                                      {nest.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className="bg-[#FFC107] text-black px-4 py-1.5 rounded font-bold text-xs uppercase hover:bg-yellow-500 transition-colors shadow-sm">
            Login Portals
          </button>
        </div>
      </nav>

      {/* 4. MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-[#0a1f44] text-white">
          <span className="font-bold tracking-widest text-sm uppercase">
            Unity Menu
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-60px)] pb-10">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <div
                className="flex justify-between items-center px-6 py-5 cursor-pointer active:bg-gray-50"
                onClick={() =>
                  item.hasDropdown
                    ? toggleMobileSubmenu(item.name)
                    : setIsMobileMenuOpen(false)
                }
              >
                {item.hasDropdown ? (
                  <span className="text-sm font-black text-[#0a1f44] uppercase tracking-wide">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-black text-[#0a1f44] uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                )}
                {item.hasDropdown && (
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-300 ${
                      activeMobileMenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.hasDropdown && activeMobileMenu === item.name && (
                <div className="bg-gray-50 border-t border-gray-100 animate-slideDown overflow-hidden">
                  {item.subItems.map((sub, sIdx) => (
                    <div key={sIdx} className="border-b border-gray-200/50">
                      <Link
                        to={sub.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-[12.5px] font-bold text-gray-600 hover:text-[#0a1f44] uppercase pl-10 border-l-4 border-transparent active:border-[#E31E24]"
                      >
                        {sub.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 30s linear infinite; }
        .animate-ticker:hover { animation-play-state: paused; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        @keyframes slideDown {
          from { max-height: 0; opacity: 0; }
          to { max-height: 800px; opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.5s ease-in-out forwards; }
      `}</style>
    </header>
  );
};

export default Navbar;
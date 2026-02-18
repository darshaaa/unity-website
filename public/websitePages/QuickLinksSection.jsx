import React from 'react';
import { 
  FaMapMarkedAlt, FaBook, FaCalendarAlt, FaClipboardList, 
  FaUserTie, FaImages, FaVideo, FaFilePdf, FaNewspaper 
} from 'react-icons/fa';

const QuickLinksSection = () => {
  const activities = [
    {
      date: "17 Nov",
      title: "Badminton Championship 2025-26",
      desc: "DPS Gaya emerged as the overall champion in the Inter-School Badminton tournament...",
      img: "https://images.pexels.com/photos/26238651/pexels-photo-26238651.jpeg",
    },
    {
      date: "14 Nov",
      title: "Children's Day Celebration",
      desc: "A day filled with joy, laughter, and special performances by the teachers for our students...",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    },
    {
      date: "14 Nov",
      title: "Children's Day Celebration",
      desc: "A day filled with joy, laughter, and special performances by the teachers for our students...",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    }
  ];

  return (
    <div className="bg-[#dfe9fa] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* RECENT ACTIVITIES SECTION */}
        <h2 className="text-center text-[#0a1f44] text-3xl font-black mb-12 uppercase tracking-widest">Recent Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {activities.map((act, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg h-[300px]">
              {/* Image with Zoom Effect */}
              <img 
                src={act.img} 
                alt={act.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Date Tag */}
              <div className="absolute top-4 right-4 bg-[#E31E24] text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                {act.date}
              </div>

              {/* Information Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11422A] via-[#11422A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transform transition-transform">
                <h3 className="text-white font-bold text-xl mb-2">{act.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {act.desc}
                </p>
                <button className="mt-4 text-[#0a1f44] bg-white w-fit px-4 py-1 rounded-full text-xs font-black uppercase hover:bg-yellow-400 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QuickLinksSection;
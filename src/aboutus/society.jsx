import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Users, Mail, Linkedin, GraduationCap } from "lucide-react";

const UnitySociety = () => {
  // 1. EXECUTIVE MANAGEMENT DATA (8 members)
  const management = [
    {
      name: "Dr. Elizabeth Sarah",
      role: "Founder & Chairperson",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      bio: "A visionary educator with 25 years of experience in international curriculum development."
    },
    {
      name: "Mr. Julian Sterling",
      role: "Managing Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Expert in educational technology and strategic operations, ensuring modern learning excellence."
    },
    {
      name: "Dr. Robert H. Chen",
      role: "Chief Academic Officer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      bio: "Former University Dean focused on bridging high school foundations and collegiate excellence."
    },
    {
      name: "Mrs. Victoria Windsor",
      role: "Director of Student Welfare",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      bio: "Dedicated to creating an inclusive environment where mental and social well-being is prioritized."
    },
    {
      name: "Mr. Arthur Pendragon",
      role: "Chief Financial Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Managing institutional growth and sustainable financial planning for future expansions."
    },
    {
      name: "Dr. Elena Gilbert",
      role: "Head of Research & Dev",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      bio: "Pioneering new pedagogical methods to enhance student engagement and retention."
    },
    {
      name: "Mr. Alaric Saltzman",
      role: "Director of Operations",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      bio: "Streamlining campus logistics to ensure a seamless experience for staff and students."
    },
    {
      name: "Ms. Bonnie Bennett",
      role: "Global Relations Lead",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Connecting Unity Society with international partners and ivy-league universities."
    }
  ];

  // 2. FACULTY DATA (8 members per section with Qualifications)
  const sections = [
    {
      title: "College Faculty",
      members: [
        { name: "Prof. Alan Turing", role: "Head of Science & STEAM", qual: "Ph.D. in Computer Science", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
        { name: "Ms. Clara Barton", role: "College Coordinator", qual: "M.A. in Education Management", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
        { name: "Dr. Nikola Tesla", role: "Physics Dept Head", qual: "Ph.D. in Applied Physics", image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg" },
        { name: "Prof. Marie Curie", role: "Chemistry Faculty", qual: "M.Sc. in Organic Chemistry", image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg" },
        { name: "Dr. Ada Lovelace", role: "Computer Science", qual: "M.Tech in Software Systems", image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg" },
        { name: "Mr. Isaac Newton", role: "Advanced Mathematics", qual: "M.Sc. in Pure Mathematics", image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg" },
        { name: "Ms. Rosalind Franklin", role: "Biology Lead", qual: "Ph.D. in Molecular Biology", image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" },
        { name: "Dr. Stephen Hawking", role: "Astrophysics Head", qual: "Ph.D. in Cosmology", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" }
      ]
    },
    {
      title: "Higher Primary",
      members: [
        { name: "Dr. Marcus Aurelius", role: "Senior Humanities", qual: "Ph.D. in Philosophy", image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg" },
        { name: "Mrs. Sofia Loren", role: "Arts & Design", qual: "Master of Fine Arts", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
        { name: "Mr. Winston Churchill", role: "History Specialist", qual: "M.A. in World History", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { name: "Ms. Maya Angelou", role: "Literature Lead", qual: "M.A. in English Literature", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" },
        { name: "Mr. Nelson Mandela", role: "Civics & Ethics", qual: "B.A., LL.B.", image: "https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg" },
        { name: "Ms. Frida Kahlo", role: "Fine Arts", qual: "B.F.A. in Visual Arts", image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg" },
        { name: "Mr. Albert Einstein", role: "General Science", qual: "M.Sc. in Physics", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
        { name: "Mrs. Rosa Parks", role: "Social Studies", qual: "M.Ed. in Social Sciences", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg" }
      ]
    },
    {
      title: "Primary School",
      members: [
        { name: "Dr. Sarah Jenkins", role: "Mathematics Lead", qual: "Ph.D. in Early Education", image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg" },
        { name: "Ms. Kamala Devi", role: "Primary Supervisor", qual: "M.A. in Psychology", image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" },
        { name: "Mr. Fred Rogers", role: "Early Childhood", qual: "B.Ed. in Child Development", image: "https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg" },
        { name: "Mrs. Anne Sullivan", role: "Special Education", qual: "Certification in SEN", image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" },
        { name: "Ms. Maria Montessori", role: "Montessori Lead", qual: "Diploma in Montessori Method", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
        { name: "Mr. Walt Disney", role: "Creative Activities", qual: "B.A. in Creative Arts", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" },
        { name: "Ms. Beatrix Potter", role: "English & Phonics", qual: "B.A. in Linguistics", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
        { name: "Mr. Bob Ross", role: "Primary Arts", qual: "B.F.A.", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-[#0a1f44]/85" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Unity <span className="text-red-600">Society</span>
          </h1>
          <div className="w-24 h-2 bg-red-600 mx-auto my-6 rounded-full" />
          <p className="text-blue-200 uppercase tracking-[0.4em] font-bold text-xs md:text-sm">The Visionaries Behind Our Success</p>
        </div>
      </section>

      {/* 1. EXECUTIVE MANAGEMENT (Modern Rectangular Layout) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="relative mb-20 text-center md:text-left">
          <div className="absolute top-0 left-0 w-24 h-1 bg-red-600 mb-6 hidden md:block" />
          <h2 className="text-[#0a1f44] text-5xl font-black uppercase tracking-tighter pt-4">
            Executive <br /> <span className="text-red-600 italic">Management</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-xl text-lg border-l-2 border-slate-200 pl-6 mx-auto md:mx-0">
            Guiding Unity Institution with a synthesis of traditional wisdom and futuristic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {management.map((member, i) => (
            <div key={i} className="group relative bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  alt={member.name} 
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-[#0a1f44] text-xl font-black uppercase leading-tight">{member.name}</h3>
                  <p className="text-red-600 font-bold text-xs uppercase tracking-widest mt-1">{member.role}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic border-l-2 border-red-100 pl-3">
                  {member.bio}
                </p>
                <div className="flex gap-4">
                  <Linkedin size={18} className="text-slate-400 hover:text-[#0a1f44] cursor-pointer transition-colors" />
                  <Mail size={18} className="text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FACULTY BY DEPARTMENTS (Increased Circle Size) */}
      <section className="py-24 bg-[#0a1f44]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <GraduationCap className="text-red-600 mb-4" size={44} />
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Academic <span className="text-red-600">Council</span>
            </h2>
          </div>

          {sections.map((dept, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
                <span className="text-red-600 font-black text-2xl tracking-tighter italic">0{idx + 1}</span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight">{dept.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                {dept.members.map((member, i) => (
                  <div key={i} className="text-center group">
                    <div className="relative inline-block mb-6">
                      {/* Decorative Ring */}
                      <div className="absolute inset-0 border-2 border-red-600 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45" />
                      
                      {/* INCREASED CIRCLE SIZE: Changed from w-24/36 to w-44/48 */}
                      <div className="w-44 h-44 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
                        <img 
                          src={member.image} 
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                          alt={member.name} 
                        />
                      </div>
                    </div>
                    <h4 className="text-white font-black uppercase text-base mb-1 tracking-tight">{member.name}</h4>
                    <p className="text-red-500 text-[15px] font-bold uppercase tracking-widest">{member.role}</p>
                    {/* ADDED QUALIFICATION */}
                    <p className="text-slate-400 text-[15px] font-medium mt-1">{member.qual}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-24 bg-white text-center px-6">
        <Users size={40} className="mx-auto text-red-600 mb-6" />
        <h2 className="text-[#0a1f44] text-4xl font-black uppercase mb-6 leading-tight">
          Join Our <span className="text-red-600">Community.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Working tirelessly across our campuses to ensure excellence in every classroom.
        </p>
        <button className="bg-[#0a1f44] text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-all shadow-xl">
          Contact Academic Office
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default UnitySociety;
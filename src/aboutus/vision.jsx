import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  Eye,
  Globe2,
  Rocket,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Vision = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Vision Background"
        />
        <div className="absolute inset-0 bg-[#0a1f44]/85" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Our <span className="text-red-600">Vision</span>
          </h1>
          <p className="text-blue-200 mt-4 uppercase tracking-[0.4em] font-bold text-sm">
            Architecting the Future of Unity Institution
          </p>
        </div>
      </section>

      {/* EXPANDED VISION CONTENT */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-block p-3 bg-red-50 rounded-2xl mb-6">
              <Eye className="text-red-600" size={32} />
            </div>
            <h2 className="text-[#0a1f44] text-4xl font-black uppercase mb-8 leading-tight">
              To be the Global Standard for{" "}
              <span className="text-red-600">Holistic Education.</span>
            </h2>

            {/* INCREASED TEXT CONTENT */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
              <p>
                Our vision is to become a world-renowned educational hub where
                tradition meets the future. We envision{" "}
                <span className="text-[#0a1f44] font-bold">
                  Unity Institution
                </span>{" "}
                as a sanctuary of learning—a place where every student, from
                their first day of primary school to their final college
                graduation, is meticulously groomed to be an innovator, a
                critical thinker, and a compassionate global citizen.
              </p>
              <p>
                We aspire to redefine the educational landscape by blending
                time-honored academic discipline with the fluid demands of the
                21st century. Our goal is to create an ecosystem that doesn't
                just respond to change but anticipates it, ensuring our
                graduates are not only employable but are the creators of the
                next generation of industries.
              </p>
              <p>
                Through sustained excellence in pedagogy and a commitment to
                moral integrity, we seek to produce leaders who carry the "Unity
                Spirit"—a combination of intellectual brilliance and a
                deep-seated desire to serve humanity.
              </p>
            </div>

            {/* EXPANDED FEATURE CARDS */}
            <div className="mt-12 space-y-4">
              <div className="group flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border-l-4 border-red-600 transition-all hover:bg-slate-100">
                <Globe2 className="text-[#0a1f44] shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase text-sm mb-1">
                    Recognized by International Universities
                  </h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    Establishing formal pathways and accreditation with Ivy
                    League and elite global institutions to ensure our students
                    have priority access to world-class higher education.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border-l-4 border-[#0a1f44] transition-all hover:bg-slate-100">
                <Rocket className="text-red-600 shrink-0" size={28} />
                <div>
                  <h4 className="font-black text-[#0a1f44] uppercase text-sm mb-1">
                    Leading in STEAM & Tech Integration
                  </h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    Pioneering a curriculum that fuses Science, Technology,
                    Engineering, Arts, and Mathematics with Artificial
                    Intelligence and Robotics at every level of schooling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-10">
            <div className="absolute inset-0 bg-red-600 rounded-[3rem] rotate-3 -z-10 opacity-10" />
            <img
              src="https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg"
              className="rounded-[3rem] shadow-2xl grayscale-0 hover:grayscale transition-all duration-1000"
              alt="Future Vision"
            />

            {/* ADDITIONAL INFORMATION OVERLAY */}
            <div className="mt-12 bg-[#0a1f44] text-white p-10 rounded-[2.5rem] shadow-2xl">
              <Sparkles className="text-red-500 mb-4" />
              <h3 className="text-xl font-black uppercase mb-4 tracking-tight">
                Future Aspirations
              </h3>
              <ul className="space-y-4">
                {[
                  "Establishing a state-of-the-art Research & Innovation Wing",
                  "Expanding global exchange programs with Tier-1 Universities",
                  "Integrating AI-driven personalized learning for every student",
                  "Developing a fully sustainable, eco-friendly smart campus",
                  "Empowering students through advanced Entrepreneurship labs",
                  "Cultivating a worldwide network of high-achieving alumni",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-blue-100"
                  >
                    <CheckCircle2 size={16} className="text-red-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Quote, GraduationCap, Award, BookOpen } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto w-full">
        <div className="relative">
          <h1 className="text-[#0a1f44] text-4xl md:text-5xl font-black tracking-tight mb-2 uppercase italic">
            From The <span className="text-red-600">Principal's Desk</span>
          </h1>
          <div className="w-20 h-1.5 bg-red-600 rounded-full" />
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="pb-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
          
          {/* IMAGE SIDEBAR (Right Aligned for variety) */}
          <div className="w-full lg:w-[450px] shrink-0">
            <div className="relative group">
              {/* Decorative accent behind image */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#0a1f44] rounded-[2rem] -z-10" />
              
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg" 
                  alt="School Principal" 
                  className="w-full h-[550px] object-cover"
                />
              </div>

              {/* Principal Badge Overlay */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-6 rounded-2xl shadow-xl border-t-4 border-red-600 text-center w-[80%]">
                <h3 className="text-[#0a1f44] text-xl font-black uppercase">Dr. Elizabeth Sarah</h3>
                <p className="text-red-600 font-bold tracking-widest text-xs uppercase mt-1">Principal, Unity Society</p>
                <p className="text-slate-400 text-[10px] mt-2 font-medium">Ph.D. in Educational Leadership</p>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1 space-y-8 text-slate-600 leading-relaxed text-lg pt-4">
            
            {/* INSPIRATIONAL QUOTE */}
            <div className="relative pl-12 py-4 border-l-4 border-red-600 bg-slate-50 rounded-r-2xl">
              <Quote className="absolute top-4 left-3 text-red-200" size={40} />
              <p className="text-xl italic font-semibold text-[#0a1f44]">
                "Education is not the filling of a pail, but the lighting of a fire." – <span className="text-red-600">W.B. Yeats</span>
              </p>
            </div>

            <p>
              It is a matter of great pride and privilege to welcome you to the Unity Society community. 
              As we navigate an era of unprecedented global change, our role as educators is to ensure 
              that our students are not just recipients of information, but architects of innovation 
              and pillars of character.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <GraduationCap className="text-red-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-[#0a1f44]">Academic Rigor</h4>
                  <p className="text-sm">Consistently pushing the boundaries of traditional curriculum.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <Award className="text-red-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-[#0a1f44]">Character Building</h4>
                  <p className="text-sm">Instilling discipline, empathy, and integrity in every child.</p>
                </div>
              </div>
            </div>

            <p>
              At Unity, we believe that every child possesses a unique spark. Our dedicated faculty 
              works tirelessly to nurture this potential through a balanced approach to STEAM 
              (Science, Technology, Engineering, Arts, and Mathematics) and physical education. 
              We don't just teach for exams; we prepare our students for the challenges of life.
            </p>

            <p>
              Our campus provides a sanctuary for learning—a place where curiosity is celebrated 
              and mistakes are viewed as stepping stones to mastery. We encourage our students 
              to think critically, act compassionately, and lead with confidence.
            </p>

            <p className="font-semibold text-[#0a1f44]">
              I invite you to join us on this journey of discovery and excellence. Together, let 
              us build a future where our children are the light of the world.
            </p>

            <div className="pt-10 border-t border-slate-100">
              <p className="text-slate-400 italic mb-4 text-sm tracking-widest uppercase">Best Regards,</p>
              <div className="font-black text-2xl text-[#0a1f44] tracking-tighter italic">
                Dr. Elizabeth Sarah
              </div>
              <p className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] mt-1">Principal</p>
            </div>
          </div>

        </div>
      </section>


      <Footer />
    </div>
  );
};

export default PrincipalMessage;
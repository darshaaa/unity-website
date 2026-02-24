import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Quote } from "lucide-react";

const MessagePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto w-full">
        <div className="relative">
          <h1 className="text-[#0a1f44] text-4xl md:text-5xl font-black tracking-tight mb-2">
            Message From <span className="text-red-600">Pro-Vice Chairman</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#0a1f44] rounded-full" />
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="pb-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* TEXT CONTENT */}
          <div className="flex-1 space-y-8 text-slate-600 leading-relaxed text-lg">
            
            {/* ARISTOTLE QUOTE BOX */}
            <div className="relative pl-10 py-2 border-l-4 border-[#0a1f44] italic font-medium text-[#0a1f44]">
              <Quote className="absolute top-0 left-2 text-green-100 -z-10" size={60} />
              <p className="text-xl">
                ""The roots of education are bitter, but the fruit is sweet."" – <span className="font-bold">Aristotle</span>
              </p>
            </div>

            <p>
              I am pleased to welcome you all to Unity Society. We strive to provide holistic and 21st-century 
              education to our students with a prodigious emphasis on traditional values. Education is essential 
              for the growth and stability of a nation, and equal opportunities must be given to both men and 
              women in society to ensure exponential growth.
            </p>

            <p>
              Holistic education encompasses not only structured academics but also life's valuable lessons 
              that one can imbibe from experiences gained through opportunities. Our institution aims to 
              prepare its students for life in the 21st Century by providing a school that esteems heritage, 
              has a strong ethos of mutual respect and courtesy, and has excellent standards of care.
            </p>

            <p>
              Our infrastructure is comparable to world standards, with state-of-the-art educational space, 
              Early years learning centres, and sports facilities. The medical and support staff are highly 
              trained to act quickly in an emergency and are constantly vigilant. We focus on shaping 
              well-disciplined students who are also adequately mushroomed with traditional values.
            </p>

            <div className="hidden lg:block space-y-1 pt-8">
              <h3 className="text-[#0a1f44] text-2xl font-black uppercase">Sanjeev Kumar</h3>
              <p className="text-red-600 font-bold tracking-widest text-sm uppercase">Pro-Vice Chairman</p>
            </div>
          </div>

          {/* IMAGE SIDEBAR */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="relative group">
              {/* Decorative background shadow/border */}
              <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -z-10 group-hover:bg-red-50 transition-colors" />
              
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                  alt="Pro-Vice Chairman" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Mobile signature view */}
              <div className="lg:hidden mt-8 text-center">
                <h3 className="text-[#0a1f44] text-2xl font-black uppercase">Sanjeev Kumar</h3>
                <p className="text-red-600 font-bold tracking-widest text-sm uppercase">Pro-Vice Chairman</p>
              </div>
            </div>
          </div>

        </div>

        {/* SECOND TEXT BLOCK (Bottom overflow) */}
        <div className="mt-12 space-y-8 text-slate-600 leading-relaxed text-lg max-w-4xl">
          <p>
            While creating curriculum designs, value orientation and social mobility should remain a 
            prime focus. Schools should aim at grooming the students into ethical and moral leaders of 
            tomorrow whose thoughts and actions are deeply implanted in the values and culture of our land.
          </p>
          <p>
            We are confident that Unity Society is the best place for your child's education. We welcome 
            your active interest and involvement in the progress and activities of your ward. We look forward 
            to your continuous support.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MessagePage;
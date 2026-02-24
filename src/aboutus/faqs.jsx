import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the school and college timings?",
      answer: (
        <div className="space-y-6">
          <div>
            <p className="font-bold text-[#0a1f44] text-xl mb-3">Summer Timings:</p>
            <ul className="list-disc ml-8 space-y-2 text-lg">
              <li>Primary School (Nursery to V): 8:00 a.m. – 1:30 p.m.</li>
              <li>Higher Primary & High School: 7:30 a.m. – 2:30 p.m.</li>
              <li>Unity College: 8:00 a.m. – 3:30 p.m.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[#0a1f44] text-xl mb-3">Winter Timings:</p>
            <ul className="list-disc ml-8 space-y-2 text-lg">
              <li>Primary School (Nursery to V): 9:00 a.m. – 2:30 p.m.</li>
              <li>Higher Primary & High School: 8:30 a.m. – 3:30 p.m.</li>
              <li>Unity College: 9:00 a.m. – 4:00 p.m.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "What is the admission process for the new academic year?",
      answer: "The admission process begins with an online or offline enquiry followed by a campus tour. For school levels, an interaction with the child and parents is scheduled. For College, admissions are based on merit and performance in the entrance interview."
    },
    {
      question: "Does the institution provide transportation facilities?",
      answer: "Yes, we maintain a fleet of GPS-enabled, air-conditioned buses covering all major routes in the city. Every bus has a trained attendant and a first-aid kit to ensure student safety during transit."
    },
    {
      question: "Are there after-school (extended day) activities provided?",
      answer: "We offer various clubs including Robotics, Classical Dance, Swimming, and Competitive Coding. These sessions run from 2:30 p.m. to 4:00 p.m. on weekdays for interested students."
    },
    {
      question: "What is the student-to-teacher ratio at Unity Society?",
      answer: "To ensure personalized attention, we maintain a strict ratio of 1:15 in Primary sections and 1:25 in Higher Primary and College sections."
    },
    {
      question: "How does the institution integrate technology into learning?",
      answer: "Our campus is fully Wi-Fi enabled. We utilize Smart Boards in every classroom, high-end Computer Labs, and a dedicated Digital Library to provide a seamless blended learning experience."
    },
    {
      question: "What are the streams offered in Unity College?",
      answer: "We offer comprehensive programs in Science (PCMB/PCMC), Commerce (Business Studies, Accountancy), and Humanities, all integrated with competitive exam coaching."
    },
    {
      question: "Is there a focus on sports and physical education?",
      answer: "Physical education is mandatory. Our 25-acre campus includes facilities for Football, Cricket, Basketball, and an Indoor Sports Complex for Table Tennis and Badminton."
    },
    {
      question: "What security measures are in place on campus?",
      answer: "The campus is monitored 24/7 by over 200 CCTV cameras. We have professional security personnel at all entry/exit points and a strict visitor management system."
    },
    {
      question: "How can parents track their ward's progress?",
      answer: "Parents are provided with credentials for our ERP Portal/Mobile App, where they can track attendance, marks, assignments, and communicate directly with teachers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* HEADER - Adjusted title size and spacing */}
      <section className="pt-40 pb-16 px-6 max-w-6xl mx-auto w-full">
        <div className="relative inline-block">
          <h1 className="text-[#0a1f44] text-6xl font-black tracking-tight mb-4">
            FAQs
          </h1>
          <div className="w-20 h-2 bg-red-600 rounded-full" />
        </div>
      </section>

      {/* FAQ ACCORDION LIST */}
      <section className="pb-32 px-6 max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 bg-white rounded-r-2xl border border-slate-200 shadow-sm ${
                openIndex === index ? "border-l-[6px] border-l-[#0a1f44] shadow-xl" : "border-l-[6px] border-l-[#0a1f44]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <div className="flex items-center gap-6">
                  {/* The Green Dot - Made larger and always visible */}
                  <div className={`w-4 h-4 rounded-full shrink-0 transition-colors duration-300 ${
                    openIndex === index ? "bg-[#0a1f44] scale-110" : "bg-slate-300"
                  }`} />
                  
                  {/* Question Text - Increased to text-2xl */}
                  <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    openIndex === index ? "text-[#0a1f44]" : "text-[#0a1f44] "
                  }`}>
                    {faq.question}
                  </span>
                </div>

                {openIndex === index ? (
                  <Minus className="text-[#0a1f44] shrink-0" size={28} />
                ) : (
                  <Plus className="text-[#0a1f44] shrink-0 group-hover:text-[#0a1f44] transition-colors" size={28} />
                )}
              </button>

              {/* Answer Content - Increased padding and text size */}
              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-10 pb-10 ml-10 text-slate-600 leading-relaxed text-xl">
                  <div className="pt-4 border-t border-slate-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HELP BOX - Increased font and padding */}
        <div className="mt-20 bg-slate-50 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-10 border border-slate-200 shadow-inner">
            <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3">
                    <HelpCircle size={40} />
                </div>
                <div>
                    <h3 className="text-[#0a1f44] text-3xl font-black">Still have questions?</h3>
                    <p className="text-slate-500 text-xl mt-2">Our team is available 24/7 to guide you through the process.</p>
                </div>
            </div>
            <button className="bg-[#0a1f44] text-white px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-red-600 hover:-translate-y-1 transition-all shadow-lg">
                Contact Office Now
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
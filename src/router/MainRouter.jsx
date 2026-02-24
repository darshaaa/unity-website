import { Routes, Route } from "react-router-dom";
import HomeHero from "../websitePages/homehero";
import Contact from "../websitePages/contact"
import Overview from "../aboutus/overview";
import Mission from "../aboutus/mission";
import Vision from "../aboutus/vision";
import Society from "../aboutus/society";
import Vcmessage from "../aboutus/vcmessage";
import PrincipalMessage from "../aboutus/principalmessage";
import QuickFacts from "../aboutus/facts";
import FAQPage from "../aboutus/faqs";
import AcademicsOverview from "../academics/overviewpage";
import Curriculum from "../academics/curriculum";
import CircularsPage from "../academics/circulars";
import Methodology from "../academics/methodology";
import TeacherTraining from "../academics/teacher-training";
import Calendar from "../academics/calendar";
import Campus from "../infrastructure/campus";
import Classrooms from "../infrastructure/classrooms";
import Library from "../infrastructure/library";
import InformationTechnology from "../infrastructure/information";
import Ground from "../infrastructure/ground";
import Transportation from "../facilities/transport";
import Security from "../facilities/security";
import SportsRange from "../sports/range";
import SportsFacilities from "../sports/facilities";
import Playground from "../sports/playground";



const MainRouter = () => {
  return (
    <>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomeHero />} />
        <Route path="/contact" element={<Contact />} />

        {/* About Section */}
        <Route path="/aboutus/overview" element={<Overview />} />
        <Route path="/aboutus/mission" element={<Mission />} />
        <Route path="/aboutus/vision" element={<Vision />} />
        <Route path="/aboutus/society" element={<Society />} />
        <Route path="/aboutus/vcmessage" element={<Vcmessage />} />
        <Route path="/aboutus/principalmessage" element={<PrincipalMessage />} />
        <Route path="/aboutus/facts" element={<QuickFacts />} />
        <Route path="/aboutus/faqs" element={<FAQPage />} />
      

        {/* Admission Section */}
        {/* <Route path="/admission/process" element={<div>Admission Process</div>} />
        <Route path="/admission/fees" element={<div>Fee Structure</div>} />
        <Route path="/admission/registration" element={<div>Registration</div>} /> */}

        
        {/* Academics Section */}
        <Route path="/academics/overviewpage" element={<AcademicsOverview />} />
        <Route path="/academics/curriculum" element={<Curriculum />} />
        <Route path="/academics/circulars" element={<CircularsPage />} />
        <Route path="/academics/methodology" element={<Methodology />} />
        <Route path="/academics/teacher-training" element={<TeacherTraining />} />
         <Route path="/academics/calendar" element={<Calendar />} />
        

        {/* Early Years */}
        <Route path="/academics/early-years/pre-nursery" element={<div>Pre-Nursery</div>} />
        <Route path="/academics/early-years/nursery" element={<div>Nursery</div>} />
        <Route path="/academics/early-years/preparatory" element={<div>Preparatory</div>} />

        <Route path="/academics/circulars" element={<div>Circulars</div>} />
        <Route path="/academics/methodology" element={<div>Methodology</div>} />
        <Route path="/academics/teacher-training" element={<div>Teacher Training</div>} />
        <Route path="/academics/calendar" element={<div>Calendar</div>} />
        <Route path="/academics/report" element={<div>Annual Report</div>} />

        {/* Infrastructure Section */}
        <Route path="/infrastructure/campus" element={<Campus />} />
        <Route path="/infrastructure/classrooms" element={<Classrooms />} />
        <Route path="/infrastructure/library" element={<Library />} />
        <Route path="/infrastructure/information" element={<InformationTechnology />} />
        <Route path="/infrastructure/ground" element={<Ground />} />

        {/* Facilities Section */}
        <Route path="/facilities/transport" element={<Transportation />} />
        <Route path="/facilities/security" element={<Security />} /> 

        {/* Sports Section */}
       
        <Route path="/sports/range" element={<SportsRange />} />
        <Route path="/sports/facilities" element={<SportsFacilities />} />
        <Route path="/sports/playground" element={<Playground />} /> 

        <Route path="*" element={<HomeHero/>}/>
      </Routes>

      </>
  );
};

export default MainRouter;
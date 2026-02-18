import { Routes, Route } from "react-router-dom";
import HomeHero from "../websitePages/homehero";
import Contact from "../websitePages/Contact";


const MainRouter = () => {
  return (
    <>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomeHero />} />
        <Route path="/contact" element={<Contact />} />

        {/* About Section
        <Route path="/about/overview" element={<About />} />
        <Route path="/about/mission" element={<About />} />
        <Route path="/about/vision" element={<About />} />
        <Route path="/about/society" element={<About />} />
        <Route path="/about/vc-message" element={<About />} />
        <Route path="/about/principal-message" element={<About />} />
        <Route path="/about/facts" element={<About />} />
        <Route path="/about/faqs" element={<About />} /> */}

        {/* Admission Section */}
        {/* <Route path="/admission/process" element={<div>Admission Process</div>} />
        <Route path="/admission/fees" element={<div>Fee Structure</div>} />
        <Route path="/admission/registration" element={<div>Registration</div>} /> */}

        {/* Academics Section */}
        {/* <Route path="/academics/overview" element={<div>Academics Overview</div>} />
        <Route path="/academics/curriculum" element={<div>Curriculum</div>} />
        <Route path="/academics/early-years/pre-nursery" element={<div>Pre-Nursery</div>} />
        <Route path="/academics/early-years/nursery" element={<div>Nursery</div>} />
        <Route path="/academics/early-years/preparatory" element={<div>Preparatory</div>} />
        <Route path="/academics/circulars" element={<div>Circulars</div>} />
        <Route path="/academics/methodology" element={<div>Methodology</div>} />
        <Route path="/academics/teacher-training" element={<div>Teacher Training</div>} />
        <Route path="/academics/calendar" element={<div>Calendar</div>} />
        <Route path="/academics/report" element={<div>Annual Report</div>} /> */}

        {/* Infrastructure Section */}
        {/* <Route path="/infrastructure/campus" element={<div>Campus Overview</div>} />
        <Route path="/infrastructure/hall" element={<div>Multipurpose Hall</div>} />
        <Route path="/infrastructure/classrooms" element={<div>Classrooms</div>} />
        <Route path="/infrastructure/library" element={<div>Library</div>} />
        <Route path="/infrastructure/it" element={<div>IT</div>} />
        <Route path="/infrastructure/robotics" element={<div>Innovation Lab</div>} /> */}

        {/* Facilities Section */}
        {/* <Route path="/facilities/transport" element={<div>Transportation</div>} />
        <Route path="/facilities/sick-bay" element={<div>Sick Bay</div>} />
        <Route path="/facilities/security" element={<div>Security</div>} /> */}

        {/* Sports Section */}
        {/* <Route path="/sports/curriculum" element={<div>Sports Curriculum</div>} />
        <Route path="/sports/range" element={<div>Sports Range</div>} />
        <Route path="/sports/facilities" element={<div>Sports Facilities</div>} />
        <Route path="/sports/ground" element={<div>Playground</div>} /> */}
      </Routes>

      </>
  );
};

export default MainRouter;
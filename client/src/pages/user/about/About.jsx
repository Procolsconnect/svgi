import { Routes, Route } from "react-router-dom";
import AboutOverview from "./AboutOverview";
import VisMis from "./VisMis";
import LeadershipMaterialCards from "./LeadershipPage";
// import Feedback from "./Feedback";
// import Rdbc from "./Rdbc";

const About = () => {
  return (
    <div>

      <Routes>
        <Route index element={<AboutOverview />} />
        <Route path="vission&mission" element={<VisMis />} />
        <Route path="leadership" element={<LeadershipMaterialCards />} />
        {/* <Route path="feedback" element={<Feedback />} />
        <Route path="rdbc" element={<Rdbc />} /> */}
      </Routes>
    </div>
  );
};

export default About;

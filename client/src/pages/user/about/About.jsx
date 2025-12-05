import { Routes, Route } from "react-router-dom";
import AboutOverview from "./AboutOverview";
import VisMis from "./VisMis";
import LeadershipMaterialCards from "./LeadershipPage";


const About = () => {
  return (
    <div>

      <Routes>
        <Route index element={<AboutOverview />} />
        <Route path="overview" element={<AboutOverview />} />
        <Route path="vission&mission" element={<VisMis />} />
        <Route path="leadership" element={<LeadershipMaterialCards />} />
      </Routes>
    </div>
  );
};

export default About;

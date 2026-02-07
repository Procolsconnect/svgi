import { Routes, Route } from "react-router-dom";
import AboutOverview from "./AboutOverview";
import VisMis from "./VisMis";
import LeadershipMaterialCards from "./LeadershipPage";
import Career from "./Career";
import MilestoneSection from "./Milestone";
import AdministrativeOffices from "./AdministrativeOffices";
import InternalComplaintsCommittee from './InternalComplaintsCommittee'

const About = () => {
  return (
    <div>

      <Routes>
        <Route index element={<AboutOverview />} />
        <Route path="overview" element={<AboutOverview />} />
        <Route path="vission&mission" element={<VisMis />} />
        <Route path="leadership" element={<LeadershipMaterialCards />} />
        <Route path="career" element={<Career />} />
        <Route path="milestone" element={<MilestoneSection />} />
        <Route path="administrative-offices" element={<AdministrativeOffices />} />
<Route path="internal-complaints-committee" element={<InternalComplaintsCommittee />} />
        
      </Routes>
    </div>
  );
};

export default About;

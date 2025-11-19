import { Routes, Route } from "react-router-dom";
import AboutOverview from "./AboutOverview";
// import Library from "./Library";
// import Feedback from "./Feedback";
// import Rdbc from "./Rdbc";

const About = () => {
  return (
    <div>

      <Routes>
        <Route index element={<AboutOverview />} />
        {/* <Route path="AboutOverview" element={<AboutOverview />} />
        <Route path="library" element={<Library />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="rdbc" element={<Rdbc />} /> */}
      </Routes>
    </div>
  );
};

export default About;

import Overview from './Overview'
import { Routes, Route } from "react-router-dom";
import CourseOutcome from "./CourseOutcome";
import Library from "./Library";
import Feedback from "./Feedback";
import Rdbc from "./Rdbc";
import Faculty from "./Faculty";
import FacultyList from "./FacultyList";
import Examination from "./Examination";
import FFCS from './FFCS';
import Schools from './Schools';
const Admissions = () => {
  return (
    <div>

      <Routes>
        <Route index element={<Overview />} />
        <Route path="courseoutcome" element={<CourseOutcome />} />
        <Route path="library" element={<Library />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="rdbc" element={<Rdbc />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="faculty/list" element={<FacultyList />} />
        <Route path="examination" element={<Examination />} />
        <Route path='ffcs' element={<FFCS />} />
        <Route path='schools' element={<Schools />} />
      </Routes>
    </div>
  );
};

export default Admissions;

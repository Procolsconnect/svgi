import Overview from './Overview'
import { Routes, Route } from "react-router-dom";
import CourseOutcome from "./CourseOutcome"
const Admissions = () => {
  return (
    <div>

      <Routes>
        <Route index element={<Overview />} />
        <Route path="courseoutcome" element={<CourseOutcome />} />
        {/* <Route path="pg" element={<Pg />} />
        <Route path="procedure" element={<Procedure />} />
        <Route path="research" element={<Research />} /> */}
      </Routes>
    </div>
  );
};

export default Admissions;


import Overview from './Overview'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Ug from "./Ug";
import Pg from "./Pg";
import Research from "./Research";

const Admissions = () => {
  return (
    <div>
        {/* <Ug/> */}
        {/* <Overview/> */}
        <Research />
      <Routes>
        <Route path="ug" element={<Ug />} />
        <Route path="pg" element={<Pg />} />
      </Routes>
    </div>
  );
};

export default Admissions;

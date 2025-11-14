
import Ug from './Ug'
import Overview from './Overview'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Ug from "./Ug";
import Pg from "./Pg";

const Admissions = () => {
  return (
    <div>
        {/* <Ug/> */}
        <Overview/>
      <Routes>
      
        <Route path="ug" element={<Ug />} />
        <Route path="pg" element={<Pg />} />
      </Routes>
    </div>
  );
};

export default Admissions;


import React from "react";
import Ug from './Ug'
import Overview from './Overview'
import { Routes, Route } from "react-router-dom";
import Pg from "./Pg";
import Research from "./Research";

const Admissions = () => {
  return (
    <div>
  
      <Routes>
           <Route index element={<Overview/> } /> 
        <Route path="ug" element={<Ug />} />
        <Route path="pg" element={<Pg />} />
        <Route path="procedure" element={<Procedure />} />
      </Routes>
    </div>
  );
};

export default Admissions;

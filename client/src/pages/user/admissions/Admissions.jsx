import React from "react";
import { Routes, Route } from "react-router-dom";
import Ug from "./Ug";
import Pg from "./Pg";

const Admissions = () => {
  return (
    <div>
      <Routes>
      
        <Route path="ug" element={<Ug />} />
        <Route path="pg" element={<Pg />} />
      </Routes>
    </div>
  );
};

export default Admissions;

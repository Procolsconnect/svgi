import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Home from "./pages/user/home/Home.jsx";
import Admissions from "./pages/user/admissions/Admissions.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="admissions" element={<Admissions />} />
        </Route>

        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<h2>Admin Dashboard</h2>} />
          <Route path="users" element={<h2>Manage Users</h2>} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;

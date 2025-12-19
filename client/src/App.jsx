import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import Home from "./pages/user/home/Home.jsx";
import Admissions from "./pages/user/admissions/Admissions.jsx";
import Academics from "./pages/user/academics/Academics.jsx"
import AboutOverview from "./pages/user/about/About.jsx"
import PlacementAndTraining from "./pages/user/Training/PlacementAndTraining.jsx";
import Campuslife from "./pages/user/campuslife/Campuslife.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Advertisement from "./pages/user/addvertisement/Advertisement.jsx";
import News from "./pages/user/news/News.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="admissions/*" element={<Admissions />} />
          <Route path="academics/*" element={<Academics />} />
          <Route path="about/*" element={<AboutOverview />} />
          <Route path="placement/*" element={<PlacementAndTraining />} />
          <Route path="campuslife/*" element={<Campuslife />} />
          <Route path="advertisement/*" element={<Advertisement />} />
          <Route path="news/*" element={<News />} />
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

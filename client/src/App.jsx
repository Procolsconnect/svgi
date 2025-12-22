import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Home from "./pages/user/home/Home.jsx";
import Admissions from "./pages/user/admissions/Admissions.jsx";
import Academics from "./pages/user/academics/Academics.jsx"
import AboutOverview from "./pages/user/about/About.jsx"
import PlacementAndTraining from "./pages/user/Training/PlacementAndTraining.jsx";
import Campuslife from "./pages/user/campuslife/Campuslife.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Advertisement from "./pages/user/addvertisement/Advertisement.jsx";
import News from "./pages/user/news/News.jsx";

import Dashboard from "./components/dashboard.jsx";
import HomeAdmin from "./components/admin/home-admin.jsx";
import AdmissionsAdmin from "./components/admin/admissions-admin.jsx";
import AcademicsAdmin from "./components/admin/academics-admin.jsx";
import AboutAdmin from "./components/admin/about-admin.jsx";
import PlacementAdmin from "./components/admin/placement-admin.jsx";
import CampusLifeAdmin from "./components/admin/campus-life-admin.jsx";
import NewsAdmin from "./components/admin/news-admin.jsx";
import AdvertisementAdmin from "./components/admin/advertisement-admin.jsx";

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

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<HomeAdmin />} />
          <Route path="home/:componentId" element={<HomeAdmin />} />
          <Route path="admissions" element={<AdmissionsAdmin />} />
          <Route path="admissions/:id" element={<AdmissionsAdmin />} />
          <Route path="academics" element={<AcademicsAdmin />} />
          <Route path="academics/:id" element={<AcademicsAdmin />} />
          <Route path="about" element={<AboutAdmin />} />
          <Route path="about/:pageId" element={<AboutAdmin />} />
          <Route path="about/:pageId/:componentId" element={<AboutAdmin />} />
          <Route path="placement" element={<PlacementAdmin />} />
          <Route path="placement/:id" element={<PlacementAdmin />} />
          <Route path="campuslife" element={<CampusLifeAdmin />} />
          <Route path="campuslife/:id" element={<CampusLifeAdmin />} />
          <Route path="news" element={<NewsAdmin />} />
          <Route path="news/:id" element={<NewsAdmin />} />
          <Route path="advertisement" element={<AdvertisementAdmin />} />
          <Route path="advertisement/:id" element={<AdvertisementAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

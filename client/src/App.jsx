import React, { Suspense } from "react";
import Loading from "./components/Loading.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout.jsx";
import Contact from "./pages/user/Contact.jsx";
const AdminLayout = React.lazy(() => import("./Layouts/AdminLayout.jsx"));
const Admin = React.lazy(() => import("./pages/admin/Admin.jsx"));
const Login = React.lazy(() => import("./pages/admin/Login.jsx"));
const ProtectedRoute = React.lazy(() => import("./components/admin/ProtectedRoute.jsx"));

import Home from "./pages/user/home/Home.jsx";
import Admissions from "./pages/user/admissions/Admissions.jsx";
import Academics from "./pages/user/academics/Academics.jsx"
import AboutOverview from "./pages/user/about/About.jsx"
import PlacementAndTraining from "./pages/user/Training/PlacementAndTraining.jsx";
import Campuslife from "./pages/user/campuslife/Campuslife.jsx";
import InternalComplaintsCommittee from "./pages/user/about/InternalComplaintsCommittee.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Advertisement from "./pages/user/addvertisement/Advertisement.jsx";
import News from "./pages/user/news/News.jsx";

// Lazy load Admin Components to further split the bundle
const Dashboard = React.lazy(() => import("./components/dashboard.jsx"));
const HomeAdmin = React.lazy(() => import("./components/admin/home-admin.jsx"));
const AdmissionsAdmin = React.lazy(() => import("./components/admin/admissions-admin.jsx"));
const AcademicsAdmin = React.lazy(() => import("./components/admin/academics-admin.jsx"));
const AboutAdmin = React.lazy(() => import("./components/admin/about-admin.jsx"));
const PlacementAdmin = React.lazy(() => import("./components/admin/placement-admin.jsx"));
const CampusLifeAdmin = React.lazy(() => import("./components/admin/campus-life-admin.jsx"));
const NewsAdmin = React.lazy(() => import("./components/admin/news-admin.jsx"));
const AdvertisementAdmin = React.lazy(() => import("./components/admin/advertisement-admin.jsx"));

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
          <Route path="contact/*" element={<Contact />} />
        </Route>

        <Route path="/admin/login" element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        } />

        <Route path="/admin" element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute />
          </Suspense>
        }>
          <Route element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="home" element={<HomeAdmin />} />
            <Route path="home/:componentId" element={<HomeAdmin />} />
            <Route path="admissions" element={<AdmissionsAdmin />} />
            <Route path="admissions/:id" element={<AdmissionsAdmin />} />
            <Route path="admissions/:id/:componentId" element={<AdmissionsAdmin />} />
            <Route path="academics" element={<AcademicsAdmin />} />
            <Route path="academics/:id" element={<AcademicsAdmin />} />
            <Route path="academics/:id/:componentId" element={<AcademicsAdmin />} />
            <Route path="about" element={<AboutAdmin />} />
            <Route path="about/:pageId" element={<AboutAdmin />} />
            <Route path="about/:pageId/:componentId" element={<AboutAdmin />} />
            <Route path="placement" element={<PlacementAdmin />} />
            <Route path="placement/:pageId" element={<PlacementAdmin />} />
            <Route path="placement/:pageId/:componentId" element={<PlacementAdmin />} />
            <Route path="campuslife" element={<CampusLifeAdmin />} />
            <Route path="campuslife/:id" element={<CampusLifeAdmin />} />
            <Route path="campuslife/:id/:componentId" element={<CampusLifeAdmin />} />
            <Route path="news" element={<NewsAdmin />} />
            <Route path="news/:id" element={<NewsAdmin />} />
            <Route path="advertisement" element={<AdvertisementAdmin />} />
            <Route path="advertisement/:id" element={<AdvertisementAdmin />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

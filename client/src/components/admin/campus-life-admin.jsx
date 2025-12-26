import { useNavigate, useParams } from "react-router-dom"
import OverviewAdmin from "./campus-life/OverviewAdmin"
import HostelAdmin from "./campus-life/HostelAdmin"
import HealthAdmin from "./campus-life/HealthAdmin"
import SportsAdmin from "./campus-life/SportsAdmin"
import FestivalAdmin from "./campus-life/FestivalAdmin"
import GreenAdmin from "./campus-life/GreenAdmin"
import PoliciesAdmin from "./campus-life/PoliciesAdmin"
import StudentWelfareAdmin from "./campus-life/StudentWelfareAdmin"
import OurDiamondsAdmin from "./campus-life/OurDiamondsAdmin"
import "../../components/admin-section.css"

const PAGES = [
  {
    id: "overview",
    name: "Overview",
    description: "Manage Campus Overview",
    icon: "fa-info-circle",
    color: "blue"
  },
  {
    id: "hostel",
    name: "Hostel",
    description: "Manage Hostel Facilities",
    icon: "fa-bed",
    color: "green"
  },
  {
    id: "health",
    name: "Health & Care",
    description: "Manage Health Services",
    icon: "fa-heartbeat",
    color: "red"
  },
  {
    id: "sports",
    name: "Sports",
    description: "Manage Sports & Achievements",
    icon: "fa-trophy",
    color: "orange"
  },
  {
    id: "fest",
    name: "College Fest",
    description: "Manage Festival Events",
    icon: "fa-music",
    color: "purple"
  },
  {
    id: "welfare",
    name: "Student Welfare",
    description: "Clubs & Events",
    icon: "fa-users",
    color: "teal"
  },
  {
    id: "green",
    name: "Green Campus",
    description: "Eco-friendly Initiatives",
    icon: "fa-leaf",
    color: "cyan"
  },
  {
    id: "policies",
    name: "Policies",
    description: "Campus Rules & Regulations",
    icon: "fa-file-contract",
    color: "dark-blue"
  },
  {
    id: "diamonds",
    name: "Our Diamonds",
    description: "Alumni & Student Achievements",
    icon: "fa-gem",
    color: "pink"
  }
]

export default function CampusLifeAdmin() {
  const { id: pageId } = useParams()
  const navigate = useNavigate()

  // 1. DASHBOARD VIEW (If no page is selected)
  if (!pageId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <h1>Campus Life Admin Dashboard</h1>
            <p>Select a section to manage its content</p>
          </div>
        </div>

        <div className="info-cards">
          {PAGES.map(page => (
            <div key={page.id} className={`info-card ${page.color}`} onClick={() => navigate(`/admin/campuslife/${page.id}`)} style={{ cursor: 'pointer' }}>
              <i className={`fa ${page.icon}`}></i>
              <div>
                <h3>{page.name}</h3>
                <p>{page.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 2. PAGE ROUTING
  return (
    <div className="admin-page-container">
      {pageId === "overview" && <OverviewAdmin />}
      {pageId === "hostel" && <HostelAdmin />}
      {pageId === "health" && <HealthAdmin />}
      {pageId === "sports" && <SportsAdmin />}
      {pageId === "fest" && <FestivalAdmin />}
      {pageId === "green" && <GreenAdmin />}
      {pageId === "policies" && <PoliciesAdmin />}
      {pageId === "welfare" && <StudentWelfareAdmin />}
      {pageId === "diamonds" && <OurDiamondsAdmin />}

      {/* 404 Case */}
      {!PAGES.find(p => p.id === pageId) && (
        <div className="admin-section">
          <h1>Page Not Found</h1>
          <button className="back-link" onClick={() => navigate("/admin/campuslife")}>← Back to Dashboard</button>
        </div>
      )}
    </div>
  )
}

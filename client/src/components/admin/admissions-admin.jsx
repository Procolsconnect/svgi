import { useNavigate, useParams } from "react-router-dom"
import OverviewAdmin from "./admissions/OverviewAdmin"
import UgAdmin from "./admissions/UgAdmin"
import PgAdmin from "./admissions/PgAdmin"
import ResearchAdmin from "./admissions/ResearchAdmin"
import ProcedureAdmin from "./admissions/ProcedureAdmin"
import "../../components/admin-section.css"

const PAGES = [
  {
    id: "overview",
    name: "Overview",
    description: "Manage Hero, Intro, and Contact Cards",
    icon: "fa-info-circle",
    color: "blue"
  },
  {
    id: "ug",
    name: "UG Programs",
    description: "Manage Undergraduate Courses",
    icon: "fa-graduation-cap",
    color: "green"
  },
  {
    id: "pg",
    name: "PG Programs",
    description: "Manage Postgraduate Courses",
    icon: "fa-user-graduate",
    color: "orange"
  },
  {
    id: "research",
    name: "Research",
    description: "Manage Research Programs",
    icon: "fa-microscope",
    color: "purple"
  },
  {
    id: "procedure",
    name: "Procedure",
    description: "Manage Admission Procedure",
    icon: "fa-list-ol",
    color: "red"
  },
]

export default function AdmissionsAdmin() {
  const { id: pageId } = useParams()
  const navigate = useNavigate()

  // 1. DASHBOARD VIEW (If no page is selected)
  if (!pageId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <h1>Admissions Admin Dashboard</h1>
            <p>Select a section to manage its content</p>
          </div>
        </div>

        <div className="info-cards">
          {PAGES.map(page => (
            <div key={page.id} className={`info-card ${page.color}`} onClick={() => navigate(`/admin/admissions/${page.id}`)} style={{ cursor: 'pointer' }}>
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
      {pageId === "ug" && <UgAdmin />}
      {pageId === "pg" && <PgAdmin />}
      {pageId === "research" && <ResearchAdmin />}
      {pageId === "procedure" && <ProcedureAdmin />}

      {/* 404 Case */}
      {!PAGES.find(p => p.id === pageId) && (
        <div className="admin-section">
          <h1>Page Not Found</h1>
          <button className="back-link" onClick={() => navigate("/admin/admissions")}>← Back to Dashboard</button>
        </div>
      )}
    </div>
  )
}

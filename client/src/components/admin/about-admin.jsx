import { useNavigate, useParams } from "react-router-dom"
import OverviewAdmin from "./about/OverviewAdmin"
import VisionMissionAdmin from "./about/VisionMissionAdmin"
import LeadershipAdmin from "./about/LeadershipAdmin"
import "../../components/admin-section.css"

const PAGES = [
  {
    id: "overview",
    name: "Overview",
    description: "Main intro and summary of SVGI",
    icon: "fa-info-circle",
    color: "blue"
  },
  {
    id: "vision-mission",
    name: "Vision & Mission",
    description: "Core values and future goals",
    icon: "fa-bullseye",
    color: "green"
  },
  {
    id: "leadership",
    name: "Leadership",
    description: "Board members and executive team",
    icon: "fa-users",
    color: "orange"
  },
]

export default function AboutAdmin() {
  const { pageId } = useParams()
  const navigate = useNavigate()

  // 1. DASHBOARD VIEW (If no page is selected)
  if (!pageId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <h1>About Section Admin</h1>
            <p>Select a page to manage its content and components</p>
          </div>
        </div>

        <div className="info-cards">
          {PAGES.map(page => (
            <div key={page.id} className={`info-card ${page.color}`} onClick={() => navigate(`/admin/about/${page.id}`)} style={{ cursor: 'pointer' }}>
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

  // 2. PAGE ROUTING (Renders the separate file based on URL)
  return (
    <div className="admin-page-container">
      {pageId === "overview" && <OverviewAdmin />}
      {pageId === "vision-mission" && <VisionMissionAdmin />}
      {pageId === "leadership" && <LeadershipAdmin />}

      {/* 404 Case */}
      {!["overview", "vision-mission", "leadership"].includes(pageId) && (
        <div className="admin-section">
          <h1>Page Not Found</h1>
          <button className="back-link" onClick={() => navigate("/admin/about")}>← Back to Dashboard</button>
        </div>
      )}
    </div>
  )
}

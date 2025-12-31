import { useNavigate, useParams } from "react-router-dom"
import OverviewAdmin from "./placement/OverviewAdmin"
import PageAdmin from "./placement/PageAdmin"
import ProcessAdmin from "./placement/ProcessAdmin"
import "../../components/admin-section.css"

const PAGES = [
  {
    id: "overview",
    name: "Overview",
    description: "Manage Placement Overview & Slider",
    icon: "fa-briefcase",
    color: "blue"
  },
  {
    id: "placementpage",
    name: "Placement Page",
    description: "Manage Hero, Slider, Team, Companies, etc.",
    icon: "fa-file-alt",
    color: "green"
  },
  {
    id: "process",
    name: "Placement Process",
    description: "Manage Hero and Process Steps",
    icon: "fa-cogs",
    color: "orange"
  }
]

export default function PlacementAdmin() {
  const { pageId, componentId } = useParams()
  const navigate = useNavigate()

  // 1. DASHBOARD VIEW (If no page is selected)
  if (!pageId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <h1>Placement Admin Dashboard</h1>
            <p>Select a section to manage its content</p>
          </div>
        </div>

        <div className="info-cards">
          {PAGES.map(page => (
            <div key={page.id} className={`info-card ${page.color}`} onClick={() => navigate(`/admin/placement/${page.id}`)} style={{ cursor: 'pointer' }}>
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

  const activePage = PAGES.find(p => p.id === pageId)

  // 2. PAGE ROUTING
  return (
    <div className="admin-page-container">
      {pageId === "overview" && <OverviewAdmin />}
      {pageId === "placementpage" && <PageAdmin />}
      {pageId === "process" && <ProcessAdmin />}

      {/* 404 Case */}
      {!activePage && (
        <div className="admin-section">
          <h1>Page Not Found</h1>
          <button className="back-link" onClick={() => navigate("/admin/placement")}>← Back to Dashboard</button>
        </div>
      )}
    </div>
  )
}

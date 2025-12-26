import { useNavigate, useParams } from "react-router-dom"
import OverviewAdmin from "./academics/OverviewAdmin"
import CourseOutcomeAdmin from "./academics/CourseOutcomeAdmin"
import LibraryAdmin from "./academics/LibraryAdmin"
import FeedbackAdmin from "./academics/FeedbackAdmin"
import "../../components/admin-section.css"

// Placeholder for RDBC
const RdbcAdmin = () => <div><h1>RDBC Manager</h1><p>Coming Soon...</p></div>

const PAGES = [
  {
    id: "overview",
    name: "Overview",
    description: "Manage Hero, Intro, and Feature Cards",
    icon: "fa-info-circle",
    color: "blue"
  },
  {
    id: "courseoutcome",
    name: "Course Outcome",
    description: "Manage Outcomes and PDF resources",
    icon: "fa-graduation-cap",
    color: "green"
  },
  {
    id: "library",
    name: "Library",
    description: "Manage Library Hero, Images, Videos, and Resources",
    icon: "fa-book",
    color: "orange"
  },
  {
    id: "feedback",
    name: "Feedback",
    description: "Manage Feedback Hero, Reviews, and FAQs",
    icon: "fa-comments",
    color: "purple"
  },
  // {
  //   id: "rdbc",
  //   name: "RDBC",
  //   description: "Manage RDBC Content",
  //   icon: "fa-flask",
  //   color: "red"
  // },
]

export default function AcademicsAdmin() {
  const { id: pageId, componentId } = useParams() // Note: Route param might be defined differently in App.js. 
  // Typically /admin/academics/:id/:componentId?
  const navigate = useNavigate()

  // 1. DASHBOARD VIEW (If no page is selected)
  if (!pageId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <h1>Academics Admin Dashboard</h1>
            <p>Select a section to manage its content</p>
          </div>
        </div>

        <div className="info-cards">
          {PAGES.map(page => (
            <div key={page.id} className={`info-card ${page.color}`} onClick={() => navigate(`/admin/academics/${page.id}`)} style={{ cursor: 'pointer' }}>
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
      {pageId === "courseoutcome" && <CourseOutcomeAdmin />}
      {pageId === "library" && <LibraryAdmin />}
      {pageId === "feedback" && <FeedbackAdmin />}
      {pageId === "rdbc" && <RdbcAdmin />}

      {/* 404 Case */}
      {!PAGES.find(p => p.id === pageId) && (
        <div className="admin-section">
          <h1>Page Not Found</h1>
          <button className="back-link" onClick={() => navigate("/admin/academics")}>← Back to Dashboard</button>
        </div>
      )}
    </div>
  )
}

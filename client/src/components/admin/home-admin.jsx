import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

// --- 1. GLOBAL CONFIGURATION ---
// This object maps each section to its API endpoint, table columns, and form fields.
// If you add a NEW component, just add a new entry here!
const API_BASE = import.meta.env.VITE_API_URL + "/api"

const SECTION_CONFIG = {
  "hero-slider": {
    endpoint: "/hero",
    title: "Hero Slider",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "media_url", label: "Media" },
      { key: "status", label: "Status" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "button_text", label: "Button Text", type: "text", required: true },
      { name: "media", label: "Hero Media (Image/Video)", type: "file", required: true },
    ]
  },
  "institutions": {
    endpoint: "/institution",
    title: "Institutions",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "image_url", label: "Image" },
      { key: "logo_url", label: "Logo" },
      { key: "status", label: "Status" },
    ],
    fields: [
      { name: "title", label: "Name", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "link", label: "Website Link", type: "text", required: true },
      { name: "image", label: "Campus Image", type: "file", required: true },
      { name: "logo", label: "Institution Logo", type: "file", required: true },
    ]
  },
  "why-svg": {
    endpoint: "/service-offerings",
    title: "Why SVG",
    limit: 4,
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "image", label: "Icon/Image" },
    ],
    fields: [
      { name: "title", label: "Service Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "image", label: "Icon Image", type: "file", required: true },
    ]
  },
  "placement-records": {
    endpoint: "/placements",
    title: "Placement Records",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Student Name" },
      { key: "desc", label: "Company/Package" },
      { key: "img", label: "Student Photo" },
    ],
    fields: [
      { name: "title", label: "Student Name", type: "text", required: true },
      { name: "desc", label: "Position/Company", type: "text", required: true },
      { name: "img", label: "Photo", type: "file", required: true },
    ]
  },
  "student-achievements": {
    endpoint: "/student-achievements",
    title: "Student Achievements",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "img", label: "Achievement Image" },
    ],
    fields: [
      { name: "title", label: "Achievement Title", type: "text", required: true },
      { name: "description", label: "Details", type: "textarea", required: true },
      { name: "img", label: "Image", type: "file", required: true },
    ]
  },
  "latest-event": {
    endpoint: "/events",
    title: "Latest Events",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Event Name" },
      { key: "desc", label: "Description" },
      { key: "img", label: "Event Banner" },
    ],
    fields: [
      { name: "title", label: "Event Name", type: "text", required: true },
      { name: "desc", label: "Event Description", type: "textarea", required: true },
      { name: "img", label: "Event Image", type: "file", required: true },
    ]
  },
  "our-team": {
    endpoint: "/ourteam",
    title: "Our Team",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "name", label: "Name" },
      { key: "role", label: "Role" },
      { key: "img", label: "Photo" },
    ],
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "role", label: "Position/Role", type: "text", required: true },
      { name: "img", label: "Photo", type: "file", required: true },
    ]
  },
  "logo-section": {
    endpoint: "/logosection1",
    title: "Affiliation Logos",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "name", label: "Partner Name" },
      { key: "img", label: "Logo" },
    ],
    fields: [
      { name: "name", label: "Company/Partner Name", type: "text", required: true },
      { name: "img", label: "Logo Image", type: "file", required: true },
    ]
  },
  "logo-section-2": {
    endpoint: "/logosection2",
    title: "Partner Logos",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "name", label: "Partner Name" },
      { key: "img", label: "Logo" },
    ],
    fields: [
      { name: "name", label: "Company/Partner Name", type: "text", required: true },
      { name: "img", label: "Logo Image", type: "file", required: true },
    ]
  },
  "placement-card": {
    endpoint: "/placement-swiper",
    title: "Placement Swiper",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "image_url", label: "Image" },
    ],
    fields: [
      { name: "image", label: "Upload Image", type: "file", required: true },
    ]
  },
  "campus": {
    endpoint: "/campus",
    title: "Campus Infrastructure",
    limit: 1,
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "since", label: "Since" },
      { key: "imagesCard", label: "Images" },
      { key: "videosCard", label: "Videos" },
      { key: "toursCard", label: "Tours" },
    ],
    fields: [
      { name: "title", label: "Section Title", type: "text", required: true },
      { name: "description", label: "Section Description", type: "textarea", required: true },
      { name: "since", label: "Since Year", type: "text", required: true },
      { name: "images", label: "Infrastructure Images (Max 5)", type: "file", multiple: true, required: true },
      { name: "video", label: "Infrastructure Video", type: "file", required: true },
      { name: "image", label: "360 Tour Image/Banner", type: "file", required: true },
    ]
  }
}

// Full list of sections for the main dashboard cards
const HOMEPAGE_SECTIONS = [
  { id: 1, name: "Hero Slider", slug: "hero-slider", icon: "fa-images" },
  { id: 2, name: "Institutions", slug: "institutions", icon: "fa-university" },
  { id: 3, name: "Placement Records", slug: "placement-records", icon: "fa-trophy" },
  { id: 4, name: "Why SVG", slug: "why-svg", icon: "fa-question-circle" },
  { id: 5, name: "Campus Infra", slug: "campus", icon: "fa-school" },
  { id: 6, name: "Placement Card", slug: "placement-card", icon: "fa-id-card" },
  { id: 7, name: "Latest Event", slug: "latest-event", icon: "fa-calendar-alt" },
  { id: 8, name: "Student Achievements", slug: "student-achievements", icon: "fa-medal" },
  { id: 9, name: "Our Team", slug: "our-team", icon: "fa-users" },
  { id: 10, name: "Logo Section 1", slug: "logo-section", icon: "fa-certificate" },
  { id: 11, name: "Logo Section 2", slug: "logo-section-2", icon: "fa-handshake" },

]

export default function HomeAdmin() {
  const { componentId } = useParams()
  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  // Get current section config
  const currentConfig = SECTION_CONFIG[componentId]

  // --- 2. GENERIC DATA FETCHING ---
  const fetchData = async () => {
    if (!currentConfig) return
    setLoading(true)
    try {
      const response = await axios.get(`${API_BASE}${currentConfig.endpoint}`)
      setItems(response.data.data || [])
    } catch (error) {
      console.error("Fetch Error:", error)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (componentId) fetchData()
  }, [componentId])

  // --- 3. GENERIC ACTIONS ---
  const handleSave = async (formData) => {
    if (!currentConfig) return
    setSubmitting(true)

    try {
      // Automatic FormData creation (supports all fields and multiple files)
      const dataToSend = new FormData()
      Object.keys(formData).forEach(key => {
        const val = formData[key]
        if (val !== null && val !== undefined) {
          if (Array.isArray(val)) {
            // Handle multiple files
            val.forEach(item => dataToSend.append(key, item))
          } else {
            dataToSend.append(key, val)
          }
        }
      })

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 600000
      }

      const id = editingItem?._id || editingItem?.id
      if (id) {
        await axios.put(`${API_BASE}${currentConfig.endpoint}/${id}`, dataToSend, config)
      } else {
        await axios.post(`${API_BASE}${currentConfig.endpoint}`, dataToSend, config)
      }

      setIsModalOpen(false)
      fetchData()
      alert("Successfully saved!")
    } catch (error) {
      console.error("Save Error:", error)
      alert(`Failed: ${error.response?.data?.message || error.message}`)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return
    try {
      await axios.delete(`${API_BASE}${currentConfig.endpoint}/${id}`)
      fetchData()
    } catch (error) {
      alert("Delete failed")
    }
  }

  // --- 4. RENDERERS ---

  // Dashboard View (Card Grid)
  if (!componentId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <h1>Homepage Admin</h1>
          <p>Click a section to manage its content.</p>
        </div>
        <div className="component-cards">
          {HOMEPAGE_SECTIONS.map((section) => (
            <div key={section.id} className="component-card" onClick={() => navigate(`/admin/home/${section.slug}`)}>
              <div className="card-icon"><i className={`fa ${section.icon}`}></i></div>
              <h3>{section.name}</h3>
              <p>Manage list items</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Management Table View
  if (!currentConfig) {
    return (
      <div className="admin-section">
        <button onClick={() => navigate("/admin/home")} className="back-link">← Back</button>
        <h1>Coming Soon</h1>
        <p>This section is still being set up.</p>
      </div>
    )
  }

  const isAddDisabled = currentConfig.limit > 0 && items.length >= currentConfig.limit;

  return (
    <div className="admin-section">
      <div className="section-header">
        <div>
          <button onClick={() => navigate("/admin/home")} className="back-link">← Back to Dashboard</button>
          <h1>{currentConfig.title}</h1>
          <p>{loading ? "Refreshing..." : `Managing items for ${currentConfig.title}`}</p>
        </div>
        <button
          className="add-btn"
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          disabled={isAddDisabled}
          title={isAddDisabled ? `Maximum ${currentConfig.limit} item(s) allowed` : ""}
        >
          <i className="fa fa-plus"></i> Add New
        </button>
      </div>

      <DataTable
        columns={currentConfig.columns}
        data={items}
        onEdit={(item) => { setEditingItem(item); setIsModalOpen(true); }}
        onDelete={handleDeleteItem => handleDelete(handleDeleteItem)}
      />

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        submitting={submitting}
        title={editingItem ? "Edit Item" : "Add New Item"}
        fields={currentConfig.fields}
        initialData={editingItem}
      />
    </div>
  )
}

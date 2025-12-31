import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const SECTION_CONFIG = {
  "news-hero": {
    endpoint: "/newshero",
    title: "News Hero",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "image", label: "Image" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "image", label: "Hero Image", type: "file", required: true },
    ]
  },
  "news-report": {
    endpoint: "/newsreport",
    title: "News Report",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "video_url", label: "Video URL" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "video_url", label: "Video URL", type: "text", required: true },
    ]
  },
  "news-card": {
    endpoint: "/newscard",
    title: "News Card",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "image", label: "Image" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "image", label: "Card Image", type: "file", required: true },
    ]
  },
  "news-svgi": {
    endpoint: "/NewsSvgi",
    title: "SVGI News",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "image1", label: "Image 1" },
      { key: "image2", label: "Image 2" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "image1", label: "Image 1", type: "file", required: true },
      { name: "image2", label: "Image 2", type: "file", required: true },
    ]
  },
  "news-section": {
    endpoint: "/newssection",
    title: "News Section",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "title", label: "Title" },
      { key: "description", label: "Description" },
      { key: "image", label: "Image" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "image", label: "Section Image", type: "file", required: true },
    ]
  },
  "news-college": {
    endpoint: "/newscollege",
    title: "News College",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "type", label: "Type" },
      { key: "text", label: "Text" },
      { key: "url", label: "Image URL" },
    ],
    fields: [
      {
        name: "type",
        label: "Type",
        type: "select",
        options: [
          { value: "text", label: "Text" },
          { value: "image", label: "Image" }
        ],
        required: true
      },
      { name: "text", label: "Text Content (if type is Text)", type: "textarea" },
      { name: "image", label: "Upload Image (if type is Image)", type: "file" },
    ]
  }
}

const NEWS_SECTIONS = [
  { id: 1, name: "News Hero", slug: "news-hero", icon: "fa-newspaper" },
  { id: 2, name: "News Report", slug: "news-report", icon: "fa-video" },
  { id: 3, name: "News Card", slug: "news-card", icon: "fa-th-large" },
  { id: 4, name: "SVGI News", slug: "news-svgi", icon: "fa-university" },
  { id: 5, name: "News Section", slug: "news-section", icon: "fa-puzzle-piece" },
  { id: 6, name: "News College", slug: "news-college", icon: "fa-school" },
]

export default function NewsAdmin() {
  const { id: componentId } = useParams()
  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const currentConfig = SECTION_CONFIG[componentId]

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

  const handleSave = async (formData) => {
    if (!currentConfig) return
    setSubmitting(true)

    try {
      const dataToSend = new FormData()
      Object.keys(formData).forEach(key => {
        const val = formData[key]
        if (val !== null && val !== undefined) {
          if (Array.isArray(val)) {
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

  if (!componentId) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <h1>News Section Admin</h1>
          <p>Click a section to manage its content.</p>
        </div>
        <div className="component-cards">
          {NEWS_SECTIONS.map((section) => (
            <div key={section.id} className="component-card" onClick={() => navigate(`/admin/news/${section.slug}`)}>
              <div className="card-icon"><i className={`fa ${section.icon}`}></i></div>
              <h3>{section.name}</h3>
              <p>Manage news content</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!currentConfig) {
    return (
      <div className="admin-section">
        <button onClick={() => navigate("/admin/news")} className="back-link">← Back</button>
        <h1>Coming Soon</h1>
        <p>This section is still being set up.</p>
      </div>
    )
  }

  return (
    <div className="admin-section">
      <div className="section-header">
        <div>
          <button onClick={() => navigate("/admin/news")} className="back-link">← Back to Dashboard</button>
          <h1>{currentConfig.title}</h1>
          <p>{loading ? "Refreshing..." : `Managing items for ${currentConfig.title}`}</p>
        </div>
        <button
          className="add-btn"
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}>
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

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

// --- 1. GLOBAL CONFIGURATION ---
const API_BASE = "http://localhost:3000/api"

const SECTION_CONFIG = {
  "adv-card": {
    endpoint: "/advertisementcard",
    title: "Advertisement Card",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "image", label: "Image" },
    ],
    fields: [
      { name: "image", label: "Adv Image", type: "file", required: true },
    ]
  },
  "adv-faculty": {
    endpoint: "/advertisemenfaculty",
    title: "Advertisement Faculty",
    columns: [
      { key: "index", label: "Sr. No." },
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "mobile", label: "Mobile" },
      { key: "page", label: "Page" },
      { key: "image", label: "Photo" },
    ],
    fields: [
      { name: "name", label: "Faculty Name", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "mobile", label: "Mobile No.", type: "text", required: true },
      { name: "email", label: "Email ID", type: "text", required: true },
      { name: "page", label: "Page Link", type: "text", required: true },
      { name: "image", label: "Photo", type: "file", required: true },
    ]
  }
}

const ADV_SECTIONS = [
  { id: 1, name: "Adv Card", slug: "adv-card", icon: "fa-ad" },
  { id: 2, name: "Faculty Adv", slug: "adv-faculty", icon: "fa-user-tie" },
]

export default function AdvertisementAdmin() {
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
          <h1>Advertisement Admin</h1>
          <p>Click a section to manage its content.</p>
        </div>
        <div className="component-cards">
          {ADV_SECTIONS.map((section) => (
            <div key={section.id} className="component-card" onClick={() => navigate(`/admin/advertisement/${section.slug}`)}>
              <div className="card-icon"><i className={`fa ${section.icon}`}></i></div>
              <h3>{section.name}</h3>
              <p>Manage ads content</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!currentConfig) {
    return (
      <div className="admin-section">
        <button onClick={() => navigate("/admin/advertisement")} className="back-link">← Back</button>
        <h1>Coming Soon</h1>
        <p>This section is still being set up.</p>
      </div>
    )
  }

  return (
    <div className="admin-section">
      <div className="section-header">
        <div>
          <button onClick={() => navigate("/admin/advertisement")} className="back-link">← Back to Dashboard</button>
          <h1>{currentConfig.title}</h1>
          <p>{loading ? "Refreshing..." : `Managing items for ${currentConfig.title}`}</p>
        </div>
        <button
          className="add-btn"
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
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

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = "http://localhost:3000/api/campus"

const SPORTS_CONFIG = {
    "hero": {
        endpoint: "/sportshero",
        title: "Sports Hero Section",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "cards": {
        endpoint: "/sportscard",
        title: "Sports Cards",
        limit: 10,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "achievements": {
        endpoint: "/sportsacheivement",
        title: "Sports Achievements",
        limit: 20,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "videos": {
        endpoint: "/sportsvideo",
        title: "Sports Videos",
        limit: 5,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "video", label: "Video" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "video", label: "Video File", type: "file", required: true },
        ]
    },
    "athletes": {
        endpoint: "/sportsathelets",
        title: "Featured Athletes",
        limit: 20,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "name", label: "Name" },
            { key: "achievement", label: "Achievement" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "name", label: "Athlete Name", type: "text", required: true },
            { name: "achievement", label: "Achievement", type: "textarea", required: true },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    }
}

export default function SportsAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = SPORTS_CONFIG[componentId]

    const fetchData = async () => {
        if (!currentConfig) return
        setLoading(true)
        try {
            const response = await axios.get(`${API_BASE}${currentConfig.endpoint}`)
            setItems(response.data.data || [])
        } catch (error) {
            setItems([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (componentId && currentConfig) {
            fetchData()
        }
    }, [componentId])

    if (!componentId) {
        return (
              <div className="admin-section">
                <div className="section-header">
                    <div>
                        <button className="back-link" onClick={() => navigate("/admin/campuslife")}>← Back to Campus Life</button>
                        <h1>Sports</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
            <div className="component-cards">
                <div className="component-card" onClick={() => navigate("/admin/campuslife/sports/hero")}>
                    <div className="card-icon"><i className="fa fa-image"></i></div>
                    <h3>Hero Section</h3>
                    <p>Main Banner</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/campuslife/sports/cards")}>
                    <div className="card-icon"><i className="fa fa-th-large"></i></div>
                    <h3>Cards</h3>
                    <p>Sports Info Cards</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/campuslife/sports/achievements")}>
                    <div className="card-icon"><i className="fa fa-trophy"></i></div>
                    <h3>Achievements</h3>
                    <p>Medals & Awards</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/campuslife/sports/videos")}>
                    <div className="card-icon"><i className="fa fa-video"></i></div>
                    <h3>Videos</h3>
                    <p>Sports Clips</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/campuslife/sports/athletes")}>
                    <div className="card-icon"><i className="fa fa-running"></i></div>
                    <h3>Athletes</h3>
                    <p>Featured Athletes</p>
                </div>
            </div>
            </div>
        )
    }

    const handleSave = async (formData) => {
        setSubmitting(true)
        try {
            const dataToSend = new FormData()
            Object.keys(formData).forEach(key => {
                const val = formData[key]
                dataToSend.append(key, val)
            })

            const id = editingItem?._id || editingItem?.id
            if (id) {
                await axios.put(`${API_BASE}${currentConfig.endpoint}/${id}`, dataToSend)
            } else {
                await axios.post(`${API_BASE}${currentConfig.endpoint}`, dataToSend)
            }
            setIsModalOpen(false)
            fetchData()
        } catch (error) {
            alert("Save failed: " + (error.response?.data?.message || error.message))
        } finally {
            setSubmitting(false)
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return
        try {
            await axios.delete(`${API_BASE}${currentConfig.endpoint}/${id}`)
            fetchData()
        } catch (error) {
            alert("Delete failed")
        }
    }

    const isAddDisabled = currentConfig?.limit > 0 && items.length >= currentConfig.limit;

    return (
        <div className="admin-section">
            <div className="section-header">
                <button className="back-link" onClick={() => navigate("/admin/campuslife/sports")}>← Back</button>
                <h1>{currentConfig.title}</h1>
                <button
                    className="add-btn"
                    onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
                    disabled={isAddDisabled}
                    title={isAddDisabled ? `Maximum ${currentConfig.limit} item(s) allowed` : ""}
                >
                    <i className="fa fa-plus"></i> Add Content
                </button>
            </div>

            <DataTable
                columns={currentConfig.columns}
                data={items}
                onEdit={(item) => { setEditingItem(item); setIsModalOpen(true); }}
                onDelete={handleDelete}
            />

            <FormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                title={editingItem ? "Edit Content" : "Add Content"}
                fields={currentConfig.fields}
                initialData={editingItem}
                submitting={submitting}
            />
        </div>
    )
}

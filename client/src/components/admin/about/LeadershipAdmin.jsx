import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const LEADERSHIP_CONFIG = {
    "hero": {
        endpoint: "/leadership/hero",
        title: "Leadership Hero",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "image", label: "Photo", type: "file", required: true },
        ]
    },
    "material": {
        endpoint: "/leadership/material-card",
        title: "Leadership Cards",
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "name", label: "Name" },
            { key: "movie", label: "Role/Designation" },
            { key: "img", label: "Photo" },
        ],
        fields: [
            { name: "name", label: "Name", type: "text", required: true },
            { name: "movie", label: "Role/Designation", type: "text", required: true },
            { name: "desc", label: "Short Bio", type: "textarea", required: true },
            { name: "image", label: "Photo", type: "file", required: true },
            { name: "color", label: "Accent Color (HEX)", type: "text" },
            { name: "facebook", label: "Facebook URL", type: "text" },
            { name: "twitter", label: "Twitter URL", type: "text" },
            { name: "linkedin", label: "LinkedIn URL", type: "text" },
            { name: "googlePlus", label: "Google Plus URL", type: "text" },
        ]
    },
    "quote": {
        endpoint: "/leadership/quote",
        title: "Quote Cards",
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Author" },
            { key: "text", label: "Quote" },
            { key: "image", label: "Photo" },
        ],
        fields: [
            { name: "title", label: "Author Name", type: "text", required: true },
            { name: "text", label: "Quote Text", type: "textarea", required: true },
            { name: "image", label: "Author Photo", type: "file", required: true },
            { name: "link", label: "Read More Link", type: "text" },
        ]
    }
}

export default function LeadershipAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = LEADERSHIP_CONFIG[componentId]

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
                        <button className="back-link" onClick={() => navigate("/admin/about")}>← Back to About</button>
                        <h1>Leadership</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/about/leadership/hero")}>
                        <div className="card-icon"><i className="fa fa-user-tie"></i></div>
                        <h3>Leadership Hero</h3>
                        <p>Hero banner section</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/leadership/material")}>
                        <div className="card-icon"><i className="fa fa-users"></i></div>
                        <h3>Leadership Cards</h3>
                        <p>Profile cards for leaders</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/leadership/quote")}>
                        <div className="card-icon"><i className="fa fa-quote-left"></i></div>
                        <h3>Quote Cards</h3>
                        <p>Thematic quotes with photos</p>
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
                dataToSend.append(key, formData[key])
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
            alert("Save failed")
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

    return (
        <div className="admin-section">
            <div className="section-header">
                <button className="back-link" onClick={() => navigate("/admin/about/leadership")}>← Back</button>
                <h1>{currentConfig.title}</h1>
                <button
                    className="add-btn"
                    onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
                    disabled={componentId === 'chairman' && items.length >= 1}
                >
                    <i className="fa fa-plus"></i> Add Entry
                </button>
            </div>

            <DataTable columns={currentConfig.columns} data={items} onEdit={(item) => { setEditingItem(item); setIsModalOpen(true); }} onDelete={handleDelete} />

            <FormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                title={editingItem ? "Edit Entry" : "Add Entry"}
                fields={currentConfig.fields}
                initialData={editingItem}
                submitting={submitting}
            />
        </div>
    )
}

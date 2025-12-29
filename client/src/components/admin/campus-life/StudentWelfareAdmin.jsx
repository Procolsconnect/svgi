import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api/campus"

const WELFARE_CONFIG = {
    "hero": {
        endpoint: "/welfarehero",
        title: "Welfare Hero Section",
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
    "bouncer": {
        endpoint: "/bouncertitle",
        title: "Bouncer Title",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
        ]
    },
    "fancytext": {
        endpoint: "/fancytext",
        title: "Fancy Text Section",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "text", label: "Text" },
        ],
        fields: [
            { name: "text", label: "Text", type: "text", required: true },
        ]
    },
    "clubs": {
        endpoint: "/studentclubs",
        title: "Student Clubs",
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
    "events": {
        endpoint: "/eventgallery",
        title: "Event Gallery",
        limit: 50,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Event Title", type: "text", required: true },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    }
}

export default function StudentWelfareAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = WELFARE_CONFIG[componentId]

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
                        <h1>Student Welfare</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/campuslife/welfare/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Hero Section</h3>
                        <p>Main Banner</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/campuslife/welfare/bouncer")}>
                        <div className="card-icon"><i className="fa fa-text-height"></i></div>
                        <h3>Bouncer Title</h3>
                        <p>Animated Title</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/campuslife/welfare/fancytext")}>
                        <div className="card-icon"><i className="fa fa-font"></i></div>
                        <h3>Fancy Text</h3>
                        <p>Decorative Text</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/campuslife/welfare/clubs")}>
                        <div className="card-icon"><i className="fa fa-users"></i></div>
                        <h3>Student Clubs</h3>
                        <p>Club Activities</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/campuslife/welfare/events")}>
                        <div className="card-icon"><i className="fa fa-camera"></i></div>
                        <h3>Event Gallery</h3>
                        <p>Welfare Events</p>
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
                <button className="back-link" onClick={() => navigate("/admin/campuslife/welfare")}>← Back</button>
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

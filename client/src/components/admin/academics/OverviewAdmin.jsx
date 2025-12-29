import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const OVERVIEW_CONFIG = {
    "hero": {
        endpoint: "/academicshero",
        title: "Academics Hero Section",
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
    "intro": { // Mapping "content" to "intro" for UI consistency
        endpoint: "/academicscontent",
        title: "Introduction Text",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Heading" },
            { key: "description", label: "Description" },
        ],
        fields: [
            { name: "title", label: "Section Heading", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
        ]
    },
    "cards": {
        endpoint: "/academicscard",
        title: "Feature Cards",
        limit: 10,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Card Title", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "image", label: "Card Image", type: "file", required: true },
        ]
    }
}

export default function AcademicsOverview() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = OVERVIEW_CONFIG[componentId]

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
                        <button className="back-link" onClick={() => navigate("/admin/academics")}>← Back to Academics</button>
                        <h1>Overview</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/academics/overview/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Hero Section</h3>
                        <p>Main Banner Image</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/academics/overview/intro")}>
                        <div className="card-icon"><i className="fa fa-align-left"></i></div>
                        <h3>Introduction Text</h3>
                        <p>Introductory Content</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/academics/overview/cards")}>
                        <div className="card-icon"><i className="fa fa-th-large"></i></div>
                        <h3>Feature Cards</h3>
                        <p>Grid of Cards</p>
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
                <button className="back-link" onClick={() => navigate("/admin/academics/overview")}>← Back</button>
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

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = "http://localhost:3000/api/campus"

const POLICIES_CONFIG = {
    "hero": {
        endpoint: "/policyhero",
        title: "Policies Hero Section",
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
    "title": {
        endpoint: "/policytitle",
        title: "Policies Title Section",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
        ]
    },
    "cards": {
        endpoint: "/policycard",
        title: "Policy Cards",
        limit: 20,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "image", label: "Icon/Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "image", label: "Icon Image", type: "file", required: true },
        ]
    }
}

export default function PoliciesAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = POLICIES_CONFIG[componentId]

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
                        <h1>Policies</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
            <div className="component-cards">
                <div className="component-card" onClick={() => navigate("/admin/campuslife/policies/hero")}>
                    <div className="card-icon"><i className="fa fa-image"></i></div>
                    <h3>Hero Section</h3>
                    <p>Main Banner</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/campuslife/policies/title")}>
                    <div className="card-icon"><i className="fa fa-heading"></i></div>
                    <h3>Title</h3>
                    <p>Page Title & Description</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/campuslife/policies/cards")}>
                    <div className="card-icon"><i className="fa fa-file-alt"></i></div>
                    <h3>Policies</h3>
                    <p>Policy Cards</p>
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
                <button className="back-link" onClick={() => navigate("/admin/campuslife/policies")}>← Back</button>
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

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const OVERVIEW_CONFIG = {
    "hero": {
        endpoint: "/overviewhero",
        title: "Admissions Hero Section",
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
    "intro": {
        endpoint: "/overview",
        title: "Overview Content",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title1", label: "Title" },
            { key: "para1", label: "Description" },
            { key: "image1", label: "Main Image" },
            { key: "title2", label: "Title2" },
            { key: "para2", label: "Description2" },
            { key: "ug", label: "UG Image" },
            { key: "pg", label: "PG Image" },
            { key: "research", label: "Research Image" },
            { key: "procedure", label: "Procedure Image" },
            { key: "para3", label: "Description3" },
        ],
        fields: [
            { name: "title1", label: "Title", type: "text", required: true },
            { name: "para1", label: "Description", type: "textarea", required: true },
            { name: "image1", label: "Main Image", type: "file", required: true },
            { name: "title2", label: "Title2", type: "text", required: true },
            { name: "para2", label: "Description2", type: "textarea", required: true },
            { name: "ug", label: "UG Image", type: "file", required: true },
            { name: "pg", label: "PG Image", type: "file", required: true },
            { name: "research", label: "Research Image", type: "file", required: true },
            { name: "procedure", label: "Procedure Image", type: "file", required: true },
            { name: "para3", label: "Description3", type: "textarea", required: true },
        ]
    },
    "contact": {
        endpoint: "/contact-card",
        title: "Contact Cards",
        limit: 10,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "phone", label: "Phone" },
            { key: "email", label: "Email" },
            { key: "description", label: "Description" },
            { key: "image", label: "Icon" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "phone", label: "Phone", type: "text", required: true },
            { name: "email", label: "Email", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "image", label: "Icon Image", type: "file", required: true },
        ]
    }
}

export default function AdmissionsOverview() {
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
                        <button className="back-link" onClick={() => navigate("/admin/admissions")}>← Back to Admissions</button>
                        <h1>Overview Admin</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/admissions/overview/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Hero Section</h3>
                        <p>Main Banner Image</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/admissions/overview/intro")}>
                        <div className="card-icon"><i className="fa fa-align-left"></i></div>
                        <h3>Intro Content</h3>
                        <p>Main Text and Program Images</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/admissions/overview/contact")}>
                        <div className="card-icon"><i className="fa fa-address-card"></i></div>
                        <h3>Contact Cards</h3>
                        <p>Helping Desk Contacts</p>
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
                <button className="back-link" onClick={() => navigate("/admin/admissions/overview")}>← Back</button>
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

            {/* --- DATA DISPLAY --- */}
            {items.length > 0 && componentId === 'intro' ? (
                <div className="singleton-view">
                    <div className="singleton-card">
                        <div className="card-header">
                            <h3>Current Record</h3>
                            <div className="card-actions">
                                <button className="action-btn edit" onClick={() => { setEditingItem(items[0]); setIsModalOpen(true); }}>
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="action-btn delete" onClick={() => handleDelete(items[0]._id || items[0].id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            {currentConfig.columns.filter(col => col.key !== 'index').map(col => {
                                const value = items[0][col.key];
                                const isImage = ["image", "img", "image_url", "url", "media_url", "images", "gridImages", "logo_url", "image1", "ug", "pg", "research", "procedure"].includes(col.key);

                                return (
                                    <div key={col.key} className="detail-row">
                                        <label>{col.label}:</label>
                                        <div className="value">
                                            {isImage && value ? (
                                                <div className="preview-image">
                                                    {Array.isArray(value) ? (
                                                        value.map((img, i) => <img key={i} src={img} alt="Preview" />)
                                                    ) : (
                                                        <img src={value} alt="Preview" />
                                                    )}
                                                </div>
                                            ) : (
                                                <span>{value || "N/A"}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <DataTable
                    columns={currentConfig.columns}
                    data={items}
                    onEdit={(item) => { setEditingItem(item); setIsModalOpen(true); }}
                    onDelete={handleDelete}
                />
            )}

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

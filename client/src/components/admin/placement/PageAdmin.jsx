import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const RECORDS_CONFIG = {
    "hero": {
        endpoint: "/placementrecordhero",
        title: "Records Hero Section",
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
    "slider": {
        endpoint: "/placementrecordsslider",
        title: "Records Slider",
        limit: 10,
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
    "workspace": {
        endpoint: "/placementrecordsworkspace",
        title: "Workspace Gallery",
        limit: 20,
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
    "team": {
        endpoint: "/placementrecordsteam",
        title: "Placement Team",
        limit: 20,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "name", label: "Name" },
            { key: "designation", label: "Designation" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "name", label: "Name", type: "text", required: true },
            { name: "designation", label: "Designation", type: "text", required: true },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "companies": {
        endpoint: "/company-category",
        title: "Recruiting Companies",
        limit: 50,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "category", label: "Category" },
            { key: "images", label: "Logos", type: "images" },
        ],
        fields: [
            { name: "category", label: "Category Name", type: "text", required: true },
            { name: "images", label: "Company Logos", type: "file", multiple: true, required: true },
        ]
    },
    "faq": {
        endpoint: "/placement-records-faq",
        title: "Placement FAQs",
        limit: 30,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "question", label: "Question" },
            { key: "answer", label: "Answer" },
        ],
        fields: [
            { name: "question", label: "Question", type: "text", required: true },
            { name: "answer", label: "Answer", type: "textarea", required: true },
            { name: "image", label: "Related Image (Optional)", type: "file", required: false },
        ]
    },
    "video": {
        endpoint: "/placement-records-video",
        title: "Placement Videos",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "image", label: "Poster/Image" },
        ],
        fields: [
            { name: "image", label: "Video Poster", type: "file", required: true },
        ]
    }
}

export default function PageAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = RECORDS_CONFIG[componentId]

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
                        <button className="back-link" onClick={() => navigate("/admin/placement")}>← Back </button>
                        <h1>Placement Page </h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Hero Section</h3>
                        <p>Main Banner</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/slider")}>
                        <div className="card-icon"><i className="fa fa-images"></i></div>
                        <h3>Slider</h3>
                        <p>Record Highlights</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/workspace")}>
                        <div className="card-icon"><i className="fa fa-briefcase"></i></div>
                        <h3>Workspace</h3>
                        <p>Placement Office Gallery</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/team")}>
                        <div className="card-icon"><i className="fa fa-users"></i></div>
                        <h3>Team</h3>
                        <p>Placement Officers</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/companies")}>
                        <div className="card-icon"><i className="fa fa-building"></i></div>
                        <h3>Companies</h3>
                        <p>Recruiting Partners</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/faq")}>
                        <div className="card-icon"><i className="fa fa-question-circle"></i></div>
                        <h3>FAQs</h3>
                        <p>Common Questions</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/placement/placementpage/video")}>
                        <div className="card-icon"><i className="fa fa-video"></i></div>
                        <h3>Video</h3>
                        <p>Featured Record Video</p>
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
                if (Array.isArray(val)) {
                    val.forEach(file => dataToSend.append(currentConfig.endpoint === "/company-category" ? "images" : key, file))
                } else {
                    dataToSend.append(key, val)
                }
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
                <button className="back-link" onClick={() => navigate("/admin/placement/placementpage")}>← Back</button>
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

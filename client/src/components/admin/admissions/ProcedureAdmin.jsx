import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = "http://localhost:3000/api"

const PROCEDURE_CONFIG = {
    "hero": {
        endpoint: "/procedurehero",
        title: "Procedure Hero Section",
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
    "videos": {
        endpoint: "/procedure",
        title: "Admission Procedures Content",
        limit: 2, 
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "content", label: "Main Content" },
            { key: "video", label: "Video" },
            {key:"steps",label:"Steps",type:"dynamic-list",itemKey:"text"}
        ],
        fields: [
            { name: "content", label: "Main Content", type: "textarea", required: true },
            { name: "video", label: "Video File", type: "file", required: true },
            {
                name: "steps",
                label: { singular: "Step", plural: "Steps" },
                type: "dynamic-list",
                required: true,
                itemKey: "text"
            },
        ]
    },
}

export default function ProcedureAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = PROCEDURE_CONFIG[componentId]

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
    }, [componentId, currentConfig])

    if (!componentId) {
        return (
            <div className="admin-section">
                <div className="section-header">
                    <div>
                        <button className="back-link" onClick={() => navigate("/admin/admissions")}>← Back to Admissions</button>
                        <h1>Admission Procedure Admin</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/admissions/procedure/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Hero Section</h3>
                        <p>Main Banner</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/admissions/procedure/videos")}>
                        <div className="card-icon"><i className="fa fa-video"></i></div>
                        <h3>Procedure Content</h3>
                        <p>Main Text, Video & Steps</p>
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
                let val = formData[key]
                // Important: steps must be a JSON string for the backend to parse it correctly
                if (key === "steps") {
                    // Filter out empty steps if necessary, then stringify
                    const steps = Array.isArray(val) ? val.filter(s => s.text && s.text.trim() !== "") : []
                    val = JSON.stringify(steps)
                }
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
                <button className="back-link" onClick={() => navigate("/admin/admissions/procedure")}>← Back</button>
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
                onEdit={(item) => {
                    setEditingItem(item);
                    setIsModalOpen(true);
                }}
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

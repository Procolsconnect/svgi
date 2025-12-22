import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = "http://localhost:3000/api"

const VM_CONFIG = {
    "hero": {
        endpoint: "/about/vision/hero",
        title: "Vision Hero",
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "mission": {
        endpoint: "/about/vision/mission",
        title: "Mission Pillars",
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
        ],
        fields: [
            { name: "title", label: "Pillar Title", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
        ]
    },
    "values": {
        endpoint: "/about/vision/values",
        title: "Core Values",
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Value Name" },
        ],
        fields: [
            { name: "title", label: "Value Name", type: "text", required: true },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "icon", label: "Icon Class", type: "text" },
        ]
    }
}

export default function VisionMissionAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = VM_CONFIG[componentId]

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
            <div className="component-cards">
                <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/hero")}>
                    <div className="card-icon"><i className="fa fa-image"></i></div>
                    <h3>Vision Hero</h3>
                    <p>Hero banner for VM page</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/mission")}>
                    <div className="card-icon"><i className="fa fa-bullseye"></i></div>
                    <h3>Mission Pillars</h3>
                    <p>Core Mission Blocks</p>
                </div>
                <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/values")}>
                    <div className="card-icon"><i className="fa fa-heart"></i></div>
                    <h3>Core Values</h3>
                    <p>Values and Ethics</p>
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
                <button className="back-link" onClick={() => navigate("/admin/about/vision-mission")}>← Back</button>
                <h1>{currentConfig.title}</h1>
                <button className="add-btn" onClick={() => { setEditingItem(null); setIsModalOpen(true); }} disabled={componentId === 'hero' && items.length >= 1}>
                    <i className="fa fa-plus"></i> Add Item
                </button>
            </div>

            <DataTable columns={currentConfig.columns} data={items} onEdit={(item) => { setEditingItem(item); setIsModalOpen(true); }} onDelete={handleDelete} />

            <FormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                title={editingItem ? "Edit Item" : "Add Item"}
                fields={currentConfig.fields}
                initialData={editingItem}
                submitting={submitting}
            />
        </div>
    )
}

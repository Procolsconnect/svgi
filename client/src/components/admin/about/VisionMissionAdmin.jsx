import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const VM_CONFIG = {
    "hero": {
        endpoint: "/about/vismishero",
        title: "Vision & Mission Hero",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "cards": {
        endpoint: "/about/vismiscard",
        title: "Vision & Mission Cards",
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "desc", label: "Description" },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "desc", label: "Description", type: "textarea", required: true },
            { name: "image", label: "Image", type: "file", required: true },
            { name: "link", label: "Link URL", type: "text", required: true },
        ]
    },
    "list": {
        endpoint: "/about/vismislist",
        title: "MVV Sections (List)",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "mission.title", label: "Mission Title" },
            { key: "vision.title", label: "Vision Title" },
        ],
        fields: [
            { name: "missionTitle", label: "Mission Title", type: "text", required: true },
            { name: "visionTitle", label: "Vision Title", type: "text", required: true },
            { name: "valuesTitle", label: "Values Title", type: "text", required: true },
        ]
    },
    "circle": {
        endpoint: "/about/vismiscircle",
        title: "Circular Section",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "logo", label: "Logo" },
            { key: "academics.title", label: "Academics" },
        ],
        fields: [
            { name: "logo", label: "Center Logo", type: "file", required: true },
            { name: "academicsTitle", label: "Academics Title", type: "text", required: true },
            { name: "researchTitle", label: "Research Title", type: "text", required: true },
            { name: "campusTitle", label: "Campus Title", type: "text", required: true },
            { name: "placementsTitle", label: "Placements Title", type: "text", required: true },
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
            <div className="admin-section">
                <div className="section-header">
                    <div>
                        <button className="back-link" onClick={() => navigate("/admin/about")}>← Back to About</button>
                        <h1>VM Components</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>VM Hero</h3>
                        <p>Hero banner section</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/cards")}>
                        <div className="card-icon"><i className="fa fa-th-large"></i></div>
                        <h3>Feature Cards</h3>
                        <p>Grid items with links</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/list")}>
                        <div className="card-icon"><i className="fa fa-list-ul"></i></div>
                        <h3>MVV List</h3>
                        <p>Mission, Vision, Values</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/vision-mission/circle")}>
                        <div className="card-icon"><i className="fa fa-circle-notch"></i></div>
                        <h3>Circular Grid</h3>
                        <p>Logo-centered categories</p>
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

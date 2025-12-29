import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"


const API_BASE = import.meta.env.VITE_API_URL + "/api"

const OVERVIEW_CONFIG = {
    "hero": {
        endpoint: "/about/overview/hero",
        title: "Hero Section",
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
        endpoint: "/about/overview/intro",
        title: "Introduction Text",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Heading" },
            { key: "shortText", label: "Short Text" },
            { key: "images", label: "Images" },
        ],
        fields: [
            { name: "title", label: "Section Heading", type: "text", required: true },
            { name: "shortText", label: "Short Text", type: "text" },
            { name: "description", label: "Detailed Text", type: "textarea", required: true },
            { name: "images", label: "Images", type: "file", multiple: true },
        ]
    },
    "grid": {
        endpoint: "/about/overview/grid",
        title: "Grid Section",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Heading" },
            { key: "gridImages", label: "Images" },
        ],
        fields: [
            { name: "title", label: "Section Heading", type: "text", required: true },
            { name: "shortText", label: "Short Text", type: "text" },
            { name: "description", label: "Detailed Text", type: "textarea", required: true },
            { name: "gridImages", label: "Grid Images", type: "file", multiple: true },
        ]
    }
}

export default function AboutOverview() {
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

    // If this is the "Then & Now" (Baltic) section, we use a separate simple view
    if (componentId === "then&nowslider") {
        return <BalticManager />
    }

    if (!componentId) {
        return (
            <div className="admin-section">
                <div className="section-header">
                    <div>
                        <button className="back-link" onClick={() => navigate("/admin/about")}>← Back to About</button>
                        <h1>Overview Components</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/about/overview/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Overview Hero</h3>
                        <p>Main Banner Image</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/overview/intro")}>
                        <div className="card-icon"><i className="fa fa-align-left"></i></div>
                        <h3>Introduction Text</h3>
                        <p>Top Intro Section</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/overview/grid")}>
                        <div className="card-icon"><i className="fa fa-th"></i></div>
                        <h3>Grid Section</h3>
                        <p>Image Grid Content</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/about/overview/then&nowslider")}>
                        <div className="card-icon"><i className="fa fa-sliders-h"></i></div>
                        <h3>Then & Now Slider</h3>
                        <p>Baltic Sea Special Section</p>
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
                    val.forEach(item => dataToSend.append(key, item))
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

    const isAddDisabled = currentConfig?.limit > 0 && items.length >= currentConfig.limit;

    return (
        <div className="admin-section">
            <div className="section-header">
                <button className="back-link" onClick={() => navigate("/admin/about")}>← Back to About</button>
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

// --- SPECIAL CASE: BALTIC MANAGER ---
// This handles the unique nested structure without complex configs
function BalticManager() {
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchBaltic = async () => {
        try {
            const res = await axios.get(`${API_BASE}/about/baltic-data`)
            // API returns data as { success: true, data: { winter: {}, summer: {}, ...} }
            setData(res.data.data)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchBaltic() }, [])

    if (loading) return <div>Loading Baltic Data...</div>

    return (
        <div className="admin-section">
            <button className="back-link" onClick={() => navigate("/admin/about/overview")}>← Back</button>
            <h1>Then & Now (Baltic Sea)</h1>

            {data ? (
                <div className="baltic-view">
                    <div className="baltic-card-grid">
                        <section className="data-box">
                            <h3>Winter Section</h3>
                            <p><strong>Title:</strong> {data.winter?.title}</p>
                            <p><strong>Desc:</strong> {data.winter?.description}</p>
                        </section>
                        <section className="data-box">
                            <h3>Summer Section</h3>
                            <p><strong>Title:</strong> {data.summer?.title}</p>
                            <p><strong>Desc:</strong> {data.summer?.description}</p>
                        </section>
                        <section className="data-box">
                            <h3>Content Section</h3>
                            <p><strong>Title:</strong> {data.contentSection?.title}</p>
                            <p><strong>Desc:</strong> {data.contentSection?.description}</p>
                        </section>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button className="add-btn" onClick={() => alert("Open Edit Modal Here")}>
                            <i className="fa fa-edit"></i> Edit All Sections
                        </button>
                    </div>
                </div>
            ) : (
                <div className="no-data">No data found. Click Add to create.</div>
            )}
        </div>
    )
}

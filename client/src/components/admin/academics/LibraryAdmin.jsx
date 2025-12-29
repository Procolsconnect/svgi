import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const LIBRARY_CONFIG = {
    "hero": {
        endpoint: "/libraryhero",
        title: "Library Hero Section",
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
    "images": {
        endpoint: "/libraryimage",
        title: "Library Gallery Images",
        limit: 20,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "image", label: "Image" },
        ],
        fields: [
            { name: "image", label: "Image", type: "file", required: true },
        ]
    },
    "videos": {
        endpoint: "/libraryvideo",
        title: "Library Main Video",
        limit: 1,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "video", label: "Video" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "description", label: "Description", type: "text", required: true },
            { name: "video", label: "Video File", type: "file", required: true },
        ]
    },
    "videocards": {
        endpoint: "/libraryvideocard",
        title: "Video Cards",
        limit: 10,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "video", label: "Video" },
        ],
        fields: [
            { name: "title", label: "Title", type: "text", required: true },
            { name: "video", label: "Video File", type: "file", required: true },
            { name: "description", label: "Description", type: "text", required: true },

        ]
    },
    "resources": {
        endpoint: "/library/resources",
        title: "Library Resources",
        limit: 10,
        columns: [
            { key: "index", label: "Sr. No." },
            { key: "campus", label: "Campus" },
            { key: "totalBooks", label: "Total Books" },
            { key: "totalBackVolumes", label: "Back Volumes" },
            { key: "printJournalsMagazines", label: "Journals/Magazines" },
            { key: "ebooks", label: "E-Books" },
        ],
        fields: [
            { name: "campus", label: "Campus (svgc/svgp/...) ", type: "text", required: true },
            { name: "totalBooks", label: "Total Books", type: "text", required: true },
            { name: "totalBackVolumes", label: "Total Back Volumes", type: "text", required: true },
            { name: "printJournalsMagazines", label: "Print Journals & Magazines", type: "text", required: true },
            { name: "national", label: "National Journals", type: "text", required: true },
            { name: "international", label: "International Journals", type: "text", required: true },
            { name: "onlineDatabases", label: "Online Databases", type: "text", required: true },
            { name: "databaseList", label: "Database List", type: "text", required: true },
            { name: "ebooks", label: "E-Books", type: "text", required: true },
        ]
    }
}

export default function LibraryAdmin() {
    const { componentId } = useParams()
    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const currentConfig = LIBRARY_CONFIG[componentId]

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
                        <h1>Library</h1>
                        <p>Select a component to manage</p>
                    </div>
                </div>
                <div className="component-cards">
                    <div className="component-card" onClick={() => navigate("/admin/academics/library/hero")}>
                        <div className="card-icon"><i className="fa fa-image"></i></div>
                        <h3>Hero Section</h3>
                        <p>Library Banner</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/academics/library/resources")}>
                        <div className="card-icon"><i className="fa fa-book"></i></div>
                        <h3>Resources</h3>
                        <p>Digital Resources List</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/academics/library/images")}>
                        <div className="card-icon"><i className="fa fa-images"></i></div>
                        <h3>Gallery</h3>
                        <p>Library Images</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/academics/library/videos")}>
                        <div className="card-icon"><i className="fa fa-video"></i></div>
                        <h3>Main Video</h3>
                        <p>Featured Video</p>
                    </div>
                    <div className="component-card" onClick={() => navigate("/admin/academics/library/videocards")}>
                        <div className="card-icon"><i className="fa fa-film"></i></div>
                        <h3>Video Cards</h3>
                        <p>Additional Videos</p>
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
                <button className="back-link" onClick={() => navigate("/admin/academics/library")}>← Back</button>
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

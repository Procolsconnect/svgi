import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import DataTable from "../../data-table"
import FormModal from "../../form-modal"

const API_BASE = "http://localhost:3000/api"

export default function CourseOutcomeAdmin() {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingItem, setEditingItem] = useState(null)

    const columns = [
        { key: "index", label: "Sr. No." },
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
        { key: "image", label: "Image" },
        { key: "pdf", label: "PDF Document" },
    ]

    const fields = [
        { name: "title", label: "Title", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
        { name: "image", label: "Image", type: "file", required: false },
        { name: "pdf", label: "PDF Document", type: "file", required: false },
    ]

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${API_BASE}/outcome`)
            setItems(response.data.data || [])
        } catch (error) {
            setItems([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                await axios.put(`${API_BASE}/outcome/${id}`, dataToSend)
            } else {
                await axios.post(`${API_BASE}/outcome`, dataToSend)
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
            await axios.delete(`${API_BASE}/outcome/${id}`)
            fetchData()
        } catch (error) {
            alert("Delete failed")
        }
    }

    return (
        <div className="admin-section">
            <div className="section-header">
                <button className="back-link" onClick={() => navigate("/admin/academics")}>← Back to Academics</button>
                <h1>Course Outcome</h1>
                <button
                    className="add-btn"
                    onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
                >
                    <i className="fa fa-plus"></i> Add Outcome
                </button>
            </div>

            <DataTable
                columns={columns}
                data={items}
                onEdit={(item) => { setEditingItem(item); setIsModalOpen(true); }}
                onDelete={handleDelete}
            />

            <FormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                title={editingItem ? "Edit Outcome" : "Add Outcome"}
                fields={fields}
                initialData={editingItem}
                submitting={submitting}
            />
        </div>
    )
}

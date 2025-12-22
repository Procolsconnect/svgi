import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

const newsComponents = [
  { id: 1, name: "News Hero", type: "Newshero.jsx", items: 3, status: "Active" },
  { id: 2, name: "Ranking", type: "Ranking.jsx", items: 5, status: "Active" },
  { id: 3, name: "News 2", type: "News2.jsx", items: 6, status: "Active" },
  { id: 4, name: "News 3", type: "News3.jsx", items: 4, status: "Active" },
  { id: 5, name: "News 4", type: "News4.jsx", items: 5, status: "Active" },
  { id: 6, name: "SVGI News", type: "SvgiNews.jsx", items: 8, status: "Active" },
  { id: 7, name: "Social Icons", type: "SocialIcons.jsx", items: 6, status: "Active" },
  { id: 8, name: "Newsletter", type: "Milo.jsx", items: 2, status: "Active" },
]

export default function NewsAdmin() {
  const { id: componentId } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(newsComponents)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [componentItems, setComponentItems] = useState([])

  useEffect(() => {
    if (componentId) {
      const component = data.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === componentId)
      if (component) {
        setSelectedComponent(component)
        setComponentItems([
          { id: 1, headline: `Latest news about ${component.name}`, date: "2024-03-20", status: "Active" },
        ])
      }
    } else {
      setSelectedComponent(null)
    }
  }, [componentId, data])

  const itemColumns = [
    { key: "id", label: "ID" },
    { key: "headline", label: "Headline" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
  ]

  const handleAdd = () => {
    setEditingItem(null)
    setIsModalOpen(true)
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this?")) {
      if (selectedComponent) {
        setComponentItems(componentItems.filter((item) => item.id !== id))
      } else {
        setData(data.filter((item) => item.id !== id))
      }
    }
  }

  const handleSave = (formData) => {
    if (selectedComponent) {
      if (editingItem) {
        setComponentItems(componentItems.map((item) => (item.id === editingItem.id ? { ...item, ...formData } : item)))
      } else {
        setComponentItems([...componentItems, { id: Date.now(), ...formData, status: "Active" }])
      }
    } else {
      if (editingItem) {
        setData(data.map((item) => (item.id === editingItem.id ? { ...item, ...formData } : item)))
      } else {
        setData([...data, { id: Date.now(), ...formData, status: "Active" }])
      }
    }
    setIsModalOpen(false)
  }

  const handleManage = (component) => {
    const slug = component.name.toLowerCase().replace(/\s+/g, '-')
    navigate(`/admin/news/${slug}`)
  }

  const handleBack = () => {
    navigate("/admin/news")
  }

  if (selectedComponent) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <button className="back-link" onClick={handleBack}>
              <i className="fa fa-arrow-left"></i> Back to Components
            </button>
            <h1>Manage {selectedComponent.name}</h1>
            <p>Edit specific items for {selectedComponent.name}</p>
          </div>
          <button className="add-btn" onClick={handleAdd}>
            <i className="fa fa-plus"></i>
            Add News Item
          </button>
        </div>

        <div className="table-section">
          <h2>{selectedComponent.name} Articles</h2>
          <DataTable
            columns={itemColumns}
            data={componentItems}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        <FormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          title={editingItem ? "Edit Article" : "Add Article"}
          fields={[
            { name: "headline", label: "Headline", type: "text", required: true },
            { name: "date", label: "Date", type: "date", required: true },
            { name: "content", label: "Full Content", type: "textarea", required: true },
          ]}
          initialData={editingItem}
        />
      </div>
    )
  }

  return (
    <div className="admin-section">
      <div className="section-header">
        <div>
          <h1>News Section</h1>
          <p>Manage 8 news components</p>
        </div>
        <button className="add-btn" onClick={handleAdd}>
          <i className="fa fa-plus"></i>
          Add Component
        </button>
      </div>

      <div className="info-cards">
        <div className="info-card blue">
          <i className="fa fa-newspaper"></i>
          <div>
            <h3>8</h3>
            <p>Components</p>
          </div>
        </div>
        <div className="info-card green">
          <i className="fa fa-check-circle"></i>
          <div>
            <h3>39</h3>
            <p>Total Items</p>
          </div>
        </div>
      </div>
      <div className="component-cards">
        {data.map((component) => (
          <div key={component.id} className="component-card" onClick={() => handleManage(component)}>
            <div className="card-icon">
              <i className="fa fa-puzzle-piece"></i>
            </div>
            <h3>{component.name}</h3>
            <p>{component.items} items</p>
            <div className="card-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleEdit(component)
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(component.id)
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        title={editingItem ? "Edit Component" : "Add Component"}
        fields={[
          { name: "name", label: "Component Name", type: "text", required: true },
          { name: "type", label: "File Name", type: "text", required: true },
          { name: "items", label: "Number of Items", type: "number" },
        ]}
        initialData={editingItem}
      />
    </div>
  )
}

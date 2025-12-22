import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

const advComponents = [
  { id: 1, name: "Adv Hero", type: "AdvHero.jsx", items: 2, status: "Active" },
  { id: 2, name: "Admission Adv", type: "AdmissionAdv.jsx", items: 4, status: "Active" },
]

export default function AdvertisementAdmin() {
  const { id: componentId } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(advComponents)
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
          { id: 1, title: `Active campaign for ${component.name}`, type: "Banner", status: "Active" },
        ])
      }
    } else {
      setSelectedComponent(null)
    }
  }, [componentId, data])

  const itemColumns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Campaign Name" },
    { key: "type", label: "Adv Type" },
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
    navigate(`/admin/advertisement/${slug}`)
  }

  const handleBack = () => {
    navigate("/admin/advertisement")
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
            <p>Manage ads and campaigns for {selectedComponent.name}</p>
          </div>
          <button className="add-btn" onClick={handleAdd}>
            <i className="fa fa-plus"></i>
            Add Campaign
          </button>
        </div>

        <div className="table-section">
          <h2>{selectedComponent.name} Campaigns</h2>
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
          title={editingItem ? "Edit Campaign" : "Add Campaign"}
          fields={[
            { name: "title", label: "Campaign Name", type: "text", required: true },
            { name: "type", label: "Adv Type", type: "text", required: true },
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
          <h1>Advertisement Section</h1>
          <p>Manage 2 advertisement components</p>
        </div>
        <button className="add-btn" onClick={handleAdd}>
          <i className="fa fa-plus"></i>
          Add Component
        </button>
      </div>

      <div className="info-cards">
        <div className="info-card blue">
          <i className="fa fa-bullhorn"></i>
          <div>
            <h3>2</h3>
            <p>Components</p>
          </div>
        </div>
        <div className="info-card green">
          <i className="fa fa-check-circle"></i>
          <div>
            <h3>6</h3>
            <p>Total Items</p>
          </div>
        </div>
      </div>
      <div className="component-cards">
        {data.map((component) => (
          <div key={component.id} className="component-card" onClick={() => handleManage(component)}>
            <div className="card-icon">
              <i className="fa fa-file"></i>
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

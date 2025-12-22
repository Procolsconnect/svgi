import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

const placementPages = [
  { id: 1, name: "Overview", route: "/placement", component: "Overview.jsx", status: "Active" },
  { id: 2, name: "Placement Process", route: "/placement/placementprocess", component: "PlacementProcess.jsx", status: "Active", },
  { id: 3, name: "Placement Page", route: "/placement/placementpage", component: "PlacementPage.jsx", status: "Active", },
]

export default function PlacementAdmin() {
  const { id: pageId } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(placementPages)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [componentItems, setComponentItems] = useState([])

  useEffect(() => {
    if (pageId) {
      const component = data.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === pageId)
      if (component) {
        setSelectedComponent(component)
        setComponentItems([
          { id: 1, label: `Stats for ${component.name}`, value: "90% Success rate", status: "Active" },
        ])
      }
    } else {
      setSelectedComponent(null)
    }
  }, [pageId, data])

  const itemColumns = [
    { key: "id", label: "ID" },
    { key: "label", label: "Label" },
    { key: "value", label: "Description" },
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
    navigate(`/admin/placement/${slug}`)
  }

  const handleBack = () => {
    navigate("/admin/placement")
  }

  if (selectedComponent) {
    return (
      <div className="admin-section">
        <div className="section-header">
          <div>
            <button className="back-link" onClick={handleBack}>
              <i className="fa fa-arrow-left"></i> Back to Pages
            </button>
            <h1>Manage {selectedComponent.name}</h1>
            <p>Update statistical and informational data for {selectedComponent.name}</p>
          </div>
          <button className="add-btn" onClick={handleAdd}>
            <i className="fa fa-plus"></i>
            Add Record
          </button>
        </div>

        <div className="table-section">
          <h2>{selectedComponent.name} Records</h2>
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
          title={editingItem ? "Edit Record" : "Add Record"}
          fields={[
            { name: "label", label: "Label", type: "text", required: true },
            { name: "value", label: "Description", type: "textarea", required: true },
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
          <h1>Placement & Training</h1>
          <p>Manage 3 placement pages</p>
        </div>
        <button className="add-btn" onClick={handleAdd}>
          <i className="fa fa-plus"></i>
          Add Page
        </button>
      </div>

      <div className="info-cards">
        <div className="info-card blue">
          <i className="fa fa-briefcase"></i>
          <div>
            <h3>3</h3>
            <p>Total Pages</p>
          </div>
        </div>
        <div className="info-card green">
          <i className="fa fa-check-circle"></i>
          <div>
            <h3>3</h3>
            <p>Active</p>
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
        title={editingItem ? "Edit Page" : "Add Page"}
        fields={[
          { name: "name", label: "Page Name", type: "text", required: true },
          { name: "route", label: "Route", type: "text", required: true },
          { name: "component", label: "Component File", type: "text", required: true },
        ]}
        initialData={editingItem}
      />
    </div>
  )
}

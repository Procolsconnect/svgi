import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "../data-table"
import FormModal from "../form-modal"
import "../admin-section.css"

const campusLifePages = [
  { id: 1, name: "Overview", route: "/campuslife", component: "CampusOverview.jsx", status: "Active" },
  { id: 2, name: "Sports", route: "/campuslife/sports", component: "Sports.jsx", status: "Active" },
  { id: 3, name: "Hostel", route: "/campuslife/hostel", component: "Hostel.jsx", status: "Active" },
  { id: 4, name: "Health", route: "/campuslife/health", component: "Health.jsx", status: "Active" },
  { id: 5, name: "College Fest", route: "/campuslife/fest", component: "CollegeFest.jsx", status: "Active" },
  { id: 6, name: "Green Campus", route: "/campuslife/green", component: "Green.jsx", status: "Active" },
  { id: 7, name: "Policies", route: "/campuslife/policies", component: "Policies.jsx", status: "Active" },
  { id: 8, name: "Student Welfare", route: "/campuslife/welfare", component: "StudentWelfare.jsx", status: "Active" },
  { id: 9, name: "Our Diamonds", route: "/campuslife/diamond", component: "OurDiamonds.jsx", status: "Active" },
]

export default function CampusLifeAdmin() {
  const { id: pageId } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(campusLifePages)
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
          { id: 1, title: `Gallery info for ${component.name}`, image: "/assets/campus/1.jpg", status: "Active" },
        ])
      }
    } else {
      setSelectedComponent(null)
    }
  }, [pageId, data])

  const itemColumns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
    { key: "image", label: "Image Path" },
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
    navigate(`/admin/campuslife/${slug}`)
  }

  const handleBack = () => {
    navigate("/admin/campuslife")
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
            <p>Manage images and content for {selectedComponent.name}</p>
          </div>
          <button className="add-btn" onClick={handleAdd}>
            <i className="fa fa-plus"></i>
            Add Content
          </button>
        </div>

        <div className="table-section">
          <h2>{selectedComponent.name} Assets</h2>
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
          title={editingItem ? "Edit Asset" : "Add Asset"}
          fields={[
            { name: "title", label: "Title", type: "text", required: true },
            { name: "image", label: "Image Path", type: "text", required: true },
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
          <h1>Campus Life</h1>
          <p>Manage 9 campus life pages</p>
        </div>
        <button className="add-btn" onClick={handleAdd}>
          <i className="fa fa-plus"></i>
          Add Page
        </button>
      </div>

      <div className="info-cards">
        <div className="info-card blue">
          <i className="fa fa-campground"></i>
          <div>
            <h3>9</h3>
            <p>Total Pages</p>
          </div>
        </div>
        <div className="info-card green">
          <i className="fa fa-check-circle"></i>
          <div>
            <h3>9</h3>
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

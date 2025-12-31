"use client"

import { useState, useEffect } from "react"
import "./form-modal.css"

export default function FormModal({ isOpen, onClose, onSave, title, fields, initialData, submitting }) {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    } else {
      const emptyData = {}
      fields.forEach((field) => {
        if (field.type === "dynamic-list") {
          emptyData[field.name] = []
        } else if (field.multiple && field.type === "file") {
          emptyData[field.name] = []
        } else {
          emptyData[field.name] = ""
        }
      })
      setFormData(emptyData)
    }
  }, [initialData, fields, isOpen])

  const handleChange = (e, field, index = null) => {
    const { value, type, files } = e.target
    const name = field.name
    if (type === "file") {
      const newFiles = Array.from(files)

      if (field.multiple) {
        // Additive behavior for multiple files
        setFormData((prev) => {
          // Keep existing files (might be URLs or File objects) and add new ones
          const existing = Array.isArray(prev[name]) ? prev[name] : []
          return {
            ...prev,
            [name]: [...existing, ...newFiles],
          }
        })
      } else {
        // Standard replacement for single files
        setFormData((prev) => ({
          ...prev,
          [name]: newFiles[0],
        }))
      }
    } else if (field.type === "dynamic-list" && index !== null) {
      setFormData((prev) => {
        const newList = [...(prev[name] || [])]
        // Assuming list items are objects like { text: "..." }
        newList[index] = { ...newList[index], [field.itemKey || 'text']: value }
        return { ...prev, [name]: newList }
      })
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      }))
    }
  }

  const addItem = (field) => {
    const fieldName = field.name;
    const itemKey = field.itemKey || 'text';
    setFormData((prev) => ({
      ...prev,
      [fieldName]: [...(prev[fieldName] || []), { [itemKey]: "" }]
    }))
  }

  const removeItem = (fieldName, index) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((_, i) => i !== index)
    }))
  }

  const removeFile = (fieldName, index) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {fields.map((field) => (
              <div key={field.name} className="form-group">
                <label htmlFor={field.name}>
                  {typeof field.label === 'object' ? (field.label.plural || field.label.singular) : field.label}
                  {field.required && <span className="required">*</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(e, field)}
                    required={field.required}
                    rows={4}
                    disabled={submitting}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(e, field)}
                    required={field.required}
                    disabled={submitting}
                  >
                    <option value="">Select...</option>
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "dynamic-list" ? (
                  <div className="dynamic-list-container">
                    {(formData[field.name] || []).map((item, idx) => (
                      <div key={idx} className="dynamic-list-item">
                        <input
                          type="text"
                          name={field.name}
                          value={item[field.itemKey || 'text'] || ""}
                          onChange={(e) => handleChange(e, field, idx)}
                          placeholder={`${field.label.singular || (typeof field.label === 'string' ? field.label : 'Item')} ${idx + 1}`}
                          disabled={submitting}
                        />
                        <button
                          type="button"
                          className="remove-item-btn"
                          onClick={() => removeItem(field.name, idx)}
                          disabled={submitting}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="add-item-btn"
                      onClick={() => addItem(field)}
                      disabled={submitting}
                    >
                      <i className="fa fa-plus"></i> Add {field.label.singular || (typeof field.label === 'string' ? field.label : "Item")}
                    </button>
                  </div>
                ) : field.type === "file" ? (
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      id={field.name}
                      name={field.name}
                      onChange={(e) => handleChange(e, field)}
                      required={field.required && !initialData && (!formData[field.name] || formData[field.name].length === 0)}
                      accept={field.accept}
                      multiple={field.multiple}
                      disabled={submitting}
                    />

                    {/* File Selection Preview (for multiple selection) */}
                    {field.multiple && formData[field.name] && Array.isArray(formData[field.name]) && formData[field.name].length > 0 && (
                      <div className="file-preview-list">
                        {formData[field.name].map((file, idx) => {
                          const isString = typeof file === "string";
                          const previewUrl = isString ? file : URL.createObjectURL(file);
                          return (
                            <div key={idx} className="file-preview-item">
                              <div className="file-info">
                                <img src={previewUrl} alt="preview" className="mini-thumb" onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=File" }} />
                                <span>{isString ? "Existing Logo" : file.name}</span>
                              </div>
                              <button
                                type="button"
                                className="remove-file-btn"
                                onClick={() => removeFile(field.name, idx)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(e, field)}
                    required={field.required}
                    placeholder={field.placeholder}
                    disabled={submitting}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn" disabled={submitting}>
              {submitting ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

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
        emptyData[field.name] = ""
      })
      setFormData(emptyData)
    }
  }, [initialData, fields, isOpen])

  const handleChange = (e, field) => {
    const { name, value, type, files } = e.target
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
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      }))
    }
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
    <div className="modal-overlay" onClick={!submitting ? onClose : undefined}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose} disabled={submitting}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {fields.map((field) => (
              <div key={field.name} className="form-group">
                <label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="required">*</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    rows={4}
                    disabled={submitting}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
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
                        {formData[field.name].map((file, idx) => (
                          <div key={idx} className="file-preview-item">
                            <div className="file-info">
                              {typeof file === "string" ? (
                                <img src={file} alt="preview" className="mini-thumb" />
                              ) : (
                                <i className="fa fa-file"></i>
                              )}
                              <span>{typeof file === "string" ? "Existing Image" : file.name}</span>
                            </div>
                            <button
                              type="button"
                              className="remove-file-btn"
                              onClick={() => removeFile(field.name, idx)}
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    disabled={submitting}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose} disabled={submitting}>
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

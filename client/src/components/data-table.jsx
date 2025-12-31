"use client"

import { useState } from "react"
import "./data-table.css"


export default function DataTable({ columns, data, onEdit, onDelete }) {
  // --- STATE MANAGEMENT ---
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" })

  // --- 1. FILTERING LOGIC ---
  // Ensure data is always an array to prevent crashes
  const safeData = Array.isArray(data) ? data : (data ? [data] : []);

  const filteredData = safeData.filter((item) =>
    Object.values(item || {}).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  // --- 2. SORTING LOGIC ---
  // Sorts the filtered data based on the selected column and direction
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0

    const valueA = a[sortConfig.key]
    const valueB = b[sortConfig.key]

    if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1
    if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1
    return 0
  })

  // Function to handle header clicks for sorting
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }))
  }

  // --- 3. CELL RENDERING HELPER ---
  // This function decides HOW to display the data inside each table cell
  const renderCellContent = (column, rowData, rowIndex) => {
    // A. Handle Auto-Numbering (If key is "index")
    if (column.key === "index") {
      return <span className="cell-text">{rowIndex + 1}</span>
    }

    // Resolve nested value if key contains dots (e.g., "winter.title")
    const getValue = (obj, path) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const value = column.key.includes('.') ? getValue(rowData, column.key) : rowData[column.key];

    // B. Handle Status Column
    if (column.key === "status") {
      let statusText = "Active"
      let statusClass = "active"

      if (value === 0 || value === "0" || value === "Inactive") {
        statusText = "Inactive"
        statusClass = "inactive"
      } else if (value === 1 || value === "1" || value === "Active") {
        statusText = "Active"
        statusClass = "active"
      }

      return (
        <span className={`status-badge ${statusClass}`}>
          {statusText}
        </span>
      )
    }

    // B. Handle Media Columns (Images and Videos)
    /* --- Replace the Media Logic (approx line 81-103) with this --- */

    // 1. Add plural names to the list
    const mediaKeys = ["media", "image", "image2", "image3", "img", "image_url", "url", "media_url", "images", "gridImages", "logo_url", "imagesCard", "videosCard", "toursCard", "image1", "ug", "pg", "research", "procedure", "video_url"]

    if (mediaKeys.includes(column.key) && value) {
      const imageList = Array.isArray(value) ? value : [value];
      const maxVisible = 3;
      const visibleItems = imageList.slice(0, maxVisible);
      const extraCount = imageList.length - maxVisible;

      return (
        <div className="table-media-preview-group">
          {visibleItems.map((item, idx) => {
            // Extract URL if item is an object (e.g., {image: "url"})
            const url = typeof item === 'object' ? (item.image || item.url || item.media_url||item.video_url) : item;

            if (!url) return null;

            const isVideo = url.match(/\.(mp4|webm|ogg|mov)$/) || url.includes("/video/upload/");
            return (
              <div key={idx} className="table-media-item">
                {isVideo ? (
                  <div className="video-placeholder mini"><video src={url} autoPlay muted loop></video></div>
                ) : (
                  <img
                    src={url}
                    alt="Preview"
                    className="table-thumb"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=Error" }}
                  />
                )}
              </div>
            );
          })}
          {extraCount > 0 && (
            <div className="gallery-count-badge">+{extraCount}</div>
          )}
        </div>
      );
    }
    // D. Handle Dynamic List (Array of Objects)
    if (column.type === "dynamic-list" && Array.isArray(value)) {
      return (
        <div className="dynamic-list-preview">
          <span className="badge">{value.length} items</span>
          {value.length > 0 && (
            <span className="preview-text">
              : {value[0][column.itemKey || 'text']?.substring(0, 30)}...
            </span>
          )}
        </div>
      );
    }

    // E. Default: Just show plain text
    // Ensure we don't try to render an object directly
    const displayValue = (typeof value === 'object' && value !== null)
      ? JSON.stringify(value).substring(0, 50) + "..."
      : value;

    return <span className="cell-text">{displayValue}</span>
  }

  // --- MAIN JSX RENDER ---
  return (
    <div className="data-table-container">

      {/* Search and Metadata Controls */}
      <div className="table-controls">
        <div className="search-box">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <span className="results-count">{sortedData.length} results found</span>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} onClick={() => handleSort(column.key)}>
                  {column.label}
                  {/* Show arrow if this column is being sorted */}
                  {sortConfig.key === column.key && (
                    <i className={`fa fa-sort-${sortConfig.direction === "asc" ? "up" : "down"}`}></i>
                  )}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedData.map((rowData, rowIndex) => (
              <tr key={rowData._id || rowData.id || rowIndex}>
                {/* Render each data cell */}
                {columns.map((column) => (
                  <td key={column.key}>
                    {renderCellContent(column, rowData, rowIndex)}
                  </td>
                ))}

                {/* Render the Actions cell (Edit/Delete) */}
                <td className="actions-cell">
                  <button className="action-btn edit" title="Edit" onClick={() => onEdit(rowData)}>
                    <i className="fa fa-edit"></i>
                  </button>
                  <button className="action-btn delete" title="Delete" onClick={() => onDelete(rowData._id || rowData.id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show message if no results match the search */}
      {sortedData.length === 0 && (
        <div className="no-data">
          <i className="fa fa-inbox"></i>
          <p>No records match your search criteria</p>
        </div>
      )}
    </div>
  )
}

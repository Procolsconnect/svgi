import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "@/components/sidebar"
import "./admin.css"

export default function Admin() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="admin-wrapper">
      <main className={`admin-main ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <section className="admin-content">
          {/* <div className="content-header">
           
          </div> */}
          <div className="content-body">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  )
}

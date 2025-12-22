import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  Gauge,
  Home,
  GraduationCap,
  BookOpen,
  Info,
  Briefcase,
  Tent,
  Newspaper,
  Megaphone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react"
import "./sidebar.css"

const navItems = [
  { id: "dashboard", icon: Gauge, label: "Dashboard", path: "/admin" },
  { id: "home", icon: Home, label: "Home", path: "/admin/home" },
  { id: "admissions", icon: GraduationCap, label: "Admissions", path: "/admin/admissions" },
  { id: "academics", icon: BookOpen, label: "Academics", path: "/admin/academics" },
  { id: "about", icon: Info, label: "About", path: "/admin/about" },
  { id: "placement", icon: Briefcase, label: "Placement", path: "/admin/placement" },
  { id: "campuslife", icon: Tent, label: "Campus Life", path: "/admin/campuslife" },
  { id: "news", icon: Newspaper, label: "News", path: "/admin/news" },
  { id: "advertisement", icon: Megaphone, label: "Advertisement", path: "/admin/advertisement" },
]

export default function Sidebar({ collapsed, setCollapsed }) {
  const [expandedMenus, setExpandedMenus] = useState({})

  const toggleSubMenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }))
  }

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <GraduationCap className="sidebar-logo-icon" />
          {!collapsed && <h1 className="sidebar-title">SVGI Admin</h1>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="collapse-btn"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item-wrapper">
            <NavLink
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault()
                  toggleSubMenu(item.id)
                }
              }}
              end={item.path === "/admin"}
            >
              <item.icon className="nav-icon" />
              {!collapsed && (
                <>
                  <span className="nav-text">{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                  {item.subItems && (
                    <ChevronDown
                      className={`nav-arrow ${expandedMenus[item.id] ? "rotated" : ""}`}
                    />
                  )}
                </>
              )}
            </NavLink>

            {item.subItems && expandedMenus[item.id] && !collapsed && (
              <ul className="sub-nav-list">
                {item.subItems.map((subItem) => (
                  <li key={subItem.id} className="sub-nav-item-container">
                    <NavLink
                      to={`${item.path}/${subItem.id}`}
                      className={({ isActive }) => `sub-nav-item ${isActive ? "active" : ""}`}
                    >
                      {subItem.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        {!collapsed ? (
          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
              alt="Admin"
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">Super Admin</span>
            </div>
          </div>
        ) : (
          <div className="logout-btn-collapsed">
            <LogOut className="nav-icon" />
          </div>
        )}
      </div>
    </nav>
  )
}

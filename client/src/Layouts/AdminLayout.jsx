// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <aside>Admin Sidebar</aside>
      
      <main>
        <Outlet /> {/* admin pages load here */}
      </main>
    </div>
  );
}

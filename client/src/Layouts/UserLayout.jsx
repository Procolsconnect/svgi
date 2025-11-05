// src/layouts/UserLayout.jsx
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <header>User Navbar</header>

      <main>
        <Outlet /> {/* user pages load here */}
      </main>

      <footer>User Footer</footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./nav.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL SECTIONS ONLY ON HOME PAGE
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", type: "page", value: "/" },
    { label: "Admissions", type: "page", value: "/admissions" },
    { label: "Academics", type: "page", value: "/academics" },
    { label: "About", type: "page", value: "/about" },
    { label: "Placement&Training", type: "page", value: "/placement" },
  ];

  const handleNav = (item) => {
    if (item.type === "page") {
      navigate(item.value);
    } else {
      scrollToSection(item.value);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-container">
        <div className="logo">
          <img src="/logos/Logo_new.png" alt="logo" />
        </div>

        <nav className="nav-items">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNav(item)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <button key={item.label} onClick={() => handleNav(item)}>
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;

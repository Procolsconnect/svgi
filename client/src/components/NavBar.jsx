import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import './nav.css';

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

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "/" },
    { label: "Admission", id: "/admission" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-container">
        <div className="logo">
          <img src="/logos/Logo_new.png" alt="Amar Tourism Logo" />
        </div>

        <nav className="nav-items">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() =>
                item.label === "Packages"
                  ? navigate("/package-details")
                  : scrollToSection(item.id)
              }
            >
              {item.label}
            </button>
          ))}
        </nav>


        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() =>
              item.label === "Packages"
                ? navigate("/package-details")
                : scrollToSection(item.id)
            }
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;

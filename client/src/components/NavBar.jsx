import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./nav.css"; // your fixed nh-header CSS

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", type: "page", value: "/" },
    {
      label: "Admissions",
      type: "page",
      value: "/admissions",
      subItems: [
        { label: "Overview", value: "/admissions" },
        { label: "UG", value: "/admissions/ug" },
        { label: "PG", value: "/admissions/pg" },
        { label: "Procedure", value: "/admissions/procedure" },
        { label: "Research", value: "/admissions/research" },
      ],
    },
    {
      label: "Academics",
      type: "page",
      value: "/academics",
      subItems: [
        { label: "Overview", value: "/academics" },
        { label: "Course Outcome", value: "/academics/courseoutcome" },
        { label: "Library", value: "/academics/library" },
        { label: "Feedback", value: "/academics/feedback" },
        { label: "RDBC", value: "/academics/rdbc" },
      ],
    },
    {
      label: "Placement",
      type: "page",
      value: "/placement",
      subItems: [
        { label: "Overview", value: "/placement" },
        { label: "Placement Process", value: "/placement/placementprocess" },
        { label: "Placement Page", value: "/placement/placementpage" },
      ],
    },
    {
      label: "About",
      type: "page",
      value: "/about",
      subItems: [
        { label: "Mission", value: "/about/vission&mission" },
        { label: "Leadership", value: "/about/leadership" },
      ],
    },
    {
      label: "Campus",
      type: "page",
      value: "/campuslife",
      subItems: [
        { label: "Overview", value: "/campuslife" },
        { label: "Sports", value: "/campuslife/sports" },
        { label: "Hostel", value: "/campuslife/hostel" },
        { label: "Health", value: "/campuslife/health" },
        { label: "Festival", value: "/campuslife/fest" },
        { label: "Green", value: "/campuslife/green" },
        { label: "Policies", value: "/campuslife/policies" },
        { label: "Welfare", value: "/campuslife/welfare" },
        { label: "OurDiamond", value: "/campuslife/diamond" },
      ],
    },
    { label: "Advertisement", type: "page", value: "/advertisement", subItems: [] },
    { label: "News", type: "page", value: "/news", subItems: [] },
  ];

  const handleNav = (item) => {
    if (item.type === "page") navigate(item.value);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <div className="nh-header">
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src="/logos/Logo_new.png" alt="logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="nav-items">
            {navItems.map((item) => (
              <div className="nav-item-wrapper" key={item.label}>
                <button className="nav-item-btn" onClick={() => handleNav(item)}>
                  {item.label}
                </button>
                {item.subItems && (
                  <div className="dropdown">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.label}
                        className="dropdown-item"
                        onClick={() => navigate(sub.value)}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`mobile-item-wrapper ${
                openMobileDropdown === item.label ? "open" : ""
              }`}
            >
              <button
                className="mobile-item-btn"
                onClick={() =>
                  item.subItems?.length ? toggleMobileDropdown(item.label) : handleNav(item)
                }
              >
                {item.label}
              </button>
              {item.subItems && (
                <div className="mobile-dropdown">
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.label}
                      className="mobile-dropdown-item"
                      onClick={() => {
                        navigate(sub.value);
                        setIsMobileMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;

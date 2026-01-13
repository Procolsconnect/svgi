import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import styles from "./NavBar.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Transition starts after 50px scroll
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topNavLinks = [
    { label: "Home", value: "/" },
    { label: "About Us", value: "/about/overview" },
    { label: "News", value: "/news" },
    { label: "Infrastructure", value: "/infrastructure" },
    { label: "Advertisement", value: "/advertisement" },
    { label: "Alumni", value: "/campuslife/diamond" },
    { label: "Contact", value: "/contact" },
  ];

  const primaryNavItems = [
    {
      label: "Admissions",
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
      value: "/academics",
      subItems: [
        { label: "Overview", value: "/academics" },
        { label: "Course Outcome", value: "/academics/courseoutcome" },
        { label: "Library", value: "/academics/library" },
        { label: "Feedback", value: "/academics/feedback" },
        { label: "RDBC", value: "/academics/rdbc" },
        { label: "Faculty", value: "/academics/faculty" },
        { label: "Examination", value: "/academics/examination" },
        {label:"Schools",value:"/academics/schools"}

      ],
    },
    {
      label: "About",
      value: "/about",
      subItems: [
        { label: "Overview", value: "/about/overview" },
        { label: "Vision & Mission", value: "/about/vission&mission" },
        { label: "Leadership", value: "/about/leadership" },
        { label: "Career @ SVGI", value: "/about/career" },
        { label: "Milestone", value: "/about/milestone" },
        { label: "Administrative Offices", value: "/about/administrative-offices" },

      ],
    },
    {
      label: "Campuslife",
      value: "/campuslife",
      subItems: [
        { label: "Overview", value: "/campuslife/overview" },
        { label: "Sports", value: "/campuslife/sports" },
        { label: "Hostel", value: "/campuslife/hostel" },
        { label: "Health", value: "/campuslife/health" },
        { label: "Fest", value: "/campuslife/fest" },
        { label: "Green", value: "/campuslife/green" },
        { label: "Policies", value: "/campuslife/policies" },
        { label: "Welfare", value: "/campuslife/welfare" },
      ],
    },
    {
      label: "Placement",
      value: "/placement",
      subItems: [
        { label: "Overview", value: "/placement" },
        { label: "Placement Process", value: "/placement/placementprocess" },
        { label: "Placement Page", value: "/placement/placementpage" },
      ],
    },
    {
      label: "News",
      value: "/news",

    },
  ];

  const handleNav = (item) => {
    navigate(item.value);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <div className={`${styles['sk-header-root']} ${isScrolled ? styles['is-scrolled'] : styles['at-top']}`}>
      {/* Fixed Sticky Wrapper */}

      {/* Tier 1: News Ticker */}
      <div className={styles['sk-ticker-bar']}>
        <div className={styles['sk-ticker-inner']}>
          <div className={styles['sk-ticker-label']}>LATEST NEWS</div>
          <div className={styles['sk-ticker-content']}>
            <marquee behavior="scroll" direction="left" onMouseOver={(e) => e.currentTarget?.stop?.()} onMouseOut={(e) => e.currentTarget?.start?.()}>
              <span>NIRF 2024 Ranking: SVGI secures top position in Arts & Science category | Admissions open for 2024-25 | SVGI Alumni Meet scheduled for January 20th, 2025</span>
            </marquee>
          </div>
        </div>
      </div>
      <div className={styles['sk-fixed-container']}>

        {/* Tier 2: Secondary Nav */}
        <div className={styles['sk-secondary-nav']}>
          <div className={styles['sk-nav-container']}>
            <div className={styles['sk-social-links']}>
              <a href="#"><Facebook size={14} /></a>
              <a href="#"><Twitter size={14} /></a>
              <a href="#"><Instagram size={14} /></a>
              <a href="#"><Linkedin size={14} /></a>
            </div>
            <div className={styles['sk-top-links']}>
              {topNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.value}
                  className={link.highlight ? styles.highlight : ""}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Tier 3: Primary Nav */}
        <header className={styles['sk-primary-nav']}>
          <div className={styles['sk-nav-container']}>
            {/* Branding */}
            {/* Branding */}
            <div className={styles['sk-brand']} onClick={() => {
              if (location.pathname === "/") {
                window.location.reload();
              } else {
                navigate("/");
              }
            }} style={{ cursor: 'pointer' }}>
              <div className={styles['sk-logo-box']}>
                <img src="/logos/svgilogo.png" alt="SVGI" />
              </div>
              <div className={styles['sk-brand-text']}>
                <div className={styles['college-title']}>SHREE VENKATESHWARA</div>
                <div className={styles['college-subtitle']}>GROUP OF INSTITUTIONS</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles['sk-desktop-menu']}>
              <ul className={styles['sk-nav-list']}>
                {primaryNavItems.map((item) => (
                  <li key={item.label} className={styles['sk-nav-item']}>
                    <div className={styles['sk-item-wrapper']}>
                      <button
                        className={styles['sk-nav-link']}
                        onClick={() => !item.subItems && handleNav(item)}
                      >
                        {item.label}
                        {item.subItems && <ChevronDown size={14} className={styles['sk-chevron']} />}
                      </button>

                      {item.subItems && (
                        <ul className={styles['sk-dropdown']}>
                          {item.subItems.map((sub) => (
                            <li key={sub.label}>
                              <Link to={sub.value} onClick={() => setIsMobileMenuOpen(false)}>
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Actions */}
            <div className={styles['sk-mobile-actions']}>
              <button
                className={styles['sk-menu-toggle']}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`${styles['sk-mobile-drawer']} ${isMobileMenuOpen ? styles['is-open'] : ""}`}>
        <div className={styles['sk-drawer-content']}>
          {/* Add Close Button inside drawer */}
          <button
            className={styles['sk-drawer-close']}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={30} />
          </button>

          <ul className={styles['sk-drawer-primary']}>
            {primaryNavItems.map((item) => (
              <li key={item.label} className={`${styles['sk-drawer-item']} ${openMobileDropdown === item.label ? styles['is-expanded'] : ""}`}>
                <div className={styles['sk-drawer-row']}>
                  <button onClick={() => item.subItems ? toggleMobileDropdown(item.label) : handleNav(item)}>
                    {item.label}
                  </button>
                  {item.subItems && (
                    <span className={styles['sk-drawer-icon']} onClick={() => toggleMobileDropdown(item.label)}>
                      {openMobileDropdown === item.label ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  )}
                </div>
                {item.subItems && (
                  <ul className={styles['sk-drawer-sublist']}>
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.value} onClick={() => setIsMobileMenuOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className={styles['sk-drawer-secondary']}>
            {topNavLinks.map((link) => (
              <Link key={link.label} to={link.value} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;




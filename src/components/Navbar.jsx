import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiBarChart2,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <div className="brand-logo">
            <div className="analytics-logo">
              <span className="logo-l">L</span>

              <span className="logo-m">
                M
              </span>

              <div className="logo-bars">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="logo-trend">↗</span>
            </div>
          </div>

          <div className="brand-text">
            <span className="brand-name">
              Lorenz Dave Macatangay
            </span>

            <span className="brand-title">
              Aspiring Data Analyst
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-actions">

          {/* DARK MODE */}
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <FiSun className="sun-icon" />
            <span className="toggle-switch">
              <span className="toggle-circle">
                {darkMode ? <FiMoon /> : <FiSun />}
              </span>
            </span>
          </button>

          {/* MOBILE MENU */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
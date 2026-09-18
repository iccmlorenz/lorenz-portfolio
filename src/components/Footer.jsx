import {
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">

            <div className="footer-analytics-logo">

              <span className="footer-logo-l">L</span>

              <span className="footer-logo-m">
                M
              </span>

              <div className="footer-logo-bars">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="footer-logo-trend">
                ↗
              </span>

            </div>

            <div>
              <h3>Lorenz Dave Macatangay</h3>
              <p>Aspiring Data Analyst</p>
            </div>

          </a>

        </div>


        {/* NAVIGATION */}
        <div className="footer-navigation">

          <div className="footer-column">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>

          </div>

          <div className="footer-column">

            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>

          </div>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h4>Connect With Me</h4>

          <a
            href="https://www.linkedin.com/in/macatangay-ld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>

          <a href="mailto:your-email@example.com">
            <FiMail />
            <span>Email</span>
          </a>

          <div className="footer-location">
            <FiMapPin />
            <span>
              Quezon City, Metro Manila
            </span>
          </div>

        </div>


        {/* TAGLINE */}
        <div className="footer-tagline">

          <p>
            Turning data
            <br />
            into insights for
            <br />
            a better tomorrow.
          </p>

          <div className="tagline-line"></div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Lorenz Dave Macatangay
          <span className="footer-divider">|</span>
          Aspiring Data Analyst
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
        >
          <FiArrowUp />
          <span>Back to Top</span>
        </button>

      </div>

    </footer>
  );
}

export default Footer;
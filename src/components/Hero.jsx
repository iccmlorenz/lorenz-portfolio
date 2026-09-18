import {
  FiArrowRight,
  FiDownload,
  FiDatabase,
  FiBarChart2
} from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="hero section">

      <div className="container hero-grid">

        <div className="hero-content">

          <span className="eyebrow">
            ASPIRING DATA ANALYST
          </span>

          <h1>
            Hi, I'm <span>Lorenz Dave</span> Macatangay
          </h1>

          <h2>
            Data Analyst | SQL | Python | Tableau
          </h2>

          <p>
            Data-focused professional with experience in operations,
            customer service, technical support, reporting, database
            management, and workflow optimization.
          </p>

          <p>
            I enjoy transforming raw data into actionable insights
            that support better business decisions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Projects
              <FiArrowRight />
            </a>

            <a
              href="/src/assets/resume.pdf"
              className="btn btn-secondary"
              download
            >
              Download Resume
              <FiDownload />
            </a>

          </div>

        </div>

        <div className="analytics-card">

          <div className="analytics-header">
            <div>
              <span>DATA & ANALYTICS</span>
              <h3>Overview</h3>
            </div>

            <FiBarChart2 />
          </div>

          <div className="metric">
            <div>
              <span>SQL</span>
              <strong>Data Analysis</strong>
            </div>

            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="metric">
            <div>
              <span>Python</span>
              <strong>Pandas / NumPy</strong>
            </div>

            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="metric">
            <div>
              <span>Tableau</span>
              <strong>Visualization</strong>
            </div>

            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="mini-chart">
            <div className="chart-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="chart-label">
              <FiDatabase />
              <span>Analytics Workflow</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
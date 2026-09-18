function About() {
  return (
    <section id="about" className="section about">
      <div className="container">

        <div className="section-heading">
          <span>ABOUT ME</span>
          <h2>From Operations to Data Analytics</h2>
        </div>

        <div className="about-grid">

          <div className="about-placeholder">
            <img
              src="/src/assets/profile.jpg"
              alt="Lorenz Dave Macatangay"
              className="profile-photo"
            />
          </div>

          <div className="about-content">

            <h3>
              Combining technical skills with real-world operations
            </h3>

            <p>
              My background combines operations, customer service,
              technical support, reporting, database management,
              and process improvement.
            </p>

            <p>
              Through my professional and academic experience, I
              developed an interest in using data to understand
              problems, identify trends, and support better decisions.
            </p>

            <p>
              My goal is to transition into a Data Analyst role where
              I can apply SQL, Python, Excel, Tableau, PostgreSQL,
              and analytical thinking to real business problems.
            </p>

            <div className="about-highlights">

              <div>
                <strong>Operations</strong>
                <span>Business understanding</span>
              </div>

              <div>
                <strong>Technical</strong>
                <span>Systems &amp; databases</span>
              </div>

              <div>
                <strong>Analytics</strong>
                <span>Data-driven thinking</span>
              </div>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

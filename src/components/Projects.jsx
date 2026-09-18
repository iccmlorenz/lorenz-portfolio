import { projects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <section id="projects" className="section projects">

      <div className="container">

        <div className="section-heading">
          <span>FEATURED PROJECTS</span>
          <h2>Turning Data Into Insights</h2>
          <p>
            Portfolio projects demonstrating my approach to data
            cleaning, analysis, visualization, and business recommendations.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article className="project-card" key={project.id}>

              <div className="project-dashboard">

                <div className="fake-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="fake-metrics">
                  <div>
                    <small>ANALYSIS</small>
                    <strong>01</strong>
                  </div>

                  <div>
                    <small>INSIGHTS</small>
                    <strong>+</strong>
                  </div>
                </div>

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="project-story">

                  <div>
                    <strong>Business Problem</strong>
                    <p>{project.problem}</p>
                  </div>

                  <div>
                    <strong>Key Analysis</strong>
                    <p>{project.analysis}</p>
                  </div>

                  <div>
                    <strong>Key Findings</strong>
                    <p>{project.findings}</p>
                  </div>

                  <div>
                    <strong>Recommendations</strong>
                    <p>{project.recommendations}</p>
                  </div>

                </div>

                <div className="project-buttons">

                  <a href={project.github}>
                    <FiGithub />
                    GitHub
                  </a>

                  <a href={project.dashboard}>
                    <FiExternalLink />
                    Dashboard
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
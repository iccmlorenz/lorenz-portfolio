import { FiGithub, FiArrowUpRight } from "react-icons/fi";

function GithubSection() {
  return (
    <section className="github-section">

      <div className="container github-container">

        <div>
          <span>GITHUB</span>

          <h2>
            Explore my work
          </h2>

          <p>
            See how I use SQL, Python, and visualization tools
            to turn raw datasets into actionable insights.
          </p>
        </div>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <FiGithub />
          Visit My GitHub
          <FiArrowUpRight />
        </a>

      </div>

    </section>
  );
}

export default GithubSection;
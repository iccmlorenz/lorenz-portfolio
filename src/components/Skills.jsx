import {
  FiDatabase,
  FiCode,
  FiBarChart2,
  FiBriefcase,
  FiGlobe
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Data Analytics",
    icon: <FiBarChart2 />,
    skills: [
      "Data Analysis & Interpretation",
      "Data Cleaning & Validation",
      "Reporting",
      "Trend Analysis",
      "Process Improvement"
    ]
  },
  {
    title: "Programming & Databases",
    icon: <FiDatabase />,
    skills: [
      "SQL",
      "Python",
      "PostgreSQL",
      "Database Management",
      "Pandas",
      "NumPy"
    ]
  },
  {
    title: "Data Visualization",
    icon: <FiBarChart2 />,
    skills: [
      "Tableau",
      "Excel",
      "Matplotlib",
      "Seaborn",
      "Crystal Reports"
    ]
  },
  {
    title: "Business Systems",
    icon: <FiBriefcase />,
    skills: [
      "SAP Business One",
      "SAP B1 Reporting",
      "Crystal Reports",
      "Business Reporting"
    ]
  },
  {
    title: "Web & Technical",
    icon: <FiGlobe />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "Git/GitHub",
      "Basic Networking"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section skills">

      <div className="container">

        <div className="section-heading">
          <span>SKILLS & TOOLS</span>
          <h2>My Data Analyst Toolkit</h2>
          <p>
            Technologies and skills I use to work with data,
            generate reports, and communicate insights.
          </p>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>{group.title}</h3>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
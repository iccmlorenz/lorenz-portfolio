const certifications = [
  {
    date: "August 2026",
    title: "Data Analysis with Python",
    organization: "freeCodeCamp",
    skills: "Python, NumPy, Pandas, Matplotlib, Seaborn"
  },
  {
    date: "August 2026",
    title: "Relational Database V8",
    organization: "freeCodeCamp",
    skills: "SQL, PostgreSQL, Relational Databases"
  },
  {
    date: "June 2023",
    title: "JCBA Certification for Internship Program",
    organization: "JCBA Solutions and Consultancy Inc.",
    skills: "Technical Support, Reporting, Development"
  },
  {
    date: "September 2024",
    title: "Logics, Circuits, and Breadboarding Seminar",
    organization:
      "School of Engineering, Architecture, and Fine Arts — Divine Word College of Calapan",
    skills: "Speaker"
  }
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications">

      <div className="container">

        <div className="section-heading">
          <span>CERTIFICATIONS</span>
          <h2>Continuous Learning</h2>
        </div>

        <div className="certifications-grid">

          {certifications.map((certification) => (

            <article className="cert-card" key={certification.title}>

              <span>{certification.date}</span>

              <h3>{certification.title}</h3>

              <p>{certification.organization}</p>

              <small>{certification.skills}</small>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;
const experiences = [
  {
    date: "March 2025 - Present",
    title: "Customer Relations Services Representative",
    company: "Shopping Center Management Corporation",
    location: "Pasay City",
    responsibilities: [
      "Supervised approximately 70–80 personnel.",
      "Analyzed incident data to identify trends and recurring issues.",
      "Reviewed incident reports and supported investigations.",
      "Improved reporting systems and data accountability.",
      "Assisted customers, tenants, employees, and VIP stakeholders."
    ]
  },
  {
    date: "March 2023 - June 2023",
    title: "Technical Support and Backend Developer Intern",
    company: "JCBA Solutions and Consultancy Inc.",
    location: "Valenzuela City",
    responsibilities: [
      "Developed and customized Crystal Reports and SAP Business One reports.",
      "Performed SQL queries and data extraction.",
      "Exported and analyzed reports using Excel.",
      "Assisted with Django, HTML, CSS, and JavaScript development.",
      "Conducted system testing, debugging, and database maintenance."
    ]
  },
  {
    date: "November 2019",
    title: "IT Support – Work Immersion",
    company: "Bureau of Fisheries and Aquatic Resources",
    location: "Calapan City",
    responsibilities: [
      "Provided technical support for hardware, software, and network issues.",
      "Performed data encoding and file management.",
      "Assisted with system updates."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section experience">

      <div className="container">

        <div className="section-heading">
          <span>PROFESSIONAL EXPERIENCE</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">

          {experiences.map((experience) => (

            <article className="timeline-item" key={experience.title}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-date">
                  {experience.date}
                </span>

                <h3>{experience.title}</h3>

                <h4>
                  {experience.company}
                </h4>

                <small>{experience.location}</small>

                <ul>
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
const workflow = [
  "Raw Data",
  "Data Cleaning",
  "SQL / Python",
  "Exploratory Data Analysis",
  "Visualization",
  "Insights",
  "Business Recommendations"
];

function Toolkit() {
  return (
    <section className="section toolkit">

      <div className="container">

        <div className="section-heading">
          <span>DATA ANALYST TOOLKIT</span>
          <h2>My Analytics Workflow</h2>
          <p>
            A structured approach to turning raw data into
            useful business information.
          </p>
        </div>

        <div className="workflow">

          {workflow.map((step, index) => (

            <div className="workflow-step" key={step}>

              <div className="workflow-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{step}</h3>

              {index !== workflow.length - 1 && (
                <div className="workflow-arrow">
                  →
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Toolkit;
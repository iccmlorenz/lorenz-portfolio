import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiSend
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="container contact-grid">

        <div className="contact-info">

          <div className="section-heading">
            <span>CONTACT</span>

            <h2>
              Let's connect
            </h2>

            <p>
              I'm open to entry-level Data Analyst opportunities,
              collaborations, and professional conversations.
            </p>
          </div>

          <div className="contact-item">
            <FiLinkedin />

            <div>
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/in/macatangay-ld"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/macatangay-ld
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FiMail />

            <div>
              <span>Email</span>
              <p>your-email@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FiMapPin />

            <div>
              <span>Location</span>
              <p>Quezon City, Metro Manila, Philippines</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

          </div>

          <div className="form-group">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="Subject"
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>

          </div>

          <button className="btn btn-primary" type="submit">
            Send Message
            <FiSend />
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
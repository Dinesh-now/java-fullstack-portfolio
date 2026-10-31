
function Contact() {
  const email = "dineshkumar86106@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/dinesh-k-63a292324";
  const github = "https://github.com/Dinesh-now";

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <p className="section-subtitle">GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <p className="contact-intro">
          I'm looking for my first full-time role as a Java Developer, Backend
          Developer, or Full Stack Developer. If you have an opportunity or
          would like to connect, feel free to contact me.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-icon">📧</div>

          <h3>Email</h3>

          <p>Let's connect through email.</p>

          <a href={`mailto:${email}`} className="contact-link">
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💼</div>

          <h3>LinkedIn</h3>

          <p>Connect with me professionally.</p>

          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Visit LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💻</div>

          <h3>GitHub</h3>

          <p>Explore my projects and code.</p>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Visit GitHub
          </a>
        </div>
      </div>

      <div className="contact-bottom">
        <h3>Have an opportunity for me?</h3>

        <p>I'd be happy to hear from you!</p>

        <div className="contact-bottom-buttons">
          <a href={`mailto:${email}`} className="contact-button">
            Contact Me
          </a>
          <a
            href="/resume/Dinesh_Resume_2026.pdf"
            download="Dinesh_K_Resume.pdf"
            className="contact-button contact-button-outline"
          >
            Download Resume
          </a>
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>
          © {new Date().getFullYear()} Dinesh K. Built with React.js.
        </p>
      </footer>
    </section>
  );
}

export default Contact;


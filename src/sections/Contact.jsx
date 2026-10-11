
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
          I'm looking for opportunities to start my career as a Java Full Stack
          Developer. If you have an opportunity or would like to connect, feel
          free to contact me.
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

        <a href={`mailto:${email}`} className="contact-button">
          Contact Me
        </a>
      </div>

      <footer className="portfolio-footer">
        <p>
          © {new Date().getFullYear()} Dinesh. Built with React.js.
        </p>
      </footer>
    </section>
  );
}

export default Contact;


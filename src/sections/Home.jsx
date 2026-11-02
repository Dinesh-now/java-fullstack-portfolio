function Home() {
  const heroTags = ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"];

  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="open-badge">
          <span className="open-dot" aria-hidden="true"></span>
          Open to work
        </p>

        <p className="intro">Hello, I'm</p>
        <h1>Dinesh K</h1>
        <h2>Java Full Stack Developer</h2>

        <p className="description">
          MCA graduate from Chennai who builds complete web applications with
          Java, Spring Boot, React.js, and MySQL. I have built a secure Banking
          Application with JWT authentication and 25+ REST APIs, a React-based
          Child Support Enforcement Portal, and I'm now building an E-commerce
          application.
        </p>

        <ul className="hero-tags">
          {heroTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        

        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>
          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
          <a
            href="/resume/Dinesh_Resume_2026.pdf"
            download="Dinesh_K_Resume.pdf"
            className="btn btn-resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

function Home(){
    return(
        <section id="home" className="home">
            <div className="home-content">
                <p className="intro">Hello I'm</p>
                <h1>Dinesh</h1>
                <h2>Java Full Stack Developer</h2>
                <p className="description">
                    Java Full Stack Developer | Spring Boot + React.js
Fresher with hands-on project experience in REST APIs, database design, and responsive UIs. Ready to learn fast and build things that work.
                </p>

                <div className="home-buttons">
                    <a href="#projects" className="btn primary-btn">View My Projects</a>
                    <a href="#contact" className="btn secondary-btn">Contact me</a>
                    <a
    href="/resume/Dinesh_Resume.pdf"
    download="Dinesh_Resume.pdf"
    className="btn btn-resume"
  >
    Download Resume
  </a>
                </div>
            </div>
        </section>
    )
}

export default Home;
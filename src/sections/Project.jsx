function Projects() {
  const projects = [
    {
      id: 1,
      title: "Banking Application",
      status: "Completed",
      description:
        "Developed a full-stack banking application using Java, Spring Boot, React.js, and MySQL. Implemented CRUD operations for user and account management, deposit and withdrawal functionality, and transaction history tracking. Designed REST APIs with input validation and exception handling. Implemented pagination and JWT-based authentication as part of the application development.",

      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "Hibernate",
        "REST APIs",
        "JWT",
        "Git",
      ],

      github: "https://github.com/Dinesh-now/Banking-Application-Full-Stack",
    },

    {
      id: 2,
      title: "E-commerce Web Application",
      status: "In Progress",
      description:
        "Currently developing a full-stack E-commerce web application using Java, Spring Boot, React.js, and MySQL. The application includes product listing and management, user login, shopping cart functionality, product search and filtering, and order management. Implementing product CRUD operations, order placement, and order history to provide a smooth online shopping experience.",

      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "JavaScript",
        "MySQL",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
      ],

      github: "https://github.com/Dinesh-now/E-CommereceApp",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <p className="section-subtitle">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="project-intro">
          Explore my projects and the technologies I use to build
          practical web applications.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card-header">
              <div className="project-icon">
                {project.id === 1 ? "🏦" : "🛒"}
              </div>

              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "completed"
                    : "in-progress"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span
                  className="technology-tag"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.github && (
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
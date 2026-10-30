function Projects() {
  const projects = [
    {
      id: 1,
      icon: "🏦",
      title: "Banking Application",
      status: "Completed",
      description:
        "A full-stack banking application built with Java, Spring Boot, React.js, and MySQL. Developed 25+ REST APIs with full CRUD for users, accounts, transactions, and loans, secured with Spring Security and JWT authentication. Implemented deposit, withdraw, and transfer with balance validation, paginated transaction history, a loan workflow, DTOs, validation, and global exception handling. Tested with Postman, JUnit, and Mockito, with a React frontend of 8 screens connected through Axios.",

      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Hibernate",
        "MySQL",
        "React.js",
        "Axios",
      ],

      github: "https://github.com/Dinesh-now/Banking-Application-Full-Stack",
    },

    {
      id: 2,
      icon: "⚖️",
      title: "Child Support Enforcement Portal (CSES)",
      status: "Completed",
      description:
        "A React.js web portal for a Child Support Enforcement System. Built the user interface with reusable, component-based architecture, implemented page navigation with React Router, and managed state and data flow using React hooks to deliver a clean and responsive experience.",

      technologies: [
        "React.js",
        "React Router",
        "React Hooks",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],

      // Add your CSES repository link here and the GitHub button will appear.
        github: "https://github.com/Dinesh-now/cses_portal",
    },

    {
      id: 3,
      icon: "🛒",
      title: "E-commerce Web Application",
      status: "In Progress",
      description:
        "A full-stack E-commerce web application using Java, Spring Boot, React.js, and MySQL. Includes product listing and management, user login, shopping cart, product search and filtering, order placement, and order history, with the React frontend connected to the Spring Boot backend through REST APIs.",

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
        <p className="section-subtitle">My Work</p>

        <h2>Featured Projects</h2>

        <p className="project-intro">
          Explore my projects and the technologies I use to build practical
          web applications.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card-header">
              <div className="project-icon">{project.icon}</div>

              <span
                className={`project-status ${
                  project.status === "Completed" ? "completed" : "in-progress"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span className="technology-tag" key={technology}>
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

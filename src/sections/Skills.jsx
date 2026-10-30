function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT Authentication",
    "Hibernate / JPA",
    "JDBC",
    "REST APIs",
    "MySQL",
    "React.js",
    "React Router",
    "JavaScript",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Axios",
    "Postman",
    "JUnit & Mockito",
    "Git & GitHub",
    "Maven",
    "Data Structures & Algorithms",
    "Docker (Basics)",
    "Microservices (Basics)",
  ];

  return (
    <section id="skills" className="skills">
      <p className="section-subtitle">What I Work With</p>
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

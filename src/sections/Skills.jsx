function Skills(){
    const skills = [
  "Java",
  "Spring Boot",
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "MySQL",
  "JDBC",
  "Hibernate",
  "REST APIs",
  "Microservices",
  "Docker",
  "Git & GitHub"
];

return(
    <section id="skills" className="skills">
        <p className="section-subtitle">What I Work With</p>
        <h2>My Skills</h2>
        <div className="skills-container">
            {skills.map((skill,index)=>(
                <div className="skill-card" key={index}>
                    {skill}
                </div>
            ))}
        </div>
    </section>
)
}

export default Skills;
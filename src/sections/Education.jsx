
function Education() {
  const educationList = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Gnanamani College of Technology",
      duration: "2023 - 2025",
      result: "CGPA: 7.7",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
      institution: "Government Arts and Science College",
      duration: "2020 - 2023",
      result: "Percentage: 68%",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Java Full Stack Development",
      institution: "QSpiders Institute",
      location: "Chennai, Tamil Nadu",
      technologies: [
        "Core Java",
        "Spring Boot",
        "Hibernate",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
      ],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-header">
        <p className="section-subtitle">MY LEARNING JOURNEY</p>
        <h2>Education & Training</h2>
        <p className="education-intro">
          My academic background and professional training in Java Full Stack
          Development.
        </p>
      </div>

      <div className="education-container">
        {educationList.map((education) => (
          <div className="education-card" key={education.id}>
            <div className="education-icon">🎓</div>

            <div className="education-details">
              <span className="education-duration">
                {education.duration}
              </span>

              <h3>{education.degree}</h3>

              <p className="education-institution">
                {education.institution}
              </p>

              <p className="education-result">{education.result}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="training-section">
        <h3 className="training-heading">Professional Training</h3>

        {courses.map((course) => (
          <div className="training-card" key={course.id}>
            <div className="training-icon">💻</div>

            <div className="training-details">
              <h4>{course.title}</h4>

              <p className="training-institution">
                {course.institution} — {course.location}
              </p>

              <p className="training-description">
                Completed training in full-stack application development,
                covering Java backend technologies, databases, and frontend
                development.
              </p>

              <div className="training-technologies">
                {course.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

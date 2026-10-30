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
      icon: "💼",
      title: "Full Stack Developer Intern",
      institution: "VCodez Innovation — Chennai, Tamil Nadu",
      duration: "Feb 2025 - May 2025",
      description:
        "Built and styled responsive web pages with HTML, CSS, and JavaScript, and worked within a full stack development workflow, completing assigned frontend tasks on schedule alongside the training team.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      id: 2,
      icon: "💻",
      title: "Java Full Stack Development",
      institution: "QSpiders, Vadapalani — Chennai, Tamil Nadu",
      duration: "Nov 2025 - Sep 2026",
      description:
        "Completed training in full-stack application development, covering Java backend technologies, databases, and frontend development.",
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
          My academic background, internship experience, and professional
          training in Java Full Stack Development.
        </p>
      </div>

      <div className="education-container">
        {educationList.map((education) => (
          <div className="education-card" key={education.id}>
            <div className="education-icon">🎓</div>

            <div className="education-details">
              <span className="education-duration">{education.duration}</span>

              <h3>{education.degree}</h3>

              <p className="education-institution">{education.institution}</p>

              <p className="education-result">{education.result}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="training-section">
        <h3 className="training-heading">Internship & Professional Training</h3>

        {courses.map((course) => (
          <div className="training-card" key={course.id}>
            <div className="training-icon">{course.icon}</div>

            <div className="training-details">
              <span className="education-duration">{course.duration}</span>

              <h4>{course.title}</h4>

              <p className="training-institution">{course.institution}</p>

              <p className="training-description">{course.description}</p>

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

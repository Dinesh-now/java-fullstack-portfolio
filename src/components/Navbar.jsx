function Navbar() {
  return (
    <nav>
      <div className="logo">Dinesh K</div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="nav-resume">
          <a href="/resume/Dinesh_Resume_2026.pdf" download="Dinesh_K_Resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

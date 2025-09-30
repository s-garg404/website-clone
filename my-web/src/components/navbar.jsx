import React from "react";
import "../styles/navbar.css"

export default function Navbar() {

  const scrollToSection = (id) => {document.getElementsById(id).scrollIntoView({behaviour:smooth})};

  return (
    <>
    
      <nav className="navbar">

        <div
        className="nav-logo"
        onClick={()=> scrollToSection("home")}>
          Sia Garg
        </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
          <li onClick={() => window.open("/resume.pdf", "_blank")}>Resume</li>
        </ul>

      </nav>

    </>
  );
}

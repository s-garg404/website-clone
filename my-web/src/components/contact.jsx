import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>

      <footer className="contact-footer">

        <div className="footer-content">
          <h2>Have a project or just want to say hi? Let's connect!</h2>
          
          <a
          className="email-link"
          href="mailto:sia_garg@outlook.ca">
            sia_garg@outlook.ca
          </a>

          <div className="social-links">
            <a href="https://github.com/s-garg404">Github</a>
            <a href="https://www.linkedin.com/in/sia-garg-ab910631b/">LinkedIn</a>
          </div>

        </div>

      </footer>

    </>
  );
};

export default Contact;

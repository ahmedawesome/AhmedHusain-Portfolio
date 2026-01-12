import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-details">
      <div className="about-social-icon text-center">
        <ul className="about-social">
          <li className="wow fadeIn" data-wow-delay=".8s">
            <a href="https://www.linkedin.com/in/ahmed-husien-a1205a251/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li className="wow fadeIn" data-wow-delay=".6s">
            <a href="https://github.com/ahmedawesome" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="wow fadeIn" data-wow-delay=".4s">
            <a href="https://www.instagram.com/ahmed.m.husien?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className="wow fadeIn" data-wow-delay=".2s">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <h3>© {currentYear}, Made with ❤️ by Ahmed Husain.</h3>
      </div>
    </div>
  );
}

export default Footer;
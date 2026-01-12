import React from "react";

function Header() {
  return (
    <header className="menubar">
      <div className="menubar-content">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="site-title">
                  <a href="/#home" style={{ textDecoration: "none" }}>
                    <h3 className="my-name">Ahmed Husain</h3>
                    <p className="my-subtitle">
                      Computer Science Student • Al Azhar University – Gaza (2026)
                    </p>
                  </a>
                </div>
              </div>

              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="col-md-9 col-sm-9 navbar-style">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .my-name {
          color: #1e40af;
          font-weight: bold;
          margin: 0;
          font-size: 2rem;
          transition: color 0.3s;
        }
        .my-name:hover {
          color: #eab308;
        }
        .my-subtitle {
          color: #4b5563;
          font-size: 1rem;
          margin: 0;
          font-weight: 400;
        }
        .nav-link {
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #eab308 !important;
        }
      `}</style>
    </header>
  );
}

export default Header;
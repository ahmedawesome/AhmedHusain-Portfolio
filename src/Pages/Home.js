import React from "react";

const Home = () => {
  return (
    <div className="main-page-content">
      {/* Hero */}
      <div id="home">
        <div id="particles-js"></div>
        <div className="home-content-main">
          <div className="table-cell">
            <div className="container">
              <div className="row home-row">
                <div className="col-md-12 col-sm-12">
                  <div className="home-text wow fadeIn text-center">
                    <h1 className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper" style={{ width: "266px", overflow: "hidden" }}>
                        <b className="is-hidden">Ahmed Husain</b>
                        <b className="is-hidden">Student</b>
                        <b className="is-visible">Developer</b>
                      </span>
                    </h1>
                    <div className="about-social-icon text-center">
                      <ul className="about-social">
                        <li className="wow fadeIn" data-wow-delay=".4s">
                          <a href="https://www.linkedin.com/in/ahmed-husien-a1205a251/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay=".2s">
                          <a href="https://github.com/ahmedawesome" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay=".6s">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay=".8s">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax" data-velocity="-.1"></div>
        <div className="parallax" data-velocity="-.5" data-fit="525"></div>
      </div>

      {/* About */}
      <div id="about">
        <div className="about-content">
          <div className="love-grid text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>About Me</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I'm Ahmed Husain, a passionate Computer Science graduate from Al Azhar University – Gaza (2025).  
                      I love building modern web applications, creating user-friendly interfaces, and solving real-world problems through code. My graduation project, **BookIn**, is a full-featured hotel booking platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".1s">
                    <i className="fa fa-pencil-square-o love-icon" aria-hidden="true"></i>
                    <h3>Learning Daily</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Always learning new technologies and best practices</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".3s">
                    <i className="fa fa-file-image-o love-icon" aria-hidden="true"></i>
                    <h3>UI/UX Enthusiast</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Focus on clean, responsive, and beautiful designs</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".2s">
                    <i className="fa fa-globe love-icon" aria-hidden="true"></i>
                    <h3>Web Developer</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Building full-stack web apps with React & more</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".4s">
                    <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                    <h3>Problem Solver</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Turning ideas into functional solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-back"></div>
          <div className="me-grid">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                  <div className="about-image">
                    <img src="assets/img/about-image.jpg" alt="Ahmed Husain" className="about-img wow fadeIn" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                  <div className="about-details wow fadeIn">
                    <div className="main-title left-title text-left wow fadeIn">
                      <h3>Hi! I'm Ahmed</h3>
                      <div className="underline1 no-margin"></div>
                      <div className="underline2 no-margin"></div>
                    </div>
                    <p className="wow fadeIn">
                      I'm a dedicated Computer Science graduate from Al Azhar University – Gaza (2025).  
                      Passionate about front-end development, creating responsive and user-friendly web applications using React, Tailwind CSS, and modern JavaScript practices.  
                      My final-year graduation project, **BookIn**, is a complete hotel booking system with authentication, admin dashboard, booking flow, and more.  
                      <br /><br />
                      I'm always eager to learn new technologies and turn ideas into reality.
                    </p>
                    <a className="about-link-1" href="#" target="_blank">See Resume (Coming Soon)</a>
                    <a className="about-link-2" href="#contact">Hire Me / Collaborate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-counter text-center">
            <div className="counter">
              <div className="container">
                <div className="row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-pencil-square-o stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">3+</h3>
                      <p>Personal Projects</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-crop stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">4+</h3>
                      <p>Years Learning Web Dev</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-bolt stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">1</h3>
                      <p>Major Graduation Project</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-coffee stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">1000+</h3>
                      <p>Cups of Tea/Coffee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects">
        <div className="work-content">
          <div className="work-grid">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Projects</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>My graduation project **BookIn** is the highlight!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="gallery" style={{ paddingTop: "80px" }}>
                <a href="https://github.com/ahmedawesome/BookIn" target="_blank" rel="noopener noreferrer">
                  <div className="gallery-item featured-project">
                    <img className="gallery-image" src="assets/img/portfolios/web/1.jpg" alt="BookIn" />
                    <div className="gallery-overlay">
                      <h4>BookIn - Hotel Booking App</h4>
                      <p>React project with auth, booking, admin dashboard</p>
                      <span className="view-btn">View on GitHub →</span>
                    </div>
                  </div>
                </a>
                <a href="#"><div className="gallery-item"><img className="gallery-image" src="assets/img/portfolios/development/1.jpg" alt="" /></div></a>
                <a href="#"><div className="gallery-item"><img className="gallery-image" src="assets/img/portfolios/development/2.jpg" alt="" /></div></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skill">
        <div className="skill-main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title text-center wow fadeIn">
                  <h3>My Skills</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Focus on front-end development and modern web technologies.</p>
                </div>
              </div>
            </div>
            <div className="row love-row wow fadeIn">
              <div className="col-md-6">
                <div className="skill-details text-left">
                  <p>Proficient in React, Tailwind CSS, modern JavaScript. BookIn demonstrates full front-end skills.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill-details">
                  <div className="content">
                    <div className="col">
                      <ul id="skill-main">
                        <li><h3>React.js - 90%</h3></li>
                        <li><h3>JavaScript / ES6+ - 95%</h3></li>
                        <li><h3>Tailwind CSS - 85%</h3></li>
                        <li><h3>HTML5 / CSS3 - 95%</h3></li>
                        <li><h3>Git / GitHub - 80%</h3></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="resume">
        <div className="resume-content">
          <div className="resume-grid text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Education</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>My academic journey in Computer Science.</p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-12">
                  <div className="resume-details" data-wow-delay=".3s">
                    <div className="resume-hover"></div>
                    <div className="resume-main">
                      <i className="fa fa-graduation-cap resume-icon" aria-hidden="true"></i>
                      <h3>Al Azhar University – Gaza</h3>
                      <h2>Bachelor of Computer Science</h2>
                      <h4>Graduated: 2025</h4>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Completed my Bachelor's degree in Computer Science.  
                        Focused on web development, software engineering, and building practical applications.  
                        Graduation project: **BookIn** – a full-featured hotel booking platform with authentication, admin dashboard, booking flow, and responsive design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="service">
        <div className="service-content">
          <div className="service-grid text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>Service List</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>I always want to make things that make a difference.</p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-4 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img src="assets/img/service/design-development.jpg" alt="design-development" />
                    </div>
                    <div className="service-bottom">
                      <i className="fa fa-edit service-icon" aria-hidden="true"></i>
                      <h3>Design + Development</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img src="assets/img/service/e-commarce.jpg" alt="e-commarce" />
                    </div>
                    <div className="service-bottom">
                      <i className="fa fa-cart-plus exp-icon" aria-hidden="true"></i>
                      <h3>eCommerce</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Integration of eCommerce platforms, payment gateways, custom product templates, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img src="assets/img/service/analytics.jpg" alt="analytics" />
                    </div>
                    <div className="service-bottom">
                      <i className="fa fa-tachometer service-icon" aria-hidden="true"></i>
                      <h3>Analytics</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Get insights into who is browsing your site so that you can make smarter business decisions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img src="assets/img/service/mobile-friendly.jpg" alt="mobile-friendly" />
                    </div>
                    <div className="service-bottom">
                      <i className="fa fa-desktop exp-icon" aria-hidden="true"></i>
                      <h3>Mobile-friendly</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img src="assets/img/service/website-audit.jpg" alt="website-audit" />
                    </div>
                    <div className="service-bottom">
                      <i className="fa fa-search exp-icon" aria-hidden="true"></i>
                      <h3>Website Rank</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Looking to improve your page performance, SEO, or user experience? Request a free site audit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img src="assets/img/service/content-management.jpg" alt="content-management" />
                    </div>
                    <div className="service-bottom">
                      <i className="fa fa-file exp-icon" aria-hidden="true"></i>
                      <h3>Content Management</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Custom theme and plugin development. Easily update site content with knowledge of powerful code.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - Personalized with real working links */}
      <div id="blog">
        <div className="blog-content">
          <div className="blog-grid text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Thoughts & Updates</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Sharing my journey as a developer, lessons learned, and ideas from real projects.</p>
                  </div>
                </div>
              </div>
              <div className="row blog-row wow fadeIn">
                {/* Post 1: BookIn Project */}
                <div className="col-md-4 col-sm-6 blog-col">
                  <div className="blog-details">
                    <div className="blog-image">
                      <img src="assets/img/blog/blog1.png" alt="BookIn Project" />
                    </div>
                    <div className="blog-bottom">
                      <h3>Building BookIn: My Graduation Project Journey</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>From idea to full-featured hotel booking app with React, authentication, admin dashboard, and responsive design — here's how I did it.</p>
                      <a href="https://github.com/ahmedawesome/BookIn" target="_blank" rel="noopener noreferrer" className="blog-link">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Post 2: Learning React & Tailwind */}
                <div className="col-md-4 col-sm-6 blog-col">
                  <div className="blog-details">
                    <div className="blog-image">
                      <img src="assets/img/blog/blog2.png" alt="Learning Journey" />
                    </div>
                    <div className="blog-bottom">
                      <h3>Why I Chose React + Tailwind for Modern Web Apps</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>After 4+ years of learning web dev, here's why these tools became my go-to stack for fast, clean, and maintainable projects.</p>
                      <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="blog-link">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Post 3: Future Plans */}
                <div className="col-md-4 col-sm-6 blog-col">
                  <div className="blog-details">
                    <div className="blog-image">
                      <img src="assets/img/blog/blog3.png" alt="Future Plans" />
                    </div>
                    <div className="blog-bottom">
                      <h3>What's Next After Graduation: Goals for 2025+</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>From freelance to open-source contributions and new projects — my plans to keep growing as a developer in Gaza and beyond.</p>
                      <a href="https://github.com/ahmedawesome" target="_blank" rel="noopener noreferrer" className="blog-link">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Personalized */}
      <div id="contact">
        <div className="contact-content">
          <div className="text-grid">
            <div className="text-grid-main">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Contact Me</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I'm always open to discussing web development projects, collaborations, or opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-form-details wow fadeIn">
              <div className="container">
                <div className="row contact-row">
                  <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                    <h3>Send Me a Message</h3>
                    <div className="contact-form">
                      <form
                        action="#"
                        method="post"
                        id="contactForm"
                        name="contactForm"
                        className="contact-form shake validate"
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="required form-control"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="required email form-control"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Your Phone (optional)"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            rows="7"
                            placeholder="Your Message"
                            className="required form-control"
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Contact Info Cards */}
                <div className="row contact-info-row text-center wow fadeIn">
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info">
                      <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
                      <h3>Location</h3>
                      <p>Gaza Strip, Palestine</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info">
                      <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
                      <h3>Email</h3>
                      <a href="mailto:ahmedlegacy69@gmail.com">
                        ahmedlegacy69@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info">
                      <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
                      <h3>Phone</h3>
                      <p>+970 (0) 595667863</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info">
                      <i className="fa fa-github contact-icon" aria-hidden="true"></i>
                      <h3>GitHub</h3>
                      <a href="https://github.com/ahmedawesome" target="_blank">
                        github.com/ahmedawesome
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 contact-colamn">
                    <div className="contact-col-info">
                      <i className="fa fa-linkedin contact-icon" aria-hidden="true"></i>
                      <h3>LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/ahmed-husien-a1205a251/" target="_blank">
                        linkedin.com/in/ahmed-husien-a1205a251
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import { certificates, journey, projects, skills, socialLinks } from "./data";

const windowAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

function WindowFrame({ title, children, className = "" }) {
  return (
    <motion.section {...windowAnimation} className={`os-window ${className}`}>
      <div className="os-window-bar">
        <div className="os-window-controls">
          <span className="os-dot os-dot-red" />
          <span className="os-dot os-dot-amber" />
          <span className="os-dot os-dot-green" />
        </div>
        <p className="os-window-title">{title}</p>
      </div>
      <div className="os-window-body">{children}</div>
    </motion.section>
  );
}

function SectionLabel({ eyebrow, title, copy }) {
  return (
    <div className="mb-8">
      <p className="os-eyebrow">{eyebrow}</p>
      <h2 className="os-title">{title}</h2>
      {copy ? <p className="os-copy mt-4">{copy}</p> : null}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const featuredCertificate = certificates.find((item) => item.image);
  const fileCertificates = certificates.filter((item) => item.file);

  return (
    <>
      <Loader active={loading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="os-desktop"
      >
        <header className="os-topbar">
          <div className="os-topbar-left">
            <span className="os-brand-badge">WN</span>
            <div>
              <p className="os-topbar-name">Winner Nwaeme OS</p>
              <p className="os-topbar-subtitle">
                Full-Stack Developer | Future Founder
              </p>
            </div>
          </div>
          <nav className="os-topbar-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="os-layout">
          <aside className="os-sidebar">
            <div className="os-sidebar-card">
              <p className="os-sidebar-label">System Identity</p>
              <h1>Winner Konrinayo Nwaeme</h1>
              <p>
                Building useful interfaces, scalable systems, and the long-term
                foundation for a global technology ecosystem.
              </p>
            </div>

            <div className="os-sidebar-card">
              <p className="os-sidebar-label">Quick Access</p>
              <ul className="os-sidebar-list">
                <li>B.Sc. Computer Science, Anchor University</li>
                <li>Expected graduation: 2027</li>
                <li>Frontend, networking, and product systems</li>
                <li>Open to growth opportunities</li>
              </ul>
            </div>

            <div className="os-sidebar-card">
              <p className="os-sidebar-label">Links</p>
              <div className="os-link-stack">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="os-inline-link"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <main className="os-main">
            <WindowFrame title="hero.exe" className="os-window-hero">
              <div className="os-hero-grid">
                <div>
                  <p className="os-eyebrow">
                    Computer Science Student | Frontend Builder
                  </p>
                  <h2 className="os-hero-name">Winner Konrinayo Nwaeme</h2>
                  <p className="os-hero-role">
                    I create responsive interfaces and contribute to digital
                    platforms that make student experiences simpler and clearer.
                  </p>
                  <p className="os-copy mt-5">
                    I am a Computer Science student at Anchor University, Lagos,
                    with hands-on experience in frontend web development,
                    networking fundamentals, collaborative project work, and a
                    growing interest in building larger product systems with real
                    market value.
                  </p>
                  <div className="os-button-row">
                    <a href="#projects" className="os-button os-button-primary">
                      View Projects
                    </a>
                    <a href="#contact" className="os-button os-button-secondary">
                      Contact Me
                    </a>
                  </div>
                </div>

                <div className="os-status-panel">
                  <p className="os-sidebar-label">Mission</p>
                  <h3>Building scalable digital platforms for Africa and beyond</h3>
                  <div className="os-status-grid">
                    <div>
                      <span>Focus</span>
                      <strong>Full-stack growth and scalable product thinking</strong>
                    </div>
                    <div>
                      <span>Direction</span>
                      <strong>Future founder of Unlimited Industry</strong>
                    </div>
                    <div>
                      <span>Core Aim</span>
                      <strong>Build systems with long-term commercial value</strong>
                    </div>
                  </div>
                </div>
              </div>
            </WindowFrame>

            <WindowFrame title="about.app" className="os-window-wide" >
              <section id="about">
                <SectionLabel
                  eyebrow="About Me"
                  title="The first design, kept intact in spirit, now framed like a premium workstation"
                  copy="My work sits at the intersection of web development, teamwork, practical problem solving, and long-term company building."
                />
                <div className="os-split-grid">
                  <div className="os-content-card">
                    <p>
                      I have contributed to university digital platforms,
                      including student dashboards and library management
                      interfaces, where I focused on layout structure,
                      responsive styling, usability, and clearer product flow.
                    </p>
                    <p>
                      Alongside development, I also have experience in sales and
                      customer support. That matters because it improves how I
                      think about users, communication, execution pressure, and
                      real-world needs.
                    </p>
                    <p>
                      The ambition is larger than portfolio work. I am building
                      toward Unlimited Industry, a future company aimed at
                      creating meaningful solutions in fintech, e-commerce, and
                      technology infrastructure.
                    </p>
                  </div>
                  <div className="os-stats-card">
                    <div>
                      <span className="os-stat-number">2+</span>
                      <span className="os-stat-label">Academic and product projects</span>
                    </div>
                    <div>
                      <span className="os-stat-number">2027</span>
                      <span className="os-stat-label">Expected graduation year</span>
                    </div>
                    <div>
                      <span className="os-stat-number">1</span>
                      <span className="os-stat-label">Certificate of Excellence earned</span>
                    </div>
                  </div>
                </div>
              </section>
            </WindowFrame>

            <div className="os-window-grid">
              <WindowFrame title="skills.panel">
                <section id="skills">
                  <SectionLabel
                    eyebrow="Skills"
                    title="Technical strengths and working style"
                  />
                  <div className="os-stack-grid">
                    {skills.map((group) => (
                      <div key={group.category} className="os-card">
                        <p className="os-card-label">{group.category}</p>
                        <div className="os-pill-group">
                          {group.items.map((item) => (
                            <span key={item} className="os-pill">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </WindowFrame>

              <WindowFrame title="journey.logs">
                <section id="journey">
                  <SectionLabel
                    eyebrow="Journey"
                    title="Education, experience, and where this is going"
                  />
                  <div className="os-journey-list">
                    {journey.map((item) => (
                      <div key={item.title} className="os-card">
                        <p className="os-card-label">{item.label}</p>
                        <h3 className="os-card-title">{item.title}</h3>
                        <p className="os-copy">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </WindowFrame>
            </div>

            <WindowFrame title="projects.workspace" className="os-window-wide">
              <section id="projects">
                <SectionLabel
                  eyebrow="Projects"
                  title="Work that reflects frontend and interface experience"
                  copy="This keeps the earlier project storytelling while fitting it into the operating-system shell."
                />
                <div className="os-project-grid">
                  {projects.map((project) => (
                    <article key={project.name} className="os-project-card">
                      <p className="os-card-label">{project.name}</p>
                      <p className="os-copy">{project.description}</p>
                      <div className="os-pill-group mt-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="os-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="os-link-row">
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Live Demo
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </WindowFrame>

            <WindowFrame title="certificates.archive" className="os-window-wide">
              <section id="certificates">
                <SectionLabel
                  eyebrow="Certificates"
                  title="Recognition earned, certification in progress, and supporting documents"
                />

                {featuredCertificate ? (
                  <div className="os-certificate-feature">
                    <div className="os-content-card">
                      <p className="os-card-label">{featuredCertificate.label}</p>
                      <h3 className="os-card-title">{featuredCertificate.title}</h3>
                      <p className="os-copy">{featuredCertificate.description}</p>
                    </div>
                    <div className="os-certificate-image-wrap">
                      <img
                        src={featuredCertificate.image}
                        alt={featuredCertificate.imageAlt}
                        className="os-certificate-image"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="os-file-grid">
                  {fileCertificates.map((item) => (
                    <div key={item.title} className="os-card">
                      <p className="os-card-label">{item.label}</p>
                      <h3 className="os-card-title">{item.title}</h3>
                      <p className="os-copy">{item.description}</p>
                      <div className="os-link-row">
                        <a href={item.file} target="_blank" rel="noreferrer">
                          View PDF
                        </a>
                        <a href={item.file} download>
                          Download PDF
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </WindowFrame>

            <div className="os-window-grid">
              <WindowFrame title="vision.sys">
                <section id="vision">
                  <SectionLabel
                    eyebrow="My Vision"
                    title="Building Unlimited Industry"
                  />
                  <div className="os-content-card">
                    <p>
                      The long-term goal is to build Unlimited Industry into a
                      global company that creates solutions in fintech,
                      e-commerce, and technology. The objective is to build with
                      scale, impact, and long-term infrastructure in mind.
                    </p>
                    <p>
                      I want to create systems that move beyond small projects
                      and grow into platforms capable of impacting millions of
                      people globally.
                    </p>
                  </div>
                </section>
              </WindowFrame>

              <WindowFrame title="contact.channel">
                <section id="contact">
                  <SectionLabel
                    eyebrow="Contact"
                    title="Let's connect"
                    copy="If you would like to collaborate, discuss an opportunity, or review my work, reach out directly."
                  />
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="os-form"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                    />
                    <button type="submit" className="os-button os-button-primary">
                      Send Message
                    </button>
                  </form>
                  <div className="os-link-stack mt-6">
                    <a href="mailto:nwaemewinner@gmail.com" className="os-inline-link">
                      nwaemewinner@gmail.com
                    </a>
                    <a href="tel:+2347018276346" className="os-inline-link">
                      07018276346
                    </a>
                  </div>
                </section>
              </WindowFrame>
            </div>
          </main>
        </div>

        <footer className="os-dock">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Files</a>
          <a href="#contact">Contact</a>
        </footer>
      </motion.div>
    </>
  );
}

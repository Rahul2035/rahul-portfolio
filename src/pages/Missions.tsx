import { certifications, projects } from "../content";
import { TransitionLink } from "../components/TransitionLink";

const Missions = () => {
  return (
    <main className="page-shell">
      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Project</p>
          <h1>Projects that turn learning into working systems</h1>
          <p>
            These projects show a blend of machine learning, analytics, computer
            vision, and blockchain-backed system design.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="card-kicker">Project</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="chip-wrap">
                {project.stack.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="info-card">
          <p className="card-kicker">Certifications</p>
          <h2>Continuous learning track</h2>
          <ul className="certificate-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="section-actions">
          <TransitionLink className="ghost-link" to="/superpowers">
            Back to Skills
          </TransitionLink>
          <TransitionLink className="primary-link" to="/contact">
            Hire Me
          </TransitionLink>
        </div>
      </section>
    </main>
  );
};

export default Missions;

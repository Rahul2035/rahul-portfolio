import { profile, projects, skillGroups } from "../content";
import { TransitionLink } from "../components/TransitionLink";

const Home = () => {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.objective}</p>

          <div className="hero-chips">
            <span>{profile.location}</span>
            <span>{profile.education.graduation}</span>
            <span>{profile.education.cgpa}</span>
          </div>

        <div className="hero-actions">
            <TransitionLink className="primary-link" to="/superpowers">
              View Skills
            </TransitionLink>
            <TransitionLink className="ghost-link" to="/missions">
              View Project
            </TransitionLink>
            <TransitionLink className="ghost-link" to="/contact">
              Contact
            </TransitionLink>
          </div>
        </div>

        <div className="hero-card">
          <p className="hero-card-label">Quick Snapshot</p>
          <h2>{profile.tagline}</h2>
          <ul className="stat-list">
            <li>
              <strong>{projects.length}</strong>
              <span>Featured projects</span>
            </li>
            <li>
              <strong>{skillGroups.flatMap((group) => group.items).length}</strong>
              <span>Key skills</span>
            </li>
            <li>
              <strong>2</strong>
              <span>Internship experiences</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile, projects, skillGroups } from "../content";

const Home = () => {
  return (
    <motion.main
      className="page-shell"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
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
            <Link className="primary-link" to="/superpowers">
              View Skills
            </Link>
            <Link className="ghost-link" to="/missions">
              View Project
            </Link>
            <Link className="ghost-link" to="/contact">
              Contact
            </Link>
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
    </motion.main>
  );
};

export default Home;

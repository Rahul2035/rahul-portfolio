import { Link } from "react-router-dom";
import { profile } from "../content";

const Contact = () => {
  return (
    <main className="page-shell">
      <section className="section-panel contact-panel">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s build something meaningful</h1>
          <p>
            Rahul is looking for opportunities to grow as a full stack developer
            and contribute to practical products with strong technical foundations.
          </p>
        </div>

        <div className="contact-grid">
          <article className="info-card">
            <p className="card-kicker">Reach Out</p>
            <h2>Direct contact</h2>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="contact-link" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
            <p>{profile.location}</p>
          </article>

          <article className="info-card">
            <p className="card-kicker">Professional Profile</p>
            <h2>Profiles</h2>
            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              View Rahul&apos;s LinkedIn
            </a>
            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              View Rahul&apos;s GitHub
            </a>
            <p>Open to full-time roles, freelance work, and collaborative projects.</p>
          </article>
        </div>

        <div className="section-actions">
          <Link className="ghost-link" to="/">
            Back Home
          </Link>
          <Link className="primary-link" to="/missions">
            See Work
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;

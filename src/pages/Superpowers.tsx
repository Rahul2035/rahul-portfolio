import { internships, profile, skillGroups } from "../content";
import { TransitionLink } from "../components/TransitionLink";

const Superpowers = () => {
  const primarySkillGroups = skillGroups.slice(0, 3);
  const databaseGroup = skillGroups.find((group) => group.title === "Database");
  const languageGroup = skillGroups.find(
    (group) => group.title === "Programming Languages",
  );

  return (
    <main className="page-shell">
      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Skill</p>
          <h1>Skills, foundations, and internship experience</h1>
          <p>
            Rahul is building as a full stack developer through hands-on work in
            frontend development, backend APIs, databases, tools, and applied training.
          </p>
        </div>

        <div className="skills-grid">
          {primarySkillGroups.map((group) => (
            <article key={group.title} className="info-card">
              <h2>{group.title}</h2>
              <div className="chip-wrap">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="info-card compact-skill-card">
            <h2>Database and Programming Languages</h2>

            {databaseGroup ? (
              <div className="compact-skill-section">
                <p className="card-kicker">Database</p>
                <div className="chip-wrap">
                  {databaseGroup.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {languageGroup ? (
              <div className="compact-skill-section">
                <p className="card-kicker skill-subtitle">Programming Languages</p>
                <div className="chip-wrap">
                  {languageGroup.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </div>

        <article className="info-card education-card">
          <p className="card-kicker">Education</p>
          <h2>{profile.education.degree}</h2>
          <p>{profile.education.university}</p>
          <div className="hero-chips">
            <span>{profile.education.graduation}</span>
            <span>{profile.education.cgpa}</span>
          </div>
        </article>

        <div className="timeline">
          {internships.map((internship) => (
            <article key={internship.title} className="timeline-card">
              <p className="card-kicker">Internship</p>
              <h2>{internship.title}</h2>
              <p>{internship.summary}</p>
              <ul>
                {internship.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="section-actions">
          <TransitionLink className="primary-link" to="/missions">
            Explore Project
          </TransitionLink>
        </div>
      </section>
    </main>
  );
};

export default Superpowers;

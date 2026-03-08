import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { skillsData, aboutContent } from '../data/portfolio';

export default function About() {
  return (
    <div>
      {/* About Hero */}
      <Section 
        id="about" 
        title="About Me"
        subtitle="My journey as a developer and what drives my work"
      >
        <div className="row mb-4">
          <div className="col-lg-8" data-fade>
            <h3 className="h4 fw-semibold text-white mb-3">Professional Summary</h3>
            <p className="fs-5 text-orange mb-3 lh-lg ">
              {aboutContent.intro}
            </p>
            <p className="fs-5 text-secondary mb-3 lh-lg pre-line">
              {aboutContent.journey}
            </p>

            <h3 className="h4 fw-semibold text-white mb-3 mt-4">Current Focus</h3>
            <ul className="list-unstyled">
              {aboutContent.focus.map((item, idx) => (
                <li key={idx} className="d-flex gap-2 text-secondary mb-2">
                  <span className="text-orange fw-bold flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4" data-fade>
            <Card>
              <h5 className="h5 fw-semibold text-white mb-4">Quick Bio</h5>
              <dl className="small">
                <div className="mb-3">
                  <dt className="text-navy-light fw-medium">Location</dt>
                  <dd className="text-secondary">Israel</dd>
                </div>
                <div className="mb-3">
                  <dt className="text-navy-light fw-medium">Education</dt>
                  <dd className="text-secondary">John Bryce Training <br/> <span className="text-light opacity-90 small">Full-Stack & Generative AI Intensive Program</span></dd>
                </div>
                <div className="mb-3">
                  <dt className="text-navy-light fw-medium">Primary Stack</dt>
                  <dd className="text-secondary">React · Node.js · Express · MySQL</dd>
                </div>
                <div>
                  <dt className="text-navy-light fw-medium">Open To</dt>
                  <dd className="text-secondary">Full-time roles & freelance projects</dd>
                </div>
              </dl>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section 
        title="Technical Skills"
        subtitle="Proficient technologies and tools"
        className="bg-secondary bg-opacity-10"
        style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}
      >
        <div className="row">
          {/* Frontend */}
          <div className="col-md-4" data-fade>
            <h5 className="h5 fw-semibold text-white mb-4">Frontend</h5>
            <div className="skill-tags-group">
              {skillsData.frontend.map((skill) => (
                <span key={skill.name} className="skill-tag text-orange">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-4" data-fade>
            <h5 className="h5 fw-semibold text-white mb-4">Backend</h5>
            <div className="skill-tags-group">
              {skillsData.backend.map((skill) => (
                <span key={skill.name} className="skill-tag text-orange">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="col-md-4" data-fade>
            <h5 className="h5 fw-semibold text-white mb-4">Tools & Workflow</h5>
            <div className="skill-tags-group">
              {skillsData.tools.map((skill) => (
                <span key={skill.name} className="skill-tag text-orange">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

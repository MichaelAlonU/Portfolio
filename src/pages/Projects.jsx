import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { projectsData } from '../data/portfolio';
import VacationView from '../assets/VacationView2.png';
import { useState } from 'react';

export default function Projects() {
  const { featured, additional } = projectsData;
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div>
      <Section 
        id="projects" 
        title="Featured Work"
        subtitle="Projects that demonstrate full stack capabilities"
      >
        {/* Featured Project */}
        <div data-fade className="mb-4">
          <Card featured hover={true}>
            <div className="row g-4">
              {/* Project Info */}
              <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h3 fw-bold text-white mb-2">
                      {featured.title}
                    </h3>
                    <p className="text-secondary small text-uppercase fw-medium">
                      Featured Project
                    </p>
                  </div>
                  <div style={{ fontSize: '3rem', opacity: 0.6 }}>⭐</div>
                </div>

                <p className="fs-5 text-secondary mb-4 lh-lg">
                  {featured.longDescription}
                </p>

                {/* Challenges */}
                <div className="mb-4">
                  <h5 className="h5 fw-semibold text-white mb-3">Challenges Solved</h5>
                  <ul className="list-unstyled">
                    {featured.challenges.map((challenge, idx) => (
                      <li key={idx} className="d-flex gap-2 text-secondary mb-2">
                        <span className="text-navy flex-shrink-0">✓</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h6 className="small fw-semibold text-white text-uppercase mb-2">
                    Tech Stack
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="col-lg-4 d-flex flex-column justify-content-between">
                <div 
                  onClick={() => setShowImageModal(true)}
                  style={{
                    maxHeight: '280px',
                    width: '90%',
                    aspectRatio: '1',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%)',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 132, 199, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={VacationView} alt={featured.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <Button
                    variant="primary"
                    href={featured.github}
                    className="w-100 text-center"
                    target="_blank" rel="noopener noreferrer" 
                    style={{ width: '100%', color: 'hsla(39, 100%, 69%, 0.97)' }}
                  >
                    <svg className="icon" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </Button>
                  <Button
                    variant="outline-primary"
                    href={featured.demo}
                    className="w-100 text-center"
                    target="_blank" rel="noopener noreferrer"   
                    style={{ width: '100%', color: '#50b4bb', borderColor: '#c08415'}}
                  >
                    <svg className="icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Additional Projects */}
      <Section 
        title="Other Projects"
        subtitle="Additional work showcasing different aspects of development"
        style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}
      >
        <div className="row">
          {additional.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <Card data-fade>
                <div className="mb-3">
                  <h5 className="h5 fw-bold text-white mb-2">
                    {project.title}
                  </h5>
                  <p className="text-secondary small mb-3">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h6 className="small fw-semibold text-secondary text-uppercase mb-2">
                    Key Features
                  </h6>
                  <ul className="list-unstyled">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-secondary small d-flex gap-2 mb-1">
                        <span className="text-navy">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-3">
                  <h6 className="small fw-semibold text-secondary text-uppercase mb-2">
                    Tech Stack
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-secondary bg-opacity-25"
                        style={{ backgroundColor: 'rgba(71, 85, 105, 0.25)', color: 'inherit' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <Button
                  variant="ghost"
                  href={project.github}
                  className="w-100 text-center"
                  target="_blank" rel="noopener noreferrer" 
                  style={{ width: '100%' }}
                >
                  <svg className="icon" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        title="Let's Work Together"
        subtitle="Interested in collaborating or discussing opportunities?"
      >
        <div className="text-center">
          <p className="fs-5 text-secondary mb-4">
            I'm always interested in discussing new projects and opportunities.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            href="#/contact"
          >
            Get In Touch
          </Button>
        </div>
      </Section>

      {/* Image Modal */}
      {showImageModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={() => setShowImageModal(false)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={VacationView}
              alt={featured.title}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <button
              onClick={() => setShowImageModal(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                fontSize: '28px',
                cursor: 'pointer',
                padding: '0',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

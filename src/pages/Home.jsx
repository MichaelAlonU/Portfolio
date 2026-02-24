import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background decoration */}
        <div className="hero-bg-decoration hero-bg-decoration-1"></div>
        <div className="hero-bg-decoration hero-bg-decoration-2"></div>

        <div className="hero-content">
          {/* Main heading */}
          <div style={{
            transition: 'all 1s ease',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)'
          }}>
            <h1 className="display-3 fw-bold text-white mb-3" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
              Hi, I'm <span className="gradient-text">Michael</span>
            </h1>
            
            <p className="lead fs-5 text-secondary mb-3">
              Full Stack Developer
            </p>

            {/* Tech stack highlight */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {['React', 'Node.js', 'MySQL', 'JWT', 'Redux'].map((tech) => (
                <span
                  key={tech}
                  className="badge-tech"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="fs-5 text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              I build scalable, user-focused web applications with clean architecture and attention to detail. Specialized in authentication, admin dashboards, and REST APIs.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <Button 
                variant="primary" 
                size="lg"
                href="#/projects"
                className="min-w-40"
                style={{ minWidth: '160px' }}
              >
                View My Work
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="#/contact"
                className="min-w-40"
                style={{ minWidth: '160px' }}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all 1s ease',
            opacity: isLoaded ? 1 : 0,
            animation: 'bounce 2s infinite'
          }}>
            <svg className="w-6 h-6 text-secondary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section style={{ 
        paddingTop: '3rem', 
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(71, 85, 105, 0.3)',
        backgroundColor: 'rgba(30, 41, 59, 0.3)'
      }}>
        <div className="container-lg">
          <div className="row text-center">
            {[
              { label: 'Projects Built', value: '5+' },
              { label: 'Years Learning', value: '2+' },
              { label: 'Tech Stack', value: '12+' },
              { label: 'Coffee Cups', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="col-md-6 col-lg-3 mb-4" data-fade>
                <h3 className="display-6 fw-bold text-navy mb-2">
                  {stat.value}
                </h3>
                <p className="text-secondary small">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

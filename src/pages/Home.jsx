import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import MichaelPortfolioImg from '../assets/MichaelPortfolio.jpg';

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
        <div className="hero-container">
          <div className="hero-image"> <img src={MichaelPortfolioImg} alt="Michael's Portfolio"/></div>
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
              Backend Focused Full Stack Developer | Clean Architecture & Scalable APIs
            </p>
            <br/>
            {/* Tech stack highlight */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {['React','TypeScript' ,'Node.js', 'Python', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="badge-tech"
                >
                  {tech}
                </span>
              ))}
            </div>
            <br></br>
            <p className="fs-5 text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem', direction: 'rtl', textAlign: 'right' }}>
{/* Junior Backend-Focused Full-Stack Developer with strong analytical thinking and a passion for building real-world systems. Fast learner, problem-solver, and highly motivated to grow within a professional engineering team.            */}
{/* אני מפתח ג'וניור סקרן שנהנה לבנות מערכות Web ולפתור בעיות. אני חושב בצורה מסודרת, אוהב ללמוד דברים חדשים. מחפש הזדמנות להשתלב בצוות פיתוח מקצועי שבו אוכל לתרום, ללמוד ולהתפתח לאורך זמן. */}
              אני מפתח Web בתחילת הדרך, עם משיכה לעבודה בצד ה-Backend
              ולבניית מערכות מסודרות וברורות. <br/>
               חשוב לי להבין לעומק איך דברים עובדים — ולא רק לגרום להם לעבוד. אני לומד מהר, חושב מסודר, משקיע בקוד נקי ותחזוקתי, ומחפש מקום שבו אוכל להתפתח דרך עשייה אמיתית ועבודה בצוות מקצועי.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-5 justify-content-center align-items-center">
              <Button 
                variant="primary" 
                size="lg"
                href="#/projects"
                className="min-w-40"
                style={{ minWidth: '160px', color: 'hsla(39, 100%, 69%, 0.97)' }}
              >
                View My Work
              </Button>
              {/* <Button 
                variant="secondary" 
                size="lg"
                href="#/contact"
                className="min-w-40"
                style={{ minWidth: '160px' }}
              >
                Get In Touch
              </Button> */}
              <Button 
                variant="outline" 
                size="lg"
                href="../assets/Michael_Uzan_CV.pdf"
                className="min-w-40"
                download
                style={{ minWidth: '160px', color: '#50b4bb', borderColor: '#c08415' }}
              >
                    Download CV
              </Button>
            </div>
                          <br></br>
              <p className="text-light opacity-90 mt-2 small">
                <i className="bi bi-hand-thumbs-up opacity-75">👍</i> Looking for my first long-term development role where I can grow and contribute consistently
              </p>
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
        </div>
      </section>

    </div>
  );
}

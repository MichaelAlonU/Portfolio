export default function Section({ 
  children, 
  id = '',
  title = '',
  subtitle = '',
  className = '',
  ...props 
}) {
  return (
    <section 
      id={id}
      className={`py-5 section ${className}`} 
      style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
      {...props}
    >
      <div className="container-lg">
        {title && (
          <div className="mb-5 fade-in">
            <h2 className="display-5 fw-bold text-white mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
                {subtitle}
              </p>
            )}
            <div style={{ 
              marginTop: '1rem', 
              height: '4px', 
              width: '48px', 
              background: 'linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%)', 
              borderRadius: '2px' 
            }} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

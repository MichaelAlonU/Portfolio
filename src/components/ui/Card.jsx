export default function Card({ 
  children, 
  className = '', 
  hover = true,
  featured = false,
  ...props 
}) {
  const cardClass = `card ${featured ? 'card-featured' : ''} ${hover ? '' : 'border-0'} ${className}`;
  const cardBodyClass = 'card-body';

  return (
    <div className={cardClass} {...props}>
      <div className={cardBodyClass}>
        {children}
      </div>
    </div>
  );
}

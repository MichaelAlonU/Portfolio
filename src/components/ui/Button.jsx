export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href = null, 
  onClick = null,
  className = '',
  ...props 
}) {
  const sizeClasses = {
    sm: 'btn-sm px-3 py-1',
    md: 'px-4 py-2',
    lg: 'btn-lg px-5 py-3',
  };

  const variantClasses = {
    primary: 'btn-navy',
    secondary: 'btn btn-outline-secondary',
    ghost: 'btn btn-link text-primary',
    outline: 'btn-outline-navy',
  };

  const btnClass = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={btnClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

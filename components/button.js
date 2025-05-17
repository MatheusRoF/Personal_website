import React from 'react';
import Link from 'next/link';
import styles from '../Styles/button.module.css';

const Button = ({ 
  label, 
  onClick, 
  type = 'button', 
  className = '', 
  variant = 'primary',
  size = 'medium',
  href,
  passHref = true,
  legacyBehavior = true,
  ...rest 
}) => {
  // Classes baseadas nas props
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${className}
  `;

  // Se tiver href, renderiza como Link
  if (href) {
    return (
      <Link href={href} passHref={passHref} legacyBehavior={legacyBehavior}>
        {legacyBehavior ? (
          <a className={buttonClasses} {...rest}>
            {label}
          </a>
        ) : (
          <button type={type} className={buttonClasses} {...rest}>
            {label}
          </button>
        )}
      </Link>
    );
  }

  // Caso contrário, renderiza como button normal
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      aria-label={label}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
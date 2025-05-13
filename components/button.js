// components/Button.js
import React from 'react';

const Button = ({ label, onClick, type = 'button', className = '', ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 
        text-lg font-medium 
        bg-blue-600 
        text-white 
        rounded-2xl 
        hover:bg-blue-700 
        transition duration-200 
        focus:outline-none 
        focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 
        ${className}
      `}
      aria-label={label}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

import React from 'react';

const Button = ({ onClick, children, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm py-5 px-9 text-white soft-bg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

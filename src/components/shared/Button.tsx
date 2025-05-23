import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles = "font-medium rounded transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg",
    secondary: "bg-indigo-800 text-white hover:bg-indigo-700",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500/10",
    text: "text-blue-500 hover:text-blue-400 hover:bg-blue-500/5"
  };
  
  const sizeStyles = {
    sm: "text-xs py-1.5 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-2.5 px-5"
  };

  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
import React from 'react';
import logo from '../assets/logo_pilpel.png';

interface PepperLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const PepperLogo: React.FC<PepperLogoProps> = ({ className, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <img 
      src={logo} 
      alt="Pepper Logo" 
      className={`object-contain ${sizeClasses[size]} ${className || ''}`}
    />
  );
};

export default PepperLogo; 
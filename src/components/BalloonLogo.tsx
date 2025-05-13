import React from 'react';
import luminousGif from '@/assets/logo gif.gif';

export const BalloonLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: '125px', height: '180px', margin: 'auto' }}>
      <img
        src={luminousGif}
        alt="Luminous Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

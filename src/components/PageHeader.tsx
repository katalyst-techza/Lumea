
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`py-12 md:py-20 text-center px-4 ${className}`}>
      <h1 className="font-seasons text-4xl md:text-5xl lg:text-6xl text-luminous-brown mb-4 animate-fade-in">
        {title}
      </h1>
      {subtitle && (
        <p className="font-script text-xl md:text-2xl text-luminous-mauve max-w-2xl mx-auto animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  );
};

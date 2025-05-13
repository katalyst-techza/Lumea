
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  const Card = () => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-luminous-mauve/10 hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
      <div className="bg-luminous-pink/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-luminous-mauve/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-seasons text-xl text-luminous-brown mb-3">{title}</h3>
      <p className="text-luminous-brown/80 mb-4 flex-grow">{description}</p>
      {link && (
        <div className="mt-auto pt-2">
          <span className="text-luminous-mauve font-medium group-hover:text-luminous-gold transition-colors">
            Learn More →
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link to={link}>
        <Card />
      </Link>
    );
  }

  return <Card />;
};

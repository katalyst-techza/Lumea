
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-luminous-mauve/10">
      <div className="flex flex-col h-full">
        <div className="text-luminous-gold text-4xl mb-4">"</div>
        <p className="text-luminous-brown/80 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto pt-4 border-t border-luminous-mauve/10">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
          )}
          {!imageUrl && (
            <div className="w-12 h-12 rounded-full bg-luminous-pink/30 flex items-center justify-center mr-4">
              <span className="font-seasons text-luminous-mauve text-xl">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-seasons text-luminous-brown">{name}</div>
            <div className="text-sm text-luminous-brown/70">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

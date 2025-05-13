
import React from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioGalleryProps {
  items: GalleryItem[];
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luminous-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-seasons text-xl">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

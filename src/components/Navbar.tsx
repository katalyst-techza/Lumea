
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BalloonLogo } from './BalloonLogo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-luminous-mauve/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center" >
            <Link to="/" className="flex items-center space-x-2">
              <BalloonLogo className="h-8 w-8" />
              <div style={{ marginLeft: '10px',}}>
                <span className="font-seasons text-luminous-brown text-xl">Luméa</span>
                <span className="font-script text-lg text-luminous-mauve ml-1">Events</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-seasons text-luminous-mauve hover:text-luminous-gold transition-colors">Home</Link>
            <Link to="/about" className="font-seasons text-luminous-mauve hover:text-luminous-gold transition-colors">About</Link>
            <Link to="/portfolio" className="font-seasons text-luminous-mauve hover:text-luminous-gold transition-colors">Portfolio</Link>
            <Link to="/booking" className="font-seasons text-luminous-mauve hover:text-luminous-gold transition-colors">Booking</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-luminous-brown hover:text-luminous-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-luminous-mauve/10">
            <Link 
              to="/" 
              className="font-seasons text-luminous-mauve hover:bg-luminous-pink/20 px-3 py-2 rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-seasons text-luminous-mauve hover:bg-luminous-pink/20 px-3 py-2 rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="font-seasons text-luminous-mauve hover:bg-luminous-pink/20 px-3 py-2 rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/booking" 
              className="font-seasons text-luminous-mauve hover:bg-luminous-pink/20 px-3 py-2 rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Booking
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

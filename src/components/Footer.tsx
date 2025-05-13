
import React from 'react';
import { Link } from 'react-router-dom';
import { BalloonLogo } from './BalloonLogo';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luminous-mauve/10 border-t border-luminous-mauve/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BalloonLogo className="h-8 w-8" />
              <div>
                <span className="font-seasons text-luminous-brown text-xl">Luminous</span>
                <span className="font-script text-lg text-luminous-mauve ml-1">Events</span>
              </div>
            </div>
            <p className="text-sm text-luminous-brown/80">
              Creating elegant and memorable events that celebrate life's special moments.
            </p>
          </div>
          
          <div>
            <h3 className="font-seasons text-luminous-brown text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-luminous-brown/80 hover:text-luminous-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-luminous-brown/80 hover:text-luminous-gold transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-luminous-brown/80 hover:text-luminous-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/booking" className="text-luminous-brown/80 hover:text-luminous-gold transition-colors">Booking</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-seasons text-luminous-brown text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-luminous-brown/80">Weddings</li>
              <li className="text-luminous-brown/80">Corporate Events</li>
              <li className="text-luminous-brown/80">Private Parties</li>
              <li className="text-luminous-brown/80">Special Celebrations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-seasons text-luminous-brown text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-luminous-gold" />
                <span className="text-luminous-brown/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-luminous-gold" />
                <span className="text-luminous-brown/80">hello@luminousevents.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-luminous-gold" />
                <span className="text-luminous-brown/80">123 Celebration Ave, Suite 101, Event City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-luminous-mauve/20 mt-8 pt-8 text-center text-sm text-luminous-brown/70">
          <p>© {new Date().getFullYear()} Luminous Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

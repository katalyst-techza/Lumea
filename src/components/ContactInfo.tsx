
import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-luminous-pink/30 rounded-lg p-6 md:p-8">
      <h3 className="font-seasons text-2xl text-luminous-brown mb-6 text-center">Get in Touch</h3>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-luminous-mauve rounded-full p-3">
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <div className="text-sm text-luminous-brown/70">Phone/WhatsApp</div>
            <div className="font-seasons text-luminous-brown">+27 71 103 4136</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-luminous-mauve rounded-full p-3">
            <Mail size={20} className="text-white" />
          </div>
          <div>
            <div className="text-sm text-luminous-brown/70">Email</div>
            <div className="font-seasons text-luminous-brown">hello@lumeaevents.co.za</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-luminous-mauve rounded-full p-3">
            <Calendar size={20} className="text-white" />
          </div>
          <div>
            <div className="text-sm text-luminous-brown/70">Hours</div>
            <div className="font-seasons text-luminous-brown">Monday - Friday: 9AM - 5PM</div>
            <div className="text-luminous-brown/90">Secure Your Event by Booking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

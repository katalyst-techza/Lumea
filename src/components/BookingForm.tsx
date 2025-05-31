// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import client from "@/lib/pocketbaseClient"; // 🆕 You'll need this helper file

export const BookingForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    guest_count: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const guestCount = formData.guest_count ? parseInt(formData.guest_count, 10) : null;

      await client.collection('bookings').create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        event_type: formData.event_type,
        event_date: formData.event_date || null,
        guest_count: guestCount,
        message: formData.message || null,
        status: 'pending',
      });

      toast({
        title: "Inquiry Received",
        description: "Thank you for your interest! We'll be in touch soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        event_date: '',
        guest_count: '',
        message: '',
      });

    } catch (error: any) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-seasons text-luminous-brown mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50" />
        </div>
        <div>
          <label htmlFor="email" className="block font-seasons text-luminous-brown mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50" />
        </div>
        <div>
          <label htmlFor="phone" className="block font-seasons text-luminous-brown mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50" />
        </div>
        <div>
          <label htmlFor="event_type" className="block font-seasons text-luminous-brown mb-1">Event Type</label>
          <select id="event_type" name="event_type" value={formData.event_type} onChange={handleChange} required className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50">
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="event_date" className="block font-seasons text-luminous-brown mb-1">Event Date</label>
          <input type="date" id="event_date" name="event_date" value={formData.event_date} onChange={handleChange} className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50" />
        </div>
        <div>
          <label htmlFor="guest_count" className="block font-seasons text-luminous-brown mb-1">Guest Count</label>
          <input type="number" id="guest_count" name="guest_count" value={formData.guest_count} onChange={handleChange} placeholder="Approximate" className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block font-seasons text-luminous-brown mb-1">Tell us about your event</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-luminous-mauve/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luminous-gold/50"></textarea>
      </div>
      <div className="text-center pt-4">
        <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-luminous-mauve text-white rounded-md hover:bg-luminous-mauve/80 transition-colors font-seasons disabled:opacity-70">
          {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
};

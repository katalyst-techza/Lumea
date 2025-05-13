
import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { BookingForm } from '@/components/BookingForm';
import { ContactInfo } from '@/components/ContactInfo';

const Booking = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Book Your Event" 
        subtitle="Let's create something beautiful together"
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="font-seasons text-2xl text-luminous-brown mb-6">Event Inquiry</h2>
              <p className="text-luminous-brown/80 mb-8">
                Fill out the form below to share your vision with us. After reviewing your inquiry, we'll reach out to schedule a consultation to discuss your event in detail.
              </p>
              <BookingForm />
            </div>
            
            <div className="lg:w-1/3">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-luminous-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-seasons text-3xl text-luminous-brown mb-4">Frequently Asked Questions</h2>
            <p className="font-script text-xl text-luminous-mauve max-w-2xl mx-auto">
              Answers to common questions about our services
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-luminous-mauve/10">
              <h3 className="font-seasons text-lg text-luminous-brown mb-3">How far in advance should I book your services?</h3>
              <p className="text-luminous-brown/80">
                For weddings and large events, we recommend booking 9-12 months in advance. For smaller social events, 3-6 months is typically sufficient. However, we sometimes have availability for more immediate events, so don't hesitate to reach out!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-luminous-mauve/10">
              <h3 className="font-seasons text-lg text-luminous-brown mb-3">What is your pricing structure?</h3>
              <p className="text-luminous-brown/80">
                Our pricing varies based on the type of event, services required, guest count, and location. We offer packages at different price points and can also create custom proposals tailored to your specific needs and budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-luminous-mauve/10">
              <h3 className="font-seasons text-lg text-luminous-brown mb-3">Do you have a list of preferred vendors?</h3>
              <p className="text-luminous-brown/80">
                Yes, we have established relationships with a wide network of trusted vendors across various specialties. We'll recommend vendors that align with your style, budget, and vision, but are also happy to work with vendors you've already selected.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-luminous-mauve/10">
              <h3 className="font-seasons text-lg text-luminous-brown mb-3">What happens after I submit my inquiry?</h3>
              <p className="text-luminous-brown/80">
                After receiving your inquiry, we'll respond within 48 hours to schedule an initial consultation. During this meeting, we'll discuss your event in detail, answer any questions, and determine how we can best support your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;


import React from 'react';
import { BalloonLogo } from '@/components/BalloonLogo';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-luminous-mauve/30 to-luminous-pink/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="font-seasons text-4xl md:text-5xl lg:text-6xl text-luminous-brown mb-6 animate-fade-in">
                Creating Luminous Moments
              </h1>
              <p className="font-script text-2xl md:text-3xl text-luminous-mauve mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Elegant events that celebrate life's special occasions
              </p>
              <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link
                  to="/booking"
                  className="bg-luminous-mauve text-white px-6 py-3 rounded-md font-seasons hover:bg-luminous-mauve/80 transition-colors inline-block"
                >
                  Book Your Event
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="w-48 h-48 bg-luminous-pink rounded-full opacity-20 animate-pulse"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <BalloonLogo className="w-32 h-32 animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-luminous-gold/10 rounded-full -mb-16 -ml-16"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-luminous-pink/20 rounded-full -mt-12 -mr-12"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-seasons text-3xl md:text-4xl text-luminous-brown mb-4">Our Services</h2>
            <p className="font-script text-xl text-luminous-mauve max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Weddings" 
              description="Create the wedding of your dreams with our comprehensive planning and design services. We handle every detail to make your special day truly magical."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>}
              link="/booking"
            />
            
            <ServiceCard 
              title="Corporate Events" 
              description="Elevate your corporate gatherings with our professional planning services. From team-building activities to formal galas, we create memorable experiences."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>}
              link="/booking"
            />
            
            <ServiceCard 
              title="Special Celebrations" 
              description="Mark life's milestones with a celebration as unique as you are. Birthdays, anniversaries, or any special occasion deserves to be celebrated beautifully."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>}
              link="/booking"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="text-luminous-mauve hover:text-luminous-gold transition-colors font-seasons">
              Learn more about our services →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-luminous-pink/10 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="font-seasons text-3xl md:text-4xl text-luminous-brown mb-6">Creating Unforgettable Experiences</h2>
              <p className="text-luminous-brown/80 mb-4">
                At Luminous Events, we believe that every celebration should be as unique as the individuals behind it. Our passionate team of event planners brings creativity, attention to detail, and a personal touch to every event we create.
              </p>
              <p className="text-luminous-brown/80 mb-6">
                From the initial consultation to the final farewell, we work closely with you to bring your vision to life, ensuring a seamless and stress-free experience that leaves you free to enjoy every moment.
              </p>
              <Link to="/about" className="bg-luminous-gold/80 text-white px-6 py-3 rounded-md font-seasons hover:bg-luminous-gold transition-colors inline-block">
                Our Story
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-80 bg-luminous-mauve/20 rounded-lg"></div>
                <div className="absolute top-6 right-6 bottom-6 left-6 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                    alt="Beautiful event setup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-luminous-gold/10 rounded-full -ml-12 transform -translate-y-1/2"></div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-seasons text-3xl md:text-4xl text-luminous-brown mb-4">What Our Clients Say</h2>
            <p className="font-script text-xl text-luminous-mauve max-w-2xl mx-auto">
              Creating memories that last a lifetime
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Luminous Events turned our wedding day into a fairy tale. Every detail was perfect, and we didn't have to worry about a thing. It was truly the day of our dreams!"
              name="Emily & Michael"
              role="Wedding"
            />
            
            <TestimonialCard 
              quote="Our company gala was a tremendous success thanks to the Luminous Events team. The attention to detail and professional service exceeded our expectations."
              name="Sarah Johnson"
              role="Corporate Event"
            />
            
            <TestimonialCard 
              quote="I wanted my daughter's sweet sixteen to be special, and Luminous Events delivered beyond my imagination. The decor, the entertainment, everything was perfect!"
              name="Jennifer Davis"
              role="Birthday Celebration"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-luminous-mauve to-luminous-brown py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-seasons text-3xl md:text-4xl mb-6">Ready to Create Your Luminous Moment?</h2>
          <p className="font-script text-xl max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life
          </p>
          <Link to="/booking" className="bg-white text-luminous-mauve px-6 py-3 rounded-md font-seasons hover:bg-luminous-pink transition-colors inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

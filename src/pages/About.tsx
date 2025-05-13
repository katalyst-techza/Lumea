
import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="About Us" 
        subtitle="Creating unforgettable moments that last a lifetime"
      />

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-seasons text-3xl text-luminous-brown mb-6">Our Story</h2>
              <p className="text-luminous-brown/80 mb-4">
                Founded in 2015, Luminous Events began with a simple yet powerful mission: to create celebrations that reflect the unique personality and style of each client while removing the stress from the planning process.
              </p>
              <p className="text-luminous-brown/80 mb-4">
                Our founder, Alexandra Chen, recognized that many people wanted to host beautiful events but were overwhelmed by the logistics, details, and time commitment required. Drawing from her background in hospitality and design, she assembled a team of talented professionals who shared her vision of creating unforgettable experiences.
              </p>
              <p className="text-luminous-brown/80">
                Today, Luminous Events has grown into a premier event planning company, known for our attention to detail, creativity, and personalized approach. We've had the honor of planning hundreds of weddings, corporate gatherings, and special celebrations—each one as unique as the clients we serve.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-luminous-mauve/20 rounded-lg"></div>
                <div className="absolute top-6 right-6 bottom-6 left-6 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                    alt="Team planning an event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-luminous-pink/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-seasons text-3xl text-luminous-brown mb-4">Our Values</h2>
            <p className="font-script text-xl text-luminous-mauve max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-luminous-mauve/10">
              <div className="w-16 h-16 bg-luminous-gold/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-luminous-gold text-2xl font-bold">01</span>
              </div>
              <h3 className="font-seasons text-xl text-luminous-brown mb-3">Personalization</h3>
              <p className="text-luminous-brown/80">
                We believe every event should reflect the unique personality and style of our clients. No two events should ever be the same.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-luminous-mauve/10">
              <div className="w-16 h-16 bg-luminous-pink/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-luminous-mauve text-2xl font-bold">02</span>
              </div>
              <h3 className="font-seasons text-xl text-luminous-brown mb-3">Attention to Detail</h3>
              <p className="text-luminous-brown/80">
                The smallest details often make the biggest impact. We meticulously plan every element to ensure a flawless experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-luminous-mauve/10">
              <div className="w-16 h-16 bg-luminous-mauve/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-luminous-brown text-2xl font-bold">03</span>
              </div>
              <h3 className="font-seasons text-xl text-luminous-brown mb-3">Peace of Mind</h3>
              <p className="text-luminous-brown/80">
                We handle the stress and logistics so you can be fully present and enjoy every moment of your special event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-seasons text-3xl text-luminous-brown mb-4">Meet Our Team</h2>
            <p className="font-script text-xl text-luminous-mauve max-w-2xl mx-auto">
              The passionate professionals behind your perfect event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg border-4 border-luminous-mauve/20">
                <div className="aspect-square bg-luminous-mauve/20 w-full"></div>
              </div>
              <h3 className="font-seasons text-lg text-luminous-brown">Alexandra Chen</h3>
              <p className="text-luminous-mauve">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg border-4 border-luminous-mauve/20">
                <div className="aspect-square bg-luminous-pink/20 w-full"></div>
              </div>
              <h3 className="font-seasons text-lg text-luminous-brown">Michael Rodriguez</h3>
              <p className="text-luminous-mauve">Event Coordinator</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg border-4 border-luminous-mauve/20">
                <div className="aspect-square bg-luminous-gold/20 w-full"></div>
              </div>
              <h3 className="font-seasons text-lg text-luminous-brown">Sophia Turner</h3>
              <p className="text-luminous-mauve">Design Specialist</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg border-4 border-luminous-mauve/20">
                <div className="aspect-square bg-luminous-brown/20 w-full"></div>
              </div>
              <h3 className="font-seasons text-lg text-luminous-brown">Ethan Williams</h3>
              <p className="text-luminous-mauve">Logistics Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="bg-luminous-pink/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-seasons text-3xl text-luminous-brown mb-4">Our Services</h2>
            <p className="font-script text-xl text-luminous-mauve max-w-2xl mx-auto">
              Comprehensive event planning solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Full-Service Event Planning" 
              description="From concept development to day-of coordination, we handle every aspect of your event so you can enjoy the celebration without worry."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>}
            />
            
            <ServiceCard 
              title="Partial Planning" 
              description="Already started planning but need help with specific elements? Our partial planning services allow you to choose exactly what you need assistance with."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>}
            />
            
            <ServiceCard 
              title="Day-of Coordination" 
              description="Ensure your event runs smoothly with our professional day-of coordination. We manage all the details so you can fully experience your special day."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>}
            />
            
            <ServiceCard 
              title="Design & Decor" 
              description="Transform any space into a stunning backdrop for your celebration with our creative design services and extensive decor inventory."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luminous-mauve"><path d="M2 2c4.056 3.048 9.356 9.648 10.159 15.035q.024.165.038.332c.056.676-.095 1.189-.172 1.145-.077-.044-.013-.76-.29-1.385-.402-.91-1.382-1.89-2.008-1.89-.626 0-1.043.907-.98 1.304.062.397.26.635.423.706.293.127.643.175.935.021"/><path d="M5 3C2.903 4.45 1.67 7.227 2.02 10.32c.248 2.206 2.043 3.83 3.98 4.42"/><path d="M17.79 9.45c.528.973 1.26 2.55 1.26 2.55"/><path d="M21.788 8.765c-1.538-.337-3.72.045-5.251 2.033-1.167 1.515-1.83 3.084-2.396 5.895-.173.863-.76 1.531-1.32 1.831-.723.387-1.696.398-2.476-.526"/><path d="M19.19 7.37c-1.013 2.607-2.378 3.82-5.327 5.7"/><path d="M8.64 3.03c.602.13 1.162.34 1.66.63"/><path d="M13.35 3.2c-1.296.138-2.788 1.027-4.055 2.446-2.267 2.528-1.656 6.241-1.266 8.287.072.375.152.721.224 1.038.138.61.32 1.03.425 1.21"/><path d="M14 3s-.055 3.696.314 5.466c.12.574.32 1.044.484 1.644.86 3.26.92 5.26.5 6.39"/></svg>}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/booking" className="bg-luminous-mauve text-white px-6 py-3 rounded-md font-seasons hover:bg-luminous-mauve/80 transition-colors inline-block">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

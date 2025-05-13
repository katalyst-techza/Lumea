
import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // Sample portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Rose Garden Wedding",
      category: "Wedding",
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      id: 2,
      title: "Coastal Corporate Retreat",
      category: "Corporate",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 3,
      title: "Twilight Anniversary",
      category: "Anniversary",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      id: 4,
      title: "Elegant Charity Gala",
      category: "Charity",
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      id: 5,
      title: "Rustic Birthday Celebration",
      category: "Birthday",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 6,
      title: "Modern Product Launch",
      category: "Corporate",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Portfolio" 
        subtitle="A collection of our most cherished events"
      />

      {/* Portfolio Gallery */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGallery items={portfolioItems} />
        </div>
      </section>

      {/* Weddings */}
      <section className="py-12 md:py-16 bg-luminous-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-seasons text-3xl text-luminous-brown mb-6">Weddings</h2>
              <p className="text-luminous-brown/80 mb-4">
                Your wedding day should be as unique as your love story. At Luminous Events, we specialize in creating personalized wedding experiences that reflect your personal style, cultural traditions, and vision.
              </p>
              <p className="text-luminous-brown/80 mb-6">
                From intimate garden ceremonies to grand ballroom receptions, we handle every detail with care and creativity. Our team works closely with you to select the perfect venue, design stunning floral arrangements, coordinate vendors, and manage all logistics so you can focus on creating memories that will last a lifetime.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Full Planning</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Day-of Coordination</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Destination Weddings</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Cultural Ceremonies</span>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-luminous-mauve/20 rounded-lg"></div>
                <div className="absolute top-6 right-6 bottom-6 left-6 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                    alt="Wedding celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-96 bg-luminous-gold/20 rounded-lg"></div>
                <div className="absolute top-6 right-6 bottom-6 left-6 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                    alt="Corporate event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-seasons text-3xl text-luminous-brown mb-6">Corporate Events</h2>
              <p className="text-luminous-brown/80 mb-4">
                Make a lasting impression with corporate events that align perfectly with your company's brand and objectives. Whether you're planning a product launch, annual gala, team-building retreat, or conference, we create professional and engaging experiences.
              </p>
              <p className="text-luminous-brown/80 mb-6">
                Our corporate event services include venue selection, theme development, catering coordination, entertainment booking, and comprehensive event management. We understand the importance of staying within budget while delivering exceptional quality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Conferences</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Product Launches</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Team Building</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Holiday Parties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Events */}
      <section className="py-12 md:py-16 bg-luminous-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-seasons text-3xl text-luminous-brown mb-6">Social Events</h2>
              <p className="text-luminous-brown/80 mb-4">
                Life's milestones deserve to be celebrated in style. From birthdays and anniversaries to baby showers and retirement parties, we create memorable social events tailored to your personal style and preferences.
              </p>
              <p className="text-luminous-brown/80 mb-6">
                Our team handles every aspect of your celebration, including theme development, decor design, catering selection, entertainment coordination, and day-of management. We bring creativity and attention to detail to every event, ensuring a truly special experience for you and your guests.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Birthdays</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Anniversaries</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Baby Showers</span>
                <span className="bg-luminous-mauve/10 px-3 py-1 rounded-full text-sm text-luminous-mauve">Graduation Parties</span>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-luminous-brown/20 rounded-lg"></div>
                <div className="absolute top-6 right-6 bottom-6 left-6 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                    alt="Social event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-seasons text-3xl text-luminous-brown mb-6">Ready to Create Your Own Luminous Event?</h2>
          <p className="text-luminous-brown/80 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life and create an unforgettable experience for you and your guests.
          </p>
          <Link to="/booking" className="bg-luminous-mauve text-white px-6 py-3 rounded-md font-seasons hover:bg-luminous-mauve/80 transition-colors inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

import React from 'react';
import { Plane, Hotel, Car, Camera, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Best deals on domestic and international flights with 24/7 support"
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Handpicked accommodations from budget stays to luxury resorts"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Comfortable and safe transportation options for all your travel needs"
  },
  {
    icon: Camera,
    title: "Guided Tours",
    description: "Expert local guides to help you discover hidden gems and local culture"
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance to protect your journey"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for a worry-free travel experience"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel services to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-8 opacity-90">Let us help you create unforgettable memories</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Plan My Trip
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
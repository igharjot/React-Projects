import { Star, MapPin, Clock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Golden Triangle",
    location: "Delhi - Agra - Jaipur",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    rating: 4.8,
    duration: "6 Days",
    price: "₹25,000",
    description: "Experience India's most iconic destinations in one incredible journey"
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    location: "Alleppey - Kumarakom",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    rating: 4.9,
    duration: "5 Days",
    price: "₹18,000",
    description: "Cruise through serene backwaters and lush green landscapes"
  },
  {
    id: 3,
    name: "Rajasthan Royal",
    location: "Udaipur - Jodhpur - Jaisalmer",
    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    rating: 4.7,
    duration: "8 Days",
    price: "₹35,000",
    description: "Discover the royal heritage and desert landscapes of Rajasthan"
  },
  {
    id: 4,
    name: "Himalayan Adventure",
    location: "Manali - Leh - Ladakh",
    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    rating: 4.6,
    duration: "10 Days",
    price: "₹45,000",
    description: "Breathtaking mountain views and thrilling adventure activities"
  },
  {
    id: 5,
    name: "Goa Beach Paradise",
    location: "North & South Goa",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    rating: 4.5,
    duration: "4 Days",
    price: "₹15,000",
    description: "Relax on pristine beaches and enjoy vibrant nightlife"
  },
  {
    id: 6,
    name: "Spiritual Varanasi",
    location: "Varanasi - Sarnath",
    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    rating: 4.4,
    duration: "3 Days",
    price: "₹12,000",
    description: "Experience the spiritual heart of India along the sacred Ganges"
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular <span className="text-orange-500">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore India's most captivating destinations with our carefully curated travel packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{destination.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
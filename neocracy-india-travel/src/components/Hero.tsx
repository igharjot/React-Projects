import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover
          <span className="text-orange-500"> Incredible India</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Experience the magic of India with our expertly crafted tours and unforgettable journeys
        </p>
        
        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input 
                  type="text" 
                  placeholder="Where to go?" 
                  className="w-full border-none outline-none bg-transparent text-gray-900"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Check In</label>
                <input 
                  type="date" 
                  className="w-full border-none outline-none bg-transparent text-gray-900"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <select className="w-full border-none outline-none bg-transparent text-gray-900">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>3 Adults</option>
                  <option>4+ Adults</option>
                </select>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

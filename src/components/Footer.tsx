import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo-only.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="Neocracy India Travel" 
                className="h-12 w-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Neocracy India Travel</h3>
                <p className="text-sm text-gray-400">Explore India with Us</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for exploring the incredible beauty and rich culture of India. 
              Creating unforgettable memories since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Neocracy-India-Travel-100064118616142/" target="_blank" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/neocracyindiatravel?utm_source=ig_web_button_share_sheet&igsh=cnhsZWE4eHhoeTV6" target="_blank" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Tour Packages</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Golden Triangle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kerala Backwaters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rajasthan Royal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Himalayan Adventure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Goa Beaches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Spiritual Varanasi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+91 9310130192</p>
                  <p className="text-gray-400 text-sm">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">info@neocracyindiatravel.com</p>
                  <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Sector-11, Dwarka</p>
                  <p className="text-gray-400 text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Neocracy India Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
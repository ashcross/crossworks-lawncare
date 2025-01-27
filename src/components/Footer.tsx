import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Logo and Company Info */}
          <div className="flex flex-col items-start">
            <img 
              src="/logo.png" 
              alt="CrossWorks Lawnmowing & Property Care" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-600 max-w-md">
              Professional lawn care and property maintenance services, delivering excellence to your outdoor spaces.
            </p>
          </div>

          {/* Right Column - Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={18} />
              <span>info@crossworks.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={18} />
              <span>123 Lawn Street, Garden City</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CrossWorks Lawnmowing & Property Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
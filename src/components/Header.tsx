
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/60 shadow-sm py-6 backdrop-blur-sm absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Navigation */}
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Lawn Care
            </Link>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Property Care
            </Link>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Our Work
            </Link>
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link to="/" className="">
              <img 
                src="/logo.png" 
                alt="CrossWorks Lawnmowing & Property Care" 
                className="h-32 w-auto transition-transform hover:scale-105" 
              />
            </Link>
          </div>

          {/* Right: Contact Information */}
          <div className="flex justify-end gap-8">
            <a 
              href="tel:021910071" 
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span>021 910 071</span>
            </a>
            <a 
              href="mailto:admin@jdcrossworks.co.nz" 
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>admin@jdcrossworks.co.nz</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

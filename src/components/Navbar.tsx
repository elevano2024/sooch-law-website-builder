
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-sooch-darkbg py-4 sticky top-0 z-50 shadow-md backdrop-blur-sm bg-opacity-95">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png" 
                alt="Sooch Law Logo" 
                className="h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-300 hover:text-sooch-gold transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-300 hover:text-sooch-gold transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium text-gray-300 hover:text-sooch-gold transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium text-gray-300 hover:text-sooch-gold transition-colors">
              Contact
            </Link>
          </div>

          {/* Phone Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:4169083300" 
              className="flex items-center bg-sooch-gold text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span>(416) 908 3300</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-sooch-gold focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-300 hover:text-sooch-gold transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-300 hover:text-sooch-gold transition-colors py-2"
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-300 hover:text-sooch-gold transition-colors py-2"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-300 hover:text-sooch-gold transition-colors py-2"
              >
                Contact
              </Link>
              <a 
                href="tel:4169083300" 
                className="flex items-center bg-sooch-gold text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors w-fit"
              >
                <Phone size={18} className="mr-2" />
                <span>(416) 908 3300</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

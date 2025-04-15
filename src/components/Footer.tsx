
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sooch-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png" 
              alt="Sooch Law Logo" 
              className="h-20 mb-6" 
            />
            <p className="text-gray-300 mb-6">
              We help solve your legal issues with expertise and personalized attention.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-sooch-gold p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-sooch-gold p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-sooch-gold p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-sooch-gold p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Contact Us</h3>
            <p className="mb-2">Tel: (416) 908 3300</p>
            <p className="mb-2">Fax: 416 572 3808</p>
            <p className="mb-2">506-218 Export Blvd,</p>
            <p className="mb-2">Mississauga, ON, L5S 0A7</p>
            <p className="mb-2">9am to 5pm | Monday to Friday</p>
            <p>Email: kam@soochlaw.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Wills and Estates
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Power of Attorney
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Immigration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-sooch-gold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © Copyright {currentYear} Sooch Law Professional Corporation. All Rights Reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Website designed and developed with <span className="text-red-400">♥</span> by <a href="https://lovable.dev" className="hover:text-sooch-gold transition-colors" target="_blank" rel="noopener noreferrer">Lovable</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

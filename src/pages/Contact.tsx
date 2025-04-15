
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Navigation } from "lucide-react";
import MetaTags from "@/components/MetaTags";
import InteractiveMap from "@/components/InteractiveMap";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Contact Us" 
        description="Get in touch with Sooch Law. Schedule a free consultation for your legal needs in real estate, personal injury, or civil litigation."
      />
      <Navbar />
      <div className="bg-sooch-dark text-white py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Get in touch with our team. We're here to answer your questions and address your legal concerns.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Our Location</h2>
            <div className="flex items-center justify-center mb-2">
              <MapPin className="text-sooch-gold mr-2" />
              <p className="text-lg">506-218 Export Blvd, Mississauga, ON, L5S 0A7</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=506-218+Export+Blvd,+Mississauga,+ON,+L5S+0A7,+Canada" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sooch-gold hover:text-sooch-dark transition-colors mb-6"
            >
              <Navigation size={18} className="mr-1" />
              <span>Get Directions</span>
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <InteractiveMap height="450px" />
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;

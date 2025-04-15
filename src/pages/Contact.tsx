
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";
import MetaTags from "@/components/MetaTags";

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
      <ContactForm />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Our Location</h2>
            <div className="flex items-center justify-center">
              <MapPin className="text-sooch-gold mr-2" />
              <p className="text-lg">506-218 Export Blvd, Mississauga, ON, L5S 0A7</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.455752866566!2d-79.6739493!3d43.7094489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3aa78f2904b3%3A0xf2fd7de8bcde99c!2s218%20Export%20Blvd%2C%20Mississauga%2C%20ON%20L5S%200A7%2C%20Canada!5e0!3m2!1sen!2sus!4v1697635882841!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sooch Law Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;


import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-sooch-gold to-amber-600 text-white py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
          We Help Solve Your Legal Issues
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Schedule a free consultation with our experienced team today and take the first step toward resolving your legal concerns.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center bg-white text-sooch-gold px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
        >
          Book an Appointment
          <ArrowRight size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

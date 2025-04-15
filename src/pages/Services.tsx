
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import MetaTags from "@/components/MetaTags";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Our Legal Services" 
        description="Comprehensive legal services including real estate, personal injury, civil litigation, and more. Expert legal representation throughout the Greater Toronto Area."
      />
      <Navbar />
      <div className="bg-sooch-dark text-white py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive legal expertise tailored to your needs. Explore our range of services designed to protect your interests.
          </p>
        </div>
      </div>
      <Services />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicesPage;

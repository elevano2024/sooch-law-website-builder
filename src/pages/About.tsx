
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleTestimonials from "@/components/service-detail/GoogleTestimonials";
import ContactForm from "@/components/ContactForm";
import MetaTags from "@/components/MetaTags";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="About Our Law Firm" 
        description="Learn about Sooch Law, our history, commitment to excellence, and dedicated legal team serving the Greater Toronto Area."
      />
      <Navbar />
      <div className="bg-sooch-dark text-white py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Learn more about Sooch Law, our history, and our commitment to providing exceptional legal services.
          </p>
        </div>
      </div>
      <About />
      <WhyChooseUs />
      <GoogleTestimonials 
        title="Client Testimonials"
        subtitle="Hear from clients who have experienced our commitment to excellence"
        ctaText="Contact Us Today"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutPage;

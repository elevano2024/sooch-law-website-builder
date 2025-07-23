
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ExpertiseAreas from "@/components/ExpertiseAreas";
import ServicesShowcase from "@/components/ServicesShowcase";
import GoogleTestimonials from "@/components/service-detail/GoogleTestimonials";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MetaTags from "@/components/MetaTags";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags />
      <Navbar />
      <Hero />
      <ExpertiseAreas />
      <ServicesShowcase />
      <About />
      <Services />
      <GoogleTestimonials 
        title="Client Feedback"
        subtitle="Real reviews from satisfied clients across all our legal services"
        ctaText="Get Started Today"
      />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

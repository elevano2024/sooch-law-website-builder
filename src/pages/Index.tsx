
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ExpertiseAreas from "@/components/ExpertiseAreas";
import Testimonials from "@/components/Testimonials";
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
      <About />
      <Services />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

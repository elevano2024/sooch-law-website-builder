
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MetaTags from "@/components/MetaTags";
import { useParams } from "react-router-dom";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  // Format the slug for SEO title
  const formattedTitle = slug
    ? `${slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Law Services - Sooch Law`
    : "Legal Services - Sooch Law";
  
  const metaDescription = "Expert legal services for property transactions, including purchases, sales, refinancing, and title transfers. Mobile signing available throughout Ontario.";
  
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title={formattedTitle}
        description={metaDescription}
      />
      <Navbar />
      <ServiceDetailContent />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServiceDetail;

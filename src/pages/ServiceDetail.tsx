
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MetaTags from "@/components/MetaTags";
import { useParams } from "react-router-dom";
import ServiceDetailContent from "@/components/ServiceDetailContent";

const ServiceDetail = () => {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title={`${slug?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Law Services`}
        description="Expert legal services for property transactions, including purchases, sales, refinancing, and more. Serving clients throughout the Greater Toronto Area."
      />
      <Navbar />
      <ServiceDetailContent />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServiceDetail;

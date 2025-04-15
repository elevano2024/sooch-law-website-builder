
import { useParams } from "react-router-dom";
import { useRef } from "react";

// Import all our new components
import ServiceHero from "./service-detail/ServiceHero";
import StatsCounter from "./service-detail/StatsCounter";
import ServicePricing from "./service-detail/ServicePricing";
import ServiceProcess from "./service-detail/ServiceProcess";
import ServiceFAQ from "./service-detail/ServiceFAQ";
import ServiceDifferentiators from "./service-detail/ServiceDifferentiators";
import ServiceTestimonials from "./service-detail/ServiceTestimonials";
import QuickContact from "./service-detail/QuickContact";

const servicesData = {
  "real-estate": {
    title: "Real Estate Law",
    heading: "Expert Legal Services for Your Property Transactions",
    description: "Our experienced real estate lawyers provide comprehensive legal services for property transactions throughout the Greater Toronto Area. Whether you're buying, selling, or refinancing, our team ensures your interests are protected at every step.",
    image: "/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png",
    heroImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833", // Using bottom view of glass building image
    heroVideo: "https://player.vimeo.com/progressive_redirect/playback/803544550/rendition/1080p/file.mp4?loc=external&signature=65ea6141111ee04e1cf562c5045e4d9c8f7e872ca5ad48168b3456bba67ae725",
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "5,000+", label: "Successful Transactions" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Client Support" }
    ],
    testimonials: [
      {
        text: "The team at Sooch Law made my first home purchase stress-free. They explained everything clearly and were always available for questions.",
        author: "Michael T., Mississauga",
        rating: 5
      },
      {
        text: "I've used Sooch Law for multiple property transactions and have always been impressed with their knowledge and attention to detail.",
        author: "Jennifer K., Brampton",
        rating: 5
      },
      {
        text: "Professional, thorough, and efficient. I highly recommend their services for any real estate legal needs.",
        author: "Robert S., Toronto",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How long does a typical real estate transaction take?",
        answer: "Most residential real estate transactions take 30-90 days to complete, from the initial agreement to the closing date. The timeline can vary based on factors such as financing conditions, property inspections, and title clearance."
      },
      {
        question: "What documents should I prepare for my first meeting with a real estate lawyer?",
        answer: "For your initial consultation, bring the Agreement of Purchase and Sale, property information, mortgage approval details, and personal identification. If selling, include your existing mortgage information and property survey if available."
      },
      {
        question: "When should I contact a real estate lawyer in the buying/selling process?",
        answer: "It's best to contact a real estate lawyer before signing any binding agreements. Early involvement allows us to review terms, suggest modifications, and ensure your interests are protected from the beginning of the transaction."
      },
      {
        question: "What are closing costs and what do they include?",
        answer: "Closing costs are expenses beyond the property's purchase price that buyers and sellers pay to complete a real estate transaction. These typically include legal fees, land transfer taxes, title insurance, property taxes adjustments, and disbursements."
      },
      {
        question: "Do I need title insurance, and what does it cover?",
        answer: "Yes, title insurance is highly recommended. It protects against losses related to property ownership, including unknown title defects, fraud, survey issues, and more. It's a one-time premium that provides coverage for as long as you own the property."
      }
    ]
  }
};

const ServiceDetailContent = () => {
  const { slug } = useParams();
  const serviceData = servicesData[slug as keyof typeof servicesData] || servicesData["real-estate"];
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ServiceHero 
        title={serviceData.title}
        heading={serviceData.heading}
        description={serviceData.description}
        heroVideo={serviceData.heroVideo}
        heroImage={serviceData.heroImage}
      />
      
      {/* Stats Section */}
      <StatsCounter stats={serviceData.stats} />
      
      {/* Quick Contact Form */}
      <QuickContact />
      
      {/* Pricing Section */}
      <ServicePricing />
      
      {/* Our Process Section */}
      <ServiceProcess />
      
      {/* Why Choose Us / Differentiators */}
      <ServiceDifferentiators />
      
      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={serviceData.testimonials} />
      
      {/* FAQ Section */}
      <ServiceFAQ faqItems={serviceData.faq} />
    </div>
  );
};

export default ServiceDetailContent;

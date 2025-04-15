
import { Building, Scale, Heart, FileText, Key, MessageCircle, Globe, Users } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const Services = () => {
  const services = [
    {
      title: "Real Estate",
      description: "Expert legal guidance for property purchases, sales, and refinances.",
      icon: <Building className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Personal Injury",
      description: "Dedicated representation for accident victims seeking rightful compensation.",
      icon: <Heart className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Civil Litigation",
      description: "Effective legal advocacy in resolving disputes through court proceedings.",
      icon: <Scale className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Wills and Estates",
      description: "Comprehensive planning for asset protection and inheritance distribution.",
      icon: <FileText className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Power of Attorney",
      description: "Professional guidance in designating legal representation for personal matters.",
      icon: <Key className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Small Claims",
      description: "Strategic handling of disputes under the Small Claims Court jurisdiction.",
      icon: <MessageCircle className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Immigration",
      description: "Assisting with various immigration matters and applications.",
      icon: <Globe className="h-10 w-10 text-sooch-gold" />,
    },
    {
      title: "Family Law",
      description: "Compassionate guidance through divorce, custody, and support matters.",
      icon: <Users className="h-10 w-10 text-sooch-gold" />,
    },
  ];

  const realEstateServices = [
    {
      title: "Purchase",
      description: "We will assist you with every aspect of your purchase transaction, from reviewing and drafting the Agreement of Purchase and Sale to conducting a title search and closing the transaction.",
    },
    {
      title: "Sale",
      description: "We handle the preparation and execution of all legal documents, provide advice on any legal issues that may arise, and ensure that the transaction is completed efficiently and accurately.",
    },
    {
      title: "Refinance",
      description: "Refinancing your home can be a great way to save money or access equity for other purposes. We will work with your lender to ensure that all legal requirements are met.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-sooch-gold">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive legal services tailored to your specific needs. Our experienced team is committed to providing exceptional representation.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mt-6"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={0.1 * index}>
              <div className="service-card group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-3 group-hover:text-sooch-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mt-16">
          <h3 className="text-2xl font-playfair font-bold mb-8 text-center">
            Our Real Estate Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realEstateServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-4 text-sooch-gold">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

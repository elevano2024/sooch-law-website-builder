
import { ArrowRight, Building, Scale, Heart, FileText, Key, MessageCircle, Globe, Users } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesShowcase = () => {
  const allServices = [
    {
      title: "Real Estate",
      description: "Expert legal guidance for property purchases, sales, and refinances.",
      icon: <Building className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80",
      slug: "real-estate"
    },
    {
      title: "Personal Injury",
      description: "Dedicated representation for accident victims seeking rightful compensation.",
      icon: <Heart className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      slug: "personal-injury"
    },
    {
      title: "Civil Litigation",
      description: "Effective legal advocacy in resolving disputes through court proceedings.",
      icon: <Scale className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      slug: "civil-litigation"
    },
    {
      title: "Wills and Estates",
      description: "Comprehensive planning for asset protection and inheritance distribution.",
      icon: <FileText className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      slug: "wills-estates"
    },
    {
      title: "Power of Attorney",
      description: "Professional guidance in designating legal representation for personal matters.",
      icon: <Key className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      slug: "power-of-attorney"
    },
    {
      title: "Small Claims",
      description: "Strategic handling of disputes under the Small Claims Court jurisdiction.",
      icon: <MessageCircle className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
      slug: "small-claims"
    },
    {
      title: "Immigration",
      description: "Assisting with various immigration matters and applications.",
      icon: <Globe className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1569974571645-41876d5b1959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      slug: "immigration"
    },
    {
      title: "Family Law",
      description: "Compassionate guidance through divorce, custody, and support matters.",
      icon: <Users className="h-10 w-10 text-sooch-gold" />,
      image: "https://images.unsplash.com/photo-1624433287687-1206e845f12c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2675&q=80",
      slug: "family-law"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Our <span className="text-sooch-gold">Legal Services</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
            Comprehensive legal expertise tailored to your needs across various practice areas
          </p>
          <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.05}>
              <Link to={`/service/${service.slug}`} className="group block h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-sooch-gold transition-all duration-300 h-full">
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-4 flex items-center">
                      <div className="bg-sooch-gold/90 p-2 rounded-full mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-sooch-gold font-medium group-hover:text-amber-600 transition-colors">
                      Learn more
                      <motion.span 
                        initial={{ x: 0 }}
                        className="inline-block ml-2" 
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="btn-primary inline-flex items-center justify-center"
          >
            View All Services
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;

import AnimatedElement from "@/components/AnimatedElement";
import { Home, FileText, RefreshCw, ArrowRightLeft, Users, Shield, Coins, ArrowRight } from "lucide-react";

interface RealEstateService {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const RealEstatePricing = () => {
  const services: RealEstateService[] = [
    {
      title: "Buying a Home",
      price: "Contact for Quote",
      description: "Your purchase transaction involves many legal steps. We handle all the legal work associated with your purchase.",
      features: [
        "Review of Agreement of Purchase & Sale",
        "Conducting a Title Search",
        "Reviewing documents prepared by the seller's lawyer",
        "Preparing all mortgage documents",
        "Ensuring there are no liens on the property title",
        "Liaise with your bank or mortgage broker if necessary",
        "Arrange for title insurance",
        "Mobile signings",
        "Unlimited access",
        "Document handling"
      ],
      icon: <Home className="h-8 w-8 text-sooch-gold" />,
      popular: true
    },
    {
      title: "Selling a Home",
      price: "Contact for Quote",
      description: "The closing of your sale involves another series of steps, distinct from those in the purchase closing. Once you have agreed to sell your home your real estate agent will prepare a binding Agreement of Purchase and Sale between you and the buyer.",
      features: [
        "Review of Agreement of Purchase & Sale",
        "Conducting a Title Search",
        "Reviewing documents prepared by the sellers",
        "Review of Insurance Binder",
        "Preparation of Legal Docs. for Closing",
        "Arrangement of Title Insurance",
        "Review of Title Search Documents",
        "Review of Writ Search Documents",
        "Mobile signings",
        "Unlimited access",
        "Document handling"
      ],
      icon: <FileText className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Refinancing",
      price: "Contact for Quote",
      description: "Refinancing your home can be a great way to save money or access equity for other purposes. We will work with your lender to ensure that all legal requirements are met.",
      features: [
        "Review Mortgage Documents",
        "Obtain Discharge Statement",
        "Review Title",
        "Conduct Title Search",
        "Preparation of New Mortgage Documents",
        "Arrangement of Title Insurance",
        "Review of Writ Search Documents",
        "Mobile signings",
        "Unlimited access",
        "Document handling"
      ],
      icon: <Coins className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Transfer",
      price: "Contact for Quote",
      description: "Whether you're transferring property due to a divorce, separation, death, or for tax purposes, we'll ensure the process is completed properly and efficiently.",
      features: [
        "Transfer Documentation Preparation",
        "Title Transfer Registration",
        "Property Tax Calculation",
        "Legal Compliance Verification",
        "Land Registry Filing",
        "Title Insurance Options",
        "Mobile signings",
        "Unlimited access",
        "Document handling",
        "Cost-effective solution"
      ],
      icon: <ArrowRight className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-sooch-gold">Real Estate Services</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Comprehensive legal support for all your property needs. From purchase to sale, we handle every detail with expertise and care.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

                {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-sooch-gold text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="bg-sooch-gold/10 text-sooch-gold px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      Contact for Quote
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What We Handle:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sooch-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  className="w-full bg-sooch-gold hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Personalized Quote
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Additional Services */}
        <AnimatedElement delay={0.5}>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Additional <span className="text-sooch-gold">Specialized Services</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Independent Legal Advice/Representation</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">Review of Agreement, Legal Documents & Attachments, Consultation, Legal Advice, Suggestions as to Entitlement & Liabilities under Family Laws & Real Estate Laws, Review of Financial Disclosure Documents</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                      <span>✓ Mobile signings</span>
                      <span>✓ Unlimited access</span>
                      <span>✓ Document handling</span>
                    </div>
                    <button 
                      className="bg-sooch-gold hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      onClick={() => {
                        const contactSection = document.getElementById('contact-form');
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Private Lending Transactions</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">Specialized support for private mortgage deals with comprehensive legal protection and documentation.</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                      <span>✓ Contract review</span>
                      <span>✓ Risk assessment</span>
                      <span>✓ Documentation</span>
                    </div>
                    <button 
                      className="bg-sooch-gold hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      onClick={() => {
                        const contactSection = document.getElementById('contact-form');
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Mobile Signing Feature */}
        <AnimatedElement delay={0.6}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 mb-12 text-center">
            <Home className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Convenient Mobile Signing</h3>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Experience the ultimate convenience with our mobile signing services. We bring the closing to you, wherever you're most comfortable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Your Comfort Zone</h4>
                <p className="text-amber-100 text-sm">Sign at home, office, or any location</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Flexible Timing</h4>
                <p className="text-amber-100 text-sm">Evening and weekend appointments</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Professional Service</h4>
                <p className="text-amber-100 text-sm">Same expert care, wherever you are</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Why Choose Our Services */}
        <AnimatedElement delay={0.7}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Why Choose <span className="text-sooch-gold">Sooch Law</span> for Real Estate
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparent Process</h4>
                <p className="text-gray-600 text-sm">Clear communication every step of the way</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Care</h4>
                <p className="text-gray-600 text-sm">Every detail handled with precision</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Convenience</h4>
                <p className="text-gray-600 text-sm">We come to your preferred location</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">25+ years of proven expertise</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom CTA */}
        <AnimatedElement delay={0.8}>
          <div className="mt-12 bg-sooch-gold rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Protect Your Property Investment?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Every real estate transaction deserves expert legal support. Contact us today to discuss your needs and get personalized service that puts your interests first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Your Consultation
              </button>
              <a 
                href="tel:4169083300" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-sooch-gold text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call (416) 908-3300
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default RealEstatePricing; 
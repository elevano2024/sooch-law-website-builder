import AnimatedElement from "@/components/AnimatedElement";
import { FileSearch, FileText, Shield, CheckCircle, Home, Key } from "lucide-react";

const RealEstateProcess = () => {
  const processSteps = [
    {
      title: "Document Review & Analysis",
      description: "Comprehensive review of all purchase/sale agreements and supporting documents",
      details: [
        "Agreement of Purchase and Sale review",
        "Conditions and contingencies analysis",
        "Deposit structure verification",
        "Timeline and closing date confirmation",
        "Special terms and amendments review"
      ],
      icon: <FileSearch className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Title Search & Verification",
      description: "Thorough investigation of property title to ensure clear ownership and identify any issues",
      details: [
        "Complete title history search",
        "Liens and encumbrances check",
        "Survey review and analysis",
        "Property taxes verification",
        "Municipal compliance confirmation"
      ],
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Legal Documentation Preparation",
      description: "Preparation and review of all legal documents required for the transaction",
      details: [
        "Transfer/Deed preparation",
        "Statement of Adjustments creation",
        "Mortgage documentation review",
        "Direction letters preparation",
        "Land Transfer Tax calculations"
      ],
      icon: <FileText className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Pre-Closing Coordination",
      description: "Final preparations and coordination with all parties before closing",
      details: [
        "Mortgage funding arrangements",
        "Final property tax adjustments",
        "Utility account transfers",
        "Insurance policy coordination",
        "Final walk-through coordination"
      ],
      icon: <CheckCircle className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Closing & Registration",
      description: "Execute the transaction and complete all legal registrations",
      details: [
        "Document execution and witnessing",
        "Funds transfer coordination",
        "Property registration completion",
        "Key and possession transfer",
        "Post-closing document delivery"
      ],
      icon: <Key className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-sooch-gold">Transaction Process</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Every real estate transaction follows our proven 5-step process, ensuring nothing is overlooked and your interests are fully protected from start to finish.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="group hover:bg-white hover:shadow-xl transition-all duration-300 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-sooch-gold text-white text-sm font-bold px-3 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                          <span className="text-gray-500 text-sm">Essential Phase</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-sooch-gold transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Timeline indicator */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Completed in {index < 2 ? "1-2" : index < 4 ? "2-3" : "1"} business days</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-6 group-hover:bg-amber-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Activities:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-sooch-gold mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Connecting line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-px h-8 bg-gradient-to-b from-sooch-gold to-amber-300"></div>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Mobile Signing Highlight */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 text-center bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 text-white">
            <Home className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Mobile Signing Available</h3>
            <p className="text-amber-100 max-w-2xl mx-auto mb-6">
              For your convenience, we offer mobile signing services. We'll come to your home, office, or preferred location to complete the transaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Home Visits</h4>
                <p className="text-amber-100 text-sm">Sign in the comfort of your home</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Office Meetings</h4>
                <p className="text-amber-100 text-sm">Meet at your workplace</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Video Signing</h4>
                <p className="text-amber-100 text-sm">Secure remote options available</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button 
                className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Mobile Signing
              </button>
              <a 
                href="tel:4169083300" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-sooch-gold text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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

export default RealEstateProcess; 
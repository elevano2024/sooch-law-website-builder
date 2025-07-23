import AnimatedElement from "@/components/AnimatedElement";
import { MessageCircle, FileSearch, PenTool, Shield, FileCheck, Heart } from "lucide-react";

const WillsEstatesProcess = () => {
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "Understanding your family's unique needs, assets, and estate planning goals through comprehensive discussion",
      details: [
        "Family structure and beneficiary analysis",
        "Asset inventory and valuation review",
        "Current estate planning document assessment",
        "Tax implications and strategies discussion",
        "Personal wishes and concerns exploration"
      ],
      icon: <MessageCircle className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Comprehensive Planning",
      description: "Developing a tailored estate plan that protects your assets and ensures your wishes are carried out",
      details: [
        "Will structure and beneficiary designation",
        "Trust establishment and administration planning",
        "Tax minimization strategies development",
        "Guardian nominations for minor children",
        "Charitable giving and legacy planning"
      ],
      icon: <FileSearch className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Document Preparation",
      description: "Drafting all necessary legal documents with precision and attention to your specific requirements",
      details: [
        "Last Will and Testament preparation",
        "Trust agreements and documentation",
        "Power of Attorney documents",
        "Personal care directives",
        "Beneficiary designation updates"
      ],
      icon: <PenTool className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Review & Execution",
      description: "Ensuring all documents are properly executed, witnessed, and legally binding according to Ontario law",
      details: [
        "Document review and explanation",
        "Proper witnessing and notarization",
        "Execution ceremony coordination",
        "Original document safekeeping arrangements",
        "Copy distribution to key parties"
      ],
      icon: <FileCheck className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Ongoing Support",
      description: "Providing continued guidance and updates to ensure your estate plan remains current and effective",
      details: [
        "Regular estate plan reviews and updates",
        "Life event adaptation and modifications",
        "Tax law change notifications",
        "Estate administration guidance when needed",
        "Family consultation and support services"
      ],
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our Estate Planning <span className="text-sooch-gold">Process</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              We guide you through every step of estate planning with compassionate expertise, ensuring your family's future is secure and your wishes are honored.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="flex flex-col lg:flex-row items-start gap-8 mb-12 last:mb-0">
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-sooch-gold text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sooch-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 mt-20 w-px h-16 bg-gradient-to-b from-sooch-gold to-transparent"></div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Estate Administration Section */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 text-center text-white">
            <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Estate Administration Support</h3>
            <p className="text-amber-100 text-lg mb-6 max-w-3xl mx-auto">
              When the time comes, we're here to guide your family through the estate administration process with compassion and expertise, handling all legal requirements while you focus on what matters most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Probate Applications</h4>
                <p className="text-amber-100 text-sm">Complete court application process</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Asset Distribution</h4>
                <p className="text-amber-100 text-sm">Ensuring beneficiaries receive their inheritance</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Tax Filing</h4>
                <p className="text-amber-100 text-sm">Final tax returns and clearance certificates</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Peace of Mind CTA */}
        <AnimatedElement delay={0.7}>
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Secure Your Family's <span className="text-sooch-gold">Future?</span>
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Don't wait to protect what matters most. Estate planning is a gift of love to your family, providing them with security and peace of mind when they need it most.
            </p>
            <button 
              className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contact-form');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Estate Plan Today
            </button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default WillsEstatesProcess; 
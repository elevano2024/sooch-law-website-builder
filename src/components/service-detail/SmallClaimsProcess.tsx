import React from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { FileSearch, Scale, FileText, Gavel } from "lucide-react";

const SmallClaimsProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Case Assessment",
      description: "We evaluate your claim to determine if it's suitable for Small Claims Court and assess the likelihood of success.",
      icon: <FileSearch className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Claim value assessment", "Evidence review", "Success probability analysis"]
    },
    {
      number: "02", 
      title: "Document Preparation",
      description: "Our team prepares all necessary court documents, including the plaintiff's claim and supporting evidence.",
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Plaintiff's claim drafting", "Evidence compilation", "Legal document review"]
    },
    {
      number: "03",
      title: "Filing & Service",
      description: "We file your claim with the Small Claims Court and ensure proper service on the defendant.",
      icon: <Scale className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Court filing", "Defendant service", "Timeline management"]
    },
    {
      number: "04",
      title: "Resolution & Collection",
      description: "We represent you at settlement conferences, trial if necessary, and assist with judgment collection.",
      icon: <Gavel className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Settlement negotiation", "Trial representation", "Judgment enforcement"]
    }
  ];

  const claimTypes = [
    {
      title: "Contract Disputes",
      description: "Breach of contract claims, unpaid services, and agreement violations",
      maxValue: "$35,000",
      timeline: "2-4 months",
      features: ["Service agreements", "Sale of goods", "Construction contracts", "Professional services"]
    },
    {
      title: "Debt Collection",
      description: "Recovery of unpaid debts, loans, and outstanding invoices",
      maxValue: "$35,000", 
      timeline: "1-3 months",
      features: ["Unpaid invoices", "Personal loans", "Business debts", "Account receivables"]
    },
    {
      title: "Property Damage",
      description: "Claims for damage to personal property, vehicles, and real estate",
      maxValue: "$35,000",
      timeline: "2-5 months",
      features: ["Vehicle damage", "Property damage", "Tenant damages", "Negligence claims"]
    },
    {
      title: "Security Deposits",
      description: "Landlord-tenant disputes over security deposits and damage claims",
      maxValue: "$35,000",
      timeline: "1-2 months",
      features: ["Deposit recovery", "Damage disputes", "Rental claims", "Lease violations"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Our <span className="text-sooch-gold">Small Claims</span> Process
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to resolving your smaller disputes quickly and cost-effectively through Ontario's Small Claims Court.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-sooch-gold/20 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-sooch-gold/10 rounded-2xl flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-sooch-gold font-playfair">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-sooch-gold rounded-full mr-3"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Common Claim Types Section */}
        <AnimatedElement delay={0.5}>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-12">
              Common <span className="text-sooch-gold">Small Claims</span> Cases
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {claimTypes.map((claim, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-sooch-gold/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{claim.title}</h4>
                    <div className="text-right">
                      <span className="bg-sooch-gold/10 text-sooch-gold text-xs font-semibold px-3 py-1 rounded-full block mb-1">
                        {claim.maxValue}
                      </span>
                      <span className="text-gray-500 text-xs">{claim.timeline}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {claim.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {claim.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-sooch-gold rounded-full mr-2"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Small Claims Benefits */}
        <AnimatedElement delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Small Claims Court <span className="text-sooch-gold">Advantages</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Simplified Process</h4>
                <p className="text-gray-600 text-sm">Streamlined procedures designed for efficiency and cost-effectiveness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Lower Costs</h4>
                <p className="text-gray-600 text-sm">Reduced court fees and legal costs compared to Superior Court</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Faster Resolution</h4>
                <p className="text-gray-600 text-sm">Most cases resolved within 2-6 months vs. years in higher courts</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Small Claims CTA */}
        <AnimatedElement delay={0.7}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <Scale className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Pursue Your Small Claim?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't let unpaid debts or contract breaches go unresolved. Small Claims Court offers an efficient path to justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sooch-gold px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Claim
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sooch-gold transition-colors">
                Free Case Review
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default SmallClaimsProcess; 
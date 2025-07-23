import React from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { Shield, FileText, Users, Clock } from "lucide-react";

const PowerOfAttorneyProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your specific needs, family situation, and decision-making preferences to create the right POA structure.",
      icon: <Users className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Family assessment", "Decision scope review", "Attorney selection guidance"]
    },
    {
      number: "02", 
      title: "Document Preparation",
      description: "Our legal team drafts comprehensive POA documents tailored to your unique circumstances and legal requirements.",
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Custom POA drafting", "Legal compliance check", "Multiple attorney provisions"]
    },
    {
      number: "03",
      title: "Review & Signing",
      description: "We review all documents with you, ensure proper witnessing, and complete the legal execution process.",
      icon: <Shield className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Document review", "Proper witnessing", "Legal execution"]
    },
    {
      number: "04",
      title: "Secure Storage",
      description: "Your POA documents are safely stored with copies provided to you and your designated attorneys for future access.",
      icon: <Clock className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Secure document storage", "Multiple copies provided", "Easy future access"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Our <span className="text-sooch-gold">Power of Attorney</span> Process
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to securing your decision-making authority and protecting your future interests.
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

        {/* Process Timeline */}
        <AnimatedElement delay={0.6}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <Shield className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Secure Your Decision-Making Authority Today
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't wait for an emergency. Protect your autonomy and ensure your voice is heard with comprehensive Power of Attorney documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sooch-gold px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your POA Planning
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sooch-gold transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PowerOfAttorneyProcess; 
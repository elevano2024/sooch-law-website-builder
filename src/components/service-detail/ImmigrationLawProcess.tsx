import React from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { FileSearch, Users, FileText, Globe } from "lucide-react";

const ImmigrationLawProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Immigration Assessment",
      description: "We conduct a comprehensive evaluation of your background, qualifications, and immigration options to determine the best pathway to Canada.",
      icon: <FileSearch className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Eligibility assessment", "Program recommendations", "Documentation review"]
    },
    {
      number: "02", 
      title: "Application Strategy",
      description: "Our team develops a customized immigration strategy tailored to your specific situation and immigration goals.",
      icon: <Users className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Strategic planning", "Timeline development", "Risk assessment"]
    },
    {
      number: "03",
      title: "Document Preparation",
      description: "We assist with gathering, preparing, and reviewing all required documents to ensure your application is complete and accurate.",
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Document checklist", "Form completion", "Quality review"]
    },
    {
      number: "04",
      title: "Application Submission",
      description: "We submit your application to the appropriate authorities and provide ongoing support throughout the processing period.",
      icon: <Globe className="h-8 w-8 text-sooch-gold" />,
      highlights: ["Application submission", "Status monitoring", "Updates & communication"]
    }
  ];

  const immigrationPrograms = [
    {
      title: "Express Entry System",
      description: "Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades programs",
      timeline: "6-8 months",
      features: ["CRS score optimization", "Job offer assistance", "Provincial nomination support"]
    },
    {
      title: "Provincial Nominee Program (PNP)",
      description: "Province-specific immigration programs tailored to regional economic needs",
      timeline: "12-18 months",
      features: ["Provincial nomination", "Labour market assessment", "Regional requirements"]
    },
    {
      title: "Family Sponsorship",
      description: "Sponsor eligible family members including spouses, children, parents, and grandparents",
      timeline: "12-24 months",
      features: ["Relationship verification", "Financial sponsorship", "Undertaking assistance"]
    },
    {
      title: "Business Immigration",
      description: "Investor, entrepreneur, and self-employed persons immigration programs",
      timeline: "18-36 months",
      features: ["Business plan development", "Investment documentation", "Economic integration"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Our <span className="text-sooch-gold">Immigration</span> Process
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to navigating Canada's complex immigration system with expert guidance at every step.
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

        {/* Immigration Programs Section */}
        <AnimatedElement delay={0.5}>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-12">
              Popular <span className="text-sooch-gold">Immigration Programs</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {immigrationPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-sooch-gold/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{program.title}</h4>
                    <span className="bg-sooch-gold/10 text-sooch-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {program.timeline}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-sooch-gold rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Immigration Success CTA */}
        <AnimatedElement delay={0.7}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <Globe className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make Canada Your Home?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Take the first step toward your Canadian immigration journey with expert legal guidance and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sooch-gold px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sooch-gold transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ImmigrationLawProcess; 
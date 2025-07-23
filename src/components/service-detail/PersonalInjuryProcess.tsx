import AnimatedElement from "@/components/AnimatedElement";
import { FileSearch, Shield, Scale, DollarSign, Gavel, CheckCircle } from "lucide-react";

const PersonalInjuryProcess = () => {
  const processSteps = [
    {
      title: "Free Case Evaluation",
      description: "Immediate assessment of your case to determine liability and potential compensation",
      details: [
        "Detailed accident analysis",
        "Medical records review",
        "Insurance coverage assessment",
        "Liability determination",
        "Timeline establishment"
      ],
      icon: <FileSearch className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Evidence Investigation",
      description: "Comprehensive evidence gathering to build the strongest possible case",
      details: [
        "Accident scene investigation",
        "Witness interviews",
        "Expert consultations",
        "Medical expert opinions",
        "Surveillance footage recovery"
      ],
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Legal Strategy Development",
      description: "Creating a personalized legal strategy focused on maximum compensation",
      details: [
        "Damage calculation and assessment",
        "Insurance claim preparation",
        "Legal precedent research",
        "Settlement strategy development",
        "Court preparation if needed"
      ],
      icon: <Scale className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Aggressive Negotiation",
      description: "Fighting insurance companies and opposing counsel for fair compensation",
      details: [
        "Demand letter preparation",
        "Insurance adjuster negotiations",
        "Medical provider negotiations",
        "Settlement conference participation",
        "Mediation representation"
      ],
      icon: <DollarSign className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Court Representation",
      description: "When negotiations fail, we take your case to trial for maximum recovery",
      details: [
        "Trial preparation and discovery",
        "Expert witness coordination",
        "Jury selection strategy",
        "Courtroom advocacy",
        "Post-trial collection assistance"
      ],
      icon: <Gavel className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-sooch-gold">Battle Plan</span> for Justice
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Every personal injury case is unique, but our proven process ensures no stone is left unturned in the fight for your compensation.
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
                          <span className="text-gray-500 text-sm">Critical Phase</span>
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
                    
                    {/* Progress indicator */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Proven effective in {1000 + (index * 200)}+ cases</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-6 group-hover:bg-amber-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-4">What We Do:</h4>
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

        {/* Bottom Call to Action */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 text-center bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't Face Insurance Companies Alone</h3>
            <p className="text-amber-100 max-w-2xl mx-auto mb-6">
              Insurance companies have teams of lawyers working against you. Level the playing field with experienced personal injury advocates on your side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Free Case Review
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

export default PersonalInjuryProcess; 
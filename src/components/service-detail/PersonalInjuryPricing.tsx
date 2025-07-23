import AnimatedElement from "@/components/AnimatedElement";
import { Scale, Car, Heart, Building, Wrench, Shield } from "lucide-react";

interface PersonalInjuryService {
  title: string;
  fee: string;
  description: string;
  caseTypes: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const PersonalInjuryPricing = () => {
  const services: PersonalInjuryService[] = [
    {
      title: "Motor Vehicle Accidents",
      fee: "No Win, No Fee",
      description: "Comprehensive representation for all types of vehicle accidents with maximum compensation focus",
      caseTypes: [
        "Car accidents",
        "Motorcycle crashes", 
        "Truck collisions",
        "Pedestrian accidents",
        "Bicycle incidents"
      ],
      icon: <Car className="h-8 w-8 text-sooch-gold" />,
      popular: true
    },
    {
      title: "Slip & Fall Injuries",
      fee: "Contingency Only",
      description: "Fighting property owners and businesses for compensation when negligence causes injuries",
      caseTypes: [
        "Premises liability",
        "Workplace accidents",
        "Public property incidents",
        "Winter slip & falls",
        "Store accidents"
      ],
      icon: <Building className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Medical Malpractice",
      fee: "No Upfront Costs",
      description: "Holding healthcare providers accountable for substandard care and medical errors",
      caseTypes: [
        "Surgical errors",
        "Misdiagnosis cases",
        "Birth injuries",
        "Medication errors",
        "Hospital negligence"
      ],
      icon: <Heart className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Product Liability",
      fee: "Contingency Basis",
      description: "Pursuing manufacturers for defective products that cause serious injuries",
      caseTypes: [
        "Defective products",
        "Design flaws",
        "Manufacturing defects",
        "Failure to warn",
        "Consumer safety violations"
      ],
      icon: <Wrench className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Risk-Free <span className="text-sooch-gold">Legal Representation</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              We believe everyone deserves access to justice. That's why we work on a contingency fee basis - you don't pay unless we win your case.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        {/* Main Fee Structure */}
        <AnimatedElement delay={0.2}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 mb-12 text-center">
            <Scale className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">33.3% Contingency Fee</h3>
                          <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Our fee is only taken from your settlement or court award. If we don't win, you owe us nothing for legal fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                              <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">No Upfront Costs</h4>
                  <p className="text-amber-100 text-sm">Zero fees to start your case</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">Free Consultation</h4>
                  <p className="text-amber-100 text-sm">Comprehensive case evaluation</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">We Cover Costs</h4>
                  <p className="text-amber-100 text-sm">All case expenses covered</p>
                </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1 + 0.3}>
              <div className={`bg-slate-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                service.popular 
                  ? 'border-sooch-gold hover:border-amber-500' 
                  : 'border-slate-700 hover:border-sooch-gold'
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-sooch-gold text-white px-4 py-1 text-sm font-bold">
                    Most Common
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {service.fee}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Case Types */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">We Handle:</h4>
                  <ul className="space-y-2">
                    {service.caseTypes.map((caseType, caseIndex) => (
                      <li key={caseIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sooch-gold rounded-full"></div>
                        <span className="text-gray-300 text-sm">{caseType}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button 
                  className="w-full bg-sooch-gold hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Free Case Evaluation
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* What's Included */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              What's Included in Our <span className="text-sooch-gold">Contingency Fee</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Shield className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Complete Legal Representation</h4>
                <p className="text-gray-400 text-sm">From investigation to settlement or trial</p>
              </div>
              <div className="text-center">
                <Scale className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Expert Witnesses</h4>
                <p className="text-gray-400 text-sm">Medical experts, accident reconstructionists</p>
              </div>
              <div className="text-center">
                <Car className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Investigation Costs</h4>
                <p className="text-gray-400 text-sm">Scene analysis, evidence gathering</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Medical Record Review</h4>
                <p className="text-gray-400 text-sm">Comprehensive damage assessment</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom CTA */}
        <AnimatedElement delay={0.7}>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Fight for the Compensation You Deserve?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't let insurance companies take advantage of you. Get experienced legal representation with no financial risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Free Consultation
              </button>
              <a 
                href="tel:4169083300" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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

export default PersonalInjuryPricing; 
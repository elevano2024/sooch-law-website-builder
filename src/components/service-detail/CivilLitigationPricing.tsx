import AnimatedElement from "@/components/AnimatedElement";
import { Scale, Building, FileText, Users, Gavel, Shield, Clock, CheckCircle } from "lucide-react";

interface LitigationService {
  title: string;
  pricing: string;
  description: string;
  serviceAreas: string[];
  icon: React.ReactNode;
  featured?: boolean;
}

const CivilLitigationPricing = () => {
  const services: LitigationService[] = [
    {
      title: "Commercial Litigation",
      pricing: "Hourly + Retainer",
      description: "Comprehensive business dispute resolution including breach of contract, partnership disputes, and commercial tort claims",
      serviceAreas: [
        "Breach of contract disputes",
        "Partnership & shareholder disputes",
        "Business tort claims",
        "Employment litigation",
        "Intellectual property disputes",
        "Construction law disputes"
      ],
      icon: <Building className="h-8 w-8 text-sooch-gold" />,
      featured: true
    },
    {
      title: "Property Disputes",
      pricing: "Fixed Fee Available",
      description: "Real estate litigation including boundary disputes, landlord-tenant issues, and property damage claims",
      serviceAreas: [
        "Boundary & easement disputes",
        "Landlord-tenant litigation",
        "Property damage claims",
        "Title disputes",
        "Zoning & municipal law",
        "Construction lien claims"
      ],
      icon: <Scale className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Contract Disputes",
      pricing: "Contingency Options",
      description: "Enforcement and defense of contractual obligations across various industries and transaction types",
      serviceAreas: [
        "Breach of contract claims",
        "Contract interpretation",
        "Non-compete agreements",
        "Service agreement disputes",
        "Sale of goods disputes",
        "Professional service contracts"
      ],
      icon: <FileText className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Debt Collection & Recovery",
      pricing: "Success-Based Fees",
      description: "Professional debt recovery services for businesses and individuals with comprehensive collection strategies",
      serviceAreas: [
        "Commercial debt collection",
        "Judgment enforcement",
        "Asset recovery & tracing",
        "Garnishment proceedings",
        "Bankruptcy proceedings",
        "Settlement negotiations"
      ],
      icon: <Gavel className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-sooch-gold">Litigation Services</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Strategic legal representation tailored to your dispute. We offer flexible fee structures to match your case requirements and budget considerations.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-sooch-gold text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    Most Requested
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {service.pricing}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Areas */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Practice Areas:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.serviceAreas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sooch-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{area}</span>
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
                  Schedule Strategy Consultation
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Fee Structure Information */}
        <AnimatedElement delay={0.5}>
          <div className="bg-slate-900 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Flexible <span className="text-sooch-gold">Fee Structures</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-slate-800 rounded-xl p-6">
                <Clock className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Hourly Billing</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Traditional hourly billing with detailed time tracking and transparent invoicing for complex litigation matters.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <Shield className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Fixed Fee Options</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Predictable costs for specific litigation services including document review and straightforward disputes.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6">
                <CheckCircle className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Contingency Arrangements</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Success-based fees available for certain types of claims where we only get paid when you recover compensation.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Alternative Dispute Resolution Pricing */}
        <AnimatedElement delay={0.6}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 mb-12 text-center text-white">
            <Users className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Alternative Dispute Resolution</h3>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Save time and costs with professional mediation and arbitration services. Often more efficient than traditional litigation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Mediation Services</h4>
                <p className="text-amber-100 text-sm">Facilitated settlement discussions</p>
                <p className="text-amber-200 text-xs mt-2">Starting at $200/hour</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Arbitration Representation</h4>
                <p className="text-amber-100 text-sm">Private dispute resolution</p>
                <p className="text-amber-200 text-xs mt-2">Custom fee arrangements</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Why Choose Our Litigation Services */}
        <AnimatedElement delay={0.7}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Why Choose <span className="text-sooch-gold">Sooch Law</span> for Litigation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Approach</h4>
                <p className="text-gray-600 text-sm">Comprehensive case analysis and strategic planning</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-sm">90% favorable outcomes in litigation matters</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Client Communication</h4>
                <p className="text-gray-600 text-sm">Regular updates and transparent billing</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">18+ Years Experience</h4>
                <p className="text-gray-600 text-sm">Extensive litigation and dispute resolution expertise</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom CTA */}
        <AnimatedElement delay={0.8}>
          <div className="mt-12 bg-sooch-gold rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Resolve Your Dispute?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Every dispute deserves strategic analysis and professional representation. Contact us today to discuss your case and explore your legal options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Your Strategy Session
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

export default CivilLitigationPricing; 
import AnimatedElement from "@/components/AnimatedElement";
import { FileText, Shield, Heart, Users, Clock, Star, CheckCircle, Gift } from "lucide-react";

interface EstateService {
  title: string;
  pricing: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const WillsEstatesPricing = () => {
  const services: EstateService[] = [
    {
      title: "Simple Will Package",
      pricing: "Contact for Quote",
      description: "Comprehensive will preparation for individuals or couples with straightforward estate planning needs",
      features: [
        "Last Will and Testament drafting",
        "Executor appointment and powers",
        "Guardian designation for minor children",
        "Basic asset distribution planning",
        "Document execution and witnessing",
        "Original will safekeeping",
        "Digital copy provision",
        "1-year free minor updates"
      ],
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      popular: true
    },
    {
      title: "Complete Estate Plan",
      pricing: "Custom Quote",
      description: "Comprehensive estate planning including wills, trusts, and tax optimization strategies for complex estates",
      features: [
        "Complete will and trust documentation",
        "Tax minimization strategies",
        "Power of attorney preparation",
        "Personal care directives",
        "Beneficiary designation review",
        "Trust establishment and funding",
        "Estate administration guidance",
        "Ongoing plan maintenance"
      ],
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Estate Administration",
      pricing: "Hourly + Retainer",
      description: "Compassionate guidance through the probate process and estate settlement for grieving families",
      features: [
        "Probate application and court filings",
        "Asset inventory and valuation",
        "Creditor claims management",
        "Tax return preparation and filing",
        "Asset distribution to beneficiaries",
        "Estate account management",
        "Family communication and updates",
        "Dispute resolution if needed"
      ],
      icon: <Heart className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Trust Services",
      pricing: "Fixed Fee Available",
      description: "Professional trust establishment and administration for asset protection and tax efficiency",
      features: [
        "Trust agreement drafting",
        "Asset transfer and funding",
        "Trustee appointment guidance",
        "Tax planning and compliance",
        "Beneficiary communication",
        "Trust administration support",
        "Investment oversight assistance",
        "Distribution planning"
      ],
      icon: <Users className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our Estate Planning <span className="text-sooch-gold">Services</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Protecting your family's future with comprehensive estate planning solutions. From simple wills to complex trust structures, we provide the expertise you need at every stage of life.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
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
                    <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {service.pricing}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
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
                  Schedule Estate Consultation
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Why Estate Planning Matters */}
        <AnimatedElement delay={0.5}>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Why Estate Planning <span className="text-sooch-gold">Matters</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Heart className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Protect Your Family</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ensure your loved ones are cared for according to your wishes, with clear guidance during difficult times.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Shield className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Minimize Taxes</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strategic planning can significantly reduce the tax burden on your estate and maximize inheritance for beneficiaries.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Clock className="h-12 w-12 text-sooch-gold mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Avoid Probate Delays</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proper planning can streamline the estate administration process and reduce costs for your family.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Family Legacy Section */}
        <AnimatedElement delay={0.6}>
          <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 mb-12 text-center text-white">
            <Gift className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Leave a Lasting Legacy</h3>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Estate planning is more than just legal documents—it's about creating a legacy that reflects your values and ensures your family's prosperity for generations to come.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Charitable Giving</h4>
                <p className="text-amber-100 text-sm">Structure donations to support causes you care about</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2">Generational Wealth</h4>
                <p className="text-amber-100 text-sm">Create trusts that benefit children and grandchildren</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Why Choose Sooch Law */}
        <AnimatedElement delay={0.7}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Why Choose <span className="text-sooch-gold">Sooch Law</span> for Estate Planning
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">22+ Years Experience</h4>
                <p className="text-gray-600 text-sm">Proven expertise in estate planning and administration</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2,000+ Wills Drafted</h4>
                <p className="text-gray-600 text-sm">Extensive experience with all types of estate plans</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Compassionate Approach</h4>
                <p className="text-gray-600 text-sm">Understanding and sensitive to family dynamics</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Service</h4>
                <p className="text-gray-600 text-sm">From planning to administration, we're here for your family</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom CTA */}
        <AnimatedElement delay={0.8}>
          <div className="mt-12 bg-sooch-gold rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Protect Your Family's Future?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Estate planning is one of the most important gifts you can give your family. Don't wait—start building your legacy and securing peace of mind today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Your Estate Consultation
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

export default WillsEstatesPricing; 
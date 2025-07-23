import AnimatedElement from "@/components/AnimatedElement";
import { CheckCircle2, Heart, Users, Handshake, Scale, MessageCircle, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FamilyLawService {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const FamilyLawPricing = () => {
  const services: FamilyLawService[] = [
    {
      title: "Initial Family Consultation",
      price: "Free",
      description: "Comprehensive consultation to understand your situation and legal options",
      features: [
        "30-minute consultation",
        "Case assessment",
        "Legal options review",
        "No obligation",
        "Confidential discussion"
      ],
      icon: <MessageCircle className="h-6 w-6 text-sooch-gold" />
    },
    {
      title: "Uncontested Divorce",
      price: "Contact for Quote",
      description: "Complete divorce proceeding when both parties agree on all terms",
      popular: true,
      features: [
        "Document preparation",
        "Court filing",
        "Simple divorce order",
        "No court appearance needed",
        "3-6 month completion"
      ],
      icon: <Handshake className="h-6 w-6 text-sooch-gold" />
    },
    {
      title: "Contested Divorce",
      price: "Custom Pricing",
      description: "Full representation for complex divorce cases with disputed issues",
      features: [
        "Complete case management",
        "Court representation",
        "Asset valuation",
        "Settlement negotiations",
        "Trial preparation if needed"
      ],
      icon: <Scale className="h-6 w-6 text-sooch-gold" />
    },
    {
      title: "Child Custody & Support",
      price: "Personalized Quote",
      description: "Protecting your children's best interests in custody and support matters",
      features: [
        "Custody agreement drafting",
        "Support calculations",
        "Mediation services",
        "Court representation",
        "Modification assistance"
      ],
      icon: <Heart className="h-6 w-6 text-sooch-gold" />
    },
    {
      title: "Family Mediation",
      price: "Consultation Required",
      description: "Collaborative approach to resolve family disputes outside of court",
      features: [
        "Neutral mediation",
        "Cost-effective solution",
        "Confidential process",
        "Faster resolution",
        "Preserve family relationships"
      ],
      icon: <Users className="h-6 w-6 text-sooch-gold" />
    },
    {
      title: "Domestic Contracts",
      price: "Contact for Details",
      description: "Marriage contracts, cohabitation agreements, and separation agreements",
      features: [
        "Custom agreement drafting",
        "Asset protection",
        "Financial planning",
        "Legal compliance",
        "Future security"
      ],
      icon: <Shield className="h-6 w-6 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-sooch-gold">Family Law</span> Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              Every family situation is unique. We provide personalized legal solutions tailored to your specific needs and circumstances. Contact us for a detailed quote based on your situation.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                service.popular 
                  ? 'border-sooch-gold bg-gradient-to-br from-sooch-gold/5 to-amber-50/50' 
                  : 'border-gray-100 hover:border-sooch-gold/30 bg-white'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-sooch-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sooch-gold/10 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-lg font-bold ${service.price === 'Free' ? 'text-green-600' : 'text-sooch-gold'}`}>
                      {service.price}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-sooch-gold mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-white border-2 border-sooch-gold text-sooch-gold hover:bg-sooch-gold hover:text-white transition-all duration-300 group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {service.price === 'Free' ? 'Book Free Consultation' : 'Get Personalized Quote'}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Why Choose Our Approach */}
        <AnimatedElement delay={0.6}>
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                Our Commitment to <span className="text-sooch-gold">Fair Pricing</span>
              </h3>
              <p className="text-gray-600">Transparent, personalized, and always in your best interest</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Free Consultation</h4>
                <p className="text-sm text-gray-600">Get your personalized quote during your free 30-minute consultation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Payment Plans</h4>
                <p className="text-sm text-gray-600">Flexible payment options and legal aid acceptance available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">No Surprises</h4>
                <p className="text-sm text-gray-600">Detailed quotes with no hidden fees or unexpected charges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sooch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sooch-gold" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Fair & Honest</h4>
                <p className="text-sm text-gray-600">Pricing that reflects the actual complexity of your unique situation</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom Note */}
        <AnimatedElement delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Why We Provide Personalized Quotes</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Family law matters are deeply personal and vary significantly in complexity. Rather than offering one-size-fits-all pricing, 
                we provide detailed, transparent quotes based on your specific situation during your free consultation. This ensures you 
                receive fair pricing that reflects the actual work required for your case.
              </p>
              <button 
                className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Your Free Consultation Today
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FamilyLawPricing; 
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedElement from "@/components/AnimatedElement";
import { Shield, FileText, Users, Star, CheckCircle, AlertCircle } from "lucide-react";

const PowerOfAttorneyPricing = () => {
  const packages = [
    {
      name: "Personal Care POA",
      price: "Contact for Quote",
      description: "Essential health and personal care decision-making authority",
      icon: <Users className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Health care decisions",
        "Medical treatment consent", 
        "Personal care choices",
        "Emergency medical authority",
        "Healthcare provider communication",
        "Legal document preparation"
      ],
      badge: "Most Popular",
      highlighted: true
    },
    {
      name: "Property POA", 
      price: "Contact for Quote",
      description: "Complete financial and property management protection",
      icon: <Shield className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Financial decision authority",
        "Property management rights",
        "Banking and investment control",
        "Tax and legal matters",
        "Business decision-making",
        "Asset protection planning"
      ],
      badge: null,
      highlighted: false
    },
    {
      name: "Complete POA Package",
      price: "Contact for Quote", 
      description: "Comprehensive protection covering all personal and financial decisions",
      icon: <Star className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Both personal care & property POA",
        "Multiple attorney provisions",
        "Emergency activation clauses",
        "Revocation procedures",
        "Attorney guidance included",
        "Document storage & copies",
        "Annual review option",
        "Priority legal support"
      ],
      badge: "Best Value",
      highlighted: false
    }
  ];

  const additionalServices = [
    {
      service: "POA Review & Update",
      description: "Review existing POA documents and update as needed",
      icon: <FileText className="h-6 w-6 text-sooch-gold" />
    },
    {
      service: "Attorney Training Session", 
      description: "Educate your chosen attorneys on their roles and responsibilities",
      icon: <Users className="h-6 w-6 text-sooch-gold" />
    },
    {
      service: "Emergency POA Activation",
      description: "Urgent assistance when POA needs to be activated immediately",
      icon: <AlertCircle className="h-6 w-6 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Power of Attorney <span className="text-sooch-gold">Investment</span>
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protect your decision-making authority with transparent, comprehensive legal services designed to secure your future.
            </p>
            
            {/* Value Proposition */}
            <div className="bg-sooch-gold/10 border border-sooch-gold/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-sooch-gold mr-2" />
                <span className="font-semibold text-gray-900">Transparent Pricing Promise</span>
              </div>
              <p className="text-gray-700">
                No hidden fees. No surprises. Just honest, upfront pricing for comprehensive POA protection.
              </p>
            </div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                pkg.highlighted 
                  ? 'border-sooch-gold shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-sooch-gold'
              }`}>
                <CardHeader className="text-center pb-4">
                  {pkg.badge && (
                    <Badge className="bg-sooch-gold text-white mb-4 mx-auto w-fit">
                      {pkg.badge}
                    </Badge>
                  )}
                  <div className="w-16 h-16 bg-sooch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-sooch-gold mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-sooch-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      pkg.highlighted 
                        ? 'bg-sooch-gold hover:bg-amber-600' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Additional Services */}
        <AnimatedElement delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-8">
              Additional <span className="text-sooch-gold">POA Services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:border-sooch-gold/50 transition-colors">
                  <div className="w-12 h-12 bg-sooch-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.service}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Contact CTA */}
        <AnimatedElement delay={0.6}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Secure Your Decision-Making Authority?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and personalized quote for your Power of Attorney needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Free Consultation
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sooch-gold px-8 py-3 text-lg font-semibold">
                  Call (416) 908-3300
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PowerOfAttorneyPricing; 
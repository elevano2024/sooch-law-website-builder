import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedElement from "@/components/AnimatedElement";
import { Scale, FileText, DollarSign, Gavel, CheckCircle, Calculator } from "lucide-react";

const SmallClaimsPricing = () => {
  const packages = [
    {
      name: "Simple Debt Collection",
      price: "Contact for Quote",
      description: "Straightforward debt recovery for clear-cut unpaid invoices and contracts",
      icon: <DollarSign className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Claim preparation & filing",
        "Defendant service",
        "Settlement conference representation",
        "Basic document review",
        "Judgment enforcement guidance",
        "Professional case management"
      ],
      badge: "Most Popular",
      highlighted: true
    },
    {
      name: "Contract Dispute", 
      price: "Contact for Quote",
      description: "Comprehensive representation for breach of contract and service disputes",
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Contract analysis & case strategy",
        "Evidence compilation",
        "Witness preparation",
        "Settlement negotiation",
        "Trial representation if needed",
        "Post-judgment collection"
      ],
      badge: null,
      highlighted: false
    },
    {
      name: "Property Damage Claim",
      price: "Contact for Quote", 
      description: "Recovery for property damage, vehicle accidents, and negligence claims",
      icon: <Scale className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Damage assessment review",
        "Evidence gathering assistance",
        "Expert witness coordination",
        "Insurance claim coordination",
        "Full court representation",
        "Damage calculation support"
      ],
      badge: null,
      highlighted: false
    },
    {
      name: "Full Service Representation",
      price: "Contact for Quote",
      description: "Complete legal representation for complex small claims matters",
      icon: <Gavel className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Comprehensive case management",
        "Multiple settlement attempts",
        "Expert witness testimony",
        "Appeals representation",
        "Enforcement & collection",
        "Unlimited consultation time"
      ],
      badge: "Best Value",
      highlighted: false
    }
  ];

  const additionalServices = [
    {
      service: "Case Assessment",
      price: "Free",
      description: "Initial evaluation of your claim's viability and court suitability",
      icon: <Calculator className="h-6 w-6 text-sooch-gold" />
    },
    {
      service: "Document Review", 
      price: "Contact for Quote",
      description: "Professional review of contracts, evidence, and court documents",
      icon: <FileText className="h-6 w-6 text-sooch-gold" />
    },
    {
      service: "Judgment Enforcement",
      price: "Contact for Quote",
      description: "Collection services for small claims court judgments",
      icon: <DollarSign className="h-6 w-6 text-sooch-gold" />
    }
  ];



  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Small Claims <span className="text-sooch-gold">Investment</span>
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Cost-effective legal representation designed to maximize your recovery while minimizing your investment.
            </p>
            
            {/* Value Proposition */}
            <div className="bg-sooch-gold/10 border border-sooch-gold/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-sooch-gold mr-2" />
                <span className="font-semibold text-gray-900">Transparent Pricing Promise</span>
              </div>
              <p className="text-gray-700">
                No hidden fees. No surprises. Just honest, upfront pricing for effective Small Claims representation.
              </p>
            </div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-lg font-bold text-sooch-gold mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600 text-sm">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-sooch-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      pkg.highlighted 
                        ? 'bg-sooch-gold hover:bg-amber-600' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                    size="sm"
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Additional <span className="text-sooch-gold">Services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:border-sooch-gold/50 transition-colors">
                  <div className="w-12 h-12 bg-sooch-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.service}</h4>
                  <div className="text-lg font-bold text-sooch-gold mb-2">{service.price}</div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Contact CTA */}
        <AnimatedElement delay={0.5}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to File Your Small Claim?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Don't let unpaid debts or broken contracts cost you more. Get expert Small Claims Court representation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Free Case Assessment
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

export default SmallClaimsPricing; 
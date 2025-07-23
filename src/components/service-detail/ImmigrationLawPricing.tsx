import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedElement from "@/components/AnimatedElement";
import { Globe, Users, FileText, Star, CheckCircle, Briefcase } from "lucide-react";

const ImmigrationLawPricing = () => {
  const packages = [
    {
      name: "Express Entry",
      price: "Contact for Quote",
      description: "Comprehensive assistance with federal economic immigration programs",
      icon: <Globe className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Eligibility assessment",
        "CRS score optimization",
        "Document preparation",
        "Application submission",
        "Status monitoring",
        "Post-landing support"
      ],
      badge: "Most Popular",
      highlighted: true
    },
    {
      name: "Family Sponsorship", 
      price: "Contact for Quote",
      description: "Reunite with your loved ones in Canada through family sponsorship",
      icon: <Users className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Sponsorship eligibility review",
        "Relationship documentation",
        "Financial sponsorship planning",
        "Application preparation",
        "Interview preparation",
        "Ongoing case management"
      ],
      badge: null,
      highlighted: false
    },
    {
      name: "Work & Study Permits",
      price: "Contact for Quote", 
      description: "Temporary residence permits for work and study opportunities",
      icon: <Briefcase className="h-8 w-8 text-sooch-gold" />,
      features: [
        "LMIA support",
        "Study permit applications",
        "Work permit renewals",
        "Visitor record extensions",
        "Compliance guidance",
        "Pathway to permanent residence"
      ],
      badge: null,
      highlighted: false
    },
    {
      name: "Business Immigration",
      price: "Custom Consultation",
      description: "Investment and entrepreneur immigration programs for business owners",
      icon: <Star className="h-8 w-8 text-sooch-gold" />,
      features: [
        "Investor program guidance",
        "Start-up visa applications",
        "Self-employed programs",
        "Business plan development",
        "Investment documentation",
        "Economic integration support"
      ],
      badge: "Premium",
      highlighted: false
    }
  ];

  const additionalServices = [
    {
      service: "Citizenship Applications",
      description: "Complete assistance with Canadian citizenship applications and ceremony",
      icon: <FileText className="h-6 w-6 text-sooch-gold" />
    },
    {
      service: "Immigration Appeals", 
      description: "Representation in Federal Court and Immigration Appeal Division",
      icon: <Globe className="h-6 w-6 text-sooch-gold" />
    },
    {
      service: "Document Translation",
      description: "Certified translation services for all immigration documents",
      icon: <FileText className="h-6 w-6 text-sooch-gold" />
    }
  ];

  const consultationOptions = [
    {
      type: "Initial Assessment",
      duration: "30 minutes",
      price: "Free",
      description: "Preliminary evaluation of your immigration options"
    },
    {
      type: "Comprehensive Consultation", 
      duration: "60 minutes",
      price: "Contact for Quote",
      description: "Detailed review with personalized immigration strategy"
    },
    {
      type: "Document Review",
      duration: "45 minutes", 
      price: "Contact for Quote",
      description: "Professional review of your immigration documents"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Immigration <span className="text-sooch-gold">Investment</span>
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transparent pricing for comprehensive immigration services designed to make your Canadian dream a reality.
            </p>
            
            {/* Value Proposition */}
            <div className="bg-sooch-gold/10 border border-sooch-gold/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-sooch-gold mr-2" />
                <span className="font-semibold text-gray-900">Success-Oriented Pricing</span>
              </div>
              <p className="text-gray-700">
                Our fees are structured to align with your success. We're committed to your immigration journey from start to finish.
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
                  <div className="text-2xl font-bold text-sooch-gold mb-2">
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
        <AnimatedElement delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Additional <span className="text-sooch-gold">Immigration Services</span>
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
          <div className="text-center">
            <div className="bg-gradient-to-r from-sooch-gold to-amber-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Canadian Immigration Journey?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free initial assessment and discover your best path to Canadian immigration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-sooch-gold hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Free Assessment
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

export default ImmigrationLawPricing; 
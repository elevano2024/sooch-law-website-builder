
import AnimatedElement from "@/components/AnimatedElement";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, CoinsIcon, ArrowRight, FileText, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingItem {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const ServicePricing = () => {
  const pricingItems: PricingItem[] = [
    {
      title: "Buying a Home",
      price: "$790",
      description: "Complete legal representation for your home purchase",
      features: [
        "Title search & review",
        "Document preparation",
        "Closing representation",
        "Mobile signing available",
        "In-home or video signing"
      ],
      icon: <Home className="h-10 w-10 text-law-primary" />
    },
    {
      title: "Selling a Home",
      price: "$590",
      description: "Expert guidance throughout the selling process",
      features: [
        "Document preparation",
        "Mortgage discharge",
        "Closing representation",
        "Mobile signing available",
        "Title transfer facilitation"
      ],
      icon: <FileText className="h-10 w-10 text-law-primary" />
    },
    {
      title: "Mortgage Refinancing",
      price: "$790",
      description: "Comprehensive legal services for refinancing",
      features: [
        "Document review",
        "Mortgage discharge",
        "Title search",
        "Closing services",
        "Mobile signing available"
      ],
      icon: <CoinsIcon className="h-10 w-10 text-law-primary" />
    },
    {
      title: "Title Transfer",
      price: "$390",
      description: "Efficient title transfer between parties",
      features: [
        "Title search",
        "Document preparation",
        "Registration of transfer",
        "Land transfer tax calculation",
        "Mobile signing available"
      ],
      icon: <ArrowRight className="h-10 w-10 text-law-primary" />
    },
    {
      title: "Independent Legal Advice",
      price: "$500",
      description: "Professional legal consultation for your real estate matters",
      features: [
        "Document review",
        "Legal implications explanation",
        "Personalized advice",
        "Written legal opinion",
        "Virtual consultation available"
      ],
      icon: <Percent className="h-10 w-10 text-law-primary" />
    }
  ];

  return (
    <section className="py-16 bg-law-tertiary">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Transparent <span className="text-law-primary">Pricing</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
            Straightforward legal fees with no hidden costs
          </p>
          <div className="w-24 h-1 bg-law-secondary mx-auto mb-12"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingItems.slice(0, 3).map((item, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className="h-full overflow-hidden border border-gray-200 hover:border-law-primary transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0">{item.icon}</div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-law-primary">{item.price}</span>
                    <span className="text-gray-500 ml-1">+ HST & disbursements</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-law-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="law-btn-primary w-full"
                    onClick={() => {
                      const contactSection = document.getElementById('contact-form');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {pricingItems.slice(3).map((item, index) => (
            <AnimatedElement key={index} delay={(index + 3) * 0.1}>
              <Card className="h-full overflow-hidden border border-gray-200 hover:border-law-primary transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0">{item.icon}</div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-law-primary">{item.price}</span>
                    <span className="text-gray-500 ml-1">+ HST</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-law-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="law-btn-primary w-full"
                    onClick={() => {
                      const contactSection = document.getElementById('contact-form');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;

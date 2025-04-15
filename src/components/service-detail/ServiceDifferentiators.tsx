
import AnimatedElement from "@/components/AnimatedElement";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Video, Globe, DollarSign, Award, Clock } from "lucide-react";

const ServiceDifferentiators = () => {
  const differentiators = [
    {
      title: "Mobile Signing Service",
      description: "We come to your home or office anywhere in the GTA for your convenience.",
      icon: <Truck className="h-10 w-10 text-law-primary p-2 bg-law-tertiary rounded-full" />
    },
    {
      title: "Video Signing Options",
      description: "Complete your transaction remotely with secure video signing options.",
      icon: <Video className="h-10 w-10 text-law-primary p-2 bg-law-tertiary rounded-full" />
    },
    {
      title: "Service Throughout Ontario",
      description: "We serve clients in Toronto, Mississauga, Oakville, Vaughan, Richmond Hill, and more.",
      icon: <Globe className="h-10 w-10 text-law-primary p-2 bg-law-tertiary rounded-full" />
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront fees with no hidden costs or surprises.",
      icon: <DollarSign className="h-10 w-10 text-law-primary p-2 bg-law-tertiary rounded-full" />
    },
    {
      title: "10+ Years Experience",
      description: "Serving clients with excellence since 2011.",
      icon: <Award className="h-10 w-10 text-law-primary p-2 bg-law-tertiary rounded-full" />
    },
    {
      title: "Quick Response Time",
      description: "We respond to all inquiries within 24 hours, often much sooner.",
      icon: <Clock className="h-10 w-10 text-law-primary p-2 bg-law-tertiary rounded-full" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Why Choose <span className="text-law-primary">Sooch Law</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
            What sets us apart from other real estate law firms
          </p>
          <div className="w-24 h-1 bg-law-secondary mx-auto mb-12"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className="border border-gray-200 hover:border-law-primary transition-duration-300 hover:shadow-md h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDifferentiators;

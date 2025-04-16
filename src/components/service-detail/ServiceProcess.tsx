
import AnimatedElement from "@/components/AnimatedElement";
import { Building, FileText, Search, Key } from "lucide-react";

const ServiceProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We discuss your real estate goals and legal needs to develop a personalized strategy.",
      icon: <Building className="w-10 h-10 text-law-primary" />,
    },
    {
      number: 2,
      title: "Document Review",
      description: "Our team thoroughly examines all legal documents to protect your interests.",
      icon: <FileText className="w-10 h-10 text-law-primary" />,
    },
    {
      number: 3,
      title: "Due Diligence",
      description: "We conduct extensive research to identify and address potential legal issues.",
      icon: <Search className="w-10 h-10 text-law-primary" />,
    },
    {
      number: 4,
      title: "Closing",
      description: "We guide you through the final steps, ensuring a smooth and successful transaction.",
      icon: <Key className="w-10 h-10 text-law-primary" />,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-law-tertiary">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Our <span className="text-law-primary">Process</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            We guide you through every step of your real estate transaction
          </p>
          <div className="w-24 h-1 bg-law-secondary mx-auto mb-16"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full border-t-4 border-law-secondary hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-law-tertiary flex items-center justify-center mb-2 relative">
                    <span className="absolute -top-2 -right-2 bg-law-secondary text-law-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </span>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-center text-law-primary">{step.title}</h3>
                <p className="text-gray-600 text-center flex-grow">{step.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-700 italic max-w-2xl mx-auto">
              "Our experienced attorneys have successfully guided over 5,000 clients through real estate transactions across Ontario."
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ServiceProcess;

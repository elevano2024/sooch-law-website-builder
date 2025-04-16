
import AnimatedElement from "@/components/AnimatedElement";

const ServiceProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We discuss your real estate goals and legal needs to develop a personalized strategy.",
      image: "https://images.unsplash.com/photo-1560518883-3d5aa21917c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80"
    },
    {
      number: 2,
      title: "Document Review",
      description: "Our team thoroughly examines all legal documents to protect your interests.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
    },
    {
      number: 3,
      title: "Due Diligence",
      description: "We conduct extensive research to identify and address potential legal issues.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2596&q=80"
    },
    {
      number: 4,
      title: "Closing",
      description: "We guide you through the final steps, ensuring a smooth and successful transaction.",
      image: "https://images.unsplash.com/photo-1580377968131-bab0ed9a1ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Our <span className="text-law-primary">Process</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            We guide you through every step of your real estate transaction
          </p>
          <div className="w-24 h-1 bg-law-secondary mx-auto mb-12"></div>
        </AnimatedElement>

        <div className="relative">
          {/* Process Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 relative z-10">
            {processSteps.map((step, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:rtl' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:text-left' : 'md:text-right'} md:ltr`}>
                    <div 
                      className={`mb-4 inline-flex items-center justify-center w-16 h-16 
                        bg-law-primary text-white rounded-full text-2xl font-bold
                        border-4 border-white shadow-lg`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="hidden md:block ltr">
                    <div className="rounded-lg overflow-hidden shadow-md 
                      transform hover:scale-105 transition-transform duration-300
                      border-2 border-law-tertiary hover:border-law-secondary">
                      <img src={step.image} alt={step.title} className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;

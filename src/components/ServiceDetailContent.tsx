
import { Building, FileText, Key, ThumbsUp, ShieldCheck, Home, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";
import { Card, CardContent } from "./ui/card";
import { useParams, Link } from "react-router-dom";

const servicesData = {
  "real-estate": {
    title: "Real Estate Law",
    heading: "Expert Legal Services for Your Property Transactions",
    description: "Our experienced real estate lawyers provide comprehensive legal services for property transactions throughout the Greater Toronto Area. Whether you're buying, selling, or refinancing, our team ensures your interests are protected at every step.",
    image: "/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png",
    benefits: [
      { 
        title: "Thorough Contract Review", 
        description: "We meticulously review all contracts and agreements to protect your interests and prevent future legal issues.",
        icon: <FileText className="h-8 w-8 text-sooch-gold" />
      },
      { 
        title: "Title Examination", 
        description: "Our team conducts comprehensive title searches to ensure clear ownership and identify any potential encumbrances.",
        icon: <Key className="h-8 w-8 text-sooch-gold" />
      },
      { 
        title: "Closing Representation", 
        description: "We guide you through the closing process, handling documentation and ensuring a smooth property transfer.",
        icon: <ThumbsUp className="h-8 w-8 text-sooch-gold" />
      },
      { 
        title: "Risk Mitigation", 
        description: "We identify and address potential legal issues before they become problems, protecting your investment.",
        icon: <ShieldCheck className="h-8 w-8 text-sooch-gold" />
      }
    ],
    services: [
      {
        title: "Residential Property Purchases",
        description: "Complete legal representation for home buyers, from contract review to closing.",
        icon: <Home className="h-10 w-10 text-sooch-gold" />
      },
      {
        title: "Property Sales",
        description: "Expert guidance throughout the selling process to ensure legal compliance and protect your interests.",
        icon: <Building className="h-10 w-10 text-sooch-gold" />
      },
      {
        title: "Mortgage Refinancing",
        description: "Comprehensive legal services for property refinancing, ensuring favorable terms and conditions.",
        icon: <Briefcase className="h-10 w-10 text-sooch-gold" />
      }
    ],
    faq: [
      {
        question: "How long does a typical real estate transaction take?",
        answer: "Most residential real estate transactions take 30-90 days to complete, from the initial agreement to the closing date. The timeline can vary based on factors such as financing conditions, property inspections, and title clearance."
      },
      {
        question: "What documents should I prepare for my first meeting with a real estate lawyer?",
        answer: "For your initial consultation, bring the Agreement of Purchase and Sale, property information, mortgage approval details, and personal identification. If selling, include your existing mortgage information and property survey if available."
      },
      {
        question: "When should I contact a real estate lawyer in the buying/selling process?",
        answer: "It's best to contact a real estate lawyer before signing any binding agreements. Early involvement allows us to review terms, suggest modifications, and ensure your interests are protected from the beginning of the transaction."
      }
    ]
  }
};

const ServiceDetailContent = () => {
  const { slug } = useParams();
  const serviceData = servicesData[slug as keyof typeof servicesData] || servicesData["real-estate"];
  
  return (
    <div className="pt-8 pb-16">
      {/* Hero Section */}
      <section className="bg-sooch-dark py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-6">{serviceData.title}</h1>
                <h2 className="text-xl md:text-2xl text-sooch-gold mb-4">{serviceData.heading}</h2>
                <p className="text-lg text-gray-200 mb-8">{serviceData.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-sooch-gold hover:bg-amber-600 text-white px-6 py-6 text-lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact-form');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Request a Consultation
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" className="border-sooch-gold text-sooch-gold hover:bg-sooch-gold hover:text-white px-6 py-6 text-lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className="hidden lg:block rounded-lg overflow-hidden shadow-2xl border-4 border-sooch-gold">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Real Estate Legal Services" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Why Choose Our <span className="text-sooch-gold">Real Estate</span> Services
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <Card className="bg-white h-full border border-gray-200 hover:border-sooch-gold transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-playfair font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Our <span className="text-sooch-gold">Services</span>
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
              Comprehensive legal expertise for all your real estate needs
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.services.map((service, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-sooch-gold transition-all duration-300 h-full">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-playfair font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-sooch-gold font-medium hover:text-amber-600 transition-colors"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Our <span className="text-sooch-gold">Process</span>
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              We guide you through every step of your real estate transaction
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimatedElement delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sooch-gold">
                <div className="w-12 h-12 bg-sooch-gold text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Initial Consultation</h3>
                <p className="text-gray-600">We discuss your real estate goals and legal needs to develop a personalized strategy.</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sooch-gold">
                <div className="w-12 h-12 bg-sooch-gold text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Document Review</h3>
                <p className="text-gray-600">Our team thoroughly examines all legal documents to protect your interests.</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sooch-gold">
                <div className="w-12 h-12 bg-sooch-gold text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Due Diligence</h3>
                <p className="text-gray-600">We conduct extensive research to identify and address potential legal issues.</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sooch-gold">
                <div className="w-12 h-12 bg-sooch-gold text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Closing</h3>
                <p className="text-gray-600">We guide you through the final steps, ensuring a smooth and successful transaction.</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Frequently Asked <span className="text-sooch-gold">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
          </AnimatedElement>

          <div className="max-w-4xl mx-auto">
            {serviceData.faq.map((item, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-playfair font-bold mb-3 text-gray-900">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sooch-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Our experienced team is ready to assist with your real estate legal needs.
              </p>
              <Button 
                className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-6 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule a Consultation
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailContent;

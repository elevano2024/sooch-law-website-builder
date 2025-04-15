
import { Building, FileText, Key, ThumbsUp, ShieldCheck, Home, Briefcase, ArrowRight, Phone, Clock, BarChart4, Award, Users, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";
import { Card, CardContent } from "./ui/card";
import { useParams, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const servicesData = {
  "real-estate": {
    title: "Real Estate Law",
    heading: "Expert Legal Services for Your Property Transactions",
    description: "Our experienced real estate lawyers provide comprehensive legal services for property transactions throughout the Greater Toronto Area. Whether you're buying, selling, or refinancing, our team ensures your interests are protected at every step.",
    image: "/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80",
    heroVideo: "https://player.vimeo.com/progressive_redirect/playback/803544550/rendition/1080p/file.mp4?loc=external&signature=65ea6141111ee04e1cf562c5045e4d9c8f7e872ca5ad48168b3456bba67ae725",
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "5,000+", label: "Successful Transactions" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Client Support" }
    ],
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
        icon: <Home className="h-10 w-10 text-sooch-gold" />,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80"
      },
      {
        title: "Property Sales",
        description: "Expert guidance throughout the selling process to ensure legal compliance and protect your interests.",
        icon: <Building className="h-10 w-10 text-sooch-gold" />,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80"
      },
      {
        title: "Mortgage Refinancing",
        description: "Comprehensive legal services for property refinancing, ensuring favorable terms and conditions.",
        icon: <Briefcase className="h-10 w-10 text-sooch-gold" />,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80"
      }
    ],
    allServices: [
      {
        title: "Residential Real Estate",
        description: "Legal services for buying, selling, and refinancing residential properties.",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2296&q=80",
        link: "/service/residential-real-estate"
      },
      {
        title: "Commercial Real Estate",
        description: "Legal assistance for commercial property transactions, leases, and developments.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        link: "/service/commercial-real-estate"
      },
      {
        title: "Property Development",
        description: "Legal guidance for developers throughout the planning and construction process.",
        image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2781&q=80",
        link: "/service/property-development"
      },
      {
        title: "Mortgage Refinancing",
        description: "Expert legal counsel for refinancing mortgages and securing favorable terms.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        link: "/service/mortgage-refinancing"
      },
      {
        title: "Title Insurance",
        description: "Protection against potential title defects and ownership disputes.",
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
        link: "/service/title-insurance"
      },
      {
        title: "Property Disputes",
        description: "Legal representation for resolving boundary disputes and property conflicts.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        link: "/service/property-disputes"
      }
    ],
    teamMembers: [
      {
        name: "John Smith",
        title: "Senior Real Estate Lawyer",
        bio: "With over 15 years of experience in real estate law, John specializes in complex property transactions and negotiations.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        name: "Sarah Johnson",
        title: "Real Estate Paralegal",
        bio: "Sarah has a keen eye for detail and ensures all documentation is properly prepared and processed for smooth transactions.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
      }
    ],
    testimonials: [
      {
        text: "The team at Sooch Law made my first home purchase stress-free. They explained everything clearly and were always available for questions.",
        author: "Michael T., Mississauga",
        rating: 5
      },
      {
        text: "I've used Sooch Law for multiple property transactions and have always been impressed with their knowledge and attention to detail.",
        author: "Jennifer K., Brampton",
        rating: 5
      },
      {
        text: "Professional, thorough, and efficient. I highly recommend their services for any real estate legal needs.",
        author: "Robert S., Toronto",
        rating: 5
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
      },
      {
        question: "What are closing costs and what do they include?",
        answer: "Closing costs are expenses beyond the property's purchase price that buyers and sellers pay to complete a real estate transaction. These typically include legal fees, land transfer taxes, title insurance, property taxes adjustments, and disbursements."
      },
      {
        question: "Do I need title insurance, and what does it cover?",
        answer: "Yes, title insurance is highly recommended. It protects against losses related to property ownership, including unknown title defects, fraud, survey issues, and more. It's a one-time premium that provides coverage for as long as you own the property."
      }
    ]
  }
};

const ServiceDetailContent = () => {
  const { slug } = useParams();
  const serviceData = servicesData[slug as keyof typeof servicesData] || servicesData["real-estate"];
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);
  
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative bg-sooch-dark text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video 
            ref={videoRef}
            className="absolute w-full h-full object-cover opacity-40"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={serviceData.heroVideo} type="video/mp4" />
          </video>
          {/* Fallback to image if video fails */}
          <div 
            className="absolute inset-0 opacity-20 bg-center bg-cover" 
            style={{ 
              backgroundImage: `url(${serviceData.heroImage})`,
              backgroundAttachment: 'fixed'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sooch-dark to-transparent z-10"></div>
        </div>
        
        <div className="relative container-custom py-20 md:py-28 lg:py-36 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div className="text-white max-w-2xl">
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
              <div className="hidden lg:block rounded-lg overflow-hidden shadow-2xl border-4 border-sooch-gold transform -rotate-2 hover:rotate-0 transition-all duration-300">
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

      {/* Stats Counter Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {serviceData.stats.map((stat, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-gray-50 rounded-lg border-t-4 border-sooch-gold shadow-md">
                  <div className="text-3xl md:text-4xl font-bold text-sooch-gold mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* About Service Section with Image */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80" 
                  alt="Real Estate Transaction" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold font-playfair mb-6">Why Choose Our <span className="text-sooch-gold">Real Estate</span> Services</h2>
                <p className="text-gray-700 mb-6">
                  At Sooch Law, we understand that real estate transactions represent significant financial and personal investments. Our dedicated team of experienced real estate lawyers provides personalized service to ensure your property transactions are handled with the utmost care and attention to detail.
                </p>
                <p className="text-gray-700 mb-8">
                  Whether you're a first-time homebuyer, an experienced investor, or selling your property, our team has the expertise to guide you through every step of the process, minimizing risks and ensuring your interests are protected.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Personal Attention', 'Transparent Pricing', 'Quick Response Time', 'Attention to Detail'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-sooch-gold mr-2" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Our <span className="text-sooch-gold">Benefits</span>
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
              When you choose Sooch Law, you benefit from our extensive experience and client-centered approach
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <Card className="bg-white h-full border border-gray-200 hover:border-sooch-gold transition-all duration-300 hover:shadow-lg overflow-hidden group">
                  <div className="bg-gray-50 p-4 group-hover:bg-sooch-gold/10 transition-colors">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-playfair font-bold">{benefit.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* All Real Estate Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Our <span className="text-sooch-gold">Real Estate</span> Services
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
              Comprehensive legal expertise for all your real estate needs
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-12"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.allServices.map((service, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="group h-full overflow-hidden rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-sooch-gold transition-all duration-300">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-playfair font-bold text-white mb-1">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-sooch-gold font-medium hover:text-amber-600 transition-colors"
                    >
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-16 bg-gray-50">
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

          <div className="space-y-12">
            {serviceData.services.map((service, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "order-2 lg:order-1",
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  )}>
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                      <div className="mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-playfair font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-sooch-gold mr-2 mt-1" />
                          <span className="text-gray-700">Professional legal guidance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-sooch-gold mr-2 mt-1" />
                          <span className="text-gray-700">Document preparation and review</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-sooch-gold mr-2 mt-1" />
                          <span className="text-gray-700">Protection of your legal rights</span>
                        </li>
                      </ul>
                      <Button 
                        onClick={() => {
                          const contactSection = document.getElementById('contact-form');
                          contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-sooch-gold hover:bg-amber-600 text-white"
                      >
                        Request Service
                      </Button>
                    </div>
                  </div>
                  <div className={cn(
                    "order-1 lg:order-2",
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  )}>
                    <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover aspect-video"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
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

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              <AnimatedElement delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-sooch-gold text-white rounded-full text-xl font-bold">1</div>
                    <h3 className="text-xl font-playfair font-bold mb-3">Initial Consultation</h3>
                    <p className="text-gray-600">We discuss your real estate goals and legal needs to develop a personalized strategy.</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80" alt="Initial Consultation" className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-sooch-gold text-white rounded-full text-xl font-bold">2</div>
                    <h3 className="text-xl font-playfair font-bold mb-3">Document Review</h3>
                    <p className="text-gray-600">Our team thoroughly examines all legal documents to protect your interests.</p>
                  </div>
                  <div className="md:order-1 hidden md:block">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Document Review" className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-sooch-gold text-white rounded-full text-xl font-bold">3</div>
                    <h3 className="text-xl font-playfair font-bold mb-3">Due Diligence</h3>
                    <p className="text-gray-600">We conduct extensive research to identify and address potential legal issues.</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Due Diligence" className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-sooch-gold text-white rounded-full text-xl font-bold">4</div>
                    <h3 className="text-xl font-playfair font-bold mb-3">Closing</h3>
                    <p className="text-gray-600">We guide you through the final steps, ensuring a smooth and successful transaction.</p>
                  </div>
                  <div className="md:order-1 hidden md:block">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img src="https://images.unsplash.com/photo-1628863353691-0095ca4908cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Closing" className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailContent;

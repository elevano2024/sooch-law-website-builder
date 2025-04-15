
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/AnimatedElement";
import { Link } from "react-router-dom";
import { CalendarClock, FileSignature, MapPin } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  heading: string;
  description: string;
  heroVideo: string;
  heroImage: string;
}

const ServiceHero = ({ title, heading, description, heroVideo, heroImage }: ServiceHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);
  
  return (
    <section className="relative bg-law-dark text-white overflow-hidden">
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
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Fallback to image if video fails */}
        <div 
          className="absolute inset-0 opacity-30 bg-center bg-cover" 
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-law-dark to-transparent z-10"></div>
      </div>
      
      <div className="relative container-custom py-20 md:py-28 lg:py-36 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-6">{title}</h1>
              <h2 className="text-xl md:text-2xl text-law-secondary mb-4">{heading}</h2>
              <p className="text-lg text-gray-200 mb-8">{description}</p>
              
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-law-secondary flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-200">Serving all of Ontario</p>
                </div>
                <div className="flex items-start space-x-3">
                  <FileSignature className="h-6 w-6 text-law-secondary flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-200">Mobile Signing Available</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CalendarClock className="h-6 w-6 text-law-secondary flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-200">10+ Years Experience</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="law-btn-secondary"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get a Free Quote
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="law-btn-outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="hidden lg:block rounded-lg overflow-hidden shadow-2xl border-4 border-law-secondary transform rotate-2 hover:rotate-0 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Real Estate Legal Services - Sooch Law" 
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

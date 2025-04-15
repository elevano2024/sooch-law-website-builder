
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-sooch-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-sooch-dark to-black opacity-90"></div>
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-6"
            >
              Real Estate. Civil Litigation. Personal Injury.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              The expertise you need, the attention you deserve.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact-form" 
                className="btn-primary flex items-center justify-center"
              >
                Consult Now
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="/services" 
                className="btn-secondary flex items-center justify-center"
              >
                Our Services
              </a>
            </motion.div>
          </div>
          
          {/* Right Column - Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <Link to="/">
              <img 
                src="/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png" 
                alt="Sooch Law Logo" 
                className="h-40 md:h-48 lg:h-56 xl:h-64"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

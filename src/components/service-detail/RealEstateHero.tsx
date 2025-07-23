import AnimatedElement from "@/components/AnimatedElement";
import { Home, Shield, Award, Phone } from "lucide-react";

interface RealEstateHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
}

const RealEstateHero = ({ title, heading, description, heroImage, heroVideo }: RealEstateHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-sooch-dark via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        {heroVideo ? (
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-40"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroImage}
            alt="Professional real estate legal services and property transactions"
            className="w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-sooch-dark/80 via-slate-800/70 to-slate-900/80"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedElement>
              <div className="inline-flex items-center bg-sooch-gold/20 border border-sooch-gold/30 rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5 text-sooch-gold mr-2" />
                <span className="text-amber-200 text-sm font-medium">Trusted by 5,000+ Property Owners</span>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                <span className="text-white">Expert</span> <span className="text-sooch-gold">Real Estate</span><br />
                <span className="text-white">Legal Services</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Protecting your property investments with comprehensive legal expertise. From purchase to sale, we ensure every transaction is smooth and secure.
              </p>
            </AnimatedElement>

            {/* Key Services */}
            <AnimatedElement delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Property Purchase</h3>
                    <p className="text-sm text-gray-400">Complete transaction support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Title Protection</h3>
                    <p className="text-sm text-gray-400">Comprehensive searches</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Mobile Signing</h3>
                    <p className="text-sm text-gray-400">Convenience at your location</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* CTA Buttons */}
            <AnimatedElement delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Get Your Quote Today
                </button>
                <button 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Our Services
                </button>
              </div>
            </AnimatedElement>

            {/* Trust Indicators */}
            <AnimatedElement delay={0.5}>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-8">
                <h3 className="text-sooch-gold font-semibold mb-2">Why Choose Sooch Law for Real Estate?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>✓ 25+ Years Experience</div>
                  <div>✓ Mobile Signing Available</div>
                  <div>✓ Transparent Pricing</div>
                  <div>✓ 5,000+ Successful Transactions</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Side - Professional Stats */}
          <AnimatedElement delay={0.6}>
            <div className="relative hidden lg:block">
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-sooch-gold/20 to-slate-800/20 rounded-2xl p-8 backdrop-blur-sm border border-sooch-gold/20">
                <div className="text-center">
                  <Home className="h-24 w-24 text-sooch-gold mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-sooch-gold">5,000+</div>
                    <p className="text-white text-sm">Transactions</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-sooch-gold/20 space-y-2">
                    <div className="text-2xl font-bold text-sooch-gold">98%</div>
                    <p className="text-white text-sm">Client Satisfaction</p>
                  </div>
                  <p className="text-sooch-gold font-semibold mb-1 mt-2">Mobile Signing Available</p>
                  <p className="text-gray-300 text-xs">Your trusted real estate lawyers</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero; 
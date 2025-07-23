import AnimatedElement from "@/components/AnimatedElement";
import { FileText, Shield, Heart, Users, Award, Phone } from "lucide-react";

interface WillsEstatesHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage: string;
}

const WillsEstatesHero = ({ title, heading, description, heroImage }: WillsEstatesHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-900 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Estate planning and wills services for family legacy protection"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 via-orange-50/90 to-yellow-50/95"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[65vh]">
          {/* Content */}
          <div className="space-y-6">
            <AnimatedElement>
              <div className="inline-flex items-center bg-sooch-gold/20 border border-sooch-gold/30 rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5 text-sooch-gold mr-2" />
                <span className="text-amber-800 text-sm font-medium">Protecting Families Since 1999</span>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h1 className="text-3xl md:text-5xl font-bold font-playfair leading-tight">
                <span className="text-gray-900">Secure Your</span><br />
                <span className="text-sooch-gold">Family's Legacy</span><br />
                <span className="text-gray-900">With Confidence</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Protect your family's future with comprehensive estate planning. Our experienced lawyers help you create wills, establish trusts, and plan for the unexpected with care and precision.
              </p>
            </AnimatedElement>

            {/* Key Services */}
            <AnimatedElement delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Will Preparation</h3>
                    <p className="text-xs text-gray-600">Comprehensive will drafting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Trust Establishment</h3>
                    <p className="text-xs text-gray-600">Asset protection strategies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Estate Administration</h3>
                    <p className="text-xs text-gray-600">Compassionate guidance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Family Planning</h3>
                    <p className="text-xs text-gray-600">Generational wealth transfer</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* CTA Buttons */}
            <AnimatedElement delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button 
                  className="bg-sooch-gold hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                  Schedule Estate Consultation
                </button>
                <button 
                  className="bg-transparent border-2 border-sooch-gold hover:bg-sooch-gold hover:text-white text-sooch-gold px-6 py-3 rounded-lg font-semibold transition-all duration-300"
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
              <div className="bg-white/80 border border-amber-200 rounded-lg p-4 mt-6 backdrop-blur-sm">
                <h3 className="text-sooch-gold font-semibold mb-2 text-sm">Why Choose Sooch Law for Estate Planning?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700">
                  <div>✓ 22+ Years Estate Planning Experience</div>
                  <div>✓ 2,000+ Wills Successfully Drafted</div>
                  <div>✓ Comprehensive Tax Planning</div>
                  <div>✓ 500+ Estates Administered</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Side - Legacy Protection Card */}
          <AnimatedElement delay={0.6}>
            <div className="relative hidden lg:block">
              <div className="bg-white/90 rounded-2xl p-8 backdrop-blur-sm border border-amber-200 shadow-xl">
                <div className="text-center space-y-6">
                  <Heart className="h-24 w-24 text-sooch-gold mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Protecting What Matters Most</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your family's security and future prosperity deserve careful planning. Our estate planning services ensure your wishes are honored and your loved ones are protected.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-4 mt-6">
                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-sooch-gold">2,000+</div>
                      <div className="text-xs text-gray-600">Families Protected</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-sooch-gold">100%</div>
                      <div className="text-xs text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-sooch-gold font-semibold mb-1">Peace of Mind Guaranteed</p>
                    <p className="text-xs text-gray-600">Comprehensive estate planning tailored to your family's needs</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default WillsEstatesHero; 
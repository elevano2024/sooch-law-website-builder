import AnimatedElement from "@/components/AnimatedElement";
import { Shield, Scale, Clock, Phone } from "lucide-react";

interface PersonalInjuryHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage: string;
}

const PersonalInjuryHero = ({ title, heading, description, heroImage }: PersonalInjuryHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sooch-dark text-white py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Justice scales representing personal injury law and fighting for victims' rights"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-sooch-dark/90"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedElement>
              <div className="inline-flex items-center bg-sooch-gold/20 border border-sooch-gold/30 rounded-full px-4 py-2 mb-6">
                <Shield className="h-5 w-5 text-sooch-gold mr-2" />
                <span className="text-amber-200 text-sm font-medium">Fighting for Justice Since 2008</span>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                <span className="text-sooch-gold">Fight</span> for Your <br />
                <span className="text-white">Rights</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                When you're injured due to someone else's negligence, you deserve maximum compensation. We fight tirelessly to hold negligent parties accountable.
              </p>
            </AnimatedElement>

            {/* Key Benefits */}
            <AnimatedElement delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">No Win, No Fee</h3>
                    <p className="text-sm text-gray-400">Contingency basis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Free Consultation</h3>
                    <p className="text-sm text-gray-400">No upfront costs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">$50M+ Recovered</h3>
                    <p className="text-sm text-gray-400">For our clients</p>
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
                  Get Free Consultation
                </button>
                <button 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn About Our Fees
                </button>
              </div>
            </AnimatedElement>

            {/* Emergency Contact */}
            <AnimatedElement delay={0.5}>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-8">
                <h3 className="text-sooch-gold font-semibold mb-2">Injured? Need Immediate Help?</h3>
                <p className="text-gray-300 mb-3">Don't wait - evidence can disappear and deadlines matter.</p>
                <a 
                  href="tel:4169083300" 
                  className="text-2xl font-bold text-white hover:text-sooch-gold transition-colors"
                >
                  (416) 908-3300
                </a>
              </div>
            </AnimatedElement>
          </div>

          {/* Image/Visual Element */}
          <AnimatedElement delay={0.6}>
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-sooch-gold/20 to-slate-800/20 rounded-2xl p-8 backdrop-blur-sm border border-sooch-gold/20">
                <div className="text-center space-y-6">
                  <Scale className="h-24 w-24 text-sooch-gold mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Justice for the Injured</h3>
                  <p className="text-gray-300">
                    Every day we delay is another day the responsible party thinks they can get away with it. 
                    Let us fight for the compensation you deserve.
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sooch-gold font-semibold mb-1">2-Year Limitation Period</p>
                    <p className="text-sm text-gray-400">Don't lose your right to compensation</p>
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

export default PersonalInjuryHero; 
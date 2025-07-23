import AnimatedElement from "@/components/AnimatedElement";
import { Scale, Briefcase, Target, Shield, Award, Phone } from "lucide-react";

interface CivilLitigationHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage: string;
}

const CivilLitigationHero = ({ title, heading, description, heroImage }: CivilLitigationHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional civil litigation and dispute resolution services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-gray-900/90"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedElement>
              <div className="inline-flex items-center bg-sooch-gold/20 border border-sooch-gold/30 rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5 text-sooch-gold mr-2" />
                <span className="text-amber-200 text-sm font-medium">Strategic Legal Advocacy Since 1999</span>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                <span className="text-white">Strategic</span><br />
                <span className="text-sooch-gold">Civil Litigation</span><br />
                <span className="text-white">Excellence</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                When disputes arise, you need experienced litigation counsel who can protect your interests and achieve favorable outcomes through strategic precision and unwavering advocacy.
              </p>
            </AnimatedElement>

            {/* Key Practice Areas */}
            <AnimatedElement delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Commercial Disputes</h3>
                    <p className="text-sm text-gray-400">Business litigation expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Contract Disputes</h3>
                    <p className="text-sm text-gray-400">Breach of contract resolution</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Property Disputes</h3>
                    <p className="text-sm text-gray-400">Real estate litigation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Debt Collection</h3>
                    <p className="text-sm text-gray-400">Recovery and enforcement</p>
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
                  Schedule Strategy Consultation
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
                <h3 className="text-sooch-gold font-semibold mb-2">Why Choose Sooch Law for Litigation?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>✓ 18+ Years Litigation Experience</div>
                  <div>✓ 90% Favorable Outcomes</div>
                  <div>✓ Strategic Case Management</div>
                  <div>✓ $25M+ Client Recoveries</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Side - Professional Stats Card */}
          <AnimatedElement delay={0.6}>
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-slate-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/30">
                <div className="text-center space-y-6">
                  <Scale className="h-24 w-24 text-sooch-gold mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Strategic Dispute Resolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every civil dispute requires a tailored strategic approach. Our litigation team combines aggressive advocacy with smart settlement strategies to achieve optimal outcomes.
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-sooch-gold">500+</div>
                      <div className="text-xs text-gray-400">Cases Successfully Resolved</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-sooch-gold">90%</div>
                      <div className="text-xs text-gray-400">Favorable Settlement Rate</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sooch-gold font-semibold mb-1">Strategic Consultation Available</p>
                    <p className="text-xs text-gray-400">Comprehensive case evaluation and strategy development</p>
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

export default CivilLitigationHero; 
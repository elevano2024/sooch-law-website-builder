import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/AnimatedElement";
import { Heart, Shield, Users, Phone, MessageCircle } from "lucide-react";

interface FamilyLawHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage: string;
}

const FamilyLawHero = ({ title, heading, description, heroImage }: FamilyLawHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80" 
          alt="Family legal consultation - professional family law meeting representing compassionate legal support"
          className="w-full h-full object-cover opacity-12"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Heart className="h-32 w-32 text-sooch-gold" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Users className="h-24 w-24 text-sooch-gold" />
      </div>

      <div className="relative container-custom py-20 md:py-28 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div className="text-white max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-sooch-gold/20 border border-sooch-gold/30 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-sooch-gold mr-2" />
                <span className="text-sm text-sooch-gold font-medium">Confidential & Compassionate</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl text-sooch-gold mb-6 font-medium">
                {heading}
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {description}
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Compassionate Approach</p>
                    <p className="text-xs text-gray-300">Understanding your emotional needs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Child-First Focus</p>
                    <p className="text-xs text-gray-300">Protecting your children's interests</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Family Mediation</p>
                    <p className="text-xs text-gray-300">Resolving disputes amicably</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">24/7 Support</p>
                    <p className="text-xs text-gray-300">We're here when you need us</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Free Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Get Support Now
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-300 mb-2">Trusted by families across Ontario</p>
                <div className="flex items-center space-x-6 text-xs text-gray-400">
                  <span>• Confidential consultations</span>
                  <span>• No judgment, just support</span>
                  <span>• Flexible payment options</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Right Column - Supporting Visual */}
          <AnimatedElement delay={0.2}>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sooch-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      We Understand Your Situation
                    </h3>
                    <p className="text-gray-200 text-sm mb-6">
                      Family matters are personal. We provide compassionate legal guidance when you need it most.
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-sooch-gold">1,200+</div>
                        <div className="text-xs text-gray-300">Families Helped</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-sooch-gold">90%</div>
                        <div className="text-xs text-gray-300">Settled Amicably</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-sooch-gold rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-sooch-gold rounded-full opacity-40"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default FamilyLawHero; 
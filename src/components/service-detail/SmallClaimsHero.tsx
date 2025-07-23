import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/AnimatedElement";
import { Scale, DollarSign, Clock, MessageCircle, Phone, Gavel } from "lucide-react";

interface SmallClaimsHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage: string;
}

const SmallClaimsHero = ({ title, heading, description, heroImage }: SmallClaimsHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
          alt="Small claims court - efficient legal resolution for smaller disputes"
          className="w-full h-full object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Scale className="h-32 w-32 text-sooch-gold" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Gavel className="h-24 w-24 text-sooch-gold" />
      </div>

      <div className="relative container-custom py-20 md:py-28 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div className="text-white max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-sooch-gold/20 border border-sooch-gold/30 rounded-full px-4 py-2 mb-6">
                <Clock className="h-4 w-4 text-sooch-gold mr-2" />
                <span className="text-sm text-sooch-gold font-medium">Fast & Cost-Effective Resolution</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-6 leading-tight">
                <span className="text-white">Small Claims Court</span><br />
                <span className="text-sooch-gold">Expert Representation</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-sooch-gold mb-6 font-medium">
                {heading}
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Key Small Claims Services */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mr-3">
                    <DollarSign className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Debt Collection</p>
                    <p className="text-gray-300 text-sm">Up to $35,000</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Contract Disputes</p>
                    <p className="text-gray-300 text-sm">Breach Claims</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mr-3">
                    <Scale className="h-6 w-6 text-sooch-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Property Damage</p>
                    <p className="text-gray-300 text-sm">Quick Resolution</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Start Your Claim Today
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (416) 908-3300
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <div className="relative">
              {/* Feature Highlight Cards */}
              <div className="bg-gradient-to-br from-sooch-gold/20 to-slate-800/20 rounded-2xl p-8 backdrop-blur-sm border border-sooch-gold/20">
                <h3 className="text-sooch-gold font-semibold mb-2">Why Choose Sooch Law for Small Claims?</h3>
                <ul className="text-white space-y-2 text-sm">
                  <li>✓ Expert representation in Ontario Small Claims Court</li>
                  <li>✓ 85% success rate in small claims disputes</li>
                  <li>✓ Cost-effective legal strategies and representation</li>
                  <li>✓ Fast resolution - most cases settled in 3-6 months</li>
                  <li>✓ Comprehensive case preparation and documentation</li>
                </ul>
              </div>
              
              {/* Floating Success Stats */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-sooch-gold/20 to-slate-800/20 rounded-2xl p-8 backdrop-blur-sm border border-sooch-gold/20">
                <div className="text-center">
                  <Scale className="h-24 w-24 text-sooch-gold mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-sooch-gold">800+</div>
                    <p className="text-white text-sm">Claims Handled</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-sooch-gold/20 space-y-2">
                    <div className="text-2xl font-bold text-sooch-gold">85%</div>
                    <p className="text-white text-sm">Success Rate</p>
                  </div>
                  <p className="text-sooch-gold font-semibold mb-1 mt-2">Up to $35,000 Claims</p>
                  <p className="text-gray-300 text-xs">Fast & affordable justice</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default SmallClaimsHero; 
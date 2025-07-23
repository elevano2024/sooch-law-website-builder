import React from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { Shield, Users, FileText, Clock, Award, TrendingUp, Star, Heart } from "lucide-react";

const PowerOfAttorneyStats = () => {
  const mainStats = [
    {
      icon: <Shield className="h-8 w-8 text-sooch-gold" />,
      number: "95%",
      label: "Avoid Court Applications",
      description: "Proper POA prevents costly guardianship proceedings"
    },
    {
      icon: <Users className="h-8 w-8 text-sooch-gold" />,
      number: "85%", 
      label: "Choose Family as Attorney",
      description: "Most clients designate trusted family members"
    },
    {
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      number: "100%",
      label: "Custom Document Preparation",
      description: "Every POA tailored to individual circumstances"
    },
    {
      icon: <Clock className="h-8 w-8 text-sooch-gold" />,
      number: "48hrs",
      label: "Average Completion Time",
      description: "From consultation to signed documents"
    }
  ];

  const additionalBenefits = [
    {
      icon: <Users className="h-6 w-6 text-sooch-gold" />,
      value: "2-3",
      label: "Average Attorney Backups"
    },
    {
      icon: <Star className="h-6 w-6 text-sooch-gold" />,
      value: "5/5",
      label: "Client Satisfaction Rating" 
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-sooch-gold" />,
      value: "15+",
      label: "Years Experience"
    },
    {
      icon: <Award className="h-6 w-6 text-sooch-gold" />,
      value: "1000+",
      label: "POAs Prepared"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-6">
              Our <span className="text-sooch-gold">Protection Services</span> Impact
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data showcasing our commitment to protecting your decision-making authority and family interests.
            </p>
          </div>
        </AnimatedElement>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-sooch-gold/20 rounded-2xl p-8 text-center hover:border-sooch-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-sooch-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-sooch-gold mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Additional Benefits */}
        <AnimatedElement delay={0.4}>
          <div className="bg-slate-800/30 border border-sooch-gold/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Why Families Trust Our POA Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <div className="text-2xl font-bold text-sooch-gold">{benefit.value}</div>
                  <p className="text-gray-300 text-sm">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Process Efficiency Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatedElement delay={0.5}>
            <div className="bg-slate-800/50 border border-sooch-gold/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-sooch-gold" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white">Process Efficiency</h3>
                  <p className="text-gray-400">Streamlined POA preparation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Same-day service requests</span>
                  <span className="text-sooch-gold font-bold">35%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-sooch-gold h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Emergency POA activations</span>
                  <span className="text-sooch-gold font-bold">60%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-sooch-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.6}>
            <div className="bg-slate-800/50 border border-sooch-gold/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-sooch-gold" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Client Care Excellence</h3>
                  <p className="text-gray-400">Dedicated support throughout</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Average document turnaround</span>
                    <span className="text-sooch-gold font-bold">2-3 weeks</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Client satisfaction rate</span>
                    <span className="text-sooch-gold font-bold">85%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">POA review frequency</span>
                    <span className="text-sooch-gold font-bold">Annual</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Final Impact Statement */}
        <AnimatedElement delay={0.8}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-6">
              <span className="text-sooch-gold">Decision Protection</span> by the Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">90%</div>
                <p className="text-gray-300">Avoid Court Applications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">85%</div>
                <p className="text-gray-300">Choose Family as Attorney</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">95%</div>
                <p className="text-gray-300">Attorney Training Success</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">2</div>
                <p className="text-gray-300">Average Attorney Backups</p>
              </div>
            </div>

            <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <Shield className="h-16 w-16 text-white mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                "Power of Attorney isn't just about legal documents—it's about ensuring your voice is heard and your wishes are respected, even when you cannot speak for yourself. It's about protecting your autonomy and dignity."
              </blockquote>
              <cite className="text-white/90">— The Sooch Law POA Planning Team</cite>
              
              <div className="mt-8">
                <p className="text-white text-lg mb-6">
                  Your decision-making authority is too important to leave unprotected. Secure your future today.
                </p>
                <button className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your POA Planning Now
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PowerOfAttorneyStats; 
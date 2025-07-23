import React from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { Globe, Users, FileText, Award, TrendingUp, Star, Clock, Heart } from "lucide-react";

const ImmigrationLawStats = () => {
  const mainStats = [
    {
      icon: <Globe className="h-8 w-8 text-sooch-gold" />,
      number: "2,500+",
      label: "Applications Filed",
      description: "Successful immigration applications across all programs"
    },
    {
      icon: <Users className="h-8 w-8 text-sooch-gold" />,
      number: "95%", 
      label: "Approval Rate",
      description: "Industry-leading success rate for immigration cases"
    },
    {
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      number: "60+",
      label: "Countries Served",
      description: "Clients from around the world achieving Canadian dreams"
    },
    {
      icon: <Clock className="h-8 w-8 text-sooch-gold" />,
      number: "12+",
      label: "Years Experience",
      description: "Proven expertise in Canadian immigration law"
    }
  ];

  const programStats = [
    {
      icon: <Users className="h-6 w-6 text-sooch-gold" />,
      value: "85%",
      label: "Express Entry Success"
    },
    {
      icon: <Star className="h-6 w-6 text-sooch-gold" />,
      value: "90%",
      label: "Family Sponsorship Approval" 
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-sooch-gold" />,
      value: "88%",
      label: "Work Permit Success"
    },
    {
      icon: <Award className="h-6 w-6 text-sooch-gold" />,
      value: "500+",
      label: "Families Reunited"
    }
  ];

  const clientOrigins = [
    { country: "India", percentage: 35, flag: "🇮🇳" },
    { country: "Philippines", percentage: 20, flag: "🇵🇭" },
    { country: "China", percentage: 15, flag: "🇨🇳" },
    { country: "Pakistan", percentage: 12, flag: "🇵🇰" },
    { country: "Other Countries", percentage: 18, flag: "🌍" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-6">
              Our <span className="text-sooch-gold">Immigration Success</span> Impact
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data showcasing our commitment to helping families and individuals achieve their Canadian immigration dreams.
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

        {/* Program Success Rates */}
        <AnimatedElement delay={0.4}>
          <div className="bg-slate-800/30 border border-sooch-gold/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Immigration Program Success Rates
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {programStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-sooch-gold">{stat.value}</div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Client Demographics and Processing Times */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatedElement delay={0.5}>
            <div className="bg-slate-800/50 border border-sooch-gold/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-sooch-gold" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white">Client Origins</h3>
                  <p className="text-gray-400">Where our clients come from</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {clientOrigins.map((origin, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 flex items-center">
                        <span className="mr-2">{origin.flag}</span>
                        {origin.country}
                      </span>
                      <span className="text-sooch-gold font-bold">{origin.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-sooch-gold h-2 rounded-full" style={{ width: `${origin.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.6}>
            <div className="bg-slate-800/50 border border-sooch-gold/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-sooch-gold" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Service Excellence</h3>
                  <p className="text-gray-400">Client satisfaction metrics</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Average processing assistance</span>
                    <span className="text-sooch-gold font-bold">6-18 months</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Client satisfaction rate</span>
                    <span className="text-sooch-gold font-bold">98%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Multilingual services</span>
                    <span className="text-sooch-gold font-bold">5+ Languages</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Post-landing support</span>
                    <span className="text-sooch-gold font-bold">Ongoing</span>
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
              <span className="text-sooch-gold">Canadian Dreams</span> by the Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">2,500+</div>
                <p className="text-gray-300">Applications Filed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">95%</div>
                <p className="text-gray-300">Approval Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">500+</div>
                <p className="text-gray-300">Families Reunited</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">60+</div>
                <p className="text-gray-300">Countries Served</p>
              </div>
            </div>

            <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <Globe className="h-16 w-16 text-white mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                "Immigration isn't just about paperwork—it's about dreams, opportunities, and building a better future for your family. Every successful application represents a life transformed and a family's hope fulfilled."
              </blockquote>
              <cite className="text-white/90">— The Sooch Law Immigration Team</cite>
              
              <div className="mt-8">
                <p className="text-white text-lg mb-6">
                  Your Canadian dream is within reach. Let us guide you home.
                </p>
                <button className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your Immigration Journey
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ImmigrationLawStats; 
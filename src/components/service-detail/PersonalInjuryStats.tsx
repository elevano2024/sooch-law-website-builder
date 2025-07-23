import AnimatedElement from "@/components/AnimatedElement";
import { DollarSign, TrendingUp, Shield, Clock } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface PersonalInjuryStatsProps {
  stats: { value: string; label: string }[];
}

const PersonalInjuryStats = ({ stats }: PersonalInjuryStatsProps) => {
  // Map the incoming stats to personal injury specific stats with icons and descriptions
  const personalInjuryStats: Stat[] = [
    {
      value: stats[0]?.value || "20+",
      label: "Years Fighting for Justice",
      description: "Decades of experience taking on insurance companies and negligent parties",
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[1]?.value || "$50M+",
      label: "Recovered for Clients",
      description: "Millions in compensation secured for injury victims and their families",
      icon: <DollarSign className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[2]?.value || "95%",
      label: "Success Rate",
      description: "Proven track record of winning cases and maximizing settlements",
      icon: <TrendingUp className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[3]?.value || "1000+",
      label: "Cases Won",
      description: "Thousands of injury victims represented with successful outcomes",
      icon: <Clock className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Fighting for <span className="text-sooch-gold">Maximum Compensation</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Our track record speaks for itself. We don't just practice personal injury law - we dedicate our practice to getting the best possible outcomes for injury victims.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personalInjuryStats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.15}>
              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-amber-200 transition-all duration-300 hover:shadow-2xl text-center relative overflow-hidden h-full flex flex-col">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-sooch-gold/5 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-sooch-gold/5 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="relative z-10 mb-4 flex-grow">
                    <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-3 font-playfair group-hover:text-sooch-gold transition-colors duration-300">
                      {stat.value}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="relative z-10 mb-4">
                    <div className="text-lg font-semibold text-sooch-gold mb-2">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sooch-gold/20 via-sooch-gold to-sooch-gold/20 group-hover:h-2 transition-all duration-300"></div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Achievement highlights */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-sooch-dark rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">24/7</div>
                <div className="text-white font-semibold mb-1">Emergency Response</div>
                <div className="text-gray-300 text-sm">Available when you need us most</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">0$</div>
                <div className="text-white font-semibold mb-1">Upfront Costs</div>
                <div className="text-gray-300 text-sm">No financial risk to you</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">2 Years</div>
                <div className="text-white font-semibold mb-1">Limitation Period</div>
                <div className="text-gray-300 text-sm">Don't wait - time matters</div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom testimonial quote */}
        <AnimatedElement delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-white">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl font-playfair italic mb-4">
                "We don't just represent clients - we fight for justice. Every case is personal, and every settlement matters. Your victory is our mission."
              </blockquote>
              <cite className="text-amber-200 font-medium">
                — The Sooch Law Personal Injury Team
              </cite>
              
              <div className="mt-6 pt-6 border-t border-amber-500">
                <p className="text-amber-100 mb-4">
                  Don't let insurance companies minimize your claim. Get the aggressive representation you deserve.
                </p>
                <button 
                  className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Your Free Consultation Now
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default PersonalInjuryStats; 
import AnimatedElement from "@/components/AnimatedElement";
import { Heart, Shield, Users, Clock } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface FamilyLawStatsProps {
  stats: {
    value: string;
    label: string;
  }[];
}

const FamilyLawStats = ({ stats }: FamilyLawStatsProps) => {
  // Map the generic stats to family law specific ones with icons and descriptions
  const familyStats: StatItem[] = [
    {
      value: stats[0]?.value || "16+",
      label: "Years of Experience",
      description: "Helping families through difficult times",
      icon: <Clock className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[1]?.value || "1,200+",
      label: "Families Helped",
      description: "Guiding families to positive outcomes",
      icon: <Users className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[2]?.value || "90%",
      label: "Settled Out of Court",
      description: "Preserving family relationships",
      icon: <Heart className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[3]?.value || "24/7",
      label: "Support Available",
      description: "We're here when you need us most",
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4 text-gray-900">
              Trusted by <span className="text-sooch-gold">Families</span> Across Ontario
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to compassionate family law has helped thousands of families navigate their most challenging times with dignity and care.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {familyStats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.15}>
              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-sooch-gold/30 transition-all duration-300 hover:shadow-xl text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-sooch-gold/5 rounded-full -translate-y-8 translate-x-8"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sooch-gold/10 to-amber-100/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="relative z-10 mb-2">
                    <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 font-playfair">
                      {stat.value}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="relative z-10 mb-3">
                    <div className="text-lg font-semibold text-sooch-gold mb-1">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sooch-gold/20 via-sooch-gold to-sooch-gold/20"></div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom testimonial quote */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-sooch-gold" />
              </div>
              <blockquote className="text-xl md:text-2xl text-white font-playfair italic mb-4">
                "We understand that family matters are deeply personal. Our approach combines legal expertise with genuine compassion to help families find their path forward."
              </blockquote>
              <cite className="text-sooch-gold font-medium">
                — The Sooch Law Family Law Team
              </cite>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FamilyLawStats; 
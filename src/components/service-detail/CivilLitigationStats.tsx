import AnimatedElement from "@/components/AnimatedElement";
import { Scale, Trophy, DollarSign, Clock, TrendingUp, Users, Shield, Gavel } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface CivilLitigationStatsProps {
  stats: StatItem[];
}

const CivilLitigationStats = ({ stats }: CivilLitigationStatsProps) => {
  const achievementStats = [
    {
      icon: <Scale className="h-8 w-8 text-sooch-gold" />,
      value: "500+",
      label: "Cases Successfully Resolved",
      description: "Comprehensive dispute resolution across various practice areas"
    },
    {
      icon: <Trophy className="h-8 w-8 text-sooch-gold" />,
      value: "90%",
      label: "Favorable Outcomes",
      description: "Strong track record of successful case resolution"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-sooch-gold" />,
      value: "$25M+",
      label: "Total Client Recoveries",
      description: "Substantial financial results for our clients"
    },
    {
      icon: <Clock className="h-8 w-8 text-sooch-gold" />,
      value: "18+",
      label: "Years Litigation Experience",
      description: "Proven expertise in complex dispute resolution"
    }
  ];

  const practiceAreas = [
    {
      icon: <Users className="h-6 w-6 text-sooch-gold" />,
      title: "Commercial Disputes",
      cases: "200+"
    },
    {
      icon: <Shield className="h-6 w-6 text-sooch-gold" />,
      title: "Contract Litigation",
      cases: "150+"
    },
    {
      icon: <Gavel className="h-6 w-6 text-sooch-gold" />,
      title: "Property Disputes",
      cases: "100+"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-sooch-gold" />,
      title: "Debt Recovery",
      cases: "75+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="container-custom">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievementStats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="bg-slate-800/50 border border-slate-600/30 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 bg-sooch-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sooch-gold/30 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-sooch-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-3">
                    {stat.label}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Practice Areas Breakdown */}
        <AnimatedElement delay={0.5}>
          <div className="bg-slate-800/30 border border-slate-600/30 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Our <span className="text-sooch-gold">Practice Areas</span> by Numbers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practiceAreas.map((area, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 text-center hover:bg-slate-900/70 transition-colors">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {area.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{area.title}</h4>
                  <div className="text-2xl font-bold text-sooch-gold">{area.cases}</div>
                  <div className="text-xs text-gray-400">Cases Handled</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Success Metrics */}
        <AnimatedElement delay={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Settlement Success */}
            <div className="bg-gradient-to-br from-sooch-gold/20 to-amber-600/20 rounded-2xl p-8 border border-sooch-gold/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-sooch-gold/30 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-sooch-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Settlement Excellence</h3>
                  <p className="text-gray-300">Strategic negotiation results</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Out-of-Court Settlements</span>
                  <span className="text-sooch-gold font-bold">75%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-sooch-gold h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Client Satisfaction Rate</span>
                  <span className="text-sooch-gold font-bold">95%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-sooch-gold h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* Case Resolution Timeline */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-slate-600/50 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-sooch-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Efficient Resolution</h3>
                  <p className="text-gray-300">Average case timelines</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Simple Disputes</span>
                  <span className="text-sooch-gold font-bold">3-6 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Complex Litigation</span>
                  <span className="text-sooch-gold font-bold">12-18 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mediation Cases</span>
                  <span className="text-sooch-gold font-bold">1-3 months</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Client Testimonial Quote */}
        <AnimatedElement delay={0.8}>
          <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <blockquote className="text-xl md:text-2xl font-playfair italic mb-4 text-white">
              "Strategic litigation isn't just about winning cases—it's about achieving optimal outcomes through intelligent case management, aggressive advocacy, and smart settlement strategies."
            </blockquote>
            <cite className="text-amber-200 font-medium">
              — The Sooch Law Litigation Team
            </cite>
            
            <div className="mt-6 pt-6 border-t border-amber-500">
              <p className="text-amber-100 mb-4">
                Every dispute requires a tailored approach. Let us develop the right strategy for your case.
              </p>
              <button 
                className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Your Strategic Consultation
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CivilLitigationStats; 
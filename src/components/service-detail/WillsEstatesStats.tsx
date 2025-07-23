import AnimatedElement from "@/components/AnimatedElement";
import { FileText, Heart, Shield, Users, Clock, Star, TrendingUp, Award } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface WillsEstatesStatsProps {
  stats: StatItem[];
}

const WillsEstatesStats = ({ stats }: WillsEstatesStatsProps) => {
  const achievementStats = [
    {
      icon: <FileText className="h-8 w-8 text-sooch-gold" />,
      value: "2,000+",
      label: "Wills Successfully Drafted",
      description: "Comprehensive estate planning for families across the GTA"
    },
    {
      icon: <Heart className="h-8 w-8 text-sooch-gold" />,
      value: "100%",
      label: "Client Satisfaction",
      description: "Every family receives personalized, compassionate service"
    },
    {
      icon: <Shield className="h-8 w-8 text-sooch-gold" />,
      value: "500+",
      label: "Estates Administered",
      description: "Guiding families through difficult times with expertise"
    },
    {
      icon: <Clock className="h-8 w-8 text-sooch-gold" />,
      value: "22+",
      label: "Years Estate Planning Experience",
      description: "Proven expertise in protecting family legacies"
    }
  ];

  const familyBenefits = [
    {
      icon: <Users className="h-6 w-6 text-sooch-gold" />,
      title: "Families Protected",
      value: "2,500+"
    },
    {
      icon: <Star className="h-6 w-6 text-sooch-gold" />,
      title: "Average Tax Savings",
      value: "35%"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-sooch-gold" />,
      title: "Assets Preserved",
      value: "$150M+"
    },
    {
      icon: <Award className="h-6 w-6 text-sooch-gold" />,
      title: "Trust Success Rate",
      value: "98%"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 text-gray-900">
      <div className="container-custom">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievementStats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="bg-white/80 border border-amber-200 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-sooch-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Family Protection Benefits */}
        <AnimatedElement delay={0.5}>
          <div className="bg-white/90 border border-amber-200 rounded-2xl p-8 mb-16 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Our <span className="text-sooch-gold">Family Protection</span> Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {familyBenefits.map((benefit, index) => (
                <div key={index} className="bg-amber-50 rounded-xl p-6 text-center hover:bg-amber-100 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <div className="text-2xl font-bold text-sooch-gold">{benefit.value}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Estate Planning Success Stories */}
        <AnimatedElement delay={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Tax Savings Success */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-sooch-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Tax Optimization Success</h3>
                  <p className="text-gray-700">Strategic estate planning results</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Tax Reduction</span>
                  <span className="text-sooch-gold font-bold">35%</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-2">
                  <div className="bg-sooch-gold h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Probate Cost Savings</span>
                  <span className="text-sooch-gold font-bold">60%</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-2">
                  <div className="bg-sooch-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            {/* Service Excellence */}
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-sooch-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Service Excellence</h3>
                  <p className="text-gray-700">Client satisfaction metrics</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Will Completion Time</span>
                  <span className="text-sooch-gold font-bold">2-3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Client Referral Rate</span>
                  <span className="text-sooch-gold font-bold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Follow-up Reviews</span>
                  <span className="text-sooch-gold font-bold">Annual</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Legacy Planning Impact */}
        <AnimatedElement delay={0.7}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-sooch-gold">Legacy Planning</span> by the Numbers
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach to estate planning has helped thousands of families secure their legacies and protect their loved ones.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-sooch-gold mb-2">95%</div>
                <div className="text-sm text-gray-600">Avoid Probate</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-sooch-gold mb-2">$2.5M</div>
                <div className="text-sm text-gray-600">Average Estate Value</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-sooch-gold mb-2">30%</div>
                <div className="text-sm text-gray-600">Include Charitable Giving</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-sooch-gold mb-2">3</div>
                <div className="text-sm text-gray-600">Generations Protected</div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Client Testimonial Quote */}
        <AnimatedElement delay={0.8}>
          <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <blockquote className="text-xl md:text-2xl font-playfair italic mb-4 text-white">
              "Estate planning isn't just about legal documents—it's about giving your family the gift of security, the peace of mind that comes from knowing their future is protected, and the confidence that your legacy will endure."
            </blockquote>
            <cite className="text-amber-200 font-medium">
              — The Sooch Law Estate Planning Team
            </cite>
            
            <div className="mt-6 pt-6 border-t border-amber-500">
              <p className="text-amber-100 mb-4">
                Your family's future deserves the protection that only comprehensive estate planning can provide.
              </p>
              <button 
                className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Estate Plan Today
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default WillsEstatesStats; 
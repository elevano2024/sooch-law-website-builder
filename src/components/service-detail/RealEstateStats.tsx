import AnimatedElement from "@/components/AnimatedElement";
import { Home, Clock, Users, Shield } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface RealEstateStatsProps {
  stats: { value: string; label: string }[];
}

const RealEstateStats = ({ stats }: RealEstateStatsProps) => {
  // Map the incoming stats to real estate specific stats with icons and descriptions
  const realEstateStats: Stat[] = [
    {
      value: stats[0]?.value || "25+",
      label: "Years of Experience",
      description: "Over two decades of expertise in Ontario real estate law and property transactions",
      icon: <Clock className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[1]?.value || "5,000+",
      label: "Successful Transactions",
      description: "Thousands of smooth property purchases, sales, and refinancing completed",
      icon: <Home className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[2]?.value || "98%",
      label: "Client Satisfaction",
      description: "Exceptional service quality with near-perfect client satisfaction ratings",
      icon: <Users className="h-8 w-8 text-sooch-gold" />
    },
    {
      value: stats[3]?.value || "24/7",
      label: "Client Support",
      description: "Round-the-clock availability for urgent matters and client peace of mind",
      icon: <Shield className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Trusted by <span className="text-sooch-gold">Property Owners</span> Across Ontario
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Our proven track record in real estate law speaks for itself. From first-time homebuyers to seasoned investors, we've helped thousands of clients successfully navigate their property transactions.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {realEstateStats.map((stat, index) => (
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

        {/* Service Highlights */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-sooch-dark rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Ontario Property Owners Choose Sooch Law</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Every real estate transaction is unique. Our personalized approach ensures your specific needs are met with professional excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">Mobile</div>
                <div className="text-white font-semibold mb-1">Signing Services</div>
                <div className="text-gray-300 text-sm">We come to your preferred location</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">Fixed</div>
                <div className="text-white font-semibold mb-1">Transparent Fees</div>
                <div className="text-gray-300 text-sm">No hidden costs or surprises</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">Same Day</div>
                <div className="text-white font-semibold mb-1">Document Review</div>
                <div className="text-gray-300 text-sm">Quick turnaround when needed</div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Testimonial quote */}
        <AnimatedElement delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-white">
              <div className="flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl font-playfair italic mb-4">
                "Every property transaction represents someone's dream, investment, or new beginning. We're honored to be part of that journey and committed to making it as smooth as possible."
              </blockquote>
              <cite className="text-amber-200 font-medium">
                — Kamalprit Sooch, Principal Lawyer
              </cite>
              
              <div className="mt-6 pt-6 border-t border-amber-500">
                <p className="text-amber-100 mb-4">
                  Ready to start your real estate transaction? Get a transparent quote and experience the difference professional legal support makes.
                </p>
                <button 
                  className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Your Free Quote Today
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default RealEstateStats; 
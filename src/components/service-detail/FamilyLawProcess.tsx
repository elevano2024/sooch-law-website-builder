import AnimatedElement from "@/components/AnimatedElement";
import { MessageCircle, FileText, Users, Handshake, Scale, Heart } from "lucide-react";

const FamilyLawProcess = () => {
  const processSteps = [
    {
      title: "Initial Family Consultation",
      description: "We listen to your family's unique situation with compassion and provide honest legal advice about your divorce, custody, or family law options.",
      icon: <MessageCircle className="w-10 h-10 text-sooch-gold" />,
      details: ["Free 30-minute family consultation", "Confidential discussion about your marriage/family", "Clear explanation of divorce and custody rights", "Judgment-free environment for sensitive matters"]
    },
    {
      title: "Family Documentation & Legal Strategy",
      description: "We gather essential family documents and develop a personalized legal strategy for your divorce, custody, or family matter.",
      icon: <FileText className="w-10 h-10 text-sooch-gold" />,
      details: ["Marriage and family document collection", "Financial disclosure for spousal/child support", "Custody and parenting strategy development", "Divorce timeline and milestone planning"]
    },
    {
      title: "Family Mediation & Settlement",
      description: "We prioritize amicable family solutions through mediation and negotiation to protect your children and preserve family relationships where possible.",
      icon: <Handshake className="w-10 h-10 text-sooch-gold" />,
      details: ["Family and divorce mediation services", "Collaborative family law approach", "Spousal and child support negotiations", "Child-first custody solutions"]
    },
    {
      title: "Family Court Advocacy",
      description: "When family court proceedings are necessary for divorce or custody matters, we provide strong advocacy while maintaining dignity for your family.",
      icon: <Scale className="w-10 h-10 text-sooch-gold" />,
      details: ["Divorce and custody court applications", "Skilled family law representation", "Evidence presentation for family matters", "Professional advocacy for parents and children"]
    },
    {
      title: "Ongoing Family Support",
      description: "Our relationship with your family doesn't end with your case. We provide ongoing support for custody modifications, divorce variations, and future family matters.",
      icon: <Heart className="w-10 h-10 text-sooch-gold" />,
      details: ["Post-divorce support and guidance", "Custody modification assistance", "Future family legal matters", "Ongoing support for co-parenting issues"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our Family-Centered <span className="text-sooch-gold">Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              We guide you through each step with compassion, understanding that every family situation is unique
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-0.5 bg-gradient-to-b from-sooch-gold via-sooch-gold to-transparent transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <AnimatedElement key={index} delay={index * 0.15}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 max-w-lg">
                                      <div className={`text-center lg:text-${index % 2 === 1 ? 'right' : 'left'}`}>
                    <div className="inline-flex items-center bg-sooch-gold/10 rounded-full px-4 py-2 mb-4">
                      <span className="text-sm font-medium text-sooch-gold">Family Law Process</span>
                    </div>
                      <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      
                      {/* Details */}
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-sooch-gold rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-white rounded-full shadow-xl border-4 border-sooch-gold/20 flex items-center justify-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-sooch-gold to-amber-600 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 max-w-lg">
                    <div className={`${index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className="bg-gradient-to-br from-sooch-gold/5 to-amber-100/30 rounded-2xl p-8 border border-sooch-gold/10">
                        <div className="text-center">
                          <Users className="h-12 w-12 text-sooch-gold mx-auto mb-4 opacity-60" />
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {index === 0 && "Understanding Your Family's Needs"}
                            {index === 1 && "Building Your Family's Case"}
                            {index === 2 && "Finding Family Solutions"}
                            {index === 3 && "Protecting Your Family's Rights"}
                            {index === 4 && "Continuing Family Support"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {index === 0 && "Every family story is different, and we take time to understand your unique situation."}
                            {index === 1 && "We prepare thoroughly while keeping your family's best interests and children's welfare at heart."}
                            {index === 2 && "We prioritize amicable family solutions that work for everyone, especially the children involved."}
                            {index === 3 && "When family court is necessary, we advocate firmly but respectfully for your family."}
                            {index === 4 && "We remain available for your family's future legal needs and ongoing support."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedElement delay={0.6}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Ready to Take the First Step?
              </h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                We understand this may be one of the most difficult times in your life. Let us help you navigate through it with dignity and care.
              </p>
              <button 
                className="bg-sooch-gold hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FamilyLawProcess; 
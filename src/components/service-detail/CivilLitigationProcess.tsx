import AnimatedElement from "@/components/AnimatedElement";
import { FileSearch, Users, Scale, Gavel, HandHeart, Trophy } from "lucide-react";

const CivilLitigationProcess = () => {
  const processSteps = [
    {
      title: "Strategic Case Assessment",
      description: "Comprehensive evaluation of your dispute to determine the strongest legal position and potential outcomes",
      details: [
        "Detailed review of all relevant documents and evidence",
        "Legal research on applicable laws and precedents",
        "Risk assessment and success probability analysis",
        "Cost-benefit evaluation of litigation vs. settlement",
        "Timeline development and strategy formulation"
      ],
      icon: <FileSearch className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Pre-Litigation Strategy",
      description: "Exhausting settlement opportunities while building a strong foundation for potential court proceedings",
      details: [
        "Demand letter drafting and negotiation",
        "Evidence preservation and documentation",
        "Expert witness identification and retention",
        "Discovery planning and case theory development",
        "Settlement negotiation and mediation coordination"
      ],
      icon: <Users className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Litigation Management",
      description: "Professional court representation with aggressive advocacy for your interests",
      details: [
        "Court filings and procedural compliance",
        "Discovery process management (interrogatories, depositions)",
        "Motion practice and interim applications",
        "Settlement conferences and judicial mediation",
        "Pre-trial preparation and case management"
      ],
      icon: <Scale className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Trial Advocacy",
      description: "Experienced courtroom representation focused on achieving favorable judgments",
      details: [
        "Comprehensive trial preparation and strategy",
        "Expert witness coordination and presentation",
        "Evidence presentation and cross-examination",
        "Legal argument development and submission",
        "Jury selection and persuasion (where applicable)"
      ],
      icon: <Gavel className="h-8 w-8 text-sooch-gold" />
    },
    {
      title: "Resolution & Enforcement",
      description: "Securing your victory through settlement finalization or judgment enforcement",
      details: [
        "Settlement agreement drafting and execution",
        "Judgment collection and asset recovery",
        "Post-judgment enforcement procedures",
        "Appeal strategy and representation if needed",
        "Ongoing compliance monitoring and support"
      ],
      icon: <Trophy className="h-8 w-8 text-sooch-gold" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our Strategic <span className="text-sooch-gold">Litigation Process</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Every dispute is unique, but our proven methodology ensures comprehensive case management from initial assessment through final resolution.
            </p>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="flex flex-col lg:flex-row items-start gap-8 mb-12 last:mb-0">
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-sooch-gold text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sooch-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 mt-20 w-px h-16 bg-gradient-to-b from-sooch-gold to-transparent"></div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Alternative Dispute Resolution Section */}
        <AnimatedElement delay={0.6}>
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center text-white">
            <HandHeart className="h-16 w-16 text-sooch-gold mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Alternative Dispute Resolution</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Not every dispute requires court intervention. We also excel in mediation, arbitration, and collaborative resolution approaches that can save time, costs, and preserve business relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2 text-sooch-gold">Mediation Services</h4>
                <p className="text-gray-300 text-sm">Facilitated negotiations with neutral third parties</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2 text-sooch-gold">Arbitration Representation</h4>
                <p className="text-gray-300 text-sm">Private dispute resolution with binding decisions</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2 text-sooch-gold">Settlement Negotiation</h4>
                <p className="text-gray-300 text-sm">Strategic settlement discussions and agreement drafting</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CivilLitigationProcess; 
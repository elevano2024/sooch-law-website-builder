import React from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { Scale, DollarSign, Clock, Award, TrendingUp, Star, FileText, Gavel } from "lucide-react";

const SmallClaimsStats = () => {
  const mainStats = [
    {
      icon: <Scale className="h-8 w-8 text-sooch-gold" />,
      number: "800+",
      label: "Claims Handled",
      description: "Successful small claims court cases across all dispute types"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-sooch-gold" />,
      number: "85%", 
      label: "Success Rate",
      description: "High success rate in recovering money and resolving disputes"
    },
    {
      icon: <Clock className="h-8 w-8 text-sooch-gold" />,
      number: "3-6",
      label: "Months Resolution",
      description: "Average time from filing to resolution of claims"
    },
    {
      icon: <Award className="h-8 w-8 text-sooch-gold" />,
      number: "15+",
      label: "Years Experience",
      description: "Proven expertise in Ontario Small Claims Court"
    }
  ];

  const claimBreakdown = [
    {
      icon: <DollarSign className="h-6 w-6 text-sooch-gold" />,
      value: "45%",
      label: "Debt Collection Cases"
    },
    {
      icon: <FileText className="h-6 w-6 text-sooch-gold" />,
      value: "30%",
      label: "Contract Disputes" 
    },
    {
      icon: <Gavel className="h-6 w-6 text-sooch-gold" />,
      value: "15%",
      label: "Property Damage"
    },
    {
      icon: <Star className="h-6 w-6 text-sooch-gold" />,
      value: "10%",
      label: "Other Claims"
    }
  ];

  const recoveryData = [
    { range: "$1,000 - $5,000", percentage: 35, cases: "280 cases" },
    { range: "$5,001 - $15,000", percentage: 40, cases: "320 cases" },
    { range: "$15,001 - $25,000", percentage: 20, cases: "160 cases" },
    { range: "$25,001 - $35,000", percentage: 5, cases: "40 cases" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-6">
              Our <span className="text-sooch-gold">Small Claims</span> Success
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results in helping clients recover money and resolve disputes efficiently through Small Claims Court.
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

        {/* Claim Type Breakdown */}
        <AnimatedElement delay={0.4}>
          <div className="bg-slate-800/30 border border-sooch-gold/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Small Claims Case Distribution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {claimBreakdown.map((claim, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-sooch-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    {claim.icon}
                  </div>
                  <div className="text-2xl font-bold text-sooch-gold">{claim.value}</div>
                  <p className="text-gray-300 text-sm">{claim.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Recovery Performance and Resolution Times */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatedElement delay={0.5}>
            <div className="bg-slate-800/50 border border-sooch-gold/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-sooch-gold/20 rounded-full flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-sooch-gold" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white">Recovery by Claim Value</h3>
                  <p className="text-gray-400">Distribution of successful claims</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {recoveryData.map((recovery, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{recovery.range}</span>
                      <span className="text-sooch-gold font-bold text-sm">{recovery.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
                      <div className="bg-sooch-gold h-2 rounded-full" style={{ width: `${recovery.percentage}%` }}></div>
                    </div>
                    <div className="text-gray-400 text-xs">{recovery.cases}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.6}>
            <div className="bg-slate-800/50 border border-sooch-gold/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-sooch-gold" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Resolution Efficiency</h3>
                  <p className="text-gray-400">Average case timelines</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Settlement conference resolution</span>
                    <span className="text-sooch-gold font-bold">60%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Average filing to settlement</span>
                    <span className="text-sooch-gold font-bold">4 months</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Trial success rate</span>
                    <span className="text-sooch-gold font-bold">90%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Judgment collection rate</span>
                    <span className="text-sooch-gold font-bold">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Client Satisfaction */}
        <AnimatedElement delay={0.7}>
          <div className="bg-slate-800/30 border border-sooch-gold/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Client Satisfaction Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">92%</div>
                <p className="text-gray-300 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">$18K</div>
                <p className="text-gray-300 text-sm">Average Recovery</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">85%</div>
                <p className="text-gray-300 text-sm">Referral Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-sooch-gold mb-2">2:1</div>
                <p className="text-gray-300 text-sm">Cost to Recovery Ratio</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Final Impact Statement */}
        <AnimatedElement delay={0.8}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-6">
              <span className="text-sooch-gold">Small Claims</span> Success by the Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">800+</div>
                <p className="text-gray-300">Claims Filed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">85%</div>
                <p className="text-gray-300">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">$14M+</div>
                <p className="text-gray-300">Total Recovered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sooch-gold mb-2">3-6</div>
                <p className="text-gray-300">Months Average</p>
              </div>
            </div>

            <div className="bg-sooch-gold rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <Scale className="h-16 w-16 text-white mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                "Small Claims Court isn't just about the money—it's about fairness, accountability, and ensuring that broken promises and unpaid debts don't go unresolved. Every successful claim represents justice served efficiently and affordably."
              </blockquote>
              <cite className="text-white/90">— The Sooch Law Small Claims Team</cite>
              
              <div className="mt-8">
                <p className="text-white text-lg mb-6">
                  Your unpaid debt doesn't have to remain unpaid. Justice is within reach.
                </p>
                <button className="bg-white text-sooch-gold hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your Small Claim Today
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default SmallClaimsStats; 
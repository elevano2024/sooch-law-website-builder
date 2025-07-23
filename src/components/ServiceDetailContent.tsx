
import { useParams } from "react-router-dom";

// Import our streamlined components
import ServiceHero from "./service-detail/ServiceHero";
import StatsCounter from "./service-detail/StatsCounter";
import ServicePricing from "./service-detail/ServicePricing";
import ServiceProcess from "./service-detail/ServiceProcess";
import ServiceFAQ from "./service-detail/ServiceFAQ";
import ServiceTestimonials from "./service-detail/ServiceTestimonials";

// Import family law specific components
import FamilyLawHero from "./service-detail/FamilyLawHero";
import FamilyLawProcess from "./service-detail/FamilyLawProcess";
import FamilyLawPricing from "./service-detail/FamilyLawPricing";
import FamilyLawStats from "./service-detail/FamilyLawStats";
import GoogleTestimonials from "./service-detail/GoogleTestimonials";
import PersonalInjuryHero from "./service-detail/PersonalInjuryHero";
import PersonalInjuryProcess from "./service-detail/PersonalInjuryProcess";
import PersonalInjuryPricing from "./service-detail/PersonalInjuryPricing";
import PersonalInjuryStats from "./service-detail/PersonalInjuryStats";
import RealEstateHero from "./service-detail/RealEstateHero";
import RealEstateProcess from "./service-detail/RealEstateProcess";
import RealEstatePricing from "./service-detail/RealEstatePricing";
import RealEstateStats from "./service-detail/RealEstateStats";
import CivilLitigationHero from "./service-detail/CivilLitigationHero";
import CivilLitigationProcess from "./service-detail/CivilLitigationProcess";
import CivilLitigationPricing from "./service-detail/CivilLitigationPricing";
import CivilLitigationStats from "./service-detail/CivilLitigationStats";
import WillsEstatesHero from "./service-detail/WillsEstatesHero";
import WillsEstatesProcess from "./service-detail/WillsEstatesProcess";
import WillsEstatesPricing from "./service-detail/WillsEstatesPricing";
import WillsEstatesStats from "./service-detail/WillsEstatesStats";
import PowerOfAttorneyHero from "./service-detail/PowerOfAttorneyHero";
import PowerOfAttorneyProcess from "./service-detail/PowerOfAttorneyProcess";
import PowerOfAttorneyPricing from "./service-detail/PowerOfAttorneyPricing";
import PowerOfAttorneyStats from "./service-detail/PowerOfAttorneyStats";
import ImmigrationLawHero from "./service-detail/ImmigrationLawHero";
import ImmigrationLawProcess from "./service-detail/ImmigrationLawProcess";
import ImmigrationLawPricing from "./service-detail/ImmigrationLawPricing";
import ImmigrationLawStats from "./service-detail/ImmigrationLawStats";
import SmallClaimsHero from "./service-detail/SmallClaimsHero";
import SmallClaimsProcess from "./service-detail/SmallClaimsProcess";
import SmallClaimsPricing from "./service-detail/SmallClaimsPricing";
import SmallClaimsStats from "./service-detail/SmallClaimsStats";

const servicesData = {
  "real-estate": {
    title: "Real Estate Law",
    heading: "Expert Legal Services for Your Property Transactions",
    description: "Our experienced real estate lawyers provide comprehensive legal services for property transactions throughout the Greater Toronto Area. Whether you're buying, selling, or refinancing, our team ensures your interests are protected at every step.",
    image: "/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    heroVideo: "",
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "5,000+", label: "Successful Transactions" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Client Support" }
    ],
    testimonials: [
      {
        text: "Sooch Law made our home buying process seamless. Their attention to detail and expertise gave us confidence throughout the entire transaction.",
        author: "Sarah Johnson",
        rating: 5
      },
      {
        text: "Professional, efficient, and thorough. They handled our refinancing with care and kept us informed every step of the way.",
        author: "Michael Chen",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How long does a real estate transaction typically take?",
        answer: "Most real estate transactions take 30-60 days from the signing of the purchase agreement to closing, depending on financing, inspections, and other contingencies."
      },
      {
        question: "What documents do I need for a real estate purchase?",
        answer: "You'll need identification, proof of income, mortgage pre-approval (if applicable), insurance information, and any supporting financial documents. We'll guide you through the complete list during our consultation."
      },
      {
        question: "What are closing costs and what do they include?",
        answer: "Closing costs are expenses beyond the property's purchase price that buyers and sellers pay to complete a real estate transaction. These typically include legal fees, land transfer taxes, title insurance, property taxes adjustments, and disbursements."
      },
      {
        question: "Do I need title insurance, and what does it cover?",
        answer: "Yes, title insurance is highly recommended. It protects against losses related to property ownership, including unknown title defects, fraud, survey issues, and more. It's a one-time premium that provides coverage for as long as you own the property."
      }
    ]
  },
  "personal-injury": {
    title: "Personal Injury Law",
    heading: "Dedicated Representation for Accident Victims",
    description: "If you've been injured in an accident due to someone else's negligence, you deserve compensation. Our experienced personal injury lawyers fight tirelessly to ensure you receive the maximum compensation for your injuries, medical expenses, lost wages, and pain and suffering.",
    image: "/lovable-uploads/62f7ff6e-d134-4349-a5df-0bb1dbf4397e.png",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    heroVideo: "",
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "$50M+", label: "Recovered for Clients" },
      { value: "95%", label: "Success Rate" },
      { value: "1000+", label: "Cases Handled" }
    ],
    testimonials: [
      {
        text: "After my car accident, Sooch Law fought for me when I couldn't fight for myself. They secured a settlement that covered all my medical bills and more.",
        author: "David Martinez",
        rating: 5
      },
      {
        text: "Professional, compassionate, and results-driven. They guided me through every step of my slip and fall case with expertise and care.",
        author: "Jennifer Wong",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What types of personal injury cases do you handle?",
        answer: "We handle motor vehicle accidents, slip and fall incidents, workplace injuries, medical malpractice, product liability claims, and other cases involving personal injury due to negligence."
      },
      {
        question: "How much does it cost to hire a personal injury lawyer?",
        answer: "We work on a contingency fee basis, meaning you don't pay unless we win your case. Our fees are taken as a percentage of your settlement or court award, so there are no upfront costs to you."
      },
      {
        question: "How long do I have to file a personal injury claim in Ontario?",
        answer: "In Ontario, you generally have two years from the date of the accident to file a personal injury claim. However, some cases may have different limitation periods, so it's important to consult with us as soon as possible."
      },
      {
        question: "What compensation can I receive for my injuries?",
        answer: "Compensation may include medical expenses, rehabilitation costs, lost wages, future income loss, pain and suffering, and other damages related to your injury. The amount depends on the severity of your injuries and their impact on your life."
      }
    ]
  },
  "civil-litigation": {
    title: "Civil Litigation",
    heading: "Strategic Legal Advocacy for Dispute Resolution",
    description: "When business disputes, contract breaches, or property conflicts arise, you need experienced litigation counsel who combines aggressive advocacy with strategic settlement approaches. Our civil litigation team has successfully resolved over 500 cases with a 90% favorable outcome rate.",
    image: "/lovable-uploads/64151993-464c-4540-9eb4-9c344a541911.png",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    heroVideo: "",
    stats: [
      { value: "18+", label: "Years Litigation Experience" },
      { value: "500+", label: "Cases Successfully Resolved" },
      { value: "90%", label: "Favorable Outcomes" },
      { value: "$25M+", label: "Total Client Recoveries" }
    ],
    testimonials: [
      {
        text: "Sooch Law's litigation team was exceptional in handling our complex business dispute. Their strategic approach and thorough preparation led to a very favorable settlement that exceeded our expectations.",
        author: "Robert Thompson",
        rating: 5
      },
      {
        text: "They fought aggressively for my property rights case and achieved an outcome I never thought possible. Their expertise in civil litigation is unmatched.",
        author: "Maria Garcia",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What types of civil litigation cases do you handle?",
        answer: "We handle commercial disputes, contract breaches, property disputes, employment litigation, construction disputes, debt collection, partnership disputes, and various other civil matters requiring court intervention or strategic settlement negotiation."
      },
      {
        question: "How long does civil litigation typically take?",
        answer: "Timeline varies by case complexity. Simple disputes may resolve in 3-6 months through settlement, while complex litigation can take 12-24 months. We provide realistic timelines and keep you informed throughout the process."
      },
      {
        question: "What are the costs associated with civil litigation?",
        answer: "We offer flexible fee structures including hourly billing, fixed fees for specific services, and contingency arrangements where applicable. All costs are discussed transparently during your initial strategy consultation."
      },
      {
        question: "Should I try to settle my dispute out of court?",
        answer: "Settlement often saves time and costs while preserving business relationships. We evaluate each case strategically to determine whether aggressive settlement negotiation, mediation, or court litigation best serves your interests and goals."
      }
    ]
  },
  "wills-estates": {
    title: "Wills and Estates",
    heading: "Secure Your Family's Legacy with Confidence",
    description: "Your family's future deserves protection. Our comprehensive estate planning services help you create lasting legacies through expertly crafted wills, strategic trusts, and tax-efficient planning. With over 2,000 wills drafted and 500+ estates administered, we provide the compassionate expertise your family needs during life's most important decisions.",
    image: "/lovable-uploads/5b973c6e-222e-409c-85f1-1fa4f4889812.png",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    heroVideo: "",
    stats: [
      { value: "22+", label: "Years Estate Planning Experience" },
      { value: "2,000+", label: "Wills Successfully Drafted" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "500+", label: "Estates Administered" }
    ],
    testimonials: [
      {
        text: "Sooch Law helped us create a comprehensive estate plan that gives us peace of mind. Their expertise in tax planning and trust structures saved our family significantly on estate taxes.",
        author: "Eleanor Smith",
        rating: 5
      },
      {
        text: "During the difficult time of administering my father's estate, they provided compassionate and professional guidance throughout the entire process. Their attention to detail was exceptional.",
        author: "James Wilson",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Why do I need a will, and what happens if I don't have one?",
        answer: "A will ensures your assets are distributed according to your wishes, names guardians for minor children, and minimizes family disputes. Without a will, Ontario's Succession Law Reform Act determines how your estate is divided, which may not align with your wishes and can cause delays and additional costs for your family."
      },
      {
        question: "What's the difference between a will and a trust?",
        answer: "A will takes effect after death and typically goes through probate, while a trust can be active during your lifetime and may avoid probate. Trusts offer more control over asset distribution, can provide tax benefits, and ensure privacy since they don't become public record like wills do."
      },
      {
        question: "How often should I update my will and estate plan?",
        answer: "Review your estate plan every 3-5 years or after major life events like marriage, divorce, birth of children, significant asset changes, moving to a different province, or changes in tax laws. Regular reviews ensure your plan remains current and effective."
      },
      {
        question: "What is probate and how can I minimize costs for my family?",
        answer: "Probate is the court process of validating a will and overseeing estate administration. In Ontario, probate fees are 1.5% of estate value over $50,000. Through proper estate planning with joint ownership, beneficiary designations, and trusts, we can significantly reduce or eliminate probate costs and delays for your family."
      }
    ]
  },
  "power-of-attorney": {
    title: "Power of Attorney",
    heading: "Secure Your Decision-Making Authority",
    description: "Protect your future with comprehensive Power of Attorney documents that ensure your wishes are respected and your affairs managed by someone you trust. Our expert legal team has prepared over 1,500 POA documents, providing families with the security and peace of mind that comes from proper planning.",
    image: "/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png",
    heroImage: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    heroVideo: "",
    stats: [
      { value: "20+", label: "Years POA Experience" },
      { value: "1,500+", label: "POA Documents Prepared" },
      { value: "100%", label: "Legal Compliance" },
      { value: "98%", label: "Client Satisfaction" }
    ],
    testimonials: [
      {
        text: "Setting up power of attorney with Sooch Law was straightforward and professional. They explained everything clearly, helped us choose the right attorney, and ensured all documents were properly executed.",
        author: "Patricia Adams",
        rating: 5
      },
      {
        text: "When my mother couldn't manage her affairs due to illness, having a properly drafted POA made all the difference. Sooch Law's attention to detail and attorney guidance was invaluable to our family.",
        author: "Thomas Lee",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What is a Power of Attorney and why do I need one?",
        answer: "A Power of Attorney is a legal document that gives another person (your attorney) the authority to make decisions on your behalf if you become unable to do so. There are two types: Power of Attorney for Property (financial matters) and Power of Attorney for Personal Care (health and personal decisions). Without POA, your family may need expensive court proceedings to manage your affairs."
      },
      {
        question: "When does a Power of Attorney take effect and when should I create one?",
        answer: "You can choose when your POA takes effect - it can be immediate or conditional (only when you become mentally incapable). POA must be created while you have mental capacity, so it's important not to wait until you need it. We recommend creating POA as part of comprehensive estate planning."
      },
      {
        question: "Can I revoke or change a Power of Attorney later?",
        answer: "Yes, as long as you are mentally capable, you can revoke or amend a Power of Attorney at any time. This should be done in writing with proper legal formalities, and all relevant parties should be notified. We provide ongoing support for POA updates and modifications."
      },
      {
        question: "How do I choose the right person as my attorney?",
        answer: "Choose someone you trust completely, who is responsible with finances, available when needed, and understands your values. Consider geographic proximity, age, and their willingness to serve. We recommend naming alternate attorneys and providing detailed guidance to your chosen attorney about your preferences and values."
      }
    ]
  },
  "small-claims": {
    title: "Small Claims Court",
    heading: "Efficient Resolution for Smaller Disputes",
    description: "Navigate Small Claims Court with confidence. Our experienced lawyers help you pursue or defend claims up to $35,000, providing cost-effective legal representation for contract disputes, property damage, and debt collection matters.",
    image: "/lovable-uploads/62f7ff6e-d134-4349-a5df-0bb1dbf4397e.png",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    heroVideo: "",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "800+", label: "Claims Handled" },
      { value: "85%", label: "Success Rate" },
      { value: "Fast", label: "Resolution Times" }
    ],
    testimonials: [
      {
        text: "Sooch Law helped me recover money from a contractor who didn't complete the work. The process was much smoother than I expected.",
        author: "Mark Johnson",
        rating: 5
      },
      {
        text: "They represented me in a landlord-tenant dispute and achieved a favorable outcome quickly and cost-effectively.",
        author: "Lisa Chen",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What is Small Claims Court?",
        answer: "Small Claims Court is designed to resolve disputes involving smaller amounts of money (up to $35,000 in Ontario) in a simpler, faster, and less expensive way than Superior Court."
      },
      {
        question: "What types of cases can be heard in Small Claims Court?",
        answer: "Common cases include unpaid debts, contract disputes, property damage, security deposit disputes, minor personal injury claims, and some landlord-tenant matters."
      },
      {
        question: "Do I need a lawyer for Small Claims Court?",
        answer: "While you can represent yourself, having a lawyer increases your chances of success. We can help prepare your case, ensure proper documentation, and represent you at trial if necessary."
      },
      {
        question: "How long does a Small Claims Court case take?",
        answer: "Cases typically take 3-6 months from filing to resolution, depending on court availability and whether the case settles or goes to trial. This is much faster than Superior Court proceedings."
      }
    ]
  },
  "immigration": {
    title: "Immigration Law",
    heading: "Your Pathway to Canadian Immigration Success",
    description: "Navigate Canada's complex immigration system with expert legal guidance. Our immigration lawyers assist with visa applications, permanent residence, citizenship, family sponsorship, and business immigration matters.",
    image: "/lovable-uploads/64151993-464c-4540-9eb4-9c344a541911.png",
    heroImage: "https://images.unsplash.com/photo-1569974571645-41876d5b1959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    heroVideo: "",
    stats: [
      { value: "12+", label: "Years Experience" },
      { value: "2,500+", label: "Applications Filed" },
      { value: "95%", label: "Approval Rate" },
      { value: "60+", label: "Countries Served" }
    ],
    testimonials: [
      {
        text: "Sooch Law made my permanent residence application process seamless. Their expertise and attention to detail gave me confidence throughout.",
        author: "Priya Sharma",
        rating: 5
      },
      {
        text: "They helped my family reunite in Canada through the family sponsorship program. Professional, caring, and highly knowledgeable.",
        author: "Ahmed Hassan",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What immigration services do you provide?",
        answer: "We assist with Express Entry applications, Provincial Nominee Programs, family sponsorship, work permits, study permits, visitor visas, citizenship applications, and immigration appeals."
      },
      {
        question: "How long does the immigration process take?",
        answer: "Processing times vary by program type. Express Entry can take 6-8 months, family sponsorship 12-24 months, and citizenship applications 12-18 months. We provide realistic timelines for your specific situation."
      },
      {
        question: "What are the costs associated with immigration applications?",
        answer: "Costs include government fees, legal fees, medical exams, language tests, and document preparation. We provide detailed cost estimates upfront and transparent billing throughout the process."
      },
      {
        question: "Can you help if my application has been refused?",
        answer: "Yes, we can review refusal decisions, identify grounds for appeal or reapplication, and represent you in Federal Court or Immigration Appeal Division proceedings when appropriate."
      }
    ]
  },
  "family-law": {
    title: "Family Law",
    heading: "Compassionate Legal Support for Family Matters",
    description: "Navigate family challenges with experienced legal guidance. Our family law team provides compassionate representation for divorce, custody, child support, spousal support, and property division matters.",
    image: "/lovable-uploads/5b973c6e-222e-409c-85f1-1fa4f4889812.png",
    heroImage: "https://images.unsplash.com/photo-1624433287687-1206e845f12c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2675&q=80",
    heroVideo: "",
    stats: [
      { value: "16+", label: "Years Experience" },
      { value: "1,200+", label: "Families Helped" },
      { value: "90%", label: "Settled Out of Court" },
      { value: "24/7", label: "Support Available" }
    ],
    testimonials: [
      {
        text: "During my divorce, Sooch Law provided both legal expertise and emotional support. They helped me achieve a fair settlement while protecting my children's interests.",
        author: "Rachel Morrison",
        rating: 5
      },
      {
        text: "They helped me establish a custody arrangement that works for both parents and puts our children first. Professional and understanding throughout.",
        author: "Steven Taylor",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What family law matters do you handle?",
        answer: "We handle divorce proceedings, child custody and access, child support, spousal support, property division, marriage contracts, cohabitation agreements, and adoption matters."
      },
      {
        question: "How is child custody determined in Ontario?",
        answer: "Courts prioritize the best interests of the child, considering factors like the child's needs, each parent's ability to care for the child, the child's relationship with each parent, and the stability of proposed living arrangements."
      },
      {
        question: "Do I need to go to court for my divorce?",
        answer: "Not necessarily. Many family matters can be resolved through negotiation, mediation, or collaborative family law, which are often faster, less expensive, and less stressful than court proceedings."
      },
      {
        question: "How is property divided in a divorce?",
        answer: "In Ontario, married spouses generally have equal claim to property acquired during marriage (except gifts and inheritances). Common-law partners have different rights. We help determine what property is subject to division and negotiate fair settlements."
      }
    ]
  }
};

const ServiceDetailContent = () => {
  const { slug } = useParams();
  const serviceData = servicesData[slug as keyof typeof servicesData] || servicesData["real-estate"];
  const isFamilyLaw = slug === "family-law";
  const isPersonalInjury = slug === "personal-injury";
  const isRealEstate = slug === "real-estate";
  const isCivilLitigation = slug === "civil-litigation";
  const isWillsEstates = slug === "wills-estates";
  const isPowerOfAttorney = slug === "power-of-attorney";
  const isImmigration = slug === "immigration";
  const isSmallClaims = slug === "small-claims";
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {isFamilyLaw ? (
        <FamilyLawHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : isPersonalInjury ? (
        <PersonalInjuryHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : isRealEstate ? (
        <RealEstateHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
          heroVideo={serviceData.heroVideo}
        />
      ) : isCivilLitigation ? (
        <CivilLitigationHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : isWillsEstates ? (
        <WillsEstatesHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : isPowerOfAttorney ? (
        <PowerOfAttorneyHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : isImmigration ? (
        <ImmigrationLawHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : isSmallClaims ? (
        <SmallClaimsHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroImage={serviceData.heroImage}
        />
      ) : (
        <ServiceHero 
          title={serviceData.title}
          heading={serviceData.heading}
          description={serviceData.description}
          heroVideo={serviceData.heroVideo}
          heroImage={serviceData.heroImage}
        />
      )}
      
      {/* Stats Section */}
      {isFamilyLaw ? (
        <FamilyLawStats stats={serviceData.stats} />
      ) : isPersonalInjury ? (
        <PersonalInjuryStats stats={serviceData.stats} />
      ) : isRealEstate ? (
        <RealEstateStats stats={serviceData.stats} />
      ) : isCivilLitigation ? (
        <CivilLitigationStats stats={serviceData.stats} />
      ) : isWillsEstates ? (
        <WillsEstatesStats stats={serviceData.stats} />
              ) : isPowerOfAttorney ? (
          <PowerOfAttorneyStats />
              ) : isImmigration ? (
          <ImmigrationLawStats />
      ) : isSmallClaims ? (
        <SmallClaimsStats />
      ) : (
        <StatsCounter stats={serviceData.stats} />
      )}
      
      {/* Our Process Section */}
      {isFamilyLaw ? (
        <FamilyLawProcess />
      ) : isPersonalInjury ? (
        <PersonalInjuryProcess />
      ) : isRealEstate ? (
        <RealEstateProcess />
      ) : isCivilLitigation ? (
        <CivilLitigationProcess />
      ) : isWillsEstates ? (
        <WillsEstatesProcess />
      ) : isPowerOfAttorney ? (
        <PowerOfAttorneyProcess />
      ) : isImmigration ? (
        <ImmigrationLawProcess />
      ) : isSmallClaims ? (
        <SmallClaimsProcess />
      ) : (
        <ServiceProcess />
      )}
      
      {/* Pricing Section */}
      {isFamilyLaw ? (
        <FamilyLawPricing />
      ) : isPersonalInjury ? (
        <PersonalInjuryPricing />
      ) : isRealEstate ? (
        <RealEstatePricing />
      ) : isCivilLitigation ? (
        <CivilLitigationPricing />
      ) : isWillsEstates ? (
        <WillsEstatesPricing />
      ) : isPowerOfAttorney ? (
        <PowerOfAttorneyPricing />
      ) : isImmigration ? (
        <ImmigrationLawPricing />
      ) : isSmallClaims ? (
        <SmallClaimsPricing />
      ) : (
        <ServicePricing />
      )}
      
      {/* Testimonials Section */}
      <GoogleTestimonials 
        title="Client Testimonials"
        subtitle={isFamilyLaw 
          ? "See what our clients are saying about our family law services"
          : isPersonalInjury
          ? "See what our clients are saying about our personal injury representation"
          : isRealEstate
          ? "See what our clients are saying about our real estate legal services"
          : isCivilLitigation
          ? "See what our clients are saying about our litigation and dispute resolution services"
          : isWillsEstates
          ? "See what our clients are saying about our estate planning and administration services"
          : isPowerOfAttorney
          ? "See what our clients are saying about our Power of Attorney services"
          : isImmigration
          ? "See what our clients are saying about our immigration law services"
          : isSmallClaims
          ? "See what our clients are saying about our Small Claims Court representation"
          : "See what our clients are saying about our legal services"
        }
        ctaText={isFamilyLaw 
          ? "Schedule Your Free Consultation" 
          : isPersonalInjury
          ? "Get Your Free Case Evaluation"
          : isRealEstate
          ? "Get Your Free Quote"
          : isCivilLitigation
          ? "Schedule Your Strategy Consultation"
          : isWillsEstates
          ? "Schedule Your Estate Consultation"
          : isPowerOfAttorney
          ? "Schedule Your POA Consultation"
          : isImmigration
          ? "Schedule Your Immigration Consultation"
          : isSmallClaims
          ? "Schedule Your Small Claims Consultation"
          : "Get Your Free Quote"
        }
      />
      
      {/* FAQ Section */}
      <ServiceFAQ faqItems={serviceData.faq} />
    </div>
  );
};

export default ServiceDetailContent;

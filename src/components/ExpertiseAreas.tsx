
import { Building, Scale, Heart } from "lucide-react";
import AreaCard from "./AreaCard";
import AnimatedElement from "./AnimatedElement";

const ExpertiseAreas = () => {
  const areas = [
    {
      title: "Real Estate",
      description: "Comprehensive legal services for property transactions, including purchases, sales, and refinancing.",
      icon: <Building size={32} />,
    },
    {
      title: "Civil Litigation",
      description: "Strategic representation in disputes, helping you navigate complex legal proceedings to protect your interests.",
      icon: <Scale size={32} />,
    },
    {
      title: "Personal Injury",
      description: "Dedicated advocacy for accident victims seeking fair compensation for injuries and damages.",
      icon: <Heart size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Areas of <span className="text-sooch-gold">Expertise</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our firm specializes in providing exceptional legal services across these key practice areas
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <AreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              delay={index * 0.1 + 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;

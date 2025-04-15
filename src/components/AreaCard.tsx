
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import AnimatedElement from "./AnimatedElement";

interface AreaCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const AreaCard = ({ title, description, icon, delay = 0 }: AreaCardProps) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 hover:border-sooch-gold transition-all duration-300">
        <div className="mb-4 text-sooch-gold">{icon}</div>
        <h3 className="text-xl font-playfair font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href="/services" 
          className="inline-flex items-center text-sooch-gold font-medium hover:text-amber-600 transition-colors"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </AnimatedElement>
  );
};

export default AreaCard;


import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import AnimatedElement from "./AnimatedElement";
import { Link } from "react-router-dom";

interface AreaCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  slug?: string;
}

const AreaCard = ({ title, description, icon, delay = 0, slug }: AreaCardProps) => {
  // Convert title to slug if not provided
  const serviceSlug = slug || title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <AnimatedElement delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 hover:border-sooch-gold transition-all duration-300">
        <div className="mb-4 text-sooch-gold">{icon}</div>
        <h3 className="text-xl font-playfair font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/service/${serviceSlug}`}
          className="inline-flex items-center text-sooch-gold font-medium hover:text-amber-600 transition-colors"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </AnimatedElement>
  );
};

export default AreaCard;


import AnimatedElement from "@/components/AnimatedElement";

interface StatItem {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

const StatsCounter = ({ stats }: StatsCounterProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="text-center p-6 bg-law-tertiary rounded-lg border-t-4 border-law-primary shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-law-primary mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

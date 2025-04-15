
import { CheckCircle } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Personalized Attention",
      description: "We understand that each client's needs are unique. Our dedicated team takes the time to understand your specific situation and tailor our legal strategies accordingly."
    },
    {
      title: "Experienced Legal Team",
      description: "With years of experience in various areas of law, our lawyers have the knowledge and expertise to handle even the most complex legal matters."
    },
    {
      title: "Transparent Communication",
      description: "We believe in maintaining open lines of communication with our clients. You'll always be informed about the progress of your case and any developments that arise."
    },
    {
      title: "Commitment to Excellence",
      description: "We are committed to providing the highest quality legal services to our clients. Our attention to detail and thorough approach ensure that no stone is left unturned in your case."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Why Choose <span className="text-sooch-gold">Sooch Law</span>
              </h2>
              <p className="text-gray-600 mb-8">
                At Sooch Law, we pride ourselves on delivering exceptional legal services with a client-centered approach. Here's why clients trust us with their legal matters:
              </p>
            </AnimatedElement>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <AnimatedElement key={index} delay={index * 0.1 + 0.2}>
                  <div className="flex">
                    <CheckCircle className="text-sooch-gold flex-shrink-0 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>

          <AnimatedElement delay={0.4}>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Our mission is to provide exceptional legal services with integrity, compassion, and a commitment to achieving the best possible outcomes for our clients."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-gray-900">Kamalprit Sooch</p>
                  <p className="text-sooch-gold">Founder, Sooch Law</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

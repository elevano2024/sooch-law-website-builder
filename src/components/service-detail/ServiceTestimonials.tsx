
import AnimatedElement from "@/components/AnimatedElement";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
  return (
    <section className="py-16 bg-law-dark text-white">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Client <span className="text-law-secondary">Testimonials</span>
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-4">
            See what our clients are saying about our real estate legal services
          </p>
          <div className="w-24 h-1 bg-law-secondary mx-auto mb-12"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className="bg-law-dark border border-gray-700 hover:border-law-secondary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-law-secondary fill-law-secondary' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-law-secondary font-semibold">{testimonial.author}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;

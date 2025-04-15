
import AnimatedElement from "@/components/AnimatedElement";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqItems: FAQItem[];
}

const ServiceFAQ = ({ faqItems }: ServiceFAQProps) => {
  return (
    <section className="py-16 bg-law-tertiary">
      <div className="container-custom">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
            Frequently Asked <span className="text-law-primary">Questions</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
            Get answers to common questions about Sooch Law's real estate legal services
          </p>
          <div className="w-24 h-1 bg-law-secondary mx-auto mb-12"></div>
        </AnimatedElement>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white shadow-sm rounded-lg overflow-hidden">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:text-law-primary text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;

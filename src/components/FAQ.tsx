
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay }: FAQItemProps) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="border-b border-gray-200 py-4">
        <button
          className="flex w-full justify-between items-center text-left"
          onClick={onClick}
        >
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <span className="ml-6 flex-shrink-0 text-sooch-gold">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </span>
        </button>
        {isOpen && (
          <div className="mt-3 pr-12">
            <p className="text-base text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    </AnimatedElement>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What areas of law does Sooch Law practice?",
      answer: "Sooch Law offers services in various legal fields including real estate law, personal injury claims, civil litigation, wills and estates, power of attorney, small claims, immigration, and family law. We provide comprehensive legal solutions tailored to each client's specific needs."
    },
    {
      question: "How do I schedule a consultation with a lawyer?",
      answer: "You can schedule a consultation by filling out our contact form on the website, calling our office at (416) 908 3300, or sending an email to kam@soochlaw.com. We offer free initial consultations to discuss your legal needs and how we can assist you."
    },
    {
      question: "What should I bring to my first meeting with a lawyer?",
      answer: "For your first meeting, please bring any relevant documents related to your legal matter, such as contracts, correspondence, court documents, medical records (for personal injury cases), or any other paperwork that might help us understand your situation better. Also, prepare a list of questions you may have."
    },
    {
      question: "How much do your legal services cost?",
      answer: "Our fees vary depending on the type and complexity of your legal matter. We strive to provide transparent pricing and will discuss all costs during your initial consultation. For certain services, we offer flat fee arrangements, while others may be billed hourly. We're committed to providing competitive rates while maintaining high-quality legal representation."
    },
    {
      question: "How long will my legal matter take to resolve?",
      answer: "The timeline for resolving legal matters varies significantly depending on the nature and complexity of your case. Some real estate transactions can be completed in a few weeks, while litigation cases may take months or even years to resolve. During your consultation, we'll provide a more specific timeline based on your particular situation."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Frequently Asked <span className="text-sooch-gold">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our legal services and processes.
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

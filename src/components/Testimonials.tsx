
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Nasir',
    quote: 'I have used Kam for various legal reasons, and he was knowledgeable with every matter I brought to the table. He was honest and upfront in regards to all costs and fees which were extremely competitive. Due to his availability and attention to detail with every matter, I would only be using Sooch Law for my future legal needs.',
  },
  {
    id: 2,
    name: 'Karim Moosa',
    quote: 'Great service and very efficient! Would definitely recommend him to family and friends. He was very easy to deal with and answered all my emails, and messages promptly. Thanks again, Kam!',
  },
  {
    id: 3,
    name: 'Drew Kulig',
    quote: 'Kam and his team helped me with my real estate sale and purchase legal process, and I could not have been happier. Their attention to detail, competitive pricing, prompt replies, and personable staff made the whole experience easy and stress-free. I would highly recommend Sooch Law for your next legal real estate needs.',
  },
  {
    id: 4,
    name: 'Alak Chanda',
    quote: 'This was my first time dealing with Mr. Sooch. I had purchased a property and had chosen to work with him as my real estate lawyer. He is above exceptional. He would respond to emails or phone calls even after hours. The price he quoted to me on phone is what he charged. Very reasonable and very professional. I would highly recommend him to anyone planning to purchase or sell property.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const visibleTestimonials = () => {
    // For desktop: show 3 testimonials, for mobile: show 1
    const isMobile = windowWidth < 768;
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      // Create array of 3 testimonials starting from currentIndex
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Client <span className="text-sooch-gold">Feedback</span>
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="relative">
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:block">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 text-gray-600 hover:text-sooch-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 text-gray-600 hover:text-sooch-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonials Grid/Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md relative"
              >
                <Quote className="absolute top-4 right-4 text-gray-200" size={32} />
                <p className="text-gray-700 mb-6 italic relative z-10">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center mt-8 md:hidden">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center mx-2 text-gray-600 hover:text-sooch-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center mx-2 text-gray-600 hover:text-sooch-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

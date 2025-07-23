import AnimatedElement from "@/components/AnimatedElement";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";

interface GoogleTestimonialsProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundColor?: string;
  textColor?: string;
}

const GoogleTestimonials = ({ 
  title = "Client Testimonials",
  subtitle = "See what our clients are saying about our legal services",
  ctaText = "Schedule Your Free Consultation",
  backgroundColor = "bg-slate-900",
  textColor = "text-white"
}: GoogleTestimonialsProps) => {
  const { reviews, loading, placeInfo } = useGoogleReviews();

  if (loading) {
    return (
      <section className={`py-16 ${backgroundColor} ${textColor}`}>
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${backgroundColor} ${textColor}`}>
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              {title.includes("Testimonials") ? (
                <>
                  {title.split(" ")[0]} <span className="text-sooch-gold">{title.split(" ")[1]}</span>
                </>
              ) : title}
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              {subtitle}
            </p>
            
            {/* Google Rating Summary */}
            {placeInfo && (
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-sm border">
                    <span className="text-xs font-bold text-blue-600">G</span>
                  </div>
                  <span className="text-lg font-semibold">{placeInfo.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < Math.floor(placeInfo.rating) 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : i < placeInfo.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-300">({placeInfo.total} reviews)</span>
                </div>
              </div>
            )}
            
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <Card className="bg-slate-800 border-slate-700 hover:border-sooch-gold transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-sooch-gold rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {review.author_name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{review.author_name}</h4>
                        <p className="text-xs text-gray-400">{review.relative_time_description}</p>
                      </div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center bg-white rounded-sm opacity-60">
                      <span className="text-xs font-bold text-blue-600">G</span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{review.text.length > 150 ? `${review.text.substring(0, 150)}...` : review.text}"
                  </p>

                  {/* Google Reviews Badge */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Google Review</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">{review.rating}/5</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedElement delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Join hundreds of satisfied clients who trust Sooch Law with their legal matters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.google.com/maps/search/Sooch+Law+Professional+Corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center bg-blue-600 rounded-sm mr-2">
                  <span className="text-xs font-bold text-white">G</span>
                </div>
                View All Google Reviews
              </a>
              <button 
                className="bg-sooch-gold hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {ctaText}
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default GoogleTestimonials; 
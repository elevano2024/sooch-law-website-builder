
import { useState } from "react";
import AnimatedElement from "@/components/AnimatedElement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Clock, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Real Estate",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Real Estate",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Get in <span className="text-law-primary">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our team of experienced real estate lawyers at Sooch Law is ready to assist you with all your legal needs. Contact us today for a consultation.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-law-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">(905) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-law-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday: By appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-law-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Service Areas</h3>
                    <p className="text-gray-600">Toronto, Mississauga, Oakville, Vaughan, Richmond Hill, and throughout Ontario</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2}>
            <div className="bg-law-tertiary p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair font-bold mb-6">Request a Callback</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(905) 123-4567"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-law-primary"
                      required
                    >
                      <option value="Real Estate">Real Estate Law</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Home Sale">Home Sale</option>
                      <option value="Refinancing">Mortgage Refinancing</option>
                      <option value="Title Transfer">Title Transfer</option>
                      <option value="Legal Advice">Legal Advice</option>
                    </select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="law-btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Request Callback</span>
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;

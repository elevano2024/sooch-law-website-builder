
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveMap from "./InteractiveMap";
import { toast } from "@/components/ui/sonner";
import emailjs from "emailjs-com";

// Updated EmailJS credentials
const EMAILJS_SERVICE_ID = "service_3zhhm5v";
const EMAILJS_TEMPLATE_ID = "template_iv56ydw";
const EMAILJS_USER_ID = "B6tdpocoFnOyBSx-O";  // This is the public key

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store form data in local storage (as a simple storage solution)
      const submissions = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
      const newSubmission = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      };
      submissions.push(newSubmission);
      localStorage.setItem("formSubmissions", JSON.stringify(submissions));
      
      // Format the data for the email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service_requested: formData.service,
        message: formData.message,
        submission_date: new Date().toLocaleString(),
        to_name: "Sooch Law Office",
        to_email: "soochkamalprit@gmail.com", // Ensure emails go only to this address
      };

      // Add detailed console logs for debugging
      console.log("Sending email with params:", templateParams);

      // Send owner notification email with form details
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log("Email send response:", response);
      console.log("Form submission email sent to owner");
      
      // Show success toast
      toast.success("Form submitted successfully! We'll contact you soon.", {
        description: "Your information has been received by our office.",
      });
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      
      // Show success message
      setSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mb-6">
              Book Your <span className="text-sooch-gold">Free Initial Consultation</span>
            </h2>
            <p className="text-gray-600 mb-8">
              We're here to help with your legal needs. Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6 mb-6">
              <div className="flex items-start">
                <Phone className="text-sooch-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">Tel: (416) 908 3300</p>
                  <p className="text-gray-600">Fax: 416 572 3808</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-sooch-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">soochkamalprit@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-sooch-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Office</h3>
                  <p className="text-gray-600">506-218 Export Blvd,</p>
                  <p className="text-gray-600">Mississauga, ON, L5S 0A7</p>
                  <p className="text-gray-600 mt-1">9am to 5pm | Monday to Friday</p>
                </div>
              </div>
            </div>
            
            {/* Interactive Map */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-md">
              <InteractiveMap height="200px" compact={true} />
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sooch-gold hover:text-sooch-dark transition-colors"
            >
              <Navigation size={18} className="mr-1" />
              <span>View Full Map</span>
            </Link>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">Your message has been sent successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Select
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="civil-litigation">Civil Litigation</option>
                    <option value="wills-estates">Wills and Estates</option>
                    <option value="power-of-attorney">Power of Attorney</option>
                    <option value="small-claims">Small Claims</option>
                    <option value="immigration">Immigration</option>
                    <option value="family-law">Family Law</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Please provide some details regarding your inquiry:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Please describe your legal needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                  {!isSubmitting && <Send size={18} className="ml-2" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import AnimatedElement from "./AnimatedElement";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              We Are <span className="text-sooch-gold">Sooch Law</span>
            </h2>
            <div className="w-24 h-1 bg-sooch-gold mx-auto"></div>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement delay={0.2}>
            <div>
              <p className="text-gray-700 mb-6 text-lg">
                Our law firm is dedicated to providing high-quality legal services to clients in the Greater Toronto Area and beyond. Founded by Kamalprit Sooch, Barrister, Solicitor, and Notary Public, our firm offers a wide range of legal services, including real estate law, personal injury, and civil litigation.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                At Sooch Law, we believe that every client deserves personalized attention and tailored legal solutions. That's why we take the time to understand our clients' unique needs and goals before developing a customized legal strategy. Whether you're an individual or a business owner, we are committed to helping you achieve your objectives and protect your interests.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.4}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-sooch-dark">Our Story</h3>
              <p className="text-gray-700 mb-6">
                At Sooch Law, we have been providing legal services to the Greater Toronto Area for several years. Our founder, Kamalprit Sooch, has a passion for helping clients navigate complex legal issues and has built a reputation for providing high-quality and reliable legal advice.
              </p>
              <p className="text-gray-700">
                We understand that legal matters can be stressful and overwhelming. That's why we are dedicated to providing clear and concise legal advice, keeping our clients informed throughout the entire legal process. We strive to make the legal process as smooth and stress-free as possible, so our clients can focus on what matters most.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;

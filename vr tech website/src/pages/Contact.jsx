import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { assets } from '../assets/Assets';
import { CheckCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle");


   
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending'); // Clear and show loading status
  
    try {
      const response = await fetch("https://ac-website-backend.onrender.com/api/send_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
  
      const data = await response.json();
      console.log("Success:", data);
  
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      setFormStatus('success'); // Show success status
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus('error'); // Show error status
    } finally {
      // Reset status to idle after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };
  

  useEffect (() => {
    console.log(formData)
  },[formData])
  

  // 3D Card Component
  const Card3D = ({ children, className = "" }) => (
    <div className={`group relative transform-gpu transition-all duration-500 hover:scale-105 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
        {children}
      </div>
    </div>
  );

  // Contact Info Card
  const ContactCard = ({ icon, title, info, link }) => (
    <Card3D className='bg-blue-400 rounded-lg'>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:rotate-12 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {link ? (
          <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors">
            {info}
          </a>
        ) : (
          <p className="text-white">{info}</p>
        )}
      </div>
    </Card3D>
  );

 

 
  const contactInfo = [
    {
      title: 'Call Us',
      info: '+91 9790811296',
      link: 'tel:+15551234567',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Email Us',
      info: 'Vrhvactech@gmail.com',
      link: 'mailto:Vrhvactech@gmail.com',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Visit Us',
      info: 'Pari Nagar, Anakaputhur, Chennai',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Emergency',
      info: '24/7 Emergency Service',
      link: 'tel:+18005559999',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0  bg-cover bg-center opacity-70">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover">
            <source src={assets.bac_video3}  type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              VR TECH HVAC <span className="text-blue-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300">
              State-of-the-art audio visual solutions for business, education, and entertainment
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <ContactCard
                key={index}
                icon={info.icon}
                title={info.title}
                info={info.info}
                link={info.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">Send Us a Message</h2>
              <p className="text-blue-800 mb-8">
                Fill out the form below and one of our climate control experts will get back to you within 24 hours.
              </p>
              
              <div className='bg-gray-500 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 shadow-xl'>
              <form  onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    Your Name
                  </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                      disabled={formStatus === 'submitting'}
                    />
                    </div>

                    <div className="group">
                  <label htmlFor="name" className="block text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    Phone Number
                  </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 988 900 453"
                      required
                      disabled={formStatus === 'submitting'}
                    />
                    </div>
                                     
                  </div>
                  <div className="group">
              <label htmlFor="email" className="block text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
                required
                disabled={formStatus === 'submitting'}
              />
              </div>
          
          <div className="group">
            <label htmlFor="subject" className="block text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="How can we help you?"
              required
              disabled={formStatus === 'submitting'}
            />
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Please describe your inquiry in detail..."
              required
              disabled={formStatus === 'submitting'}
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit"
              className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center gap-2 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={formStatus !== 'idle'}
            >
              {formStatus === 'idle' && (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
              
              {formStatus === 'submitting' && (
                <>
                  Sending...
                  <div 
                    className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                  />
                </>
              )}
              
              {formStatus === 'success' && (
                <>
                  Sent Successfully
                  <CheckCircle size={16} />
                </>
              )}
            </button>
          </div>
        </form>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-500  mb-6">Why Choose Vr Tech?</h2>
              <div className="space-y-6">
                <Card3D className='bg-blue-400 rounded-lg'>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
                      <p className="text-white">We respond to all inquiries within 24 hours and offer same-day emergency service.</p>
                    </div>
                  </div>
                </Card3D>
                
                <Card3D className='bg-blue-400 rounded-lg'>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                      <p className="text-white">Our certified technicians have years of experience with the latest smart HVAC technology.</p>
                    </div>
                  </div>
                </Card3D>
                
                <Card3D className='bg-blue-400 rounded-lg'>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
                      <p className="text-white">Get a comprehensive assessment of your climate control needs at no cost.</p>
                    </div>
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Card3D className="max-w-4xl mx-auto text-center bg-blue-400 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait for comfort issues to become bigger problems. Contact us today for expert climate control solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-500/30"
              >
                Call Now:+91 9790811296
              </a>
              <a 
                href="#contact-form"
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 text-white px-12 py-4 rounded-xl font-bold hover:bg-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </Card3D>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/Assets';
import WhatsappContact from '../components/WhatsappContact'

const Home = () => {
  // 3D Card Component
  const Card3D = ({ children, className = "" }) => (
    <div className={`group relative transform-gpu transition-all duration-500 hover:scale-105 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
        {children}
      </div>
    </div>
  );

  // Hero Card Component
  const HeroCard = ({ icon, title, description }) => (
    <Card3D className="h-full bg-blue-400 rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-300 transform group-hover:rotate-12 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </Card3D>
  );

  // Testimonial Card Component
  const TestimonialCard = ({ name, role, content, rating = 5 }) => (
    <Card3D className="h-full bg-blue-400 rounded-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">
          <span className="text-white font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-blue-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <p className="text-slate-300 italic">"{content}"</p>
    </Card3D>
  );

  const features = [
    {
      title: ' AC Installation & Setup',
      description: 'Expert installation services for all types of air conditioners in homes and businesses.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Energy-Efficient System Upgrades',
      description: 'We upgrade old AC units to modern, energy-saving models that lower your electricity bills.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '24/7 AC Repair & Support',
      description: 'Round-the-clock repair and maintenance services to keep your AC running smoothly.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: 'Surya',
      role: 'Homeowner',
      content: 'Service done by very best professional technician with latest equipment.',
      rating: 5
    },
    {
      name: 'Sai',
      role: 'Business Owner',
      content: 'CoolAir provided an excellent commercial solution for our office space.',
      rating: 4
    },
    {
      name: 'Manigandan',
      role: 'Property Manager',
      content: 'Managing multiple properties requires reliable partners. CoolAir delivers consistently.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
        {/* Gradient background (always visible) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>

        {/* Image visible on sm and above, hidden on mobile */}
        <img
          className="hidden sm:block w-full sm:w-80 md:w-full"
          src={assets.cooling_bac}
          alt=""
        />
        {/* White background for mobile (only visible on screens < sm) */}
        <div className="block sm:hidden absolute inset-0 bg-white"></div>
      </div>

        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 ml-2 sm:ml-8 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                 Your Comfort <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Priority
                </span> 
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-lg">
              Delivering Reliable and Affordable AC Installation, Repair & Maintenance Services for Homes and Businesses              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/services" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-500/30"
                >
                  Explore Services
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <Card3D className="max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                      <img className='rounded-lg ' src={assets.ac_service} alt="" />
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4">Why Choose VR Tech ?</h2>
            <p className="text-blue-800 max-w-2xl mx-auto text-lg">
            From initial consultation and installation to annual servicing and emergency repairs, we provide end-to-end AC solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <HeroCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200 to-cyan-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-white "></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Card3D className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to connect with us ?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've upgraded to proper service management.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-500/30"
            >
              Start Your Journey
            </Link>
          </Card3D>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4">What Our Clients Say</h2>
            <p className="text-blue-800 max-w-2xl mx-auto text-lg">
              Real experiences from real customers who trust CoolAir for their climate control needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      <WhatsappContact/>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/Assets';

const About = () => {
  // 3D Card Component
  const Card3D = ({ children, className = "" }) => (
    <div className={`group relative transform-gpu transition-all duration-500 hover:scale-105 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
        {children}
      </div>
    </div>
  );

  // Team Member Card
  const TeamCard = ({ name, role, bio, initial }) => (
    <Card3D className="h-full">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:rotate-12 transition-all duration-500">
          <span className="text-white font-bold text-2xl">{initial}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-blue-400 mb-4">{role}</p>
        <p className="text-slate-400">{bio}</p>
      </div>
    </Card3D>
  );

  // Value Card
  const ValueCard = ({ icon, title, description }) => (
    <Card3D className="h-full bg-blue-400 rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:rotate-12 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </Card3D>
  );

  const teamMembers = [
    {
      name: 'Daniel Wilson',
      role: 'CEO & Founder',
      initial: 'DW',
      bio: 'With over 20 years in the HVAC industry, Daniel founded CoolAir with a vision to revolutionize climate control.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Technical Director',
      initial: 'SJ',
      bio: 'Sarah leads our engineering team, bringing innovation and technical expertise to every project.'
    },
    {
      name: 'Robert Chen',
      role: 'Operations Manager',
      initial: 'RC',
      bio: 'Robert ensures seamless operations and customer satisfaction across all our service locations.'
    },
    {
      name: 'Lisa Martinez',
      role: 'Customer Relations',
      initial: 'LM',
      bio: 'Lisa builds lasting relationships with our clients, ensuring every customer receives personalized attention.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Advancing climate control technology for better efficiency and comfort.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Quality',
      description: 'Delivering superior products and services that exceed customer expectations.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly solutions that reduce environmental impact.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Customer Focus',
      description: 'Prioritizing customer needs and satisfaction in every interaction.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
            <source src={assets.bac_video}  type="video/mp4" />
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
      
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Card3D>
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <img className=' w-auto' src={assets.about} alt="" />
                  </div>
                </div>
              </Card3D>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">Our Story</h2>
              <div className="space-y-4 text-blue-800">
                <p>
                VR Tech was founded in 2024 with a mission to provide reliable, efficient, and affordable air conditioning services to homes and businesses.
                From the start, our goal has been to ensure every client enjoys cool, comfortable environments
                 through expert installation, maintenance, and repair of AC systems.
                </p>
                <p>
                Our dedicated team of technicians is trained to handle everything from routine maintenance to emergency repairs, using the latest tools
                 and techniques to guarantee optimal performance and energy efficiency.
                </p>
                <p>
                We are a trustworthy company committed to delivering honest, 
                reliable, and high-quality AC services that our customers can depend on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">Mission & Vision</h2>
            <p className="text-blue-800 max-w-2xl mx-auto">
              Our guiding principles that drive innovation and excellence in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card3D className="h-full bg-blue-400 rounded-lg">
              <div className="text-center ">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300">
                To revolutionize climate control services by delivering energy-efficient, reliable, and innovative
                 AC solutions that enhance comfort while protecting the environment for future generations.
                </p>
              </div>
            </Card3D>
            
            <Card3D className="h-full bg-blue-400 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300">
                To be a trusted global leader in smart and sustainable climate solutions,
                 ensuring perfect indoor comfort for every home and business with integrity and excellence.
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </section>
      
     
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">Our Core Values</h2>
            <p className="text-blue-800 max-w-2xl mx-auto">
              The fundamental principles that guide our decisions and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300/50 to-cyan-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Card3D className="max-w-4xl mx-auto text-center bg-blue-400 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Service?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing climate control. Discover how CoolAir can transform your space.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-500/30"
            >
              Get Started Today
            </Link>
          </Card3D>
        </div>
      </section>
    </div>
  );
};

export default About;
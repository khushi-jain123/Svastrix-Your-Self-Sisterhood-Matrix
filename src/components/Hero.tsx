import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Users, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232B2E7F' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Logo */}
          <div className={`inline-flex items-center justify-center w-24 h-24 mb-8 rounded-2xl bg-gradient-to-br from-[#2B2E7F] to-[#00A89C] transition-all duration-800 ease-out transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="animate-pulse">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-[#2B2E7F] mb-6 font-['Poppins'] transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Your Self &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#00A89C]">
              Sisterhood
            </span>
            <br />Matrix
          </h1>

          {/* Tagline */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            A mobile-first safety hub and micro-community for women and non-binary folks.
            Empowerment tools, resources, and sisterhood—all in one beautiful space.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="group bg-[#2B2E7F] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:bg-[#1f1f5a] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Shield className="w-5 h-5" />
              <span>Open Svastrix</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-[#2B2E7F] text-[#2B2E7F] px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:bg-[#2B2E7F] hover:text-white transform hover:scale-105 transition-all duration-200">
              <BookOpen className="w-5 h-5" />
              <span>Explore Resources</span>
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'Safety First', desc: 'Emergency tools and safe space locator' },
              { icon: Users, title: 'Community', desc: 'Anonymous support and shared wisdom' },
              { icon: BookOpen, title: 'Resources', desc: 'Curated guides, hotlines, and tools' }
            ].map((feature, index) => (
              <div key={index} className={`glass-card p-6 text-center transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#00A89C]">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2E7F] mb-2 font-['Poppins']">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
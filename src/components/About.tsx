import React from 'react';
import { Heart, Users, Shield, BookOpen, Target, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            About Svastrix
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Self & Sisterhood Matrix—a safe space where women and non-binary folks
            can find support, resources, and community in their journey toward empowerment.
          </p>
        </div>

        {/* Mission */}
        <div className="glass-card p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-[#2B2E7F] to-[#00A89C]">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2B2E7F] font-['Poppins']">Our Mission</h3>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe every woman and non-binary person deserves access to safety tools, 
              supportive community, and empowering resources. Svastrix bridges the gap between 
              immediate safety needs and long-term personal growth through technology, 
              community wisdom, and curated resources.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform combines emergency safety features with daily empowerment tools, 
              creating a comprehensive support system that grows stronger with every user who 
              joins our sisterhood.
            </p>
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Safety First',
              description: 'Emergency SOS, location sharing, safe spot mapping, and crisis resources always at your fingertips.'
            },
            {
              icon: Users,
              title: 'Community Support',
              description: 'Anonymous helpboard for asking questions, sharing wisdom, and supporting each other through challenges.'
            },
            {
              icon: BookOpen,
              title: 'Curated Resources',
              description: 'Vetted helplines, grants, courses, legal aid, and downloadable guides for every aspect of life.'
            },
            {
              icon: Heart,
              title: 'Daily Empowerment',
              description: 'Affirmations, skill tips, challenges, and mood tracking to support your mental wellness journey.'
            },
            {
              icon: Target,
              title: 'Goal Achievement',
              description: 'Tools and resources to help you pursue career goals, financial independence, and personal growth.'
            },
            {
              icon: Users,
              title: 'Sisterhood Stories',
              description: 'Inspiring journeys from real women who overcame challenges and achieved their dreams.'
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#00A89C]">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#2B2E7F] mb-3 font-['Poppins']">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How to Help */}
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
              How You Can Help
            </h3>
            <p className="text-lg text-gray-600">
              Svastrix grows stronger with community involvement. Here's how you can contribute:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-[#2B2E7F]">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#2B2E7F] mb-2">Share Resources</h4>
              <p className="text-gray-600">Know of helpful organizations, grants, or programs? Submit them to our resource library.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-[#FF6B6B]">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#2B2E7F] mb-2">Volunteer</h4>
              <p className="text-gray-600">Help moderate our community, review resources, or provide mentorship to other users.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-[#00A89C]">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#2B2E7F] mb-2">Spread Awareness</h4>
              <p className="text-gray-600">Share Svastrix with women and non-binary folks who could benefit from our community.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#2B2E7F] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1f1f5a] transition-colors">
              Get Involved
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Questions or Feedback?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We'd love to hear from you. Your input helps us build a better platform for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 bg-[#FF6B6B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#ff5252] transition-colors">
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
            <button className="inline-flex items-center space-x-2 border-2 border-[#2B2E7F] text-[#2B2E7F] px-6 py-3 rounded-xl font-medium hover:bg-[#2B2E7F] hover:text-white transition-colors">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { BarChart3, Users, MapPin, Shield, Share2, TrendingUp } from 'lucide-react';

const Analytics: React.FC = () => {
  const stats = [
    { label: 'Total Visitors', value: '12,847', icon: Users, change: '+23%' },
    { label: 'SOS Clicks', value: '156', icon: Shield, change: '+8%' },
    { label: 'Map Interactions', value: '3,291', icon: MapPin, change: '+15%' },
    { label: 'Resources Shared', value: '1,089', icon: Share2, change: '+31%' },
  ];

  const weeklyData = [
    { day: 'Mon', visitors: 1850, sos: 12, resources: 145 },
    { day: 'Tue', visitors: 2100, sos: 8, resources: 167 },
    { day: 'Wed', visitors: 1950, sos: 15, resources: 189 },
    { day: 'Thu', visitors: 2200, sos: 6, resources: 201 },
    { day: 'Fri', visitors: 2350, sos: 18, resources: 178 },
    { day: 'Sat', visitors: 1800, sos: 22, resources: 134 },
    { day: 'Sun', visitors: 1650, sos: 9, resources: 156 }
  ];

  const resourceCategories = [
    { category: 'Safety Resources', views: 3420, shares: 234 },
    { category: 'Career Support', views: 2890, shares: 189 },
    { category: 'Mental Health', views: 2650, shares: 156 },
    { category: 'Legal Aid', views: 1980, shares: 134 },
    { category: 'Financial Help', views: 1750, shares: 98 }
  ];

  const userFeedback = [
    { type: 'Positive', count: 234, percentage: 78 },
    { type: 'Neutral', count: 45, percentage: 15 },
    { type: 'Needs Improvement', count: 21, percentage: 7 }
  ];

  return (
    <section className="py-16 px-4 min-h-screen bg-gradient-to-br from-white to-[#FFF4E6]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Analytics Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Understanding our community's needs and impact
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#2B2E7F] to-[#00A89C]">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#2B2E7F] mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm mb-2">{stat.label}</div>
              <div className="inline-flex items-center text-green-600 text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Weekly Traffic */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-[#2B2E7F] mb-6 font-['Poppins']">
              Weekly Activity
            </h3>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 w-12">{day.day}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#2B2E7F] to-[#00A89C] h-2 rounded-full"
                        style={{ width: `${(day.visitors / 2500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{day.visitors.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Performance */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-[#2B2E7F] mb-6 font-['Poppins']">
              Resource Performance
            </h3>
            <div className="space-y-4">
              {resourceCategories.map((resource, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{resource.category}</span>
                    <span className="text-sm text-gray-500">{resource.views} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-[#FF6B6B] h-1.5 rounded-full"
                        style={{ width: `${(resource.views / 3500) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{resource.shares} shares</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Feedback */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold text-[#2B2E7F] mb-6 font-['Poppins']">
            User Feedback Summary
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {userFeedback.map((feedback, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-green-100 text-green-600' :
                  index === 1 ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-red-100 text-red-600'
                }`}>
                  <span className="text-2xl font-bold">{feedback.percentage}%</span>
                </div>
                <h4 className="font-semibold text-gray-700">{feedback.type}</h4>
                <p className="text-sm text-gray-500">{feedback.count} responses</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Based on {userFeedback.reduce((sum, item) => sum + item.count, 0)} user feedback submissions
            </p>
            <button className="bg-[#2B2E7F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1f1f5a] transition-colors">
              View Detailed Feedback
            </button>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#2B2E7F] mb-8 font-['Poppins']">
            Community Impact
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-[#FF6B6B] mb-2">4.8★</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-[#00A89C] mb-2">89%</div>
              <div className="text-sm text-gray-600">Return Users</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-[#2B2E7F] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-[#FF6B6B] mb-2">156</div>
              <div className="text-sm text-gray-600">Lives Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
import React, { useState } from 'react';
import { MessageCircle, Heart, Tag, Plus, Search } from 'lucide-react';

const CommunityHelpboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const categories = [
    { id: 'all', label: 'All Topics', color: 'bg-gray-500' },
    { id: 'career', label: 'Career', color: 'bg-blue-500' },
    { id: 'safety', label: 'Safety', color: 'bg-red-500' },
    { id: 'health', label: 'Health', color: 'bg-green-500' },
    { id: 'finance', label: 'Finance', color: 'bg-yellow-500' },
    { id: 'expression', label: 'Expression', color: 'bg-purple-500' }
  ];

  const questions = [
    {
      id: 1,
      question: "How do I negotiate salary as a woman in tech?",
      category: 'career',
      upvotes: 24,
      responses: 8,
      tags: ['salary', 'negotiation', 'tech'],
      preview: "Research your market value thoroughly and practice your pitch..."
    },
    {
      id: 2,
      question: "What are some discrete ways to share location with friends?",
      category: 'safety',
      upvotes: 45,
      responses: 12,
      tags: ['location', 'safety', 'apps'],
      preview: "Use Find My Friends, Google Maps sharing, or safety apps like..."
    },
    {
      id: 3,
      question: "Resources for women's mental health during career transitions?",
      category: 'health',
      upvotes: 32,
      responses: 15,
      tags: ['mental-health', 'career', 'transition'],
      preview: "Career changes can be stressful. Here are therapist-recommended..."
    },
    {
      id: 4,
      question: "How to build an emergency fund on a tight budget?",
      category: 'finance',
      upvotes: 67,
      responses: 20,
      tags: ['emergency-fund', 'budgeting', 'savings'],
      preview: "Start small with the 52-week challenge or automatic transfers..."
    }
  ];

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Community Helpboard
          </h2>
          <p className="text-lg text-gray-600">
            Anonymous support and shared wisdom from our community
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B2E7F] focus:ring-2 focus:ring-[#2B2E7F]/20 outline-none"
            />
          </div>

          {/* Submit Question Button */}
          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="bg-[#FF6B6B] text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:bg-[#ff5252] transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Ask Question</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#2B2E7F] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${category.color}`} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Submit Form */}
        {showSubmitForm && (
          <div className="glass-card p-6 mb-8">
            <h3 className="text-xl font-semibold text-[#2B2E7F] mb-4 font-['Poppins']">
              Ask Your Question Anonymously
            </h3>
            <div className="space-y-4">
              <textarea
                placeholder="What would you like to ask the community?"
                rows={4}
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#2B2E7F] focus:ring-2 focus:ring-[#2B2E7F]/20 outline-none resize-none"
              />
              <select className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#2B2E7F] outline-none">
                <option>Select Category</option>
                {categories.slice(1).map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
              <div className="flex gap-3">
                <button className="bg-[#2B2E7F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1f1f5a] transition-colors">
                  Submit Question
                </button>
                <button 
                  onClick={() => setShowSubmitForm(false)}
                  className="text-gray-600 px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((question) => (
            <div key={question.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#2B2E7F] mb-2 font-['Poppins']">
                    {question.question}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {question.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center space-x-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{question.preview}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-[#FF6B6B] transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{question.upvotes}</span>
                    </button>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{question.responses} responses</span>
                    </div>
                  </div>
                </div>
                
                <div className={`w-4 h-4 rounded-full ${categories.find(c => c.id === question.category)?.color}`} />
              </div>
              
              <button className="text-[#2B2E7F] font-medium hover:underline">
                Read full discussion →
              </button>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityHelpboard;
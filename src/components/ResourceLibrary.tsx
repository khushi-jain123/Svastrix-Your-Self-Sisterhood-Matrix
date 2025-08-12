import React, { useState } from 'react';
import { Search, Filter, Download, Share2, Phone, Globe, FileText } from 'lucide-react';

const ResourceLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'helplines', label: 'Helplines' },
    { id: 'grants', label: 'Grants & Funding' },
    { id: 'courses', label: 'Courses & Training' },
    { id: 'legal', label: 'Legal Aid' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'career', label: 'Career Support' }
  ];

  const resources = [
    {
      id: 1,
      title: "National Domestic Violence Hotline",
      description: "24/7 confidential support for domestic violence survivors",
      category: 'helplines',
      type: 'hotline',
      contact: "1-800-799-7233",
      website: "thehotline.org",
      availability: "24/7",
      tags: ['domestic violence', 'crisis', 'support']
    },
    {
      id: 2,
      title: "Women's Small Business Grants 2025",
      description: "Comprehensive list of grants and funding opportunities for women entrepreneurs",
      category: 'grants',
      type: 'document',
      downloadUrl: "/resources/womens-business-grants-2025.pdf",
      website: "sba.gov/women",
      tags: ['business', 'funding', 'entrepreneurship']
    },
    {
      id: 3,
      title: "Coding Bootcamps for Women",
      description: "Scholarships and programs specifically designed for women entering tech",
      category: 'courses',
      type: 'program',
      website: "womenwhocode.com",
      tags: ['tech', 'programming', 'career change']
    },
    {
      id: 4,
      title: "Legal Aid for Women",
      description: "Free and low-cost legal services for women in need",
      category: 'legal',
      type: 'service',
      contact: "1-866-563-4535",
      website: "legalaidforwomen.org",
      tags: ['legal', 'free services', 'advocacy']
    },
    {
      id: 5,
      title: "Mental Health First Aid Training",
      description: "Learn how to help someone developing a mental health problem",
      category: 'health',
      type: 'course',
      website: "mentalhealthfirstaid.org",
      tags: ['mental health', 'training', 'first aid']
    },
    {
      id: 6,
      title: "Resume Workshop for Career Changers",
      description: "Free monthly workshops on crafting resumes for career transitions",
      category: 'career',
      type: 'workshop',
      website: "careerchange.org",
      tags: ['resume', 'career transition', 'workshop']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'hotline': return Phone;
      case 'document': return FileText;
      case 'program': return Globe;
      case 'service': return Globe;
      case 'course': return FileText;
      case 'workshop': return Globe;
      default: return Globe;
    }
  };

  const shareResource = (resource: any) => {
    const shareText = `Check out this resource: ${resource.title} - ${resource.website || resource.contact}`;
    
    if (navigator.share) {
      navigator.share({ text: shareText });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Resource link copied to clipboard!');
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Resource Library
          </h2>
          <p className="text-lg text-gray-600">
            Curated resources, helplines, grants, and tools to support your journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B2E7F] focus:ring-2 focus:ring-[#2B2E7F]/20 outline-none"
            />
          </div>
          
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B2E7F] focus:ring-2 focus:ring-[#2B2E7F]/20 outline-none bg-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const Icon = getResourceIcon(resource.type);
            
            return (
              <div key={resource.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#2B2E7F] to-[#00A89C]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm text-gray-500 capitalize">
                      {resource.type}
                    </div>
                  </div>
                  
                  {resource.availability && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.availability}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-[#2B2E7F] mb-3 font-['Poppins']">
                  {resource.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  {resource.contact && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-[#2B2E7F] font-medium">{resource.contact}</span>
                    </div>
                  )}
                  
                  {resource.website && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <a href={`https://${resource.website}`} className="text-[#00A89C] hover:underline" target="_blank" rel="noopener noreferrer">
                        {resource.website}
                      </a>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  {resource.downloadUrl && (
                    <button className="flex items-center space-x-1 bg-[#2B2E7F] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#1f1f5a] transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  )}
                  
                  <button 
                    onClick={() => shareResource(resource)}
                    className="flex items-center space-x-1 border border-[#2B2E7F] text-[#2B2E7F] px-3 py-2 rounded-lg text-sm hover:bg-[#2B2E7F] hover:text-white transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Quick Access */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#2B2E7F] mb-6 text-center font-['Poppins']">
            Quick Access
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Crisis Hotline', number: '988', color: 'bg-red-500' },
              { label: 'Domestic Violence', number: '1-800-799-7233', color: 'bg-purple-500' },
              { label: 'Women\'s Health', number: '1-800-994-9662', color: 'bg-green-500' },
              { label: 'Legal Aid', number: '1-866-563-4535', color: 'bg-blue-500' }
            ].map((item, index) => (
              <a
                key={index}
                href={`tel:${item.number}`}
                className={`${item.color} text-white p-4 rounded-xl hover:opacity-90 transition-opacity text-center`}
              >
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs opacity-90">{item.number}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;
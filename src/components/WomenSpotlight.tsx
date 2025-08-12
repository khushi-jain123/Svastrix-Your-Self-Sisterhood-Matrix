import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const WomenSpotlight: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      achievement: "Founded a nonprofit that has helped 10,000+ women enter tech careers",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "From waitressing to founding TechSisters, Sarah's journey proves that it's never too late to pivot into tech. Her organization now provides free coding bootcamps and mentorship.",
      readMoreUrl: "#"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      achievement: "Escaped domestic violence and became a successful lawyer advocating for survivors",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "After leaving an abusive relationship with her two children, Maria put herself through law school. She now runs a legal clinic providing free services to domestic violence survivors.",
      readMoreUrl: "#"
    },
    {
      id: 3,
      name: "Aisha Patel",
      achievement: "Built a mental health app used by over 1 million women worldwide",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Struggling with anxiety after immigration, Aisha couldn't find culturally sensitive mental health resources. So she created MindfulMe, now helping women globally with therapy and meditation.",
      readMoreUrl: "#"
    },
    {
      id: 4,
      name: "Jennifer Kim",
      achievement: "Single mother who earned her PhD and became a climate change researcher",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Raising three kids alone while earning her doctorate, Jennifer's research on urban sustainability has influenced policy in 15 major cities. She proves that motherhood and career excellence can coexist.",
      readMoreUrl: "#"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[currentStory];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#2B2E7F]/5 to-[#00A89C]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Women in Spotlight
          </h2>
          <p className="text-lg text-gray-600">
            Celebrating incredible journeys of strength, resilience, and success
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Story Card */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#00A89C] rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2B2E7F] mb-3 font-['Poppins']">
                  {story.name}
                </h3>
                
                <p className="text-lg font-semibold text-[#FF6B6B] mb-4">
                  {story.achievement}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {story.story}
                </p>
                
                <button className="inline-flex items-center space-x-2 bg-[#2B2E7F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1f1f5a] transition-colors">
                  <span>Read Full Story</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevStory}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-gray-600 hover:text-[#2B2E7F]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-[#2B2E7F]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-gray-600 hover:text-[#2B2E7F]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Story Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentStory + 1} of {stories.length}
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Have an inspiring story to share?
          </p>
          <button className="bg-[#FF6B6B] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#ff5252] transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default WomenSpotlight;
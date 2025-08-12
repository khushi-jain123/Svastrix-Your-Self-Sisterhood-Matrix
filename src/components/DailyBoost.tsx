import React, { useState, useEffect } from 'react';
import { Heart, Lightbulb, Target, Share2, RotateCcw } from 'lucide-react';

const DailyBoost: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const boostCards = [
    {
      type: 'Affirmation',
      icon: Heart,
      content: "You are stronger than you know, braver than you feel, and more loved than you imagine.",
      action: "Take a deep breath and repeat this to yourself",
      color: 'from-pink-400 to-rose-500'
    },
    {
      type: 'Skill Tip',
      icon: Lightbulb,
      content: "Practice the 'gray rock' method: Be uninteresting and unresponsive to difficult people.",
      action: "Use this technique when dealing with toxic interactions",
      color: 'from-amber-400 to-orange-500'
    },
    {
      type: 'Tiny Challenge',
      icon: Target,
      content: "Send a supportive message to a friend who might need encouragement today.",
      action: "Small acts of kindness create ripples of positivity",
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  const nextCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % boostCards.length);
      setIsFlipping(false);
    }, 300);
  };

  const shareCard = () => {
    const card = boostCards[currentCard];
    const shareText = `${card.type}: ${card.content} - Svastrix`;
    
    if (navigator.share) {
      navigator.share({ text: shareText });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard!');
    }
  };

  // Auto-rotate cards every 10 seconds
  useEffect(() => {
    const interval = setInterval(nextCard, 10000);
    return () => clearInterval(interval);
  }, []);

  const card = boostCards[currentCard];
  const Icon = card.icon;

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-[#FFF4E6]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Daily Boost
          </h2>
          <p className="text-lg text-gray-600">
            Your daily dose of empowerment and wisdom
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Card */}
          <div className={`glass-card p-8 md:p-12 text-center transition-all duration-300 transform ${
            isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
          }`}>
            {/* Card Header */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className={`p-3 rounded-full bg-gradient-to-r ${card.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B2E7F] font-['Poppins']">
                {card.type}
              </h3>
            </div>

            {/* Card Content */}
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
              "{card.content}"
            </blockquote>

            <p className="text-gray-600 mb-8">
              {card.action}
            </p>

            {/* Card Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={shareCard}
                className="flex items-center space-x-2 bg-[#FF6B6B] text-white px-6 py-3 rounded-xl hover:bg-[#ff5252] transition-colors duration-200 font-medium"
              >
                <Share2 className="w-4 h-4" />
                <span>Share This</span>
              </button>
              <button 
                onClick={nextCard}
                className="flex items-center space-x-2 border-2 border-[#2B2E7F] text-[#2B2E7F] px-6 py-3 rounded-xl hover:bg-[#2B2E7F] hover:text-white transition-colors duration-200 font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Next Boost</span>
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {boostCards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentCard(index);
                    setIsFlipping(false);
                  }, 150);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentCard ? 'bg-[#2B2E7F]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBoost;
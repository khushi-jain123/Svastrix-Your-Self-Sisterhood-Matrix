import React, { useState, useEffect } from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [weekData, setWeekData] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const moods = [
    { emoji: '😢', label: 'Struggling', value: 1, color: 'text-red-500' },
    { emoji: '😕', label: 'Difficult', value: 2, color: 'text-orange-500' },
    { emoji: '😐', label: 'Okay', value: 3, color: 'text-yellow-500' },
    { emoji: '😊', label: 'Good', value: 4, color: 'text-green-500' },
    { emoji: '😄', label: 'Amazing', value: 5, color: 'text-emerald-500' }
  ];

  useEffect(() => {
    // Load existing mood data from localStorage
    const savedData = localStorage.getItem('moodData');
    if (savedData) {
      setWeekData(JSON.parse(savedData));
    } else {
      setWeekData([3, 2, 4, 3, 4, 5, 4]); // Sample data
    }
  }, []);

  const handleMoodSelect = (moodValue: number) => {
    setSelectedMood(moodValue);
    
    // Add to week data
    const newWeekData = [...weekData.slice(-6), moodValue];
    setWeekData(newWeekData);
    localStorage.setItem('moodData', JSON.stringify(newWeekData));

    // Show confetti for positive moods
    if (moodValue >= 4) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    // Auto-clear selection after 2 seconds
    setTimeout(() => setSelectedMood(null), 2000);
  };

  const getStreakCount = () => {
    let streak = 0;
    for (let i = weekData.length - 1; i >= 0; i--) {
      if (weekData[i] >= 4) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const averageMood = weekData.length > 0 ? 
    (weekData.reduce((sum, mood) => sum + mood, 0) / weekData.length).toFixed(1) : '0';

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#FFF4E6] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Mood Tracker
          </h2>
          <p className="text-lg text-gray-600">
            Track your emotional journey and celebrate your progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mood Selection */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-[#2B2E7F] mb-6 text-center font-['Poppins']">
              How are you feeling today?
            </h3>

            <div className="grid grid-cols-5 gap-4 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className={`group flex flex-col items-center space-y-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedMood === mood.value
                      ? 'border-[#2B2E7F] bg-[#2B2E7F]/10 scale-105'
                      : 'border-gray-200 hover:border-[#2B2E7F]/50 hover:scale-105'
                  }`}
                >
                  <span className="text-3xl">{mood.emoji}</span>
                  <span className={`text-xs font-medium ${mood.color}`}>
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>

            {selectedMood && (
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <span>✨</span>
                  <span className="font-medium">Mood logged!</span>
                </div>
              </div>
            )}
          </div>

          {/* Mood Analytics */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-[#2B2E7F] mb-6 font-['Poppins']">
              Your Journey
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-[#2B2E7F]/10 to-[#00A89C]/10 rounded-xl">
                <div className="text-2xl font-bold text-[#2B2E7F]">{averageMood}</div>
                <div className="text-sm text-gray-600">Week Average</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#FF6B6B]/10 to-[#00A89C]/10 rounded-xl">
                <div className="text-2xl font-bold text-[#FF6B6B]">{getStreakCount()}</div>
                <div className="text-sm text-gray-600">Good Days Streak</div>
              </div>
            </div>

            {/* Week Chart */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" />
                <span>This Week</span>
              </div>
              
              <div className="flex items-end space-x-2 h-16">
                {weekData.slice(-7).map((mood, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-[#2B2E7F] to-[#00A89C] rounded-t opacity-80"
                    style={{ height: `${(mood / 5) * 100}%` }}
                    title={`Day ${index + 1}: ${mood}/5`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {getStreakCount() >= 3 && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                  <span>🎉</span>
                  <span className="font-medium">Great streak! Keep it up!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    fontSize: `${Math.random() * 20 + 10}px`
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodTracker;
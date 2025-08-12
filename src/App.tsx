import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SafetyPanel from './components/SafetyPanel';
import DailyBoost from './components/DailyBoost';
import CommunityHelpboard from './components/CommunityHelpboard';
import ResourceLibrary from './components/ResourceLibrary';
import MoodTracker from './components/MoodTracker';
import WomenSpotlight from './components/WomenSpotlight';
import About from './components/About';
import Analytics from './components/Analytics';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4E6] to-[#F0F9FF]">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="relative">
        {currentPage === 'home' && (
          <>
            <Hero />
            <SafetyPanel />
            <DailyBoost />
            <MoodTracker />
            <WomenSpotlight />
          </>
        )}
        {currentPage === 'safety' && <SafetyPanel />}
        {currentPage === 'community' && <CommunityHelpboard />}
        {currentPage === 'resources' && <ResourceLibrary />}
        {currentPage === 'about' && <About />}
        {currentPage === 'analytics' && <Analytics />}
      </main>
    </div>
  );
}

export default App;
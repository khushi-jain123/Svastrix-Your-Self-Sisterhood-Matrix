import React, { useState } from 'react';
import { Menu, X, Shield, Heart, Users, BookOpen, Info, BarChart3 } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'about', label: 'About', icon: Info },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-[#2B2E7F]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#2B2E7F] to-[#00A89C] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-[#2B2E7F] font-['Poppins']">
              Svastrix
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-[#2B2E7F] text-white'
                      : 'text-[#2B2E7F] hover:bg-[#2B2E7F]/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#2B2E7F]/10 text-[#2B2E7F]"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-[#2B2E7F] text-white'
                      : 'text-[#2B2E7F] hover:bg-[#2B2E7F]/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
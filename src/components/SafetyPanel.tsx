import React, { useState, useEffect } from 'react';
import { AlertTriangle, Phone, MapPin, Share2, Clock } from 'lucide-react';

const SafetyPanel: React.FC = () => {
  const [emergencyCountdown, setEmergencyCountdown] = useState(0);
  const [userLocation, setUserLocation] = useState<GeolocationPosition | null>(null);
  const [countryCode, setCountryCode] = useState('US');

  // Emergency numbers by country
  const emergencyNumbers = {
    'US': { police: '911', domestic: '1-800-799-7233' },
    'IN': { police: '100', women: '1091' },
    'UK': { police: '999', domestic: '0808 2000 247' },
    'CA': { police: '911', women: '1-866-863-0511' }
  };

  useEffect(() => {
    // Get user location for emergency services
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation(position),
        (error) => console.log('Location access denied')
      );
    }

    // Simulate country detection (would use IP geolocation in production)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setCountryCode(data.country_code))
      .catch(() => setCountryCode('US'));
  }, []);

  const handleSOSPress = () => {
    setEmergencyCountdown(10);
    const interval = setInterval(() => {
      setEmergencyCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Simulate emergency contact
          alert('Emergency services contacted. Stay safe!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const shareLocation = () => {
    if (userLocation) {
      const { latitude, longitude } = userLocation.coords;
      const message = `I need help! My location: https://maps.google.com/?q=${latitude},${longitude}`;
      
      if (navigator.share) {
        navigator.share({ text: message });
      } else {
        navigator.clipboard.writeText(message);
        alert('Location copied to clipboard!');
      }
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2E7F] mb-4 font-['Poppins']">
            Safety Quick Access
          </h2>
          <p className="text-lg text-gray-600">
            Emergency tools and resources at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SOS Panel */}
          <div className="glass-card p-8 text-center relative overflow-hidden">
            {emergencyCountdown > 0 && (
              <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 animate-pulse mb-2">
                    {emergencyCountdown}
                  </div>
                  <p className="text-red-600 font-semibold">Contacting emergency services...</p>
                  <button 
                    onClick={() => setEmergencyCountdown(0)}
                    className="mt-4 px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="relative z-10">
              <button 
                onClick={handleSOSPress}
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-200 animate-pulse"
                disabled={emergencyCountdown > 0}
              >
                <AlertTriangle className="w-16 h-16 text-white" />
              </button>
              
              <h3 className="text-2xl font-bold text-[#2B2E7F] mb-2 font-['Poppins']">
                Emergency SOS
              </h3>
              <p className="text-gray-600 mb-6">
                Press and hold for 3 seconds to contact emergency services
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>Police: {emergencyNumbers[countryCode as keyof typeof emergencyNumbers]?.police || '911'}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>Support: {emergencyNumbers[countryCode as keyof typeof emergencyNumbers]?.women || 'Available'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Sharing */}
          <div className="glass-card p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-[#00A89C] to-[#FF6B6B]">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B2E7F] mb-2 font-['Poppins']">
                Share Location
              </h3>
              <p className="text-gray-600 mb-6">
                Quickly share your current location with trusted contacts
              </p>
            </div>

            <button 
              onClick={shareLocation}
              className="w-full bg-[#00A89C] text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#008A7E] transition-colors duration-200 mb-6"
            >
              <Share2 className="w-5 h-5" />
              <span>Share My Location</span>
            </button>

            {/* Safe Spots Map Placeholder */}
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Safe Spots Near You</p>
              <p className="text-xs text-gray-500 mt-1">Police stations, hospitals, 24/7 stores</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Call Police', number: '911', color: 'bg-red-500' },
            { label: 'Women Helpline', number: '1091', color: 'bg-purple-500' },
            { label: 'Domestic Violence', number: '1800', color: 'bg-orange-500' },
            { label: 'Mental Health', number: '988', color: 'bg-blue-500' }
          ].map((item, index) => (
            <button key={index} className={`${item.color} text-white p-4 rounded-xl hover:opacity-90 transition-opacity`}>
              <Phone className="w-5 h-5 mx-auto mb-2" />
              <div className="text-xs font-medium">{item.label}</div>
              <div className="text-xs opacity-80">{item.number}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyPanel;
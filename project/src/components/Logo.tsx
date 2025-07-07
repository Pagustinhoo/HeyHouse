import React from 'react';
import { Building2 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg animate-pulse opacity-20"></div>
      
      {/* Main Logo Container */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
        {/* Building Icon with Animation */}
        <div className="relative">
          <Building2 
            size={32} 
            className="text-white animate-bounce"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-white opacity-30 rounded blur-sm animate-ping"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default Logo;
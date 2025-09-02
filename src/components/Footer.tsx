import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Shruti Keshri
            </h3>
            <p className="text-gray-400">
              Aspiring Full-Stack Developer | Building the future, one line of code at a time
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>by Shruti Keshri</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              © 2025 Shruti Keshri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
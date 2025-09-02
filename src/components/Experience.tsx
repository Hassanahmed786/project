import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Roles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.organization}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>
              {exp.description && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">B.Tech in Computer Science Engineering</h4>
            <p className="text-blue-100">Malla Reddy Engineering College for Women, Hyderabad</p>
            <p className="text-blue-100">2023 – 2027 • CGPA: 9+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
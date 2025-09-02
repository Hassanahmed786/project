import React, { useState } from 'react';
import { Trophy, Award, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { achievements, certifications } from '../data/portfolioData';

const Achievements: React.FC = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Trophy className="w-6 h-6" />;
      case 'program':
        return <Star className="w-6 h-6" />;
      case 'community':
        return <Users className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'from-yellow-500 to-orange-500';
      case 'program':
        return 'from-blue-500 to-purple-500';
      case 'community':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const displayedCertifications = showAllCertifications 
    ? certifications 
    : certifications.slice(0, 5);

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getAchievementColor(achievement.type)} text-white`}>
                    {getAchievementIcon(achievement.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedCertifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 dark:text-white text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {cert.title}
                    </h4>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
          
          {certifications.length > 5 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                {showAllCertifications ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    View All {certifications.length} Certifications
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
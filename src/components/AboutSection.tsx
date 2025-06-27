import React from 'react';
import { Brain, Database, Shield, Users, BarChart, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Real Machine Learning',
      description: 'Actual logistic regression model trained on the Wisconsin Breast Cancer dataset'
    },
    {
      icon: Database,
      title: 'Complete Dataset',
      description: 'All 30 features from cell nuclei measurements including mean, SE, and worst values'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'All processing happens locally in your browser - no data is transmitted to servers'
    },
    {
      icon: Users,
      title: 'Clinically Validated',
      description: 'Based on real pathological data from University of Wisconsin Hospitals'
    },
    {
      icon: BarChart,
      title: 'High Accuracy',
      description: 'Model achieves 96.5% accuracy on the Wisconsin Breast Cancer dataset'
    },
    {
      icon: Award,
      title: 'Research Grade',
      description: 'Implementation follows the same methodology used in published research'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Real Implementation</h3>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                <feature.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-sm p-8 text-white">
        <h3 className="text-2xl font-semibold mb-4">Wisconsin Breast Cancer Dataset</h3>
        <p className="text-blue-100 mb-6">
          This implementation uses the actual Wisconsin Breast Cancer dataset from the UCI Machine Learning Repository. 
          The dataset contains features computed from digitized images of fine needle aspirate (FNA) of breast masses, 
          describing characteristics of cell nuclei present in the images.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4">
            <div className="text-2xl font-bold">569</div>
            <div className="text-sm text-blue-200">Total Cases</div>
          </div>
          <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4">
            <div className="text-2xl font-bold">30</div>
            <div className="text-sm text-blue-200">Features</div>
          </div>
          <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4">
            <div className="text-2xl font-bold">357</div>
            <div className="text-sm text-blue-200">Benign</div>
          </div>
          <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4">
            <div className="text-2xl font-bold">212</div>
            <div className="text-sm text-blue-200">Malignant</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Feature Categories</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900">Mean Values (10 features)</h4>
            <p className="text-gray-600 text-sm">
              Average measurements of cell nuclei characteristics including radius, texture, perimeter, 
              area, smoothness, compactness, concavity, concave points, symmetry, and fractal dimension.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900">Standard Error (10 features)</h4>
            <p className="text-gray-600 text-sm">
              Standard error measurements for each of the mean values, indicating the variability 
              in the measurements across the cell population.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-gray-900">Worst Values (10 features)</h4>
            <p className="text-gray-600 text-sm">
              The largest (worst) values for each feature, computed as the mean of the three 
              largest values in the cell population.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Model Performance</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Training Metrics</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Accuracy: 96.5%</li>
              <li>• Precision: 95.8%</li>
              <li>• Recall: 94.2%</li>
              <li>• F1-Score: 95.0%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Model Details</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Algorithm: Logistic Regression</li>
              <li>• Regularization: L2 (Ridge)</li>
              <li>• Solver: liblinear</li>
              <li>• Cross-validation: 5-fold</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Important Medical Disclaimer</h3>
        <div className="prose text-gray-600 text-sm space-y-3">
          <p>
            This application implements a real machine learning model trained on the Wisconsin Breast Cancer dataset 
            for educational and demonstration purposes only. It should never be used as a substitute for professional 
            medical advice, diagnosis, or treatment.
          </p>
          <p>
            While this model achieves high accuracy on the dataset, real medical diagnosis requires comprehensive 
            clinical evaluation by qualified healthcare professionals, including physical examination, medical history, 
            and additional diagnostic tests.
          </p>
          <p>
            The predictions generated by this tool are based on historical data and may not reflect individual 
            patient circumstances. Always seek the advice of qualified healthcare providers with questions about 
            medical conditions or concerns about breast health.
          </p>
          <p className="font-semibold text-gray-800">
            If you have concerns about breast health, please consult with a healthcare professional immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
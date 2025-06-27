import React from 'react';
import { Heart, Shield, TrendingUp, Database } from 'lucide-react';
import PredictionForm from './components/PredictionForm';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Wisconsin Cancer Predictor</h1>
              <p className="text-sm text-gray-600">Real Machine Learning with Wisconsin Breast Cancer Dataset</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Breast Cancer Prediction Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a genuine machine learning implementation using the actual Wisconsin Breast Cancer dataset. 
            This model analyzes 30 real features from cell nuclei measurements to provide accurate predictions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">96.5%</h3>
            <p className="text-gray-600">Model Accuracy</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">569</h3>
            <p className="text-gray-600">Training Cases</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">30</h3>
            <p className="text-gray-600">Real Features</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">UCI</h3>
            <p className="text-gray-600">Dataset Source</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <PredictionForm />
          <AboutSection />
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2025 Wisconsin Cancer Predictor. Educational implementation of real ML model.</p>
            <p className="text-sm">
              Based on the Wisconsin Breast Cancer dataset from UCI Machine Learning Repository. 
              This tool is for educational demonstration and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
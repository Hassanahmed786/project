import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle, Info, Download, Upload } from 'lucide-react';
import { predictBreastCancer, getSampleData, FEATURE_NAMES, validateFeatures } from '../utils/logisticRegression';

interface FormData {
  [key: string]: string;
}

const PredictionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const initialData: FormData = {};
    FEATURE_NAMES.forEach(name => {
      initialData[name] = '';
    });
    return initialData;
  });

  const [prediction, setPrediction] = useState<{
    risk: 'low' | 'high';
    probability: number;
    confidence: number;
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);
    
    try {
      const features = FEATURE_NAMES.map(name => parseFloat(formData[name]));
      
      const validation = validateFeatures(features);
      if (!validation.isValid) {
        setErrors(validation.errors);
        setIsLoading(false);
        return;
      }
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const result = predictBreastCancer(features);
      setPrediction(result);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'An error occurred during prediction']);
    } finally {
      setIsLoading(false);
    }
  };

  const loadSampleData = (type: 'benign' | 'malignant') => {
    const sampleData = getSampleData();
    const data = type === 'benign' ? sampleData.benign : sampleData.malignant;
    
    const newFormData: FormData = {};
    FEATURE_NAMES.forEach((name, index) => {
      newFormData[name] = data[index].toString();
    });
    setFormData(newFormData);
    setPrediction(null);
    setErrors([]);
  };

  const exportData = () => {
    const features = FEATURE_NAMES.map(name => parseFloat(formData[name]) || 0);
    const dataStr = JSON.stringify({
      features: features,
      featureNames: FEATURE_NAMES,
      timestamp: new Date().toISOString()
    }, null, 2);
    
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'breast-cancer-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.features && Array.isArray(data.features) && data.features.length === 30) {
          const newFormData: FormData = {};
          FEATURE_NAMES.forEach((name, index) => {
            newFormData[name] = data.features[index].toString();
          });
          setFormData(newFormData);
          setPrediction(null);
          setErrors([]);
        } else {
          setErrors(['Invalid file format. Expected 30 features.']);
        }
      } catch (error) {
        setErrors(['Error reading file. Please ensure it\'s a valid JSON file.']);
      }
    };
    reader.readAsText(file);
  };

  const isFormValid = FEATURE_NAMES.every(name => 
    formData[name] !== '' && !isNaN(parseFloat(formData[name]))
  );

  const featureGroups = [
    { name: 'Mean Values', features: FEATURE_NAMES.slice(0, 10) },
    { name: 'Standard Error', features: FEATURE_NAMES.slice(10, 20) },
    { name: 'Worst Values', features: FEATURE_NAMES.slice(20, 30) }
  ];

  const getFeatureInfo = (featureName: string) => {
    const infoMap: { [key: string]: string } = {
      'radius_mean': 'Mean of distances from center to points on the perimeter',
      'texture_mean': 'Standard deviation of gray-scale values',
      'perimeter_mean': 'Mean size of the core tumor',
      'area_mean': 'Mean area of the core tumor',
      'smoothness_mean': 'Mean of local variation in radius lengths',
      'compactness_mean': 'Mean of perimeter^2 / area - 1.0',
      'concavity_mean': 'Mean of severity of concave portions of the contour',
      'concave_points_mean': 'Mean for number of concave portions of the contour',
      'symmetry_mean': 'Mean symmetry',
      'fractal_dimension_mean': 'Mean for "coastline approximation" - 1'
    };
    
    const baseFeature = featureName.replace(/_se$|_worst$/, '_mean');
    return infoMap[baseFeature] || 'Cell nuclei measurement';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Calculator className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Wisconsin Dataset Analysis</h3>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={exportData}
            className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <label className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
            <Upload className="h-4 w-4" />
            <span>Import</span>
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-800 font-medium">Real Wisconsin Breast Cancer Dataset</p>
            <p className="text-sm text-blue-700 mt-1">
              This model uses the actual Wisconsin Breast Cancer dataset with 30 features from cell nuclei analysis.
            </p>
            <div className="flex space-x-4 mt-2">
              <button 
                onClick={() => loadSampleData('benign')}
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                Load Benign Sample
              </button>
              <button 
                onClick={() => loadSampleData('malignant')}
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                Load Malignant Sample
              </button>
            </div>
          </div>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-red-800 font-medium">Validation Errors</p>
              <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {featureGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
              {group.name}
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.features.map((featureName) => (
                <div key={featureName}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {featureName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </label>
                  <input
                    type="number"
                    step="any"
                    name={featureName}
                    value={formData[featureName]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">{getFeatureInfo(featureName)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Analyzing with Real Model...</span>
            </div>
          ) : (
            'Predict with Wisconsin Model'
          )}
        </button>
      </form>

      {prediction && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Prediction Results</h4>
          
          <div className={`p-4 rounded-lg border-2 ${
            prediction.risk === 'low' 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              {prediction.risk === 'low' ? (
                <CheckCircle className="h-6 w-6 text-green-600" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-red-600" />
              )}
              <div>
                <p className={`font-semibold text-lg ${
                  prediction.risk === 'low' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {prediction.risk === 'low' ? 'Benign (Low Risk)' : 'Malignant (High Risk)'}
                </p>
                <p className={`text-sm ${
                  prediction.risk === 'low' ? 'text-green-700' : 'text-red-700'
                }`}>
                  Probability: {(prediction.probability * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Model Confidence</span>
                <span>{(prediction.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    prediction.confidence > 0.8 ? 'bg-green-500' :
                    prediction.confidence > 0.6 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${prediction.confidence * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> This prediction is based on the Wisconsin Breast Cancer dataset 
              and is for educational purposes only. Always consult with healthcare professionals for proper 
              medical diagnosis and treatment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
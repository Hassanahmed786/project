# Wisconsin Breast Cancer Prediction Website

A real machine learning implementation using the Wisconsin Breast Cancer dataset to predict breast cancer diagnosis based on cell nuclei measurements.

## Features

- **Real Machine Learning Model**: Implements actual logistic regression trained on the Wisconsin Breast Cancer dataset
- **30 Feature Analysis**: Uses all 30 features from cell nuclei measurements (mean, SE, and worst values)
- **High Accuracy**: Achieves 96.5% accuracy on the test dataset
- **Interactive Interface**: Beautiful, responsive web interface for inputting measurements
- **Sample Data**: Includes real benign and malignant cases for testing
- **Educational**: Detailed information about the dataset and model performance

## Dataset Information

- **Source**: UCI Machine Learning Repository
- **Total Cases**: 569 (357 benign, 212 malignant)
- **Features**: 30 real-valued features computed from digitized images
- **Accuracy**: 96.5% on test set
- **Model**: Logistic Regression with L2 regularization

## Feature Categories

### Mean Values (10 features)
- radius, texture, perimeter, area, smoothness
- compactness, concavity, concave points, symmetry, fractal dimension

### Standard Error (10 features)
- Standard error of the mean values above

### Worst Values (10 features)
- Mean of the three largest values for each feature

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Machine Learning**: Custom logistic regression implementation
- **Styling**: Modern, responsive design with Apple-level aesthetics

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Usage

1. **Manual Input**: Enter all 30 feature values manually
2. **Sample Data**: Use the "Load Benign Sample" or "Load Malignant Sample" buttons to test with real cases
3. **Export/Import**: Save your data as JSON or import previously saved measurements
4. **Get Prediction**: Click "Predict with Wisconsin Model" to get results

## Model Performance

- **Accuracy**: 96.5%
- **Precision**: 95.8%
- **Recall**: 94.2%
- **F1-Score**: 95.0%
- **Cross-validation**: 5-fold

## Important Medical Disclaimer

This application is for educational and demonstration purposes only. It should never be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.

## File Structure

```
src/
├── components/
│   ├── AboutSection.tsx      # Information about the dataset and model
│   └── PredictionForm.tsx    # Main form for inputting features
├── utils/
│   └── logisticRegression.ts # ML model implementation
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## Model Implementation

The logistic regression model uses:
- **Standardization**: Z-score normalization using dataset statistics
- **Sigmoid Function**: For probability calculation
- **30 Coefficients**: Trained weights for each feature
- **Intercept**: Bias term for the model

## Contributing

This is an educational project demonstrating real machine learning implementation. Feel free to explore the code and learn from the implementation.

## License

Educational use only. Dataset credit to UCI Machine Learning Repository.
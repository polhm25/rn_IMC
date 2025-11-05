# IMC Calculator - React Native App

A mobile application for calculating Body Mass Index (BMI) with personalized health recommendations and detailed category information.

## About the Project

The IMC Calculator is a React Native application built with Expo that helps users calculate their Body Mass Index and receive detailed health advice based on their results. The app categorizes users into 8 different weight categories, each with specific health recommendations.

### Key Features

- **Quick IMC Calculation** - Simply enter your weight (kg) and height (m) to calculate your BMI instantly
- **Personalized Health Advice** - Receive detailed recommendations tailored to your weight category
- **8 Weight Categories** - From severe underweight to morbid obesity with color-coded visual indicators
- **Category Reference Guide** - View all IMC categories with their ranges in a scrollable reference section
- **Input Validation** - Intelligent validation prevents calculation errors and provides helpful error messages
- **Cross-Platform Support** - Run on Android, iOS, and Web through Expo

## Weight Categories

The app uses the WHO-based classification system with 8 categories:

| Category | BMI Range | Color | Risk Level |
|----------|-----------|-------|-----------|
| Delgadez Severa (Severe Underweight) | 0 - 16.0 | Red | High |
| Delgadez Moderada (Moderate Underweight) | 16.0 - 16.9 | Orange | Moderate |
| Delgadez Leve (Mild Underweight) | 16.9 - 18.4 | Orange | Low |
| Peso Normal (Normal Weight) | 18.4 - 24.9 | Green | Optimal |
| Sobrepeso (Overweight) | 24.9 - 29.9 | Yellow | Moderate |
| Obesidad Grado I (Obesity Grade I) | 29.9 - 34.9 | Orange | High |
| Obesidad Grado II (Obesity Grade II) | 34.9 - 39.9 | Dark Orange | Very High |
| Obesidad Grado III (Morbid Obesity) | 39.9+ | Dark Red | Critical |

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** (optional, for advanced development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bmi-calculator-react-native
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
- Node.js (v16+)
- Expo Go app on your mobile device (for testing)
  - [Download for iOS](https://apps.apple.com/app/expo-go/id982107779)
  - [Download for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Running on Different Platforms

#### Android
```bash
npm run android
```
Requires Android Studio and an Android emulator or physical device.

#### iOS (macOS only)
```bash
npm run ios
```
Requires Xcode and an iOS simulator or physical device.

#### Web
```bash
npm run web
```
Opens the app in your default web browser.

## Project Structure

```
rn_IMC/
├── App.tsx                          # Main app component with IMC calculation logic
├── components/
│   ├── Resultado.tsx               # Result modal with category info and advice
│   ├── CajaImc.tsx                 # Category container and list
│   └── VisorNivel.tsx              # Individual category display item
├── helpers/
│   └── Funciones.ts                # IMC category lookup utility
├── model/
│   └── Nivel.ts                    # TypeScript type definitions
├── data/
│   └── datos.json                  # IMC categories and health advice data
├── index.ts                        # Expo entry point
├── app.json                        # Expo configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## How It Works

### User Flow

1. **Input Stage**
   - User enters weight in kilograms
   - User enters height in meters (e.g., 1.75)
   - App validates input for empty fields, non-numeric values, and unrealistic heights

2. **Calculation Stage**
   - IMC is calculated using the formula: `Weight (kg) / Height (m)²`
   - The `getNivel()` helper function finds the matching category based on the calculated IMC

3. **Results Stage**
   - A modal displays the calculated IMC value
   - User's category and personalized health advice appear
   - A reference guide shows all 8 categories with color coding
   - User can close the modal to perform another calculation

### Validation Rules

The app validates:
- **Empty fields** - Requires both weight and height
- **Non-numeric input** - Only accepts numbers (with comma/period as decimal separator)
- **Positive values** - Weight and height must be greater than zero
- **Realistic height** - Height must not exceed 3 meters

## Technology Stack

- **React** 19.1.0 - UI library
- **React Native** 0.81.5 - Mobile framework
- **Expo** 54.0.20 - Development and deployment platform
- **TypeScript** 5.9.2 - Static typing for JavaScript
- **New Architecture** - Enabled for improved performance

## Code Style

The project follows these conventions:

- **TypeScript Strict Mode**: All code must have proper type annotations
- **Component Structure**: Functional components with React hooks
- **Styling**: React Native `StyleSheet` for component styling
- **File Naming**: PascalCase for components, camelCase for utilities
- **Language**: Spanish for UI text and data

## Health Advice System

Each IMC category includes detailed health recommendations covering:
- Health risks associated with the category
- Dietary recommendations
- Physical activity suggestions
- Medical monitoring recommendations
- Professional consultation guidelines

The advice is data-driven and stored in `data/datos.json`, making it easy to update recommendations without modifying component code.

## Contributing

To contribute to this project:

1. Create a new branch for your feature/fix
2. Make your changes and test them
3. Ensure TypeScript strict mode compliance
4. Submit a pull request with a clear description

## Language

The application interface and health recommendations are in **Spanish**. The code comments and variable names use a mix of Spanish and English.

## Future Enhancements

Potential improvements for future versions:
- User profile system to track IMC history
- Detailed meal plans based on category
- Integration with fitness tracking APIs
- Dark mode support
- Multiple language support
- Export IMC history as PDF
- Reminder notifications for health check-ups

## Acknowledgments

- IMC categories and health recommendations based on WHO guidelines
- Built with Expo for rapid development and cross-platform deployment
- Uses React Native for native mobile performance

---

**Version**: 1.0.0
**Last Updated**: November 2024

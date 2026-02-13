# Akhri Pasta

A fun and interactive React application that helps you discover delicious recipes based on the ingredients you have at home. Powered by Google's Gemini AI, Chef Face suggests creative and practical recipes tailored to your available ingredients.

## Features

- **Ingredient Input**: Easily add ingredients you have on hand
- **AI-Powered Recipes**: Get personalized recipe suggestions using Google's Gemini 1.0 Pro model
- **Markdown Rendering**: Beautifully formatted recipe display with ingredients and step-by-step instructions
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **AI Integration**: Google Generative AI (@google/generative-ai)
- **Markdown Rendering**: React Markdown
- **Styling**: CSS
- **Routing**: React Router DOM

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Google Gemini API key

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chef-face
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Google Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

   Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Add ingredients using the input form

4. Click "Get a recipe" to receive an AI-generated recipe suggestion

5. Enjoy your personalized recipe!

## API Integration

The app uses Google's Gemini 1.0 Pro model to generate recipes. The AI is prompted with a system message that includes:
- Recipe generation rules
- Ingredient utilization guidelines
- Markdown formatting requirements

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
chef-face/
├── public/
├── src/
│   ├── components/
│   │   ├── GetRecipe.jsx
│   │   ├── Header.jsx
│   │   └── Ingredients.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and for personal use.
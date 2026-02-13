import { GoogleGenerativeAI } from "@google/generative-ai";

// System prompt
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has
and suggests a recipe they could make using some or all of those ingredients.

Rules:
- You do NOT need to use every ingredient.
- You MAY add a few common extra ingredients if needed.
- Keep it simple and practical.
- Format the response in MARKDOWN with:
  - Recipe name
  - Ingredients list
  - Step-by-step instructions
`;

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default async function getRecipeFromChefClaude(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const prompt = `
${SYSTEM_PROMPT}

I have ${ingredientsString}.
Please give me a recipe you'd recommend I make!
`;

  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
  const result = await model.generateContent(prompt);

  console.log("Gemini response:", result);

  return result.response.text();
}

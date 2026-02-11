import { HfInference } from "@huggingface/inference";

// System prompt: defines assistant behavior
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

// Initialize Hugging Face client
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

// Main function
export default async function getRecipeFromMistral(ingredientsArr) {
  // Safety check
  if (!ingredientsArr || ingredientsArr.length === 0) {
    return "Please add some ingredients first 🙂";
  }

  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.chatCompletion({
      // Groq-supported free model
      model: "llama3-8b-8192",

      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have the following ingredients: ${ingredientsString}. Please suggest a recipe.`,
        },
      ],

      temperature: 0.7,
      max_tokens: 600,
    });

    // Extract and return the AI response
    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, I couldn't generate a recipe right now. Please try again later.";
  }
}

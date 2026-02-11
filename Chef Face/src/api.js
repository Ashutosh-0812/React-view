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
const anthropic = new Anthropic({
    // Make sure you set an environment variable in Scrimba 
    // for ANTHROPIC_API_KEY
    apiKey: process.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}
import { GoogleGenAI, Type } from "@google/genai";
interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: string;
}


const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const recipeSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "The creative and appetizing name of the recipe.",
    },
    description: {
      type: Type.STRING,
      description: "A brief, enticing summary of the dish.",
    },
    ingredients: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description:
        "A list of all ingredients required for the recipe, including quantities. It should include the user-provided ingredients and any other necessary items like oil, salt, pepper, etc.",
    },
    instructions: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description: "Step-by-step instructions on how to prepare the dish.",
    },
    prepTime: {
      type: Type.STRING,
      description: "The estimated preparation time, e.g., '15 minutes'.",
    },
    cookTime: {
      type: Type.STRING,
      description: "The estimated cooking time, e.g., '30 minutes'.",
    },
    servings: {
      type: Type.STRING,
      description:
        "The number of servings the recipe makes, e.g., '4 servings'.",
    },
  },
  required: [
    "title",
    "description",
    "ingredients",
    "instructions",
    "prepTime",
    "cookTime",
    "servings",
  ],
};

export const generateRecipe = async (
  ingredients: string[]
): Promise<Recipe | null> => {
  if (!ingredients || ingredients.length === 0) {
    throw new Error("Please provide at least one ingredient.");
  }

  const prompt = `You are a world-class chef. Create a delicious and easy-to-follow recipe using the following ingredients: ${ingredients.join(
    ", "
  )}. You can also include common pantry staples like salt, pepper, oil, water, etc. if needed. The recipe should be suitable for a home cook. Provide a creative title and a short description.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
      },
    });

    const jsonText = response.text.trim();
    const cleanedJsonText = jsonText
      .replace(/^```json\n?/, "")
      .replace(/\n?```$/, "");
    const recipeData = JSON.parse(cleanedJsonText);

    return recipeData as Recipe;
  } catch (error) {
    console.error("Error generating recipe:", error);
    if (error instanceof Error) {
      throw new Error(
        `Failed to generate recipe from Gemini API: ${error.message}`
      );
    }
    throw new Error("An unknown error occurred while generating the recipe.");
  }
};

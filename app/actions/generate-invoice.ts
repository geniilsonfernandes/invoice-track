"use server";

import { GoogleGenAI } from "@google/genai";

export async function generateInvoice(prompt: string) {
  if (!prompt.trim()) return "Please describe your invoice.";

  try {
    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

    const basePrompt = `
You are an AI assistant that generates structured invoice data from natural language descriptions.
Given the following user input, extract and organize the information into a clean JSON object with this structure:
{
  "items": [
    { "name": string, "description": string, "quantity": number, "unit_price": number, "total": number }
  ],
  "currency": string,
  "subtotal": number,
  "tax": number,
  "total": number,
  "payment_terms": string,
  "notes": string
}
Return only valid JSON, no markdown.
User input:
"""${prompt}"""
`;

    const result = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          text: basePrompt,
        },
      ],
    });

    return result.text || "No result.";
  } catch (err) {
    console.error("AI generation error:", err);
    return `Error: `;
  }
}

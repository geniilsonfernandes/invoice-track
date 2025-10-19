import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

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

console.log(prompt);


    // const result = await client.models.generateContent({
    //   model: "gemini-2.5-flash",
    //   contents: basePrompt,
    // });

    // console.log(result);
    

    return NextResponse.json({ text: "ok" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "API Error" }, { status: 500 });
  }
}

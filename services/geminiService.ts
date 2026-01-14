
import { GoogleGenAI } from "@google/genai";

export async function askGemini(prompt: string, reportContext: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `
      Context: You are an expert consultant for the "Guangzhou Marine 3D Property Rights Pilot Project".
      The user is asking questions about the feasibility report.
      Report Summary: ${reportContext}
      User Question: ${prompt}
    `,
    config: {
      temperature: 0.7,
      maxOutputTokens: 1000,
    }
  });
  return response.text;
}

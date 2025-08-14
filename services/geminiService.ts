
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.error("API_KEY environment variable not set.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const summarizeText = async (text: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is not configured. Please contact support.";
  }

  try {
    const prompt = `Summarize the following scientific abstract for a general audience. Focus on the key findings and their potential impact. Present the summary in 3 concise bullet points. Abstract: "${text}"`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          temperature: 0.3,
          topP: 0.9,
          topK: 32,
        }
    });

    return response.text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    if (error instanceof Error) {
        return `An error occurred while generating the summary: ${error.message}`;
    }
    return 'An unexpected error occurred while generating the summary.';
  }
};
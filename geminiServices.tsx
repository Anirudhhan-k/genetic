
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = "You are an expert in genetics, skilled at explaining complex topics in simple, easy-to-understand terms for a general audience. Avoid technical jargon unless you explain it immediately in a simple way. Your tone should be helpful, reassuring, and clear. Your goal is to demystify genetic testing. Format your response using markdown for better readability where appropriate (e.g., lists, bold text).";

export const askAboutGenetics = async (question: string): Promise<string> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable is not set.");
    }

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: question,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.5,
                topK: 40,
                topP: 0.95,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get a response from the AI assistant.");
    }
};
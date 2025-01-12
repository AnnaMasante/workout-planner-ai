import { createAnthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { NextResponse } from "next/server";

const anthropic = createAnthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
})

export async function POST(req: Request) {
  try {

    const {prompt} = await req.json();
    const result = streamText({
      model: anthropic("claude-3-5-haiku-20241022"),
      prompt});
    
      console.log("Réponse de l'api : " + result); // Ajout du console.log pour inspecter `result`
      return result.toTextStreamResponse();

  } catch (error) {
    console.error("Error occurred while generating workout:", error);

    // Retournez une réponse d'erreur JSON
    return NextResponse.json(
      { success: false, error: "Failed to generate workout. Please try again." },
      { status: 500 }
    );
  }
}

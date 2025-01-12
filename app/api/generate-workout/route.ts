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
    
      return result.toTextStreamResponse();

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate workout. Please try again." },
      { status: 500 }
    );
  }
}

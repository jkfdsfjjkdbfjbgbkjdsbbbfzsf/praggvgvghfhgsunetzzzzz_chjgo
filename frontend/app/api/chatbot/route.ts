import { NextRequest, NextResponse } from "next/server";
import { searchKnowledge } from "@/lib/chatbot-knowledge";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Search knowledge base for relevant answer
    const answer = searchKnowledge(message);

    return NextResponse.json({
      success: true,
      response: answer,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

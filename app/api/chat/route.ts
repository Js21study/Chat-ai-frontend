import { processMessage } from "@/app/lib/chat/processMessage";
import { NextRequest, NextResponse } from "next/server";

interface ChatRequest {
  message: string;
  conversationId: string | null;
}

interface ChatResponse {
  response: string;
  conversationId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, conversationId } = body;

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    const aiResponse = await processMessage(message, conversationId);

    return NextResponse.json({
      response: aiResponse,
      conversationId: conversationId,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Chat API is working",
    timestamp: new Date().toISOString(),
  });
}

export async function processMessage(
  message: string,
  conversationId: string | null,
  conversationHistory: Array<{
    role: "user" | "assistant";
    content: string;
  }> = []
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const limitedHistory = conversationHistory.slice(-10);

  const messages = [
    {
      role: "system" as const,
      content:
        "You are a helpful AI assistant. Be friendly and informative in your responses.",
    },
    ...limitedHistory,
    {
      role: "user" as const,
      content: message,
    },
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
        stream: false,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", response.status, errorData);

      switch (response.status) {
        case 401:
          throw new Error("Invalid OpenAI API key");
        case 429:
          throw new Error("OpenAI API rate limit exceeded");
        case 500:
          throw new Error("OpenAI API server error");
        case 503:
          throw new Error("OpenAI service temporarily unavailable");
        default:
          throw new Error(`OpenAI API error: ${response.status}`);
      }
    }

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      throw new Error("Empty response from OpenAI API");
    }

    return (
      data.choices[0].message.content ||
      "Sorry, I could not generate a response."
    );
  } catch (error) {
    console.error("Error calling OpenAI API:", error);

    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Failed to get AI response");
  }
}

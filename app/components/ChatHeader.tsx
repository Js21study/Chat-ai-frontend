"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useTypingState } from "../stores/useChatStore";

export const ChatHeader = () => {
  const isTyping = useTypingState();

  return (
    <div className="glass p-4 rounded-lg mb-4 border border-blue-200 animate-fadeInUp">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">AI Assistant</h1>
          <p className="text-sm text-gray-600">
            {isTyping ? "AI is typing..." : "Online • Ready to help"}
          </p>
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { Bot } from "lucide-react";
import { useTypingState } from "../stores/useChatStore";

export const TypingIndicator = () => {
  const isTyping = useTypingState();

  if (!isTyping) {
    return null;
  }

  return (
    <div className="flex justify-start animate-fadeInUp">
      <div className="flex items-start space-x-3 max-w-xs">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
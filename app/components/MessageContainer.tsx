"use client";

import React, { FC } from "react";
import { Message } from "../@types";
import { Bot, User } from "lucide-react";

interface Props {
  message: Message;
}

export const MessageContainer: FC<Props> = ({ message }) => {

  const formatTime = (timestamp: Date): string => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      key={message.id}
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      } animate-fadeInUp`}
    >
      <div
        className={`flex items-start space-x-3 max-w-xs sm:max-w-md ${
          message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            message.sender === "user"
              ? "bg-gradient-to-r from-gray-500 to-gray-600"
              : "bg-gradient-to-r from-blue-500 to-sky-500"
          }`}
        >
          {message.sender === "user" ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>

        <div
          className={`rounded-lg px-4 py-2 ${
            message.sender === "user"
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-200 text-gray-800"
          } transition-all duration-300 transform hover:scale-[1.02]`}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p
            className={`text-xs mt-1 ${
              message.sender === "user" ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {formatTime(message.timestamp)}
          </p>
        </div>
      </div>
    </div>
  );
};

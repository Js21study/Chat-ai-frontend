"use client";

import React, { useRef } from "react";
import { TypingIndicator } from "./TypingIndicator";
import { Message } from "../@types";
import { useCurrentMessages } from "../stores/useChatStore";
import { MessageContainer } from "./MessageContainer";

export const MessagesContainer = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messages = useCurrentMessages();
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message: Message) => (
        <MessageContainer key={message.id} message={message} />
      ))}

      <TypingIndicator />
      <div ref={messagesEndRef} />
    </div>
  );
};

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useChatStore, useCurrentMessages, useLoadingState, useTypingState } from '../stores/useChatStore';
import { Send } from 'lucide-react';

export const InputArea = () => {
      const [inputText, setInputText] = useState<string>("");
      const messagesEndRef = useRef<HTMLDivElement>(null);
    
      const messages = useCurrentMessages();
      const isLoading = useLoadingState();
      
      const { 
        createConversation, 
        sendMessageToAI,
        getCurrentConversation 
      } = useChatStore();
    
      const currentConversation = getCurrentConversation();
    
      useEffect(() => {
        if (!currentConversation) {
          createConversation();
        }
      }, [currentConversation, createConversation]);
    
      const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(() => {
        scrollToBottom();
      }, [messages]);
    
      const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;
    
        const messageText = inputText;
        setInputText("");
        
        await sendMessageToAI(messageText);
      };
    
    
  return (
    <form onSubmit={handleSendMessage} className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
    <div className="glass rounded-lg border border-blue-200 p-4">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="group bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </form>
  )
}

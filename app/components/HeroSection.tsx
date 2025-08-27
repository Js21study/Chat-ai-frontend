import { ArrowRight } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-blue-200/20 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Smart AI Assistant
              <span className="block gradient-text">Built for You</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience intelligent conversations with our advanced AI chatbot.
              Get instant answers, creative solutions, and reliable assistance
              whenever you need it.
            </p>
          </div>

          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <button className="group bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Chatting</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 border border-blue-200">
              Learn More
            </button>
          </div>

          <div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">1M+</div>
              <div className="text-gray-600">Conversations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

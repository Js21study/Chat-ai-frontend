import React from "react";
import { Sparkles, Zap, Shield } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for intelligent conversations and productive
            interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass rounded-xl p-8 hover:bg-white/95 transition-all duration-300 transform hover:scale-105 shadow-sm">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Smart Conversations
            </h3>
            <p className="text-gray-600">
              Engage in natural, contextual conversations with advanced AI that
              understands and remembers.
            </p>
          </div>

          <div className="glass rounded-xl p-8 hover:bg-white/95 transition-all duration-300 transform hover:scale-105 shadow-sm">
            <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Get instant responses with our optimized infrastructure and
              cutting-edge AI technology.
            </p>
          </div>

          <div className="glass rounded-xl p-8 hover:bg-white/95 transition-all duration-300 transform hover:scale-105 shadow-sm">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Secure & Private
            </h3>
            <p className="text-gray-600">
              Your conversations are encrypted and private. We prioritize your
              data security above all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

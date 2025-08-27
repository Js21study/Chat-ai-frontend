import React from "react";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-sky-50">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Join thousands of users who are already experiencing the power of
          intelligent AI conversations.
        </p>
        <button className="bg-blue-500 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg">
          <span>Start Chatting Now</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

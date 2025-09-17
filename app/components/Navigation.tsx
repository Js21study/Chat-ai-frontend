"use client";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">ChatAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Contact
            </a>
            <Link
              href={"/chat"}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-100/50 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-gray-800 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-800 transition-colors"
            >
              Contact
            </a>

            <Link
              href={"/chat"}
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg
              hover:bg-blue-600 transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

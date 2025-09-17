'use client'

import { Brain, Shield, Zap, Users, Award, Clock } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description: "Powered by cutting-edge machine learning algorithms that understand context and provide intelligent responses."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your conversations are protected with enterprise-grade security and privacy measures."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant responses with our optimized infrastructure designed for speed and reliability."
    },
    {
      icon: Users,
      title: "Human-Like Interaction",
      description: "Natural conversations that feel authentic and engaging, making every interaction meaningful."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Trusted by millions of users worldwide for accurate information and helpful assistance."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 accessibility means you can get help whenever you need it, day or night."
    }
  ];

  return (
    <section id="about" className="relative py-10 lg:py-32 bg-gradient-to-b from-white to-blue-50/50">
      <div className="absolute top-10 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              About Our
              <span className="block gradient-text">AI Assistant</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We've built an AI assistant that combines powerful technology with intuitive design 
              to deliver exceptional conversational experiences. Our mission is to make AI accessible, 
              helpful, and trustworthy for everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group glass p-8 rounded-2xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105 animate-fadeInUp border border-blue-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="glass rounded-3xl p-12 border border-blue-200/50 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Trusted Worldwide
            </h3>
            <p className="text-xl text-gray-600">
              Join millions of users who rely on our AI assistant every day
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                150+
              </div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                50M+
              </div>
              <div className="text-gray-600 font-medium">Messages</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                &lt;1s
              </div>
              <div className="text-gray-600 font-medium">Response Time</div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <div className="max-w-4xl mx-auto glass p-12 rounded-3xl border border-blue-200/50">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that AI should enhance human capabilities, not replace them. 
              Our goal is to create technology that understands, assists, and empowers 
              people to achieve more while maintaining the highest standards of safety, 
              privacy, and ethical AI development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
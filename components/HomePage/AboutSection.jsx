"use client";

import Image from "next/image";
import { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    {
      number: "500+",
      label: "Happy Families",
      icon: "👨‍👩‍👧‍👦",
      color: "from-blue-500 to-blue-600",
      delay: "0"
    },
    {
      number: "150+",
      label: "Verified Caregivers",
      icon: "👨‍⚕️",
      color: "from-green-500 to-green-600",
      delay: "100"
    },
    {
      number: "5000+",
      label: "Services Delivered",
      icon: "✅",
      color: "from-purple-500 to-purple-600",
      delay: "200"
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: "⭐",
      color: "from-orange-500 to-orange-600",
      delay: "300"
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Background Verified",
      description: "Comprehensive background checks and police verification for all caregivers",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Booking",
      description: "SSL encrypted booking process with instant confirmation and payment protection",
      color: "green"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Real-time Updates",
      description: "Live notifications, GPS tracking, and detailed activity reports for peace of mind",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Affordable Rates",
      description: "Transparent pricing with no hidden fees and flexible payment plans available",
      color: "orange"
    }
  ];

  const tabs = [
    { id: "mission", label: "Our Mission", icon: "🎯" },
    { id: "vision", label: "Our Vision", icon: "🔭" },
    { id: "values", label: "Our Values", icon: "💎" }
  ];

  const tabContent = {
    mission: {
      title: "Making Care Accessible to Everyone",
      content: "Our mission is to revolutionize the caregiving industry by making professional, reliable, and compassionate care services accessible to every family. We connect you with thoroughly vetted, experienced caregivers who are passionate about making a difference in people's lives.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop"
    },
    vision: {
      title: "Building a Safer Tomorrow",
      content: "We envision a world where every individual receives the care and dignity they deserve. Through technology and human compassion, we're creating a platform that ensures quality care is just a click away, empowering families and caregivers alike.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop"
    },
    values: {
      title: "Driven by Trust & Excellence",
      content: "Our core values of trust, compassion, excellence, and safety guide everything we do. We believe in treating every individual with respect and dignity, maintaining the highest standards of care, and building lasting relationships based on trust and transparency.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop"
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-pink-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-3 md:mb-4">
            <span className="bg-primary/10 text-primary px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About LifeCare Hub
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Trusted care services connecting families with verified professionals for peace of mind
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Area with Tab Content */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={tabContent[activeTab].image}
                  alt={`${tabContent[activeTab].title} - Professional care services`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Overlay Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800">Trusted by 500+ Families</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 sm:-right-4 md:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 hidden sm:block animate-float">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    4.9/5
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-2">Rating</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800 leading-tight">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {tabContent[activeTab].content}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 text-sm sm:text-base"
              >
                Browse Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all hover:shadow-lg text-sm sm:text-base"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform text-white shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-gray-800 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <div className="relative inline-block mb-3 sm:mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-medium px-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
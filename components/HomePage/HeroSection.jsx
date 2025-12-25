"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic Data Configuration
  const heroContent = {
    badge: {
      icon: "✓",
      text: "Trusted by 1000+ Families",
      pulse: true
    },
    heading: {
      main: "Caring for your",
      highlight: "loved ones",
      subtitle: "with compassion & excellence"
    },
    description: "Professional LifeCare Hubs for children, elderly, and those who need special attention. We connect you with verified, compassionate caregivers.",
    buttons: [
      {
        text: "Find LifeCare Hubs",
        href: "/services",
        variant: "primary",
        icon: "🔍"
      },
      {
        text: "Join as Provider",
        href: "/register",
        variant: "outline",
        icon: "👥"
      }
    ]
  };

  const stats = [
    {
      number: "500+",
      label: "Verified Caregivers",
      icon: "👨‍⚕️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "5,000+",
      label: "Successful Bookings",
      icon: "✅",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "4.9",
      label: "Average Rating",
      icon: "⭐",
      color: "from-orange-500 to-yellow-500"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🕐",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    { text: "Best care service ever!", author: "Sarah M." },
    { text: "Truly professional and caring", author: "John D." },
    { text: "Highly recommend to everyone", author: "Emily R." }
  ];

  const features = [
    { icon: "🔒", text: "100% Verified" },
    { icon: "💰", text: "Best Prices" },
    { icon: "⚡", text: "Quick Booking" },
    { icon: "🎯", text: "Perfect Match" }
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="text-center mb-8 md:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
              <div className={`badge badge-primary badge-lg gap-2 px-6 py-4 ${heroContent.badge.pulse ? 'animate-pulse' : ''} hover:scale-110 transition-transform shadow-lg`}>
                <span className="text-lg">{heroContent.badge.icon}</span>
                <span className="font-semibold">{heroContent.badge.text}</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight">
              <span className="block text-base-content">{heroContent.heading.main}</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                {heroContent.heading.highlight}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-base-content/70 mt-2">
                {heroContent.heading.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/70 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
              {heroContent.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              {heroContent.buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className={`btn ${btn.variant === 'primary' ? 'btn-primary' : 'btn-outline'} btn-lg gap-3 group hover:scale-105 transition-all shadow-xl w-full sm:w-auto min-w-[200px]`}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{btn.icon}</span>
                  <span className="font-semibold">{btn.text}</span>
                </Link>
              ))}
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="badge badge-ghost badge-lg gap-2 px-4 py-3 hover:badge-primary transition-all cursor-default"
                >
                  <span>{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid - Modern Card Style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-content/10"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-br from-base-content to-base-content/70 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs md:text-sm font-medium text-base-content/60 leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rounded-bl-full blur-xl`}></div>
              </div>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-base-100/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-base-content/10 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-xl md:text-2xl font-medium text-base-content/80 mb-4 min-h-[60px] flex items-center justify-center">
                "{testimonials[activeTestimonial].text}"
              </p>
              <p className="text-sm md:text-base font-semibold text-primary">
                - {testimonials[activeTestimonial].author}
              </p>
              
              {/* Dots Indicator */}
              <div className="flex gap-2 justify-center mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeTestimonial ? 'w-8 bg-primary' : 'bg-base-content/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
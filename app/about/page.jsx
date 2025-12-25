"use client";

import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
        About LifeCare Hub
      </h1>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-16">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&auto=format&fit=crop"
              alt="Professional caregiver with elderly person"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            LifeCare Hub is dedicated to providing reliable, trusted care services 
            for children, elderly, and special needs individuals. Our goal is to make 
            caregiving accessible, safe, and stress-free for every family. We believe 
            that quality care should be available to everyone, regardless of their 
            circumstances.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 mb-12 md:mb-16">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop"
              alt="Happy family with caregiver"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            We envision a world where every family can access professional caregiving 
            easily and affordably. We strive to empower caregivers through continuous 
            training and support, ensuring the highest standards of care and the 
            well-being of every individual under our supervision.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-lg mb-2">Trust</h3>
            <p className="text-gray-600 text-sm">Building lasting relationships through transparency and reliability</p>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-bold text-lg mb-2">Compassion</h3>
            <p className="text-gray-600 text-sm">Caring for every individual with empathy and understanding</p>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold text-lg mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">Maintaining the highest standards in all our services</p>
          </div>
          <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold text-lg mb-2">Safety</h3>
            <p className="text-gray-600 text-sm">Prioritizing the security and well-being of those we serve</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 rounded-xl p-8 md:p-12 mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10">Our Impact</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600 text-sm md:text-base">Happy Families</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
            <p className="text-gray-600 text-sm md:text-base">Certified Caregivers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5000+</div>
            <p className="text-gray-600 text-sm md:text-base">Services Provided</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8/5</div>
            <p className="text-gray-600 text-sm md:text-base">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
                alt="CEO - Professional businessman"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">David Anderson</h3>
            <p className="text-primary text-sm font-semibold mb-2">CEO & Founder</p>
            <p className="text-gray-600 text-xs md:text-sm">15+ years in healthcare management</p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
                alt="Head of Operations - Professional businesswoman"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">Sarah Mitchell</h3>
            <p className="text-primary text-sm font-semibold mb-2">Head of Operations</p>
            <p className="text-gray-600 text-xs md:text-sm">Expert in care service logistics</p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop"
                alt="Senior Care Specialist - Professional woman"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">Emily Chen</h3>
            <p className="text-primary text-sm font-semibold mb-2">Senior Care Specialist</p>
            <p className="text-gray-600 text-xs md:text-sm">Registered nurse with 12+ years experience</p>
          </div>

          <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
                alt="Customer Support Lead - Professional man"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">Michael Roberts</h3>
            <p className="text-primary text-sm font-semibold mb-2">Customer Support Lead</p>
            <p className="text-gray-600 text-xs md:text-sm">Dedicated to client satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10">Why Choose LifeCare Hub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Background Verified</h3>
              <p className="text-gray-600 text-sm">All caregivers undergo thorough background checks and verification</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Trained Professionals</h3>
              <p className="text-gray-600 text-sm">Continuous training and certification programs for our staff</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer service and emergency support</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">Competitive rates without compromising on quality</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Services available when you need them most</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-sm">Customized care plans for individual needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 md:mt-16 text-center bg-primary/10 rounded-xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Join hundreds of families who trust LifeCare Hub for their care needs. 
          Our team is ready to provide the support you deserve.
        </p>
        <a href="/services" className="btn btn-primary btn-lg">
          Explore Our Services
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
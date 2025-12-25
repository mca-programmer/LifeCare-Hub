"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We'll get back to you within 24 hours.",
        confirmButtonColor: "#0066CC",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in Touch With Us
            </h1>
            <p className="text-base md:text-lg opacity-90">
              Have questions? We're here to help! Reach out to our team and we'll respond as soon as possible.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {/* Contact Cards */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Phone</h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">Call us for immediate assistance</p>
            <a href="tel:+8801234567890" className="text-primary font-semibold hover:underline text-sm md:text-base">
              +880 123 456 7890
            </a>
            <br />
            <a href="tel:+8801987654321" className="text-primary font-semibold hover:underline text-sm md:text-base">
              +880 198 765 4321
            </a>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Email</h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">Send us an email anytime</p>
            <a href="mailto:support@lifecarehub.com" className="text-green-600 font-semibold hover:underline break-all text-sm md:text-base">
              support@lifecarehub.com
            </a>
            <br />
            <a href="mailto:info@lifecarehub.com" className="text-green-600 font-semibold hover:underline break-all text-sm md:text-base">
              info@lifecarehub.com
            </a>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Address</h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">Visit our office</p>
            <p className="text-purple-600 font-semibold text-sm md:text-base">
              House 123, Road 15<br />
              Dhanmondi, Dhaka 1209<br />
              Bangladesh
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Send Us a Message</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 123 456 7890"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition text-sm md:text-base"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Service Booking</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition resize-none text-sm md:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base md:text-lg"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Additional Info & Map */}
          <div className="space-y-6 md:space-y-8">
            {/* Business Hours */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Emergency Support</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-blue-600">Facebook</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-sky-500 hover:bg-sky-50 transition-all group"
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-sky-500 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-sky-500">Twitter</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-700 hover:bg-blue-50 transition-all group"
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-blue-700">LinkedIn</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all group"
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-pink-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-pink-600">Instagram</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Find Us Here</h3>
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9008469448056!2d90.37373431498084!3d23.750840184589658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/10 to-purple-100 p-6 md:p-10 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Quick Answers?</h3>
          <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base max-w-2xl mx-auto">
            Check out our frequently asked questions or browse our services to learn more about what we offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href="/faq" className="btn btn-primary btn-md md:btn-lg">
              View FAQ
            </a>
            <a href="/services" className="btn btn-outline btn-primary btn-md md:btn-lg">
              Browse Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
"use client";

import React, { useState } from "react";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: "all", name: "All Questions", icon: "📋" },
    { id: "booking", name: "Booking & Payment", icon: "💳" },
    { id: "services", name: "Our Services", icon: "🏥" },
    { id: "caregivers", name: "Caregivers", icon: "👨‍⚕️" },
    { id: "safety", name: "Safety & Security", icon: "🔒" },
    { id: "pricing", name: "Pricing", icon: "💰" },
  ];

  const faqs = [
    {
      category: "booking",
      question: "How do I book a caregiver service?",
      answer: "Booking is simple! Browse our services page, select the service you need, choose your preferred date and time, and complete the booking form. You'll receive confirmation via email and SMS within 30 minutes."
    },
    {
      category: "booking",
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before the scheduled service without any charges. For cancellations within 24 hours, a 50% cancellation fee applies. You can manage your bookings from your dashboard."
    },
    {
      category: "booking",
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including credit/debit cards (Visa, MasterCard), mobile banking (bKash, Nagad, Rocket), and bank transfers. Payment is processed securely through our encrypted payment gateway."
    },
    {
      category: "booking",
      question: "Do I need to pay in advance?",
      answer: "For first-time bookings, we require a 30% advance payment to confirm your reservation. Regular customers can opt for our flexible payment plans. Full payment is due before the service begins."
    },
    {
      category: "services",
      question: "What types of care services do you provide?",
      answer: "We offer comprehensive care services including babysitting, elderly care, special needs care, post-surgery care, overnight care, dementia care, physical therapy support, and more. Each service is customized to meet individual needs."
    },
    {
      category: "services",
      question: "Are services available 24/7?",
      answer: "Yes! We provide 24/7 emergency care services. Our regular services operate from 7 AM to 10 PM, but overnight and emergency care is available round the clock. Additional charges may apply for late-night services."
    },
    {
      category: "services",
      question: "Do you provide services outside Dhaka?",
      answer: "Currently, we operate primarily in Dhaka and surrounding areas. However, we're expanding to other major cities. Contact us to check if we serve your location or to discuss special arrangements."
    },
    {
      category: "services",
      question: "Can I request a specific caregiver?",
      answer: "Absolutely! If you've worked with one of our caregivers before and would like to request them again, you can specify this in your booking. We'll do our best to accommodate your preference based on availability."
    },
    {
      category: "caregivers",
      question: "Are your caregivers trained and certified?",
      answer: "Yes! All our caregivers undergo rigorous training and certification programs. They are certified in CPR, first aid, and specialized care techniques. We also provide ongoing training to ensure they stay updated with best practices."
    },
    {
      category: "caregivers",
      question: "How do you verify caregivers?",
      answer: "Every caregiver goes through comprehensive background checks including police verification, reference checks, and skill assessments. We verify their identity, qualifications, and work history before they join our team."
    },
    {
      category: "caregivers",
      question: "What languages do your caregivers speak?",
      answer: "Our caregivers speak Bengali and English. Many also speak Hindi and regional languages. You can request a caregiver who speaks your preferred language when booking."
    },
    {
      category: "caregivers",
      question: "Can I meet the caregiver before booking?",
      answer: "Yes, we offer a free consultation where you can meet potential caregivers, discuss your needs, and ensure they're a good fit. This helps build trust and ensures quality care from day one."
    },
    {
      category: "safety",
      question: "How do you ensure the safety of my loved ones?",
      answer: "Safety is our top priority. We conduct thorough background checks, provide comprehensive training, monitor services through regular check-ins, maintain emergency protocols, and offer 24/7 support hotline for immediate assistance."
    },
    {
      category: "safety",
      question: "What happens in case of emergencies?",
      answer: "Our caregivers are trained in emergency response and carry emergency contact information. We have a 24/7 emergency hotline, and our team will coordinate with medical services if needed. All incidents are documented and families are immediately notified."
    },
    {
      category: "safety",
      question: "Are caregivers insured?",
      answer: "Yes, all our caregivers are covered by comprehensive insurance. This includes liability insurance and accident coverage, ensuring both the caregiver and your family are protected."
    },
    {
      category: "safety",
      question: "Do you conduct regular quality checks?",
      answer: "Absolutely! We conduct surprise quality checks, collect regular feedback from families, maintain detailed care logs, and hold monthly performance reviews. Our quality assurance team ensures consistent, high-standard care."
    },
    {
      category: "pricing",
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the type of service, duration, and specific care needs. Basic babysitting starts at ৳500/day, elderly care at ৳800/day, and specialized care at ৳1000/day. View our services page for detailed pricing."
    },
    {
      category: "pricing",
      question: "Do you offer package deals or discounts?",
      answer: "Yes! We offer weekly and monthly packages with up to 20% discount. Regular customers get loyalty discounts, and we have special rates for long-term care arrangements. Contact us for customized packages."
    },
    {
      category: "pricing",
      question: "Are there any hidden charges?",
      answer: "No hidden charges! Our pricing is transparent. The quoted price includes caregiver fees, service charges, and basic support. Additional costs may apply only for special equipment, transportation, or emergency call-outs, which are always communicated upfront."
    },
    {
      category: "pricing",
      question: "Do you offer refunds?",
      answer: "If you're not satisfied with our service, we offer a satisfaction guarantee. Refunds are processed for cancellations made 24+ hours in advance. For service quality issues, we'll either provide a replacement caregiver or issue a partial/full refund."
    },
    {
      category: "services",
      question: "What is included in elderly care?",
      answer: "Our elderly care includes personal hygiene assistance, medication reminders, meal preparation, mobility support, companionship, light housekeeping, and coordination with healthcare providers. Care plans are customized to individual needs."
    },
    {
      category: "services",
      question: "Do you provide medical care services?",
      answer: "We provide basic medical support like medication administration, vital signs monitoring, and post-surgery care through our registered nurses. For complex medical procedures, we coordinate with healthcare professionals and hospitals."
    },
    {
      category: "booking",
      question: "How far in advance should I book?",
      answer: "For regular services, we recommend booking at least 24-48 hours in advance. For specialized care or specific caregiver requests, 3-5 days notice is ideal. Emergency services can be arranged with 2-4 hours notice based on availability."
    },
    {
      category: "caregivers",
      question: "What if I'm not satisfied with the caregiver?",
      answer: "Your satisfaction is important to us. If you're not happy with your assigned caregiver, contact us immediately. We'll provide a replacement at no extra cost. We also investigate feedback to improve our services."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg opacity-90 mb-8">
              Find answers to common questions about our care services, booking process, and more.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 text-sm md:text-base"
              />
              <svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Category Filter */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">
              {faqs.length}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Total Questions</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">
              {categories.length - 1}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">24/7</div>
            <div className="text-xs md:text-sm text-gray-600">Support Available</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">
              {filteredFAQs.length}
            </div>
            <div className="text-xs md:text-sm text-gray-600">Results Found</div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 md:px-6 py-4 md:py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3 md:gap-4 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                          openIndex === index
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          Q
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-lg pr-4">
                          {faq.question}
                        </h3>
                        <span className="inline-block mt-2 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {categories.find(c => c.id === faq.category)?.name}
                        </span>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-5">
                      <div className="flex items-start gap-3 md:gap-4 pl-0 md:pl-12">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-xs md:text-sm font-bold text-green-600">
                            A
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-16 bg-white rounded-xl shadow-lg">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                No Questions Found
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-purple-600 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is ready to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 border-0 btn-md md:btn-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Support
            </a>
            <a
              href="tel:+8801234567890"
              className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary btn-md md:btn-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <a
              href="/services"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                Our Services
              </h3>
              <p className="text-gray-600 text-sm">
                Explore all available care services and pricing
              </p>
            </a>

            <a
              href="/about"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">ℹ️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                About Us
              </h3>
              <p className="text-gray-600 text-sm">
                Learn more about our mission and values
              </p>
            </a>

            <a
              href="/my-bookings"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                My Bookings
              </h3>
              <p className="text-gray-600 text-sm">
                Manage your current and past bookings
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
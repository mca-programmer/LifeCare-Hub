"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const controls = useAnimation();

    // Dynamic content
    const content = {
        heading: "Stay Updated",
        subheading: "Subscribe to our newsletter",
        description: "Get the latest updates, caregiving tips, and exclusive offers delivered to your inbox.",
        placeholder: "Enter your email address",
        buttonText: "Subscribe Now",
        features: [
            { icon: "📧", text: "Weekly Updates" },
            { icon: "💡", text: "Expert Tips" },
            { icon: "🎁", text: "Exclusive Offers" },
            { icon: "🔔", text: "Priority Access" }
        ],
        stats: [
            { number: "10K+", label: "Subscribers" },
            { number: "98%", label: "Satisfaction" },
            { number: "0", label: "Spam" }
        ]
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Mouse move effect
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        
        if (!email) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Please enter your email",
                showConfirmButton: false,
                timer: 1500,
                toast: true
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Please enter a valid email",
                showConfirmButton: false,
                timer: 1500,
                toast: true
            });
            return;
        }

        Swal.fire({
            position: "top",
            icon: "success",
            title: "🎉 Subscribed successfully!",
            text: "Check your inbox for confirmation",
            showConfirmButton: false,
            timer: 2000,
            toast: true
        });
        
        setEmail("");
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-5xl mx-auto"
                >
                    {/* Main Card */}
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-content rounded-3xl shadow-2xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Mouse follow effect */}
                        {isHovered && (
                            <motion.div
                                className="absolute pointer-events-none"
                                animate={{
                                    x: mousePosition.x - 100,
                                    y: mousePosition.y - 100
                                }}
                                transition={{ type: "spring", damping: 30 }}
                                style={{
                                    width: 200,
                                    height: 200,
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                                    borderRadius: '50%'
                                }}
                            />
                        )}

                        <div className="relative z-10 p-8 md:p-12 lg:p-16">
                            {/* Top Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center mb-6"
                            >
                                <div className="badge badge-lg badge-secondary gap-2 px-6 py-4">
                                    <motion.span
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ✨
                                    </motion.span>
                                    <span className="font-semibold">Join Our Community</span>
                                </div>
                            </motion.div>

                            {/* Heading */}
                            <motion.div variants={itemVariants} className="text-center mb-8">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
                                    {content.heading}
                                </h2>
                                <p className="text-xl md:text-2xl font-light opacity-90">
                                    {content.subheading}
                                </p>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="text-center text-base md:text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed"
                            >
                                {content.description}
                            </motion.p>

                            {/* Features Grid */}
                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
                            >
                                {content.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={floatingVariants}
                                        animate="animate"
                                        custom={idx}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                                    >
                                        <div className="text-3xl mb-2">{feature.icon}</div>
                                        <p className="text-sm font-medium">{feature.text}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Subscribe Form */}
                            <motion.form
                                variants={itemVariants}
                                onSubmit={handleSubscribe}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-8"
                            >
                                <motion.div
                                    className="flex-1 max-w-md"
                                    whileFocus={{ scale: 1.05 }}
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={content.placeholder}
                                        className="input input-lg w-full bg-white/90 text-base-content border-2 border-white/30 focus:border-white/60 placeholder:text-base-content/50"
                                    />
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className="btn btn-secondary btn-lg gap-2 min-w-[180px]"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="font-bold">{content.buttonText}</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </motion.form>

                            {/* Stats */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap justify-center gap-8"
                            >
                                {content.stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="text-center"
                                    >
                                        <div className="text-3xl md:text-4xl font-black mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm opacity-80">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Trust Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center gap-2 mt-8 text-sm opacity-70"
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    🔒
                                </motion.span>
                                <span>We respect your privacy. Unsubscribe anytime.</span>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Bottom Floating Elements */}
                    <div className="flex justify-center gap-8 mt-12">
                        {['💌', '🎯', '⚡'].map((emoji, idx) => (
                            <motion.div
                                key={idx}
                                className="text-5xl"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    delay: idx * 0.5,
                                    repeat: Infinity
                                }}
                            >
                                {emoji}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsletterSection;
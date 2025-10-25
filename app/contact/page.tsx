/* eslint-disable react-hooks/purity */
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, User, Building2, Sparkles } from 'lucide-react';
import { GlowingLines, GridBackground, Particle } from '@/components/custom/Effects';

// Contact data object
const contactData = {
    header: {
        title: "Contact Us",
        description: "Get in touch with our team for any inquiries, support, or partnership opportunities."
    },
    office: {
        title: "Our Office",
        address: "Anna University, Sir C V Raman Science Block 3rd, Campus, Kotturpuram, Chennai, Tamil Nadu 600025."
    },
    phone: {
        title: "Phone Numbers",
        numbers: ["+91 72000 61904", "+91 93449 84440"]
    },
    email: {
        title: "Email Addresses",
        emails: ["info@imrobonix.com", "admin@imrobonix.com"]
    },
    formSection: {
        title: "Get In Touch With Us",
        description: "We value your feedback and inquiries. Whether you're looking for product information, support, or partnership opportunities, our team is here to help. Reach out to us via phone, email, or by visiting our office. We also encourage you to follow us on social media for the latest updates and developments."
    },
    map: {
        title: "Find Us on the Map",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4363.135347192791!2d80.23536036350058!3d13.01272145036363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x39c1ce8be59987d!2siTamilnadu%20Technology%20(iTNT)%20Hub%20-Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1761344156628!5m2!1sen!2sin"
    }
};


// Contact info card
const ContactInfoCard = ({ icon: Icon, title, items, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <div className="relative backdrop-blur-xl bg-background/95 border border-primary/20 rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 opacity-0 group-hover:opacity-20 rounded-2xl"
                    animate={{
                        opacity: isHovered ? [0.1, 0.2, 0.1] : 0
                    }}
                    transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0
                    }}
                />

                <div className="relative z-10">
                    <motion.div
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ x: 5 }}
                    >
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    </motion.div>

                    <div className="space-y-2">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: delay + 0.1 + index * 0.1 }}
                                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Contact form
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="relative backdrop-blur-xl bg-background/95 border border-primary/20 rounded-2xl p-8 shadow-2xl"
        >
            <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                        />
                    </div>
                </div>

                {/* Company Input */}
                <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization (Optional)
                    </label>
                    <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="w-full pl-11 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                        />
                    </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <motion.textarea
                            whileFocus={{ scale: 1.01 }}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your inquiry..."
                            required
                            rows={5}
                            className="w-full pl-11 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium shadow-2xl hover:shadow-primary/50 transition-all group"
                >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
            </div>
        </motion.form>
    );
};

const ContactPage = () => {
    return (
        <div className="relative min-h-screen pt-20 md:pt-4  bg-background text-foreground overflow-hidden">
            {/* Background effects */}
            <GridBackground />
            <GlowingLines />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <Particle key={i} delay={i * 0.5} />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">We're Here to Help</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            {contactData.header.title}
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        {contactData.header.description}
                    </motion.p>
                </motion.div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <ContactInfoCard
                        icon={MapPin}
                        title={contactData.office.title}
                        items={[contactData.office.address]}
                        delay={0.2}
                    />
                    <ContactInfoCard
                        icon={Phone}
                        title={contactData.phone.title}
                        items={contactData.phone.numbers}
                        delay={0.3}
                    />
                    <ContactInfoCard
                        icon={Mail}
                        title={contactData.email.title}
                        items={contactData.email.emails}
                        delay={0.4}
                    />
                </div>

                {/* Form and Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Form */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                                    {contactData.formSection.title}
                                </h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {contactData.formSection.description}
                            </p>
                        </motion.div>
                        <ContactForm />
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                                {contactData.map.title}
                            </h2>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl h-[500px] backdrop-blur-xl bg-background/95"
                        >
                            {/* Corner accents */}
                            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/60 rounded-tl-2xl pointer-events-none z-10" />
                            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/60 rounded-tr-2xl pointer-events-none z-10" />
                            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/60 rounded-bl-2xl pointer-events-none z-10" />
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/60 rounded-br-2xl pointer-events-none z-10" />

                            <iframe
                                src={contactData.map.embedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
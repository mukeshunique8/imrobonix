/* eslint-disable react-hooks/purity */
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Facebook,
    Instagram,
    Linkedin,
    Moon,
    Send,
    Sun,
    Twitter,
    MessageCircle,
    X,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { GridBackground, ParticleBackground } from "./Effects";

// Footer Config
const footerConfig = {
    logo: {
        src: "/images/Logo.png",
        alt: "IMrobonix Pvt Ltd",
    },
    quickLinks: ["Home", "About Us", "Products", "Team", "Achievements", "Gallery", "Contact"],
    contact: {
        address: ["Anna University, Sir C V Raman Science Block 3rd, Campus, Guindy, Chennai, Tamil Nadu 600025"],
        phone: "+91 72000 61904",
        phone1: "+91 93449 84440",
        email: "info@imrobonix.com",
        email1: "admin@imrobonix.com",
    },
    socials: [
        { name: "Facebook", link: "#", icon: Facebook },
        { name: "Twitter", link: "#", icon: Twitter },
        { name: "Instagram", link: "https://instagram.com/_imrobonix_", icon: Instagram },
        { name: "LinkedIn", link: "https://linkedin.com/company/imrobonix", icon: Linkedin },
    ],
    policies: ["Privacy Policy", "Terms of Service", "Cookie Settings"],
};





export default function Footerdemo() {
    const [isChatOpen, setIsChatOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
            },
        },
    };

    const glowVariants = {
        initial: { opacity: 0.5, scale: 1 },
        animate: {
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <footer className="relative border-t bg-gradient-to-b from-background to-background/95 text-foreground overflow-hidden">
            {/* Animated Backgrounds */}
            <GridBackground />
            <ParticleBackground />

            {/* Glowing line at top */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container relative z-10 mx-auto px-4 py-12 md:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Logo Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-start">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative"
                        >
                            <motion.div
                                variants={glowVariants}
                                initial="initial"
                                animate="animate"
                                className="absolute inset-0 bg-primary/20 blur-xl rounded-lg"
                            />
                            <Image
                                src={footerConfig.logo.src}
                                alt={footerConfig.logo.alt}
                                width={180}
                                height={60}
                                className="mb-4"
                                priority
                            />
                        </motion.div>
                        <motion.p
                            variants={itemVariants}
                            className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed"
                        >
                            Pioneering robotics innovation for a smarter tomorrow
                        </motion.p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 text-lg font-semibold flex items-center gap-2">
                            <motion.div
                                className="w-1 h-6 bg-primary rounded-full"
                                animate={{ scaleY: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            Quick Links
                        </h3>
                        <nav className="space-y-3 text-sm">
                            {footerConfig.quickLinks.map((link, idx) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    className="group flex items-center gap-2 transition-colors hover:text-primary"
                                    whileHover={{ x: 5 }}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative">
                                        {link}
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </span>
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 text-lg font-semibold flex items-center gap-2">
                            <motion.div
                                className="w-1 h-6 bg-primary rounded-full"
                                animate={{ scaleY: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                            />
                            Contact Us
                        </h3>
                        <address className="space-y-4 text-sm not-italic">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex gap-3 items-start group"
                            >
                                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                    {footerConfig.contact.address[0]}
                                </p>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-3 items-center group">
                                <Phone className="w-4 h-4 text-primary shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                        {footerConfig.contact.phone}
                                    </p>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                        {footerConfig.contact.phone1}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-3 items-center group">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                        {footerConfig.contact.email}
                                    </p>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                        {footerConfig.contact.email1}
                                    </p>
                                </div>
                            </motion.div>
                        </address>
                    </motion.div>

                    {/* Socials + Theme */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 text-lg font-semibold flex items-center gap-2">
                            <motion.div
                                className="w-1 h-6 bg-primary rounded-full"
                                animate={{ scaleY: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                            />
                            Follow Us
                        </h3>
                        <div className="mb-6 flex flex-wrap gap-3">
                            {footerConfig.socials.map(({ name, link, icon: Icon }, idx) => (
                                <TooltipProvider key={name}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                whileInView={{ scale: 1, rotate: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1, type: "spring" }}
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="rounded-full relative overflow-hidden group border-primary/20"
                                                    asChild
                                                >
                                                    <motion.a
                                                        href={link}
                                                        target="_blank"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <motion.div
                                                            className="absolute inset-0 bg-primary/10"
                                                            initial={{ scale: 0 }}
                                                            whileHover={{ scale: 1 }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                        <Icon className="h-4 w-4 relative z-10" />
                                                        <span className="sr-only">{name}</span>
                                                    </motion.a>
                                                </Button>
                                            </motion.div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Follow us on {name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>


                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row"
                >
                    <p className="text-sm text-muted-foreground">
                        © 2025 IMrobonix Pvt Ltd. All rights reserved.
                    </p>
                    <nav className="flex gap-6 text-sm">
                        {footerConfig.policies.map((policy) => (
                            <motion.a
                                key={policy}
                                href="#"
                                className="relative transition-colors hover:text-primary"
                                whileHover={{ y: -2 }}
                            >
                                {policy}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </nav>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full flex items-center justify-center pointer-events-none">
                <h1 className="text-center text-3xl md:text-[6rem]  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700/10 to-neutral-900/10 select-none">
                    <span className="text-primary/10">IM</span><span className="text-secondary/10">robonix</span>
                </h1>
            </div>

            {/* Floating Chat Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(var(--primary), 0.3)",
                            "0 0 40px rgba(var(--primary), 0.6)",
                            "0 0 20px rgba(var(--primary), 0.3)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="rounded-full"
                >
                    <Button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="rounded-full w-14 h-14 shadow-2xl relative overflow-hidden group"
                        size="icon"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <AnimatePresence mode="wait">
                            {isChatOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    className="relative z-10"
                                >
                                    <X className="h-5 w-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    className="relative z-10"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl border border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        {/* Chat Header */}
                        <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-primary/20">
                            <h4 className="text-lg font-semibold flex items-center gap-2">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-green-500 rounded-full"
                                />
                                Live Support
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">We typically reply instantly</p>
                        </div>

                        {/* Chat Messages */}
                        <div className="relative p-4 h-64 overflow-y-auto space-y-3">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <MessageCircle className="w-4 h-4 text-primary" />
                                </div>
                                <div className="bg-muted/50 backdrop-blur-sm rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                                    <p className="text-sm">Hello! How can we assist you today?</p>
                                    <p className="text-xs text-muted-foreground mt-1">Just now</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Chat Input */}
                        <div className="relative p-4 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
                            <div className="flex gap-2">
                                <Textarea
                                    placeholder="Type your message..."
                                    className="flex-grow resize-none min-h-[44px] max-h-32 bg-background/50 border-primary/20"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={1}
                                />
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        onClick={() => setMessage("")}
                                        size="icon"
                                        className="rounded-full h-11 w-11"
                                    >
                                        <Send className="h-4 w-4" />
                                        <span className="sr-only">Send message</span>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
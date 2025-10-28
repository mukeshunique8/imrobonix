"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GridBackground, SectionParticles } from "./Effects";



export default function InnovationSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,

                stiffness: 100,
                damping: 15,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,

                stiffness: 100,
                damping: 15,
                delay: 0.3,
            },
        },
    };

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-background">
            {/* Animated Backgrounds */}
            <GridBackground />
            <SectionParticles />

            {/* Glowing accent line at top */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="inline-block">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </motion.div>
                                <span className="text-sm font-medium text-primary">
                                    Innovation at Its Core
                                </span>
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.div variants={itemVariants}>
                            <div className="flex items-start gap-3 mb-4">
                                <motion.div
                                    className="w-1 h-12 bg-primary rounded-full"
                                    animate={{ scaleY: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    <span className="block mb-2">
                                        Redefine{" "}
                                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                            Surgical Innovation
                                        </span>
                                    </span>
                                    <span className="block text-foreground/90">
                                        with Advanced Robotic Technology
                                    </span>
                                </h2>
                            </div>
                        </motion.div>

                        {/* Description */}
                        {/* <motion.div variants={itemVariants} className="space-y-4">
                            <div className="relative pl-6 border-l-2 border-primary/20">
                                <motion.div
                                    className="absolute left-0 top-0 w-0.5 h-full bg-primary origin-top"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <strong className="text-primary">SurgiKot</strong> is a lightweight, high-precision handheld smart medical robotic device designed for multifunctional surgical procedures. It features an articulating end gripper and advanced laparoscopic instruments, ensuring accuracy in operations.
                                </p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-primary/20">
                                <motion.div
                                    className="absolute left-0 top-0 w-0.5 h-full bg-primary origin-top"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                />
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <strong className="text-primary">CheriBot</strong>, a smart robotic bionic upper limb, offers high grasping capability, allowing amputees to mimic human hand movements with 15 degrees of freedom. Utilizing camera vision, it adapts to various contours for enhanced control and functionality.
                                </p>
                            </div>
                        </motion.div> */}

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="relative px-8 py-6 text-base rounded-xl bg-primary hover:bg-primary/90 group overflow-hidden w-full sm:w-auto"
                                    asChild
                                >
                                    <Link target="_blank" href="/products">
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                                            animate={{ x: ["-200%", "200%"] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                        />
                                        <span className="relative z-10 flex items-center gap-2">
                                            Explore Products
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-8 py-6 text-base rounded-xl border-2 border-primary/20 hover:bg-primary/10 backdrop-blur-sm w-full sm:w-auto"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Get in Touch
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>


                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >


                        {/* Image Container */}
                        <div className="relative group">

                            {/* Main Image */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 pointer-events-none z-10" />

                                <Image
                                    src="/images/overview.png"
                                    alt="SurgiKot Robotic Surgical Device"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Scan Line Effect */}
                                <motion.div
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                                    animate={{ top: ["0%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>


                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Glow Line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
        </section>
    );
}
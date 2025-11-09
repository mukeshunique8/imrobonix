"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FloatingParticles, GridBackground } from "./Effects";
import Link from "next/link";

const products = [
    {
        name: "SurgiKot",
        type: "Handheld Surgical Robot",
        path: "/images/Surgi2.png",
        icon: Zap,
        description:
            "Lightweight, high-precision handheld smart medical robotic device designed for multifunctional surgical procedures with articulating end gripper.",
        features: [
            "Articulating end gripper technology",
            "Advanced laparoscopic instruments",
            "High-precision accuracy",
            "Multifunctional capabilities",
        ],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    // {
    //     name: "CheriBot",
    //     type: "Bionic Upper Limb",
    //     path: "/images/Cheribot.png",
    //     icon: Activity,
    //     description:
    //         "Smart robotic bionic upper limb with high grasping capability, allowing amputees to mimic natural human hand movements seamlessly.",
    //     features: [
    //         "15 degrees of freedom",
    //         "Camera vision adaptation",
    //         "Contour-adaptive control",
    //         "Natural movement mimicry",
    //     ],
    //     gradient: "from-purple-500/20 to-pink-500/20",
    // },
];



export default function TechnologiesSection() {
    return (
        <section className="relative py-24 md:py-32 bg-background overflow-hidden">
            {/* Animated Backgrounds */}
            <GridBackground />
            <FloatingParticles count={30} />

            {/* Top glow line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                        <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm font-medium text-primary">
                            Our Revolutionary Products
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Advanced Robotic
                        </span>{" "}
                        <span className="text-foreground">Solutions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Pioneering the future of medical technology with precision-engineered robotic systems
                    </p>
                </motion.div>

                {/* Products */}
                <div className="space-y-32">
                    {products.map((product, index) => {
                        const isLeft = index % 2 === 0;
                        const Icon = product.icon;

                        return (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isLeft ? "lg:grid-flow-dense" : ""}`}>
                                    {/* Image Section */}
                                    <motion.div
                                        className={`relative ${!isLeft ? "lg:col-start-2" : ""}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >


                                        {/* Image container with decorative frame */}
                                        <div className="relative group">

                                            {/* Main image card */}
                                            <div className="relative bg-background/80 backdrop-blur-xl rounded-2xl  overflow-hidden shadow-2xl">
                                                <div className="aspect-[4/3] relative">
                                                    <Image
                                                        src={product.path}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover"
                                                    />


                                                </div>

                                                {/* Tech badge overlay */}
                                                <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-xl px-4 py-2">
                                                    <div className="flex items-center gap-2">
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                        >
                                                            <Icon className={`w-5 h-5`} />
                                                        </motion.div>
                                                        <span className="text-xs font-semibold text-primary">
                                                            {product.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div
                                        className={`space-y-6 ${!isLeft ? "lg:col-start-1 lg:row-start-1" : ""}`}
                                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {/* Product name with accent bar */}
                                        <div className="flex items-start gap-4">
                                            <motion.div
                                                className="w-1 h-16 bg-primary rounded-full"
                                                animate={{ scaleY: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <div>
                                                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                                                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                                        {product.name}
                                                    </span>
                                                </h3>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Icon className="w-4 h-4" />
                                                    <span className="text-sm font-medium">{product.type}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* Features list */}
                                        <div className="space-y-3">
                                            {product.features.map((feature, idx) => (
                                                <motion.div
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-start gap-3 group cursor-pointer"
                                                >
                                                    <div className="relative mt-1">
                                                        <motion.div
                                                            className="absolute inset-0 bg-primary/20 blur-md rounded-full"
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                                        />
                                                        <div className="relative w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-primary" />
                                                        </div>
                                                    </div>
                                                    <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="pt-4"
                                        >
                                            <Button
                                                size="lg"
                                                className="relative px-8 py-6 text-base rounded-xl bg-primary hover:bg-primary/90 group overflow-hidden"
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                                                    animate={{ x: ["-200%", "200%"] }}
                                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                                />
                                                <Link href="/products" target="_blank">
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        Learn More About {product.name}
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span></Link>
                                            </Button>
                                        </motion.div>

                                    </motion.div>
                                </div>

                                {/* Connecting line between products (not on last item) */}
                                {index < products.length - 1 && (
                                    <motion.div
                                        className="absolute left-1/2 -bottom-16 w-[2px] h-32 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom glow line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
        </section>
    );
}
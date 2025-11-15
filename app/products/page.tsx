/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Activity,
    CheckCircle2,
    Sparkles,
    IndianRupee,
    Users,
    Leaf,
    Camera,
    Grip,
    Cpu,
    Heart,
    TrendingUp
} from "lucide-react";
import Image from "next/image";
import { GridBackground, SectionParticles } from "@/components/custom/Effects";



// Product Hero Section
const ProductHero = ({ title, subtitle, tagline, description, image, icon: Icon }: any) => {
    return (
        <div className="relative py-20  overflow-hidden">
            <SectionParticles />
            <GridBackground />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                        >
                            <Icon className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Featured Product</span>
                        </motion.div>

                        <div className="flex items-start gap-4">
                            <motion.div
                                className="w-1 h-20 bg-primary rounded-full"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                                >
                                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl md:text-2xl text-muted-foreground mb-4"
                                >
                                    {tagline}
                                </motion.h2>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4"
                                >
                                    {subtitle}
                                </motion.h2>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <motion.div
                            className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-background/50 backdrop-blur-xl">
                            <div className="aspect-square relative">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-none"
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/10" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Features Grid
const FeaturesSection = ({ title, features, image }: any) => {
    return (
        <div className="relative py-20 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {title}
                    </span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Features List */}
                    <div className="space-y-4">
                        {features.map((feature: string, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all"
                            >
                                <div className="relative">
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20 blur-lg rounded-full"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    <div className="relative w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                            <div className="aspect-square relative bg-background/50 backdrop-blur-xl">
                                <Image
                                    src={image}
                                    alt="Features"
                                    fill
                                    className="object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-primary/20"
                                    animate={{
                                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                                    }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    style={{ backgroundSize: "200% 200%" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Best Works Cards
const BestWorksSection = ({ title, works }: any) => {
    return (
        <div className="relative py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {title}
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {works.map((work: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative cursor-pointer group h-full"
                        >
                            <div className="relative bg-background/80 backdrop-blur-xl border border-primary/20 group-hover:border-primary/40 rounded-2xl p-6 shadow-xl transition-colors h-full flex flex-col">
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0"
                                    >
                                        {work.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-primary">
                                        {work.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed flex-grow">
                                    {work.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Impact Section
const ImpactSection = ({ title, impacts }: any) => {
    const iconMap: any = {
        "Economic": IndianRupee,
        "Social": Users,
        "Environmental": Leaf,
    };

    return (
        <div className="relative py-20 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {title}
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {impacts.map((impact: any, idx: number) => {
                        const Icon = iconMap[impact.title];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="relative group h-full"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-primary/20 blur-2xl rounded-2xl"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <div className="relative bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-xl h-full flex flex-col">
                                    <div className="flex flex-col items-center text-center mb-6">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4"
                                        >
                                            <Icon className="w-8 h-8 text-primary" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-primary mb-4">
                                            {impact.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {impact.points.map((point: string, i: number) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 + i * 0.05 }}
                                                className="flex items-start gap-2 text-muted-foreground"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Main Products Page Component
export default function ProductsPage() {
    const surgiKotData = {
        title: "SURGIKOT",
        tagline: "Surgeries Made Seamless",
        subtitle: "India's First High Precision Robotic Hand-held Medical Device",
        description: "Dr. Palani, a famous surgeon from Tamil Nadu, India drew to our attention a real-world problem that served as the fuel to our innovation. After rigorous analysis and detailed discussion with experts, our team created a multipurpose, high-precision, bio-medical device that aims to be the first robotic surgical tool controlled by the thumb with characteristics similar to the human hand.",
        image: "/images/Surgikot2.png",
        icon: Zap,
        features: [
            "High Precision",
            "Joystick Control",
            "Minimizing Human Hand",
            "Smart Surgery Procedure",
            "Gripper Position Locking System",
        ],
        bestWorks: [
            {
                title: "Mimicking Human Hand",
                description: "Has pneumatic gestures that allow gripping and manipulation of objects to intimate human hand.",
                icon: <Grip className="w-6 h-6 text-primary" />,
            },
            {
                title: "High Precision",
                description: "This Instrument has 0.80 mm degree of accuracy with the ease of functionality for the doctors.",
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
            },
            {
                title: "Smart Surgery Procedure",
                description: "Robots are used in surgeries in a novel way which is popularly known as 'Smart Surgery'.",
                icon: <Cpu className="w-6 h-6 text-primary" />,
            },
            {
                title: "High Flexibility Gripper",
                description: "When compared to humans, Surgi-kot's gripping ability is highly flexible.",
                icon: <Sparkles className="w-6 h-6 text-primary" />,
            },
        ],
        impacts: [
            {
                title: "Economic",
                points: [
                    "High precision smart medical robotic device",
                    "Potential to provide employment",
                    "World class surgery at very low cost – Medical tourism",
                ],
            },
            {
                title: "Social",
                points: [
                    "Increased precision and health security for all",
                    "Surgi-kot brings advanced surgeries to the last mile",
                    "Life saving surgeries done at affordable cost",
                ],
            },
            {
                title: "Environmental",
                points: [
                    "Low electricity consumption",
                    "Multifunctional - same device for different end effects",
                    "Sustainable medical technology",
                ],
            },
        ],
    };

    const cheriBotData = {
        title: "CHERI-BOT",
        tagline: "Empowering Lives with AI",
        subtitle: "India's First AI Vision Enabled Bionic Upper Limb",
        description: "A lightweight, high grasping, smart robotic bionic upper limb. Amputees can grab any contour using camera vision replicating the exact human hand with 15 degrees of freedom.",
        image: "/images/Cheri3.png",
        icon: Activity,
        features: [
            "AI Vision",
            "Agility Up to 10 kgs",
            "Image Processing",
            "Health Monitoring",
            "Affordable Cost",
        ],
        bestWorks: [
            {
                title: "AI Vision Camera",
                description: "AI is used in vision cameras to expedite the image analyzing process. It enables vision cameras to understand acceptable variations in the shape and texture of an image, helping the bionic arm perform like a human hand.",
                icon: <Camera className="w-6 h-6 text-primary" />,
            },
            {
                title: "Image Processing and Video Analysis",
                description: "Image processing concentrates on uncovering and revealing internal structures hidden by the skin and bones. Video analyst technique is used to elevate the performance of the bionic upper limb.",
                icon: <Cpu className="w-6 h-6 text-primary" />,
            },
            {
                title: "Grasping",
                description: "The AI-enabled bionic upper limb clearly differentiates various structures. It works completely based on the AI mechanism of image processing which makes it possible to have higher grasping power.",
                icon: <Grip className="w-6 h-6 text-primary" />,
            },
            {
                title: "Touchpad Control",
                description: "A touchpad featuring a tactile sensor that can translate the motion and position of a user's fingers to control the bionic upper limb. A tap on the touchpad allows the user to control the speed of the bionic hand.",
                icon: <Activity className="w-6 h-6 text-primary" />,
            },
        ],
        impacts: [
            {
                title: "Economic",
                points: [
                    "Affordable price",
                    "Available for all patients who are deficient",
                    "Efficient to all patients and helps them effectively",
                ],
            },
            {
                title: "Social",
                points: [
                    "Advanced procedure for health monitoring",
                    "Making individual lives better at affordable cost",
                    "Improved lifestyle with improved technology",
                ],
            },
            {
                title: "Environmental",
                points: [
                    "Safe to environment",
                    "High patient care",
                    "Highly precise medication",
                ],
            },
        ],
    };

    return (
        <div className="relative min-h-screen pt-20 md:pt-6 bg-background overflow-hidden">
            <SectionParticles />
            <GridBackground />

            {/* Page Header */}
            <div className="relative py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Our Innovation</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    >
                        <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            Revolutionary Products
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        Transforming healthcare with cutting-edge robotics technology
                    </motion.p>
                </div>
            </div>

            {/* SurgiKot Section */}
            <ProductHero {...surgiKotData} />
            {/* <FeaturesSection
                title="Features of SurgiKot"
                features={surgiKotData.features}
                image="/images/Surgikot2.png"
            /> */}
            <BestWorksSection
                title="Best Works of SurgiKot"
                works={surgiKotData.bestWorks}
            />
            <ImpactSection
                title="Impacts of SurgiKot"
                impacts={surgiKotData.impacts}
            />

            {/* Divider */}
            {/* <div className="relative py-16">
                <motion.div
                    className="absolute top-1/2 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary/30 to-transparent"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div> */}

            {/* CheriBot Section */}
            {/* <ProductHero {...cheriBotData} />
            <FeaturesSection
                title="Features of CheriBot"
                features={cheriBotData.features}
                image="/images/Cfeature.png"
            />
            <BestWorksSection
                title="Best Works of CheriBot"
                works={cheriBotData.bestWorks}
            />
            <ImpactSection
                title="Impacts of CheriBot"
                impacts={cheriBotData.impacts}
            /> */}
        </div>
    );
}
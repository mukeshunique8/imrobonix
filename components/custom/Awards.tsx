import React, { useState } from 'react';
import { Package, Users, Award, TrendingUp } from "lucide-react";

import { motion } from 'framer-motion';
import { Trophy, Sparkles, ChevronRight } from 'lucide-react';
import { GridBackground, Particle, SectionParticles } from './Effects';
import Image from 'next/image';
interface Award {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    year?: string; // Optional year
    amount?: string; // Optional amount
}
// Awards data
const awardsData = [
    {
        id: 1,
        title: "Award From Hon'ble Chief Minister of Tamil Nadu",
        description: "Received an award from the Tamil Nadu Government, presented by Chief Minister M.K. Stalin, for the development of a handheld powered high-precision robotic surgical device.",
        image: "/images/contthree.png",
        icon: <Trophy className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "Award From MSME Minister",
        description: "We are extremely pleased and happy to share that our team received a cash award from the honourable MSME Minister, T.M. Anbarasan for the innovation of India's first automated Minimally invasive surgical tool for the year 2021. We consider it to be a privilege for considering and recognizing our effort.",
        image: "/images/award1.png",
        icon: <Award className="w-6 h-6" />,
        year: "2021"
    },
    {
        id: 3,
        title: "Startup India Seed Fund (SISFS)",
        description: "We appreciate Indigram Labs Foundation (ILF) for helping us to receive the Startup India Seed Fund (SISFS) from the Central Government of India worth 1.2 million INR. The Startup India Seed Fund Scheme (SISFS) intends to give financial support to entrepreneurs for market entry, product testing, prototype building, proof of concept, and commercialization.",
        amount: "₹1.2 Million",
        image: "/images/award2.png",
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        id: 4,
        title: "Innovation Voucher Programme",
        description: "We are delighted and grateful to the State Government of Tamil Nadu for providing us with the Innovation Voucher Programme. The Innovation Voucher Programme (IVP) is a grant-in-aid programme to support innovations and research of MSMEs and manufacturing start-ups. In order to assist MSMEs in innovation, this programme intends to make use of the strengths of research institutes as Knowledge Partners (KPs) to the higher education institutions.",
        image: "/images/award3.png",
        icon: <Award className="w-6 h-6" />,
    },
    {
        id: 5,
        title: "Atal New India Challenge",
        description: "With pleasure we share that we have won the ANIC award worth of 1 crore INR. ANIC is an effort of AIM, NITI Aayog. ANIC aims to find, pick, support, and develop technology-based breakthroughs that address societal relevant and national-level sectoral problems, using a grant-based system.",
        amount: "₹1 Crore",
        image: "/images/award4.png",
        icon: <Trophy className="w-6 h-6" />,
    },
    {
        id: 6,
        title: "Award From FITT",
        description: "The Biotechnology Industry Research Assistance Council (BIRAC) awarded a grant of ₹50 lakhs through the Foundation for Innovation and Technology Transfer (FITT), IIT Delhi, to support the development of a high-precision robotic surgical device.",
        amount: "₹50 Lakhs",
        image: "/images/award5.png",
        icon: <Award className="w-6 h-6" />,
    }
];

const stats = [
    {
        value: "1",
        suffix: "+",
        label: "Products",
        icon: Package,
        description: "Innovative solutions",
        gradient: "from-primary/20 to-primary/80",
        glowColor: "bg-primary/20",
    },
    {
        value: "10",
        suffix: "+",
        label: "Supported By",
        icon: Users,
        description: "Industry partners",
        gradient: "from-secondary/20 to-secondary/20",
        glowColor: "bg-secondary/20",
    },
    {
        value: "10",
        suffix: "+",
        label: "Awards",
        icon: Award,
        description: "Recognition received",
        gradient: "from-primary/20 to-primary/80",
        glowColor: "bg-primary/20",
    },
];
const AwardCard = ({ award, index }: { award: Award; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.2
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12 mb-20`}
        >
            {/* Image Section */}
            <motion.div
                className="relative w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
            >
                <div className="relative w-full h-full backdrop-blur-xl bg-background/95   shadow-2xl">
                    {/* Animated gradient overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 pointer-events-none z-10"
                        animate={{
                            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
                        }}
                        transition={{
                            duration: 2,
                            repeat: isHovered ? Infinity : 0,
                        }}
                    />

                    {/* Next.js Image Component */}
                    <div className="relative z-0 w-full h-full">
                        <Image
                            src={award.image}
                            alt={award.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index < 2} // Prioritize first 2 images
                        />
                    </div>



                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="w-full md:w-1/2 flex flex-col gap-4"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Year Badge - Only show if year exists */}
                {(award.year || award.amount) && (
                    <motion.div
                        className="inline-flex items-center gap-2 w-fit flex-wrap"
                        whileHover={{ scale: 1.05 }}
                    >
                        {award.year && (
                            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl">
                                <span className="text-xs font-medium text-primary">{award.year}</span>
                            </div>
                        )}
                        {award.amount && (
                            <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-xl">
                                <span className="text-xs font-semibold ">{award.amount}</span>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Icon + Title */}
                <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                >
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-xl mt-1 shrink-0">
                        {award.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                            {award.title}
                        </h3>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-muted-foreground leading-relaxed text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    {award.description}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    className="h-1 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent rounded-full mt-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                />
            </motion.div>
        </motion.div>
    );
};
const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-baseline justify-center"
        >
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
                {value}
            </motion.span>
            <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary ml-1"
            >
                {suffix}
            </motion.span>
        </motion.div>
    );
};

const StatisticsSection = () => {
    return (
        <section className="relative pt-20 bg-background overflow-hidden">

            {/* Top glow line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Radial glow in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <TrendingUp className="w-4 h-4 text-primary" />
                        </motion.div>
                        <span className="text-sm font-medium text-primary">
                            Our Impact in Numbers
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-foreground">Driving </span>
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Innovation Forward
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Measurable excellence in robotics and medical technology
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                {/* Outer glow */}
                                <motion.div
                                    className={`absolute -inset-4 ${stat.glowColor} blur-3xl rounded-full opacity-0 group-hover:opacity-100`}
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                {/* Card container */}
                                <div className="relative bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50`} />

                                    {/* Animated border */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, rgba(var(--primary), 0.3), transparent)`,
                                        }}
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />



                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                        {/* Icon */}
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                delay: index * 0.2 + 0.3,
                                            }}
                                            whileHover={{ rotate: 360 }}
                                            className="relative"
                                        >
                                            <motion.div
                                                className={`absolute inset-0 ${stat.glowColor} blur-xl rounded-full`}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <div className="relative w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-primary" />
                                            </div>
                                        </motion.div>

                                        {/* Number */}
                                        <div>
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        </div>

                                        {/* Label */}
                                        <div>
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.5 }}
                                                className="text-xl md:text-2xl font-semibold text-foreground mb-2"
                                            >
                                                {stat.label}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.6 }}
                                                className="text-sm text-muted-foreground"
                                            >
                                                {stat.description}
                                            </motion.p>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="flex gap-2">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1.5 h-1.5 rounded-full bg-primary/50"
                                                    animate={{
                                                        scale: [1, 1.5, 1],
                                                        opacity: [0.5, 1, 0.5],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.2,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Corner accents */}
                                    {[
                                        { top: "8px", left: "8px" },
                                        { top: "8px", right: "8px" },
                                        { bottom: "8px", left: "8px" },
                                        { bottom: "8px", right: "8px" },
                                    ].map((pos, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="absolute w-3 h-3 border-2 border-primary/30 rounded-sm"
                                            style={pos}
                                            animate={{
                                                opacity: [0.3, 1, 0.3],
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: idx * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Connection line (except last item) */}
                                {index < stats.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute top-1/2 -right-6 lg:-right-6 w-12 lg:w-12 h-[2px]"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                                    >
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
                                            <motion.div
                                                className="absolute w-2 h-2 rounded-full bg-primary -right-1 -top-[3px]"
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>


                {/* Bottom decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 backdrop-blur-xl">
                        <Trophy className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Continuing our journey of innovation and excellence
                        </span>
                    </div>
                </motion.div>

            </div>


        </section>
    );
}

const Awards = () => {
    return (
        <section className="relative min-h-screen bg-background text-foreground overflow-hidden py-20">
            {/* Background effects */}
            <GridBackground />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <Particle key={i} delay={i * 0.5} />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Celebrating Excellence</span>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            className="w-1 h-16 bg-gradient-to-b from-primary to-primary/60 rounded-full"

                        />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            Awards & Recognition
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Honored to be recognized by government bodies and institutions for our innovative contributions to medical robotics
                    </motion.p>
                </motion.div>

                {/* Awards List */}
                <div className="max-w-7xl mx-auto">
                    {awardsData.map((award, index) => (
                        <AwardCard key={award.id} award={award} index={index} />
                    ))}
                </div>

                <StatisticsSection />

            </div>


        </section>
    );
};

export default Awards;
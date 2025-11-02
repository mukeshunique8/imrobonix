import React, { useState, useEffect, useRef } from 'react';
import { Package, Users, Award, TrendingUp, Trophy, Sparkles, Camera } from "lucide-react";
import { useScroll, useTransform, motion } from 'framer-motion';

interface AwardData {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    year?: string;
    amount?: string;
}

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
        description: "We are extremely pleased and happy to share that our team received a cash award from the honourable MSME Minister, T.M. Anbarasan for the innovation of India's first automated Minimally invasive surgical tool for the year 2021.",
        image: "/images/award1.png",
        icon: <Award className="w-6 h-6" />,
        year: "2021"
    },
    {
        id: 3,
        title: "Startup India Seed Fund (SISFS)",
        description: "We appreciate Indigram Labs Foundation (ILF) for helping us to receive the Startup India Seed Fund (SISFS) from the Central Government of India worth 1.2 million INR.",
        amount: "₹1.2 Million",
        image: "/images/award2.png",
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        id: 4,
        title: "Innovation Voucher Programme",
        description: "We are delighted and grateful to the State Government of Tamil Nadu for providing us with the Innovation Voucher Programme.",
        image: "/images/award3.png",
        icon: <Award className="w-6 h-6" />,
    },
    {
        id: 5,
        title: "Atal New India Challenge",
        description: "With pleasure we share that we have won the ANIC award worth of 1 crore INR. ANIC is an effort of AIM, NITI Aayog.",
        amount: "₹1 Crore",
        image: "/images/award4.png",
        icon: <Trophy className="w-6 h-6" />,
    },
    {
        id: 6,
        title: "Award From FITT",
        description: "The Biotechnology Industry Research Assistance Council (BIRAC) awarded a grant of ₹50 lakhs through the Foundation for Innovation and Technology Transfer (FITT), IIT Delhi.",
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
    },
    {
        value: "10",
        suffix: "+",
        label: "Supported By",
        icon: Users,
        description: "Industry partners",
    },
    {
        value: "10",
        suffix: "+",
        label: "Awards",
        icon: Award,
        description: "Recognition received",
    },
];

const TimelineAwardCard = ({ award }: { award: AwardData }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative  rounded-2xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-800"
        >
            <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    {/* Title with Icon */}
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-1">
                            {award.icon}
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                {award.title}
                            </h3>
                            {award.amount && (
                                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700">
                                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                                        {award.amount}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {award.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const SimpleAwardCard = ({ award, index }: { award: AwardData; index: number }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12 mb-16`}
        >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-800">
                <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                {award.amount && (
                    <div className="inline-flex items-center gap-2 w-fit">
                        <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700">
                            <span className="text-xs font-semibold text-green-700 dark:text-green-300">
                                {award.amount}
                            </span>
                        </div>
                    </div>
                )}

                <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/30 mt-1 shrink-0">
                        {award.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {award.title}
                        </h3>
                    </div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg">
                    {award.description}
                </p>

                <div className="h-1 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent rounded-full mt-2" />
            </div>
        </motion.div>
    );
};

const Timeline = ({ data }: { data: { title: string; content: React.ReactNode }[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-white dark:border-neutral-900 shadow-lg" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

const StatisticsSection = () => {
    return (
        <section className="relative py-20 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-neutral-900 dark:text-neutral-100">Driving </span>
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Innovation Forward
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="text-5xl font-bold text-primary">
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const TimelineAwards = () => {
    // Separate awards with years and without years
    const timelineAwards = awardsData.filter(award => award.year);
    const simpleAwards = awardsData.filter(award => !award.year);

    // Prepare timeline data
    const timelineData = timelineAwards.map(award => ({
        title: award.year!,
        content: <TimelineAwardCard award={award} />
    }));

    return (
        <section className="relative min-h-screen  py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Celebrating Excellence</span>
                    </div>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            Awards & Recognition
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Honored to be recognized by government bodies and institutions for our innovative contributions to medical robotics
                    </p>
                </motion.div>

                {/* Timeline Awards (with years) */}
                {timelineData.length > 0 && (
                    <div className="mb-20">
                        <Timeline data={timelineData} />
                    </div>
                )}

                {/* Simple Awards (without years) */}
                {simpleAwards.length > 0 && (
                    <div className="max-w-7xl mx-auto">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100"
                        >
                            More Recognitions
                        </motion.h3>
                        {simpleAwards.map((award, index) => (
                            <SimpleAwardCard key={award.id} award={award} index={index} />
                        ))}
                    </div>
                )}

                {/* Statistics Section */}
                <StatisticsSection />
            </div>
        </section>
    );
};

export default TimelineAwards;
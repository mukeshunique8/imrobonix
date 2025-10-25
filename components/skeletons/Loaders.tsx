/* eslint-disable react-hooks/purity */
"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';

// ==================== INITIAL PAGE LOADER ====================
export const InitialPageLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing');

    useEffect(() => {
        // Progress animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Loading text changes
        const textTimeout1 = setTimeout(() => setLoadingText('Loading Systems'), 1000);
        const textTimeout2 = setTimeout(() => setLoadingText('Connecting ....'), 2000);
        const textTimeout3 = setTimeout(() => setLoadingText('Almost Ready'), 2800);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(textTimeout1);
            clearTimeout(textTimeout2);
            clearTimeout(textTimeout3);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            {/* Pulsing gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Scanning lines */}
            <motion.div
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                    top: ['-10%', '110%']
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Rotating rings */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full border-2 border-primary/20"
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full border-2 border-secondary/20"
                animate={{
                    rotate: -360,
                    scale: [1, 0.9, 1]
                }}
                transition={{
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
            />

            {/* Main content */}
            <div className="relative z-10 text-center px-4">
                {/* Logo with glitch effect */}
                <motion.div
                    initial={{ scale: 0, rotateY: -180 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    className="mb-8"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold select-none"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(var(--primary), 0.5)',
                                '0 0 40px rgba(var(--primary), 0.8)',
                                '0 0 20px rgba(var(--primary), 0.5)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.span
                            className="text-primary"
                            animate={{
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            IM
                        </motion.span>
                        <motion.span
                            className="text-secondary"
                            animate={{
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.3
                            }}
                        >
                            robonix
                        </motion.span>
                    </motion.h1>
                </motion.div>

                {/* Loading text with typing effect */}
                <motion.div
                    className="mb-6 h-8"
                    key={loadingText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <p className="text-lg text-muted-foreground font-medium">
                        {loadingText}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            ...
                        </motion.span>
                    </p>
                </motion.div>

                {/* Progress bar */}
                <div className="max-w-md mx-auto">
                    <div className="relative h-2 bg-background/50 rounded-full border border-primary/20 overflow-hidden backdrop-blur-xl">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary/80 to-secondary rounded-full"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ['-100%', '200%']
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>
                    <motion.p
                        className="text-sm text-muted-foreground mt-2 font-mono"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        {progress}%
                    </motion.p>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/40 rounded-full"
                            initial={{
                                x: Math.random() * 800 - 400,
                                y: 600,
                                opacity: 0
                            }}
                            animate={{
                                y: -100,
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/40" />
        </motion.div>
    );
};


// ==================== ROUTE TRANSITION LOADER ====================
export const RouteTransitionLoader = () => {
    return (
        <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-9998 bg-pink-600 origin-top flex items-center justify-center"
        >
            {/* Animated background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-400 via-background to-secondary/20"
                animate={{
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
            />

            {/* Scanning grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

            {/* Center content */}
            <div className="relative z-10">
                {/* Spinning hexagon loader */}
                <motion.div
                    className="relative w-24 h-24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.polygon
                            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                            animate={{
                                strokeDasharray: ["0, 400", "400, 0"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </svg>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <Zap className="w-8 h-8 text-primary" />
                    </motion.div>
                </motion.div>

                {/* Loading text */}
                <motion.p
                    className="text-center mt-6 text-sm font-medium text-muted-foreground"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Loading
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        ...
                    </motion.span>
                </motion.p>
            </div>

            {/* Sweeping line */}
            <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                    top: ['0%', '100%']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
};

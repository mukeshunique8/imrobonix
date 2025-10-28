/* eslint-disable react-hooks/purity */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GridBackground, SectionParticles, VideoControls } from "./Effects";


export default function RoboticHeroSection() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };

    const handleFullscreen = () => {
        if (containerRef.current) {
            if (!document.fullscreenElement) {
                containerRef.current.requestFullscreen();
                setIsFullscreen(true);
            } else {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full pt-20 md:pt-4  "
        >
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/Surgikot.mp4" type="video/mp4" />
                    {/* Fallback gradient if video doesn't load */}
                </video>

                {/* Video Overlay */}
                {!isFullscreen &&
                    <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/30 to-background/50" />
                }
            </div>

            {/* Animated Backgrounds */}
            {!isFullscreen && <>
                <GridBackground />
                <SectionParticles /></>}

            {/* Glowing top border */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Scanning Line Effect */}
            {/* <motion.div
                className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary/50 to-transparent"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            /> */}

            {/* Content Container */}
            {!isFullscreen && <div className="relative z-20 lg:min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Animated Badge */}
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 md:mb-8"
                    >
                        <motion.div
                            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs md:text-sm font-medium text-primary">
                            Next Generation Innovation
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                    >
                        <span className="block mb-2">
                            <motion.span
                                className="inline-block bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                style={{ backgroundSize: "200% auto" }}
                            >
                                Robotic Functionality
                            </motion.span>
                        </span>
                        <span className="block text-foreground/90">
                            in a Handheld
                        </span>
                        <span className="block">
                            <motion.span
                                className="inline-block bg-linear-to-r from-primary/80 to-primary bg-clip-text text-transparent"
                            >
                                Minimally Invasive
                            </motion.span>
                            {" "}
                            <span className="text-foreground/90">Surgical Device</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed"
                    >
                        Revolutionizing surgical precision with cutting-edge robotics technology,
                        bringing the future of healthcare to your hands
                    </motion.p>

                    {/* CTA Buttons */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                className="relative px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-xl bg-primary hover:bg-primary/90 group overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-r from-primary/0 via-white/20 to-primary/0"
                                    animate={{ x: ["-200%", "200%"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <Link href="/products">
                                    <span className="relative z-10">Explore Technology</span></Link>
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 py-6 text-lg rounded-xl border-2 border-primary/20 hover:bg-primary/10 backdrop-blur-sm"
                            >
                                Watch Demo
                            </Button>
                        </motion.div>
                    </motion.div> */}

                    {/* Floating Stats */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
                    >
                        {[
                            { value: "99.9%", label: "Precision Rate" },
                            { value: "50+", label: "Patents Filed" },
                            { value: "10K+", label: "Procedures" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                />
                                <div className="relative bg-background/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-6">
                                    <div className="text-3xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div> */}
                </div>
            </div>}

            {/* Video Controls */}
            <VideoControls
                isPlaying={isPlaying}
                isMuted={isMuted}
                onPlayPause={handlePlayPause}
                onMuteToggle={handleMuteToggle}
                onFullscreen={handleFullscreen}
            />
            {/* Scroll Down Indicator */}

            {!isFullscreen && <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
                onClick={handleScrollDown}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
                <span className="text-xs font-medium">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
            </motion.button>}


            {/* Fullscreen Exit Button */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-8 right-8 z-30"
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleFullscreen}
                            className="rounded-full bg-background/80 backdrop-blur-xl border-primary/20"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
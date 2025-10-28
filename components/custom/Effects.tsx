/* eslint-disable react-hooks/purity */
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Particle Background Component
export const SectionParticles = () => {
    const particles = Array.from({ length: 50 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.5 + 0.3,
                    }}
                    animate={{
                        y: [null, Math.random() * -200 - 100],
                        opacity: [null, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

// Grid Background
export const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
        </div>
    );
};

// Video Controls Component
export const VideoControls = ({
    isPlaying,
    isMuted,
    onPlayPause,
    onMuteToggle,
    onFullscreen
}: {
    isPlaying: boolean;
    isMuted: boolean;
    onPlayPause: () => void;
    onMuteToggle: () => void;
    onFullscreen: () => void;
}) => {
    return (
        // absolute bottom-8 left-4 z-30
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 "
        >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/80 backdrop-blur-xl border border-primary/20 shadow-2xl">
                <motion.div
                    className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onPlayPause}
                    className="relative rounded-full hover:bg-primary/20"
                >
                    <AnimatePresence mode="wait">
                        {isPlaying ? (
                            <motion.div
                                key="pause"
                                initial={{ scale: 0, rotate: -90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 90 }}
                            >
                                <Pause className="h-5 w-5" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="play"
                                initial={{ scale: 0, rotate: -90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 90 }}
                            >
                                <Play className="h-5 w-5" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onMuteToggle}
                    className="relative rounded-full hover:bg-primary/20"
                >
                    <AnimatePresence mode="wait">
                        {isMuted ? (
                            <motion.div
                                key="muted"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <VolumeX className="h-5 w-5" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="unmuted"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <Volume2 className="h-5 w-5" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onFullscreen}
                    className="relative rounded-full hover:bg-primary/20"
                >
                    <Maximize className="h-5 w-5" />
                </Button>
            </div>
        </motion.div>
    );
};

export // Particle Background Component
    const ParticleBackground = () => {
        const particles = Array.from({ length: 30 });

        return (
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * 100,
                            opacity: Math.random() * 0.5 + 0.3,
                        }}
                        animate={{
                            y: [null, Math.random() * 200 + 100],
                            opacity: [null, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        );
    };

// Floating particles
export const FloatingParticles = ({ count = 20 }: { count?: number }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.5 + 0.3,
                    }}
                    animate={{
                        y: [null, Math.random() * -200 - 100],
                        opacity: [null, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

export const GlowingLines = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                animate={{
                    opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export const Particle = ({ delay }: { delay: number }) => {
    return (
        <motion.div
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: typeof window !== 'undefined' ? window.innerHeight + 20 : 800,
                opacity: 0
            }}
            animate={{
                y: -20,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0]
            }}
            transition={{
                duration: 8,
                delay: delay,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
}
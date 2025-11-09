import React from "react";
import { Award, Trophy, Star, Rocket, Sparkles } from "lucide-react";

const achievements = [
    {
        year: "2021",
        title: "IVP A and Honorable MSME Minister Recognition",
        description: "Recognized by Honorable MSME Minister T.M. Anbarasan for groundbreaking innovation and excellence in entrepreneurship.",
        icon: Trophy,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30"
    },
    {
        year: "2022",
        title: "Startup India Seed Fund & ANIC Challenge",
        description: "Selected for prestigious Startup India Seed Fund program and awarded recognition under Atal New India Challenge (ANIC) for innovative solutions.",
        icon: Rocket,
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/30"
    },
    {
        year: "2023",
        title: "NIDHI Prayas & Multiple Excellence Awards",
        description: "Awarded NIDHI Prayas Grant for innovation, honored by Veltech University, recognized as Best Healthcare Innovation by Saveetha Law College, and received TANSEED 4.0 from the Honorable Chief Minister of Tamil Nadu.",
        icon: Award,
        color: "from-cyan-500 to-teal-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30"
    },
    {
        year: "2024",
        title: "BIG & MeitY Entrepreneur-in-Residence",
        description: "Secured the prestigious Biotechnology Ignition Grant (BIG) and recognized as MeitY Entrepreneur-in-Residence for technological innovation.",
        icon: Sparkles,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30"
    },
    {
        year: "2025",
        title: "National & International Recognition",
        description: "Achieved SAMRIDH & NIDHI SPP funding (BBC), received ITNT Foundation Fund by Deputy CM, awarded Best Healthtech Startup of the Year (Sai Summit), honored with La Trobe India-Australia Award, and recognized by Times of India MSME Innovation Award.",
        icon: Star,
        color: "from-emerald-500 to-green-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30"
    }
];

export default function AchievementsTimeline() {
    return (
        <div className="min-h-screen  py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                        Our Journey
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A timeline of milestones, recognition, and achievements that shaped our path to innovation excellence
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Year badge */}
                                    <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content card */}
                                    <div className={`ml-24 md:ml-0 ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-5/12`}>
                                        <div className={`group relative p-6 rounded-2xl border-2 ${achievement.borderColor} ${achievement.bgColor} backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                                            {/* Year label */}
                                            <div className={`inline-block px-4 py-1 mb-3 rounded-full text-sm font-bold bg-gradient-to-r ${achievement.color} text-white`}>
                                                {achievement.year}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                                                {achievement.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {achievement.description}
                                            </p>

                                            {/* Decorative corner accent */}
                                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-10 rounded-bl-full`}></div>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-5/12"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-primary to-secodnary shadow-2xl">
                        <p className="text-2xl font-bold text-white mb-2">The Journey Continues</p>
                        <p className="text-blue-100">Stay tuned for more milestones ahead</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
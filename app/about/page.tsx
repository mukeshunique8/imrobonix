/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Target,
    Lightbulb,
    Zap,
    Activity,
    Settings,
    Quote,
    Award,
    Sparkles,
    Users,
    Building2,
    CheckCircle,
    HeartPulse,
    Cpu
} from "lucide-react";
import Image from "next/image";
import { GridBackground, SectionParticles } from "@/components/custom/Effects";
import { PartnerSliders } from "@/components/custom/PartnerSliders";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";


// Hero Section
const HeroSection = () => {
    return (
        <div className="relative pt-20 md:pt-32 overflow-hidden">
            <SectionParticles />
            <GridBackground />

            <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Story</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                >
                    <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                        Modern Solutions For
                    </span>
                    <br />
                    <span className="text-foreground">Better Healthcare</span>
                </motion.h1>
            </div>
        </div>
    );
};

// Who We Are Section
const WhoWeAreSection = () => {
    return (
        <div className="relative py-20 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* lg:grid-cols-2 gap-12 lg:gap-16  */}
                <div className="grid items-start">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col gap-4"
                    >
                        <motion.div
                            className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* Top Image */}
                        {/* <div className="relative w-full aspect-[5/3] rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
                            <Image
                                src="/images/gallery/galleryhero.png"
                                alt="Gallery Image 1"
                                width={600}
                                height={360}
                                className="w-full h-full object-cover"
                            />
                        </div> */}

                        {/* Bottom Image */}
                        {/* <div className="relative w-full aspect-[5/3] rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
                            <Image
                                src="/images/team/manusuit.png"
                                alt="Gallery Image 2"
                                width={600}
                                height={360}
                                className="w-full h-full object-cover object-top"
                            />
                        </div> */}
                    </motion.div>


                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">About Us</span>
                        </div>

                        <div className="flex items-start gap-4">
                            <motion.div
                                className="w-1 h-16 bg-primary rounded-full"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        Who We Are
                                    </span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4">
                                    Pioneers in Precision Medical Robotics
                                </h3>
                            </div>
                        </div>


                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    As the saying goes &quot;Every life matters&quot;, and &quot;There is no greater wealth in this world than good health&quot;. Life of each and every individual is an asset for their family and to the country. People rush towards doctors to save the life of their dear ones in case of any health issues.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <HeartPulse className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Rapid development in medical robotics is a great relive to both the patients and the Doctors. However statistical record says that 1 in every 112,000 surgical procedures leads to an error which may even lead to life threatening consequences.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <Cpu className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In light of such a serious impediment in Health sector, <strong className="text-primary">IMrobonix</strong> was established by Mr. Iyyappan and other co-founders in 2021 to revolutionize Medical Robotics and embrace the healthcare world in a more sustainable way by inventing cost efficient and high precision medical Robots.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Spark Section
const SparkSection = () => {
    return (
        <div className="relative py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative">
                        <motion.div
                            className="absolute -inset-4 bg-linear-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl"
                            whileHover={{ scale: 1.02 }}
                        />
                        <div className="relative bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center"
                                >
                                    <Lightbulb className="w-8 h-8 text-primary" />
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        Spark For The Innovation
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Dr. Palani, a famous surgeon from Tamil Nadu, India drew to our attention a real-world problem that served as the fuel to our innovation. He learned that the current minimally invasive surgical device, both manual and Robotic system, is rather difficult to use and operate. He presented all the practical difficulties to the company&quot;s founder, Mr. Iyyappan.
                                </p>
                                <p>
                                    After the rigorous analysis and detailed discussion with the experts, Mr. Iyyappan along with his team was able to create and produce a multipurpose, high-precision, bio-medical device. A team constituting people across the Globe were handpicked to address the aforementioned problem after assessing the technical difficulties in a manually controllable MIS tool and high cost robotic systems.
                                </p>
                                <p className="text-primary font-semibold">
                                    Our product aims to be the first robotic surgical tool controlled by the thumb that has characteristics similar to the human hand.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Mission & Vision Section
const MissionVisionSection = () => {
    return (
        <div className="relative py-20 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Our Purpose</span>
                        </div>

                        <div className="flex items-start gap-4">
                            <motion.div
                                className="w-1 h-16 bg-primary rounded-full"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        Mission & Vision
                                    </span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4">
                                    Innovate, Develop, High-Precision
                                </h3>
                            </div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our mission is to innovate, develop, and deliver high-precision, cost-effective medical robotic equipment that enhances functionality for doctors. We aim to spread the advantages of robotic surgery to hospitals worldwide, promoting inclusive healthcare development.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our vision is to revolutionize the healthcare industry with sustainable, comprehensive, and exceptional robotic solutions, ensuring advanced medical care is accessible to all. By integrating cutting-edge technology, we strive to improve patient outcomes and support the global medical community in achieving superior healthcare standards.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
                        <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                            <Image
                                src="/images/About.png"
                                alt="Mission Vision"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Research Section Component
const ResearchSection = ({
    title,
    subtitle,
    description,
    image,
    icon: Icon,
    reverse = false
}: any) => {
    return (
        <div className={`relative py-20 ${reverse ? 'bg-secondary/10' : ''}`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Research & Development</span>
                        </div>

                        <div className="flex items-start gap-4">
                            <motion.div
                                className="w-1 h-16 bg-primary rounded-full"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-foreground/80">
                                    {subtitle}
                                </h3>
                            </div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`relative ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    >
                        <motion.div
                            className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
                        >
                            <Image
                                src={image}
                                alt={title}
                                width={600}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/10" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Testimonials Section
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Catherin",
            role: "Anna University, ACT",
            text: "Cheribot surgikot - Really nice & user friendly, cost effective need more like this in future",
        },
        {
            name: "Dilip Kumar Chekuri",
            role: "CEO Medivalley",
            text: "IMROBONIX, as a startup is been known to me for years and have seen their consistency in their work environment which helped them a lot in many way to mould them and structure them in all possible forms. Our company had many commitments regarding work with the IMROBONIX company, and the work accomplished by them was fantastic within the short span of time.",
        },
        {
            name: "Dr. Dnyaneshwar Veer",
            role: "ICAS",
            text: "Teamwork is the key to achieve any big shots. IMROBONIX stands as a living example for the same and is constantly inspiring us via their strategies towards the work commencement and commitment towards their work environment.",
        },
        {
            name: "Cholarani Supdt",
            role: "CSRC, Anna University",
            text: "Really innovative excellent product designed to reduce the cost of surgery aiming the economically Backward Class. Congratulation",
        },
    ];

    return (
        <div className="relative py-20 bg-secondary/10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                        <Quote className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">What People Say</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Testimonials
                        </span>
                    </h2>
                </motion.div>

                {/* Infinite Slider */}
                <InfiniteSlider gap={24} >
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            // whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative  w-[400px] h-[280px] flex-shrink-0 cursor-pointer"
                        >
                            <div className="relative bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-xl h-full flex flex-col hover:border-primary/40 transition-colors">
                                <Quote className="w-10 h-10 text-primary/20 mb-4 flex-shrink-0" />
                                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow overflow-hidden text-sm line-clamp-5">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-4 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                                        <span className="text-primary font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </InfiniteSlider>
            </div>
        </div>

    );
};

// Supported By Section
const SupportedBySection = () => {


    return (
        <div className="relative py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Our Partners</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Supported By
                        </span>
                    </h2>
                </motion.div>
                <PartnerSliders />
            </div>
        </div>
    );
};

// Main About Page Component
export default function AboutPage() {
    return (
        <div className="relative min-h-screen pt-10 md:pt-0  bg-background overflow-hidden">
            <SectionParticles />
            <GridBackground />

            <HeroSection />
            <WhoWeAreSection />
            <SparkSection />
            <MissionVisionSection />

            <ResearchSection
                title="Electrical Research"
                subtitle="Pioneering Electrical Research Transforms Surgical Precision"
                description="Continuous learning is essential for success in any field. The relentless efforts of ordinary individuals have led to today's advanced, tech-driven world. Electrical and electronic innovations are in a constant race, turning the impossible into reality. Now, artificial intelligence is shaping the future, transforming life into a dreamlike experience. Our team developed Surgi-Kot to ease complex surgeries by converting unrestricted hand gestures into precise laparoscopic maneuvers."
                image="/images/electrical2.png"
                icon={Zap}
            />

            <ResearchSection
                title="Medical Research"
                subtitle="Revolutionary Thumb-Controlled Surgical Robot"
                description="Surgi-Kot, our revolutionary surgical robot, is the world's first thumb-controlled device. Designed to enhance surgical precision, it operates via a joystick-like thumb control, offering high accuracy and flexibility. Our team dedicated months to this project, aiming to reduce surgical errors and improve outcomes. Surgi-Kot's innovative design decreases surgeon difficulty and minimizes post-surgery complications, making it a groundbreaking advancement in robotic surgery."
                image="/images/Surgi2.png"
                icon={Heart}
                reverse
            />

            {/* <ResearchSection
                title="Mechanical Research"
                subtitle="Cheri-Bot's Human-Like Robotic Arm"
                description="Whole world stops if we stop moving. Movement plays a salient role in everybody's life. Our team has worked under the project Cheri-bot which focuses on the robotic arm, highly focusing on the replica of human hand and behaviour. Our project focuses on helping people who are physically challenged with respect to arm and hand. Our primary aim is to make them feel absolutely normal in par with anybody else around by providing them with the robotic arm which is as similar as the human replication."
                image="/images/mech.png"
                icon={Settings}
            /> */}

            <TestimonialsSection />
            <SupportedBySection />

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}
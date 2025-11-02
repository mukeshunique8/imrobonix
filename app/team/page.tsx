/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Stethoscope,
    Settings,
    FlaskConical,
    Linkedin,
    Award,
    Briefcase
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GridBackground, SectionParticles } from "@/components/custom/Effects";
// Add this helper function after imports
const calculateYearsOfExperience = (startYear: string) => {
    if (!startYear) return null;
    const currentYear = new Date().getFullYear();
    const years = currentYear - parseInt(startYear);
    return years;
};
// Section Navigation
const SectionNav = () => {
    const sections = [
        { id: "board-of-directors", label: "Board Of Directors", icon: Briefcase },
        { id: "medical-advisors", label: "Medical Advisors", icon: Stethoscope },
        { id: "medical-team", label: "Medical Team", icon: Award },
        { id: "technical-advisors", label: "Technical Advisors", icon: Settings },
        { id: "rnd", label: "Research & Development", icon: FlaskConical },
    ];

    return (
        <div className="relative py-12 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <motion.a
                                key={section.id}
                                href={`#${section.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative"
                            >
                                <motion.div
                                    className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="relative flex items-center gap-2 px-6 py-3 bg-background/90 backdrop-blur-xl border border-primary/20 rounded-xl hover:border-primary/40 transition-colors">
                                    <Icon className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">{section.label}</span>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Section Header
const SectionHeader = ({ id, title, icon: Icon }: any) => {
    return (
        <div id={id} className="relative py-16 scroll-mt-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4"
                >
                    <motion.div
                        className="w-1 h-16 bg-primary rounded-full"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className="flex items-center gap-4">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center"
                        >
                            <Icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                {title}
                            </span>
                        </h2>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Large Profile Card (for Directors/Chiefs)
const LargeProfileCard = ({ member, reverse = false }: any) => {
    return (
        <div className="relative py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`relative ${reverse ? 'lg:col-start-2' : ''}`}
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
                            className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl aspect-square"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />

                            {member.linkedin && (
                                <motion.a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors z-10"
                                >
                                    <Linkedin className="w-6 h-6 text-white" />
                                </motion.a>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`space-y-6 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    >
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                                    {member.role}
                                </span>
                            </div>

                            {member.yrsExp && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border-2 border-primary/40 backdrop-blur-sm">
                                    <Briefcase className="w-3 h-3 text-primary" />
                                    <span className="text-xs font-semibold text-foreground">
                                        {calculateYearsOfExperience(member.yrsExp)}+ Years Experience
                                    </span>
                                </div>
                            )}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                {member.name}
                            </span>
                        </h3>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {member.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Small Profile Card (for R&D Team)
const SmallProfileCard = ({ member, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group"
        >
            <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
                transition={{ duration: 0.3 }}
            />
            <div className="relative bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative aspect-square">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                    {member.linkedin && (
                        <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors z-10"
                        >
                            <Linkedin className="w-5 h-5 text-white" />
                        </motion.a>
                    )}
                </div>

                <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {member.name}
                        </span>
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">
                        {member.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// Main Team Page
export default function TeamPage() {
    const boardOfDirectors = [
        {
            name: "M. Iyyappan",
            role: "Chief Technology Officer & Co-Founder",
            image: "/images/team/Iyyappan CTO.jpg",
            linkedin: "https://www.linkedin.com/in/iyyappan-madasamy-59374612b/",
            description: `Mr. Iyyappan completed his Master's in Robotics and Artificial Intelligence from Warsaw University Europe, he had a deep desire and a vision to develop advanced robotic health care products at an affordable cost to benefit the society. He has more than ${calculateYearsOfExperience("2018")} years of experience and a self-paced rigorous Research and Development Engineer. His clear vision paved the way to set-up health based Robotic manufacturing company IMrobonix private limited in Tamil Nadu for making high-tech robotic systems with a wide application.`,
            yrsExp: "2018"
        },
        {
            name: "MANICKANTHAN C A",
            role: "COO AND DIRECTOR",
            image: "/images/team/manusuit.png",
            linkedin: "https://www.linkedin.com/in/manickanthan-c-a-b79a3b193/",
            description: `Mr. Manickanthan has more than ${calculateYearsOfExperience("2019")} years of experience in Robotics and Automation Industry. He is a technical robot programmer and an Economist. He has experience in programming Bionic arm, industrial robots. Currently, He is serving as the Director of IMrobonix. He has successfully completed a project based on 'The economic crisis due to constant climatic change' and was awarded as Young Scientist for his exemplary work.`,
            yrsExp: "2019"

        },
    ];

    const medicalAdvisors = [
        {
            name: "Dr. Anuradha Sunil",
            role: "Chief Medical Advisor",
            image: "/images/team/Anuradha Sunil.jpg",
            linkedin: "https://www.linkedin.com/in/dr-anuradha-sunil-18a54a24/",
            description: "Dr. Anuradha Sunil has over 25 years of experience in healthcare across the spectrum. Her Experience includes competitive bidding, strategic planning and implementation of health projects on a large scale. She is a Member of the Royal College of General Practitioners (MRCGP) of the United Kingdom (UK). Currently working with the Govt of Tamil Nadu and then the National Health Services (NHS) in the UK.",
            yrsExp: ""

        },
        {
            name: "Dr. P. Subramanian",
            role: "Laparoscopic Surgeon",
            image: "/images/Icon.png",
            linkedin: "",
            description: "Dr. P. Subramanian is a Chief Laparoscopic Surgeon in India. He has more than 25 years of experience in the medical field. He has been a prodigy in the field of Laparoscopy since he began his profession. He is one of the very famous and well-known surgeon in the Southern part of India. He is also the Director of Subbulakshmi Nursing Home, Tenkasi.",
        },
    ];

    const medicalTeam = [
        {
            name: "Dr. Palani Narayanan",
            role: "MS Mch, Urologist (Surgeon & Team Lead)",
            image: "/images/team/Palani Narayanan.jpg",
            linkedin: "https://www.linkedin.com/in/palani-narayanan-1b06172b/",
            description: "Dr. Palani is a Urologist and has over 8 years of experience. He aims and hopes to expand the use of Minimally Invasive Surgery in resource-constrained settings. He is a well-known surgeon from Tenkasi who presented to us his perspective of difficulty with the then existing medical device to operate laparoscopy surgery. His and along with other surgeon's issue later became our source of initial idea, which led to the creation of our first product Surgi-Kot.",
        },
        {
            name: "Dr. R. Nandhakumar",
            role: "MS Mch, Urologist",
            image: "/images/Icon.png",
            linkedin: "",
            description: "Dr. NandhaKumar is a urologist with more than 8 years of experience. He is a medical Professor in KAPV Govt Medical College,Trichy. He is also an urologist Consultant at Apollo Hospitals, Trichy.",
        },
        {
            name: "Dr. N. Ganapathy",
            role: "MS, General Surgeon",
            image: "/images/Ganapathybg.png",
            linkedin: "",
            description: "Dr. N. Ganapathy is a medical Professor in the Department of Surgery, Govt Theni Medical College. He is also a Consultant and Surgeon at Sathyanesan hospital, Chinamannur.",
        },
        {
            name: "Dr. Balasubramanian",
            role: "Medical Professor, ESIC Medical College & PGIMSR",
            image: "/images/Balabg.png",
            linkedin: "",
            description: "Dr. Balasubramanian is a General & Minimal Access Surgeon with propitious attitude and work culture. He is curious about academic and teaching endeavours. He received a Fellowship and appropriate training in minimal access surgery at Madras Medical College. Surgery including gastroenterology and minimal access are his areas of focus.",
        },
    ];

    const technicalAdvisors = [
        {
            name: "Mr. Giridharan",
            role: "Chief Technical Advisor",
            image: "/images/Ganapathybg.png",
            linkedin: "https://www.linkedin.com/in/giridharan-krishnamurthy-07416120/",
            description: "Mr. Giridharan has more than 30 years of experience in robotics for industrial applications, automation and controls, product and system configuration and application. Specialist in machine vision and robotics. He implemented real-time SPC and machine vision for continuous process monitoring.",
        },
        {
            name: "Mr. Daniel Christadoss",
            role: "Chief Medical Robot Expert",
            image: "/images/team/Daniel.jpg",
            linkedin: "https://www.linkedin.com/in/daniel-christadoss-25441411/",
            description: "Mr. Daniel has 50 years of experience in automated high speed manufacturing line design, detailed engineering, capital requests, scheduling, and project management. IQ/OQ/PQ efforts were created, reviewed, authorized, and carried out by him. He leads plant automation activities. He has been a technical advisor and consulted in the manufacturing of robotic devices in industrial automation.",
        },
        {
            name: "Dr. G. Lakshmi Priya",
            role: "Chief Electronics Expert",
            image: "/images/Lakshmibg.png",
            linkedin: "https://www.linkedin.com/in/glpriya/",
            description: "Dr. G. Lakshmi Priya is currently working as an Assistant Professor Senior Grade in the Centre for Innovation and Product Development (CIPD) and School of Electronics Engineering (SENSE), VIT University, Chennai. She is specialized in Nanoscale Semiconductor Device Modeling during her research tenure. Her thirst for research lead to 20 SCI/Web of Science indexed publications. She has recently authored a book entitled as, 'Dielectric and Work Function Engineered Doping-Less Tunnel FET'. She is a Life Member of ISTE and Associate Member of IEI (AMIE).",
        },
    ];

    const rndTeam = [
        {
            name: "M. Iyyappan",
            role: "R & D Robotics",
            image: "/images/iyybg.png",
            linkedin: "https://www.linkedin.com/in/iyyappan-madasamy-59374612b/",
        },
        {
            name: "MANICKANTHAN C A",
            role: "Research & Robot Programmer",
            image: "/images/team/mani.jpg",

            linkedin: "https://www.linkedin.com/in/manickanthan-c-a-b79a3b193/",
        },
        {
            name: "Mr. Prem Prakash",
            role: "R & D Control System Engineer",
            image: "/images/prembg.png",
            linkedin: "",
        },
        {
            name: "Dr. Karthik Chandrasekaran",
            role: "R & D Control System Engineer",
            image: "/images/team/team1.jpg",
            linkedin: "",
        },
        {
            name: "S. Vibushita",
            role: "Research Assistant",
            image: "/images/vibubg.png",
            linkedin: "https://www.linkedin.com/in/vibushita-srinivasan-1a6450203/",
        },
        {
            name: "R. Aadhya",
            role: "Research Assistant",
            image: "/images/adhyabg.png",
            linkedin: "https://www.linkedin.com/in/aadhya-sujani/",
        },
    ];

    return (
        <div className="relative min-h-screen pt-10 md:pt-0 bg-background overflow-hidden">
            <SectionParticles />
            <GridBackground />

            {/* Hero Section */}
            <div className="relative pt-20 md:pt-32">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
                    >
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Our Team</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="text-foreground">Meet the Minds Behind</span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            Innovation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-muted-foreground mb-4"
                    >
                        The IMrobonix Team
                    </motion.p>
                </div>
            </div>

            {/* Section Navigation */}
            <SectionNav />

            {/* Board of Directors */}
            <SectionHeader
                id="board-of-directors"
                title="Board Of Directors"
                icon={Briefcase}
            />
            {boardOfDirectors.map((member, idx) => (
                <LargeProfileCard
                    key={member.name}
                    member={member}
                    reverse={idx % 2 !== 0}
                />
            ))}

            {/* Medical Advisors */}
            <SectionHeader
                id="medical-advisors"
                title="Medical Advisors"
                icon={Stethoscope}
            />
            {medicalAdvisors.map((member, idx) => (
                <LargeProfileCard
                    key={member.name}
                    member={member}
                    reverse={idx % 2 !== 0}
                />
            ))}

            {/* Medical Team */}
            <SectionHeader
                id="medical-team"
                title="Medical Team"
                icon={Award}
            />
            {medicalTeam.map((member, idx) => (
                <LargeProfileCard
                    key={member.name}
                    member={member}
                    reverse={idx % 2 !== 0}
                />
            ))}

            {/* Technical Advisors */}
            <SectionHeader
                id="technical-advisors"
                title="Technical Advisors"
                icon={Settings}
            />
            {technicalAdvisors.map((member, idx) => (
                <LargeProfileCard
                    key={member.name}
                    member={member}
                    reverse={idx % 2 !== 0}
                />
            ))}

            {/* R&D Team */}
            <SectionHeader
                id="rnd"
                title="Research & Development"
                icon={FlaskConical}
            />
            <div className="relative py-12">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rndTeam.map((member, idx) => (
                            <SmallProfileCard
                                key={member.name}
                                member={member}
                                index={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}
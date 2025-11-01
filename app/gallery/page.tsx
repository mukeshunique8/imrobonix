"use client"
import { GlowingLines, GridBackground, Particle } from '@/components/custom/Effects'
import { GallerySection } from '@/components/custom/gallerySection'
import { HeroImage } from '@/components/custom/HeroImage'
import LightGallerySection from '@/components/custom/LightGallery'
import React from 'react'
// 🟣 Section 1
const sectionOneData = {
    title: "Our Interns - June 2024",
    desc: "At Imrobonix, we believe in nurturing young talent and providing them with opportunities to grow and learn. Our internship program is designed to give students and recent graduates hands-on experience in robotics, AI, and web development.",
};

const sectionOneCards = [
    { id: 2, className: "col-span-1", thumbnail: "images/interngrpwm.png" },
    { id: 1, className: "md:col-span-2", thumbnail: "images/interngrpwi.png" },
    { id: 4, className: "md:col-span-2", thumbnail: "images/interngrpwm.png" },
    { id: 3, className: "col-span-1", thumbnail: "images/interngrpwr.png" },
];

// 🟣 Section 2
const sectionTwoData = {
    title: "Meet with Dr. P. Thiaga Rajan",
    desc: "Completely honored to showcase our attainments in the presence of Dr P Thiaga Rajan (PTR), Minister of IT, Tamil Nadu. His positive response gave us the courage to believe in ourselves.",
};

const sectionTwoCards = [
    { id: 5, className: "md:col-span-2", thumbnail: "images/ptr1.png" },
    { id: 6, className: "col-span-1", thumbnail: "images/ptr2.png" },
    { id: 7, className: "col-span-1", thumbnail: "images/ptr1.png" },
    { id: 8, className: "md:col-span-2", thumbnail: "images/ptr2.png" },
];

// 🟣 Section 3
const sectionThreeData = {
    title: "StartUp Thiruvizha -Codissia Trade Fair Complex",
    desc: "We had the priviliege to discuss our product with honourable Tamilnadu ministers T.M.Anbarasu (MSME Minister), Dr. TRB Rajaa (Industry Minister) and Coimbatore district collector Mr. Kranthi kumar Rati (IAS officer).",
};

const sectionThreeCards = [
    { id: 10, className: "col-span-1", thumbnail: "images/sut3.png" },
    { id: 9, className: "md:col-span-2", thumbnail: "images/sut2.png" },
    { id: 12, className: "md:col-span-2", thumbnail: "images/sut2.png" },
    { id: 11, className: "col-span-1", thumbnail: "images/sut1.png" },
];

// 🟣 Section 4
const sectionFourData = {
    title: "Meet with Ministers Mr.Mano Thangaraj T",
    desc: "We had the priviliege to discuss our product with honourable Ministers Mr.Mano Thangaraj T (Tamilnadu IT Minister) and Mr. Stephen Dawson (Australia Minister) at Tamil Nadu Technology Hub (iTNT).",
};

const sectionFourCards = [
    { id: 15, className: "col-span-1", thumbnail: "images/aus1.png" },
    { id: 13, className: "col-span-1", thumbnail: "images/aus2.png" },
    { id: 14, className: "col-span-1", thumbnail: "images/aus1.png" },
];


export default function page() {
    const galleryImages = [
        "/images/gallery/galleryhero.png",
        "/images/interngrpwm.png",
        "/images/ptr1.png",
        "/images/sut3.png",
    ];
    const data = {
        title1: "Imrobonix Innovations in Focus",
        title2: "Exploring the Future"
    }
    return (
        <div className="relative min-h-screen   bg-background text-foreground overflow-hidden">
            <GridBackground />
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <Particle key={i} delay={i * 0.5} />
                ))}
            </div>
            <div className="relative z-10  mx-auto ">
                <HeroImage images={galleryImages} data={data} />
                <LightGallerySection />

                {/* <div className="flex flex-col mb-[100px] gap-[100px]">
                    <GallerySection data={sectionOneData} cards={sectionOneCards} />
                    <GallerySection data={sectionTwoData} cards={sectionTwoCards} />
                    <GallerySection data={sectionThreeData} cards={sectionThreeCards} />
                    <GallerySection data={sectionFourData} cards={sectionFourCards} />
                </div> */}


            </div>
        </div>
    )
}

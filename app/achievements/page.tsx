"use client"
import Awards from '@/components/custom/Awards'
import { GlowingLines, GridBackground, Particle } from '@/components/custom/Effects'
import { GallerySection } from '@/components/custom/gallerySection'
import { HeroImage } from '@/components/custom/HeroImage'
import React from 'react'


export default function page() {
    const heroImages = [
        "/images/contone.png",
        "/images/conttwo.png",
        "/images/contthree.png",
    ];

    return (
        <div className="relative min-h-screen   bg-background text-foreground overflow-hidden">
            <GridBackground />
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <Particle key={i} delay={i * 0.5} />
                ))}
            </div>
            <div className="relative z-10  mx-auto ">
                <HeroImage images={heroImages} />
                <Awards />

            </div>
        </div>
    )
}

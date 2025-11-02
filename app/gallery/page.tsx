"use client"
import { GridBackground, Particle } from '@/components/custom/Effects'
import GalleryPage from '@/components/custom/gallerySection'
import { HeroImage } from '@/components/custom/HeroImage'

export default function page() {
    const galleryImages = [
        "/images/gallery/cm/1.jpg",
        "/images/gallery/galleryhero.png",
        "/images/gallery/india-aus/2.jpg",
        "/images/gallery/india-aus/5.jpg",

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
                <GalleryPage />



            </div>
        </div>
    )
}

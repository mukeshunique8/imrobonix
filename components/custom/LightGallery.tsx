"use client";
import React from "react";
import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";

import Image from "next/image";
import { motion } from "motion/react";

interface GalleryItem {
    src: string;
    thumb?: string;
    title?: string;
    desc?: string;
}

interface LightGallerySectionProps {
    title: string;
    description?: string;
    galleryItems: GalleryItem[];
}

export default function LightGallerySection({
    title,
    description,
    galleryItems = [],
}: LightGallerySectionProps) {
    const onInit = () => console.log(`✅ LightGallery initialized for: ${title}`);

    if (!galleryItems || galleryItems.length === 0) {
        console.warn(`⚠️ No gallery items provided for: ${title}`);
        return <p className="text-center text-gray-500">No images available</p>;
    }

    return (
        <div className="w-full px-4 text-center py-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
            >
                {title}
            </motion.h1>

            {description && (
                <p className="text-gray-500 mb-8 max-w-3xl mx-auto">{description}</p>
            )}

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgFullscreen]}
                elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4"
                mode="lg-fade"
                download
                counter
                getCaptionFromTitleOrAlt
                thumbnail
                animateThumb
                thumbWidth={100}
                thumbHeight="80px"
                thumbMargin={5}
                enableDrag
                enableSwipe
                swipeThreshold={50}
                preload={2}
                loop
                escKey
                keyPress
                controls
                mousewheel
                hideControlOnEnd={false}
                closable
                closeOnTap
                showCloseIcon
                showMaximizeIcon
                appendSubHtmlTo=".lg-sub-html"
                subHtmlSelectorRelative
                addClass="custom-lightgallery"
                startClass="lg-start-zoom"
                backdropDuration={300}
                hideBarsDelay={6000}
            >
                {galleryItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.src}
                        data-sub-html={`<h4>${item.title || ""}</h4><p>${item.desc || ""}</p>`}
                        className="block"
                    >
                        <div className="relative w-full h-64 md:h-80 overflow-hidden hover:scale-105 transition-transform duration-300">
                            <Image
                                src={item.thumb || item.src}
                                alt={item.title || `Image ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}

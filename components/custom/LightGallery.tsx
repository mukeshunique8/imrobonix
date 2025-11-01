import React from 'react';
import LightGallery from 'lightgallery/react';

// plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

// styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import Image from 'next/image';
import { motion } from "motion/react";

export default function LightGallerySection() {
    const onInit = () => {
        console.log('lightGallery initialized');
    };

    // 🔹 Your image array
    const galleryItems = [
        {
            src: '/images/team/mani.jpg',
            thumb: '/images/team/mani.jpg',
            title: 'Mani Kumar',
            desc: 'Lead Robotics Engineer',
        },
        {
            src: '/images/team/manusuit.png',
            thumb: '/images/team/manusuit.png',
            title: 'Manusuit',
            desc: 'Medical Robotics Prototype',
        }, {
            src: '/images/team/mani.jpg',
            thumb: '/images/team/mani.jpg',
            title: 'Sample Image 1',
            desc: 'Description for image 1',
        },
        {
            src: '/images/team/manusuit.png',
            thumb: '/images/team/manusuit.png',
            title: 'John Doe',
            desc: 'AI Integration Specialist',
        },


        {
            src: '/images/team/manusuit.png',
            thumb: '/images/team/manusuit.png',
            title: 'Sample Image 2',
            desc: 'Description for image 2',
        },
        {
            src: '/images/team/mani.jpg',
            thumb: '/images/team/mani.jpg',
            title: 'Sample Image 3',
            desc: 'Description for image 3',
        },
        {
            src: '/images/award2.png',
            thumb: '/images/award2.png',
            title: 'Sample Image 3',
            desc: 'Description for image 3',
        },
        {
            src: '/images/award3.png',
            thumb: '/images/award3.png',
            title: 'Sample Image 3',
            desc: 'Description for image 3',
        },
        {
            src: '/images/award4.png',
            thumb: '/images/award4.png',
            title: 'Sample Image 3',
            desc: 'Description for image 3',
        },
        {
            src: '/images/award5.png',
            thumb: '/images/award5.png',
            title: 'Sample Image 3',
            desc: 'Description for image 3',
        },
    ];

    return (
        <div className="w-full px-4 text-center py-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8"
            >
                Imrobonix Innovations in Focus Exploring the Future
            </motion.h1>
            <LightGallery
                onInit={onInit}
                // speed: Animation speed for opening/closing lightbox (ms)
                speed={500}

                // plugins: Array of lightGallery plugins to enable
                plugins={[lgThumbnail, lgZoom, lgFullscreen]}

                // elementClassNames: Custom CSS classes for the gallery container
                // Grid: 1 column (mobile) → 2 columns (sm) → 3 columns (md) → 4 columns (lg)
                elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 "

                // mode: Transition effect when navigating between images
                mode="lg-fade"

                // download: Enable download button in lightbox
                download={true}

                // counter: Show image counter (e.g., "1 / 10")
                counter={true}

                // getCaptionFromTitleOrAlt: Use title/alt as caption if data-sub-html not provided
                getCaptionFromTitleOrAlt={true}

                // thumbnail: Enable thumbnail navigation
                thumbnail={true}

                // animateThumb: Animate thumbnail container
                animateThumb={true}

                // showThumbByDefault: Show thumbnails by default (false = hidden initially)
                showThumbByDefault={false}

                // thumbWidth: Thumbnail width in pixels
                thumbWidth={100}

                // thumbHeight: Thumbnail height
                thumbHeight="80px"

                // thumbMargin: Margin between thumbnails
                thumbMargin={5}

                // enableDrag: Enable mouse drag to navigate
                enableDrag={true}

                // enableSwipe: Enable touch swipe on mobile
                enableSwipe={true}

                // swipeThreshold: Minimum swipe distance (px) to trigger navigation
                swipeThreshold={50}

                // preload: Number of images to preload (0 = current only, 1 = current + next, 2 = current + next + prev)
                preload={2}

                // loop: Enable infinite loop navigation
                loop={true}

                // escKey: Close lightbox on ESC key
                escKey={true}

                // keyPress: Enable keyboard navigation (arrows)
                keyPress={true}

                // controls: Show prev/next navigation buttons
                controls={true}

                // mousewheel: Navigate with mousewheel
                mousewheel={true}

                // hideControlOnEnd: Hide next/prev buttons on first/last image (when loop=false)
                hideControlOnEnd={false}

                // closable: Allow closing by clicking outside image
                closable={true}

                // closeOnTap: Close on tap/click (mobile)
                closeOnTap={true}

                // showCloseIcon: Show close button
                showCloseIcon={true}

                // showMaximizeIcon: Show fullscreen button
                showMaximizeIcon={true}

                // appendSubHtmlTo: Where to append caption ('.lg-sub-html', '.lg-item')
                appendSubHtmlTo=".lg-sub-html"

                // subHtmlSelectorRelative: Use data-sub-html relative to anchor element
                subHtmlSelectorRelative={true}

                // addClass: Additional CSS class for lightbox
                addClass="custom-lightgallery"

                // startClass: Class added when lightbox opens
                startClass="lg-start-zoom"

                // backdropDuration: Backdrop fade duration (ms)
                backdropDuration={300}

                // hideBarsDelay: Auto-hide toolbar after inactivity (ms, 0 = disabled)
                hideBarsDelay={6000}
            >
                {galleryItems.map((item, index) => (
                    <>

                        <a
                            key={index}
                            href={item.src}
                            data-sub-html={`<h4>${item.title}</h4><p>${item.desc}</p>`}
                            className="block"
                        >
                            <div className="relative w-full h-64 md:h-80  overflow-hidden   hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={item.thumb}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </a>
                    </>

                ))}
            </LightGallery>
        </div>
    );
}
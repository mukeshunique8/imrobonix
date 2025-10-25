"use client";
import React from "react";
import { LayoutGrid } from "../accentricity/layout-grid";

interface GallerySectionProps {
    data: {
        title: string;
        desc: string;
    };
    cards: {
        id: number;
        className?: string;
        thumbnail: string;
    }[];
}

export function GallerySection({ data, cards }: GallerySectionProps) {
    const normalizedCards = cards.map(card => ({ ...card, className: card.className ?? "" }));

    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={normalizedCards} data={data} />
        </div>
    );
}

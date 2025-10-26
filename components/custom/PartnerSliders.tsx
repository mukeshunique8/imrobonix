import Image from "next/image";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

export function PartnerSliders() {
    const partners = [
        { name: "Startup TN", src: "/images/Startuptn.png" },
        { name: "Startup India", src: "/images/Startupindia.png" },
        { name: "Indigram Labs", src: "/images/Labsindigram.png" },
        { name: "Atal", src: "/images/Atal.png" },
        { name: "FITT", src: "/images/Fitt.png" },
        { name: "ITNT", src: "/images/Itnt.png" },
        { name: "Vel Tech", src: "/images/Vel.png" },
        { name: "GIMS", src: "/images/Gims.png" },
        { name: "IIITDM", src: "/images/IIITDM.png" },
        { name: "DST", src: "/images/DST.png" },
        { name: "BIRAC", src: "/images/Birac.png" },
        { name: "MeitY", src: "/images/Meity.png" },
        { name: "EDII", src: "/images/EDII.png" },
        { name: "BBC", src: "/images/bbc.png" },
    ];

    return (
        <div className="bg-white py-4" >
            <InfiniteSlider gap={24} reverse>
                {partners.map((partner) => (
                    <Image
                        key={partner.name}
                        src={partner.src}
                        alt={`${partner.name} logo`}
                        width={120}
                        height={120}
                        className="h-[120px] w-auto object-contain "
                    />
                ))}
            </InfiniteSlider>
        </div>
    );
}
import { Trophy, Award, Sparkles } from "lucide-react";
import { Timeline } from "../accentricity/timeline";

export function TimelineDemo() {
    const awardsData = [
        {
            id: 1,
            title: "Award From Hon'ble Chief Minister of Tamil Nadu",
            description:
                "Received an award from the Tamil Nadu Government, presented by Chief Minister M.K. Stalin, for the development of a handheld powered high-precision robotic surgical device.",
            image: "/images/contthree.png",
            icon: <Trophy className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Award From MSME Minister",
            description:
                "We are extremely pleased and happy to share that our team received a cash award from the honourable MSME Minister, T.M. Anbarasan for the innovation of India's first automated Minimally invasive surgical tool for the year 2021. We consider it to be a privilege for considering and recognizing our effort.",
            image: "/images/award1.png",
            icon: <Award className="w-6 h-6" />,
            year: "2021",
        },
        {
            id: 3,
            title: "Startup India Seed Fund (SISFS)",
            description:
                "We appreciate Indigram Labs Foundation (ILF) for helping us to receive the Startup India Seed Fund (SISFS) from the Central Government of India worth 1.2 million INR. The Startup India Seed Fund Scheme (SISFS) intends to give financial support to entrepreneurs for market entry, product testing, prototype building, proof of concept, and commercialization.",
            amount: "₹1.2 Million",
            image: "/images/award2.png",
            icon: <Sparkles className="w-6 h-6" />,
        },
        {
            id: 4,
            title: "Innovation Voucher Programme",
            description:
                "We are delighted and grateful to the State Government of Tamil Nadu for providing us with the Innovation Voucher Programme. The Innovation Voucher Programme (IVP) is a grant-in-aid programme to support innovations and research of MSMEs and manufacturing start-ups.",
            image: "/images/award3.png",
            icon: <Award className="w-6 h-6" />,
        },
        {
            id: 5,
            title: "Atal New India Challenge",
            description:
                "With pleasure we share that we have won the ANIC award worth of 1 crore INR. ANIC is an effort of AIM, NITI Aayog. ANIC aims to find, pick, support, and develop technology-based breakthroughs that address societal relevant and national-level sectoral problems, using a grant-based system.",
            amount: "₹1 Crore",
            image: "/images/award4.png",
            icon: <Trophy className="w-6 h-6" />,
        },
        {
            id: 6,
            title: "Award From FITT",
            description:
                "The Biotechnology Industry Research Assistance Council (BIRAC) awarded a grant of ₹50 lakhs through the Foundation for Innovation and Technology Transfer (FITT), IIT Delhi, to support the development of a high-precision robotic surgical device.",
            amount: "₹50 Lakhs",
            image: "/images/award5.png",
            icon: <Award className="w-6 h-6" />,
        },
    ];

    const data = awardsData.map((award) => ({
        title: award.year || award.amount || "Achievement",
        content: (
            <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-xl">
                        {award.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{award.title}</h3>
                </div>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {award.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <img
                        src={award.image}
                        alt={award.title}
                        className="rounded-lg object-cover shadow-md h-40 w-full"
                    />
                </div>
            </div>
        ),
    }));

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

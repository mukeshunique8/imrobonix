interface SkeletonLoaderProps {
    variant: 'hero' | 'section' | 'gallery' | 'card';
    className?: string;
}

export function SkeletonLoader({ variant, className = '' }: SkeletonLoaderProps) {
    const skeletons = {
        hero: (
            <div className={`animate-pulse space-y-8 ${className}`}>
                <div className="h-20 bg-white/20 rounded-lg w-96 mx-auto"></div>
                <div className="space-y-3">
                    <div className="h-6 bg-white/15 rounded w-80 mx-auto"></div>
                    <div className="h-6 bg-white/15 rounded w-72 mx-auto"></div>
                </div>
                <div className="flex gap-4 justify-center">
                    <div className="h-12 bg-white/20 rounded w-32"></div>
                    <div className="h-12 bg-white/20 rounded w-32"></div>
                </div>
            </div>
        ),
        section: (
            <div className={`animate-pulse space-y-4 ${className}`}>
                <div className="h-10 bg-gray-300 rounded w-64"></div>
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            </div>
        ),
        gallery: (
            <div className={`grid grid-cols-3 gap-4 ${className}`}>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-300 rounded-lg animate-pulse"></div>
                ))}
            </div>
        ),
        card: (
            <div className={`animate-pulse ${className}`}>
                <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                <div className="p-4 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
        ),
    };

    return skeletons[variant];
}
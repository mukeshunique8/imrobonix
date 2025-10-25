/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { InitialPageLoader } from '@/components/skeletons/Loaders';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
    isInitialLoading: boolean;
    isRouteLoading: boolean;
    setIsRouteLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
    isInitialLoading: true,
    isRouteLoading: false,
    setIsRouteLoading: () => { },
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isRouteLoading, setIsRouteLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if user has already visited in this session
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (hasVisited) {
            setIsInitialLoading(false);
        }
    }, []);

    const handleInitialLoadComplete = () => {
        setIsInitialLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
    };

    // Don't render anything until mounted (prevents hydration issues)
    if (!mounted) {
        return null;
    }

    return (
        <LoadingContext.Provider
            value={{
                isInitialLoading,
                isRouteLoading,
                setIsRouteLoading
            }}
        >
            {isInitialLoading ? (
                <InitialPageLoader onComplete={handleInitialLoadComplete} />
            ) : (
                children
            )}
        </LoadingContext.Provider>
    );
};
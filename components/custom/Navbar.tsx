/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/purity */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link"; // ✅ ADD THIS
import { usePathname } from "next/navigation"; // ✅ ADD THIS

// Nav Config
const navConfig = {
    logo: {
        src: "/images/Logo.png",
        alt: "Imrobonix Pvt Ltd",
    },
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        {
            name: "Products",
            href: "/products",
            submenu: [
                {
                    title: "SurgiKot",
                    description: "WORLD'S FIRST THUMB-CONTROLLED ROBOTIC SURGICAL DEVICE",
                    href: "/products",
                    image: "/images/Surgi2.png",
                },
                {
                    title: "CheriBot",
                    description: "AI VISION REPLICATING EXACT HUMAN HAND WITH 15 DEGREES OF FREEDOM",
                    href: "/products",
                    image: "/images/Cheribot.png",
                },
            ],
        },
        { name: "Team", href: "/team" },
        { name: "Achievements", href: "/achievements" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ],
};

// Desktop Product Dropdown
const ProductDropdown = ({ items, isOpen }: { items: any[]; isOpen: boolean }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] max-w-[90vw] z-[100]"
                    style={{ top: "100%" }}
                >
                    <div className="bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="relative grid grid-cols-2 gap-4 p-6">
                            {items.map((item, idx) => (
                                <Link key={item.title} href={item.href}> {/* ✅ CHANGED */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="group relative rounded-xl p-4 border border-primary/10 overflow-hidden cursor-pointer"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-primary/5"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <div className="relative flex gap-4">
                                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-primary/20">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-sm mb-1 text-primary group-hover:text-primary/80 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground line-clamp-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export function LandingNavbar() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname(); // ✅ CHANGED
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => pathname === href; // ✅ CHANGED

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return null;
    }

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "w-[95%] max-w-6xl" : "w-[90%] max-w-5xl"
                    }`}
            >
                <div className="relative">
                    <motion.div
                        animate={{
                            opacity: scrolled ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-3xl blur-xl"
                    />

                    <div className="relative bg-background/40 backdrop-blur-xl rounded-2xl shadow-2xl">
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        <div className="relative flex items-center justify-between px-3 py-1">
                            {/* Logo */}
                            <Link href="/"> {/* ✅ CHANGED */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative group cursor-pointer"
                                >
                                    <Image
                                        src={navConfig.logo.src}
                                        alt={navConfig.logo.alt}
                                        width={60}
                                        height={60}
                                        className=""
                                        priority
                                    />
                                </motion.div>
                            </Link>

                            {/* Desktop Links */}
                            <div className="hidden lg:flex items-center gap-1">
                                {navConfig.links.map((link) => (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <Link href={link.href}> {/* ✅ CHANGED */}
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${isActive(link.href)
                                                    ? "text-primary"
                                                    : "text-foreground hover:text-primary"
                                                    }`}
                                            >
                                                {isActive(link.href) && (
                                                    <motion.div
                                                        layoutId="activeLink"
                                                        className="absolute inset-0 bg-primary/10 rounded-lg"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                                <span className="relative z-10">{link.name}</span>
                                                {link.submenu && (
                                                    <motion.div
                                                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown className="w-3 h-3" />
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        </Link>

                                        {link.submenu && (
                                            <ProductDropdown
                                                items={link.submenu}
                                                isOpen={activeDropdown === link.name}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Theme Toggle + Mobile Menu */}
                            <div className="flex items-center gap-4">
                                {/* <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <Sun className="h-4 w-4 text-primary" />
                                    <Switch
                                        checked={theme === "dark"}
                                        onCheckedChange={toggleTheme}
                                    />
                                    <Moon className="h-4 w-4 text-primary" />
                                </motion.div> */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <AnimatePresence mode="wait">
                                        {theme === "dark" ? (
                                            <motion.div
                                                key="moon"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Moon className="h-4 w-4 text-primary" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="sun"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Sun className="h-4 w-4 text-primary" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <Switch
                                        checked={theme === "dark"}
                                        onCheckedChange={toggleTheme}
                                    />
                                </motion.div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="lg:hidden rounded-lg border-primary/20"
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                >
                                    <AnimatePresence mode="wait">
                                        {mobileOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90 }}
                                                animate={{ rotate: 0 }}
                                                exit={{ rotate: 90 }}
                                            >
                                                <X className="h-5 w-5" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: -90 }}
                                                animate={{ rotate: 0 }}
                                                exit={{ rotate: 90 }}
                                            >
                                                <Menu className="h-5 w-5" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background/95 backdrop-blur-xl border-l border-primary/20 z-50 lg:hidden overflow-y-auto"
                        >
                            <div className="relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                                <div className="relative p-6 space-y-6">
                                    <div className="flex items-center justify-between pb-6 border-b border-primary/20">
                                        <Image
                                            src={navConfig.logo.src}
                                            alt={navConfig.logo.alt}
                                            width={30}
                                            height={30}
                                            className=""
                                            priority
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setMobileOpen(false)}
                                            className="rounded-lg"
                                        >
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </div>



                                    {/* Mobile Links */}
                                    <nav className="space-y-2">
                                        {navConfig.links.map((link, idx) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                {link.submenu ? (
                                                    <div>
                                                        <button
                                                            onClick={() =>
                                                                setActiveDropdown(
                                                                    activeDropdown === link.name ? null : link.name
                                                                )
                                                            }
                                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.href)
                                                                ? "bg-primary/10 text-primary"
                                                                : "hover:bg-secondary/50"
                                                                }`}
                                                        >
                                                            {link.name}
                                                            <motion.div
                                                                animate={{
                                                                    rotate: activeDropdown === link.name ? 180 : 0,
                                                                }}
                                                            >
                                                                <ChevronDown className="w-4 h-4" />
                                                            </motion.div>
                                                        </button>

                                                        <AnimatePresence>
                                                            {activeDropdown === link.name && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="pl-4 pt-2 space-y-2">
                                                                        {link.submenu.map((item, itemIndex) => (
                                                                            <Link key={item.title} href={item.href}>
                                                                                <div className={`block p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer ${itemIndex % 2 !== 0 ? 'mt-2 md:mt-0' : ''
                                                                                    }`}>
                                                                                    <div className="font-medium text-sm text-primary">
                                                                                        {item.title}
                                                                                    </div>
                                                                                    <div className="text-xs text-muted-foreground mt-1">
                                                                                        {item.description}
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ) : (
                                                    <Link href={link.href}> {/* ✅ CHANGED */}
                                                        <div
                                                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${isActive(link.href)
                                                                ? "bg-primary/10 text-primary"
                                                                : "hover:bg-secondary/50"
                                                                }`}
                                                        >
                                                            {link.name}
                                                        </div>
                                                    </Link>
                                                )}
                                            </motion.div>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
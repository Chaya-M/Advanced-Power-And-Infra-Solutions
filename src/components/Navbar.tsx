"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-none border shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                scrolled
                    ? "bg-black border-white/10 py-1"
                    : "bg-black border-white/5 py-2"
            )}
        >
            <div className="px-6 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 md:gap-3 active:scale-95 transition-transform">
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 bg-energy-yellow blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="bg-white p-1 rounded-none relative z-10 border border-white/10 flex items-center justify-center">
                                    <img src="/images/logo.jpeg" alt="APIS Logo" className="h-6 md:h-8 w-auto" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[13px] md:text-lg font-black tracking-tight leading-tight transition-colors text-white uppercase">
                                    ADVANCED POWER
                                </span>
                                <span className="text-[6.5px] md:text-[10px] font-bold tracking-[0.2em] transition-colors text-energy-yellow uppercase">
                                    & INFRA SOLUTIONS
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-none text-sm font-bold transition-all hover:scale-105",
                                        scrolled ? "text-white/80 hover:bg-white/5 hover:text-energy-yellow" : "text-white hover:bg-white/10"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="ml-4 pl-4 border-l border-white/10">
                                <a
                                    href={`tel:${COMPANY_INFO.phone[0]}`}
                                    className="inline-flex items-center justify-center px-5 py-2 rounded-none shadow-[0_0_20px_rgba(249,168,37,0.3)] text-xs font-black text-black bg-energy-yellow hover:bg-yellow-400 hover:scale-105 transition-all active:scale-95"
                                >
                                    <Phone className="mr-2 h-3.5 w-3.5 fill-black text-black" />
                                    ENQUIRE
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <a
                            href={`tel:${COMPANY_INFO.phone[0]}`}
                            className="w-10 h-10 flex items-center justify-center bg-energy-yellow rounded-none text-black hover:bg-yellow-400 transition-colors"
                        >
                            <Phone className="h-5 w-5 fill-black" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex items-center justify-center text-white focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute w-full transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                )}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 rounded-md text-base font-semibold text-white hover:bg-white/10 hover:text-energy-yellow"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 px-3">
                        <a
                            href={`tel:${COMPANY_INFO.phone[0]}`}
                            className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-none shadow-sm text-base font-bold text-black bg-energy-yellow hover:bg-yellow-500"
                        >
                            <Phone className="mr-2 h-5 w-5 fill-black" />
                            Call +91 9686098702
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
